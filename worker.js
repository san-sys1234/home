const ALLOWED_ORIGIN = "https://san-sys1234.github.io";
const MAX_MESSAGES = 20;
const MAX_CHARS = 4000;

const SYSTEM_PROMPT = `
Du bist der persönliche Haushaltsassistent der App "Unser Zuhause" 🏡.

Du unterstützt freundlich, praktisch und realistisch bei der Haushaltsorganisation.
Das Zuhause ist groß, aber der Haushalt soll die Nutzerin nicht beherrschen.

Wichtige Grundsätze:
- Keine Putz-Marathons.
- Keine Schuldgefühle.
- Keine automatische Nachhol-Lawine.
- Hanni-Chaosmodus bedeutet: nur wirklich notwendige Alltagssachen.
- Me-Time ist wichtig und darf nicht zugunsten von Hausarbeit gestrichen werden.
- Bei wenig Zeit lieber wenige sinnvolle Aufgaben empfehlen.
- Wenn die Nutzerin spontan etwas erledigt hat, soll das tatsächliche Erledigungsdatum berücksichtigt werden.
- Empfiehl keine Aufgabe erneut, wenn sie gerade erst erledigt wurde.
- Fensterputzen wird in sinnvolle Bereiche aufgeteilt und nicht als riesiger Gesamtputz vorgeschlagen.
- Die Nutzerin darf jederzeit Aufgaben spontan vorziehen.

Antworte auf Deutsch, warm, menschlich und unkompliziert.
Keine langen Vorträge. Lieber konkrete, hilfreiche Antworten.
`;

function headers(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : "null",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json; charset=UTF-8",
    "Vary": "Origin"
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: headers(origin)
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      if (origin !== ALLOWED_ORIGIN) {
        return new Response(null, { status: 403 });
      }
      return new Response(null, { status: 204, headers: headers(origin) });
    }

    if (origin && origin !== ALLOWED_ORIGIN) {
      return json({ error: "Nicht erlaubter Ursprung." }, 403, origin);
    }

    const url = new URL(request.url);

    if (request.method === "GET") {
      if (url.pathname === "/chat") {
        return json({
          ok: true,
          service: "Unser Zuhause Chat",
          endpoint: "/chat",
          status: "online",
          hint: "Der Chat-Endpunkt wartet auf eine POST-Anfrage aus der App."
        }, 200, origin);
      }
      return json({
        ok: true,
        service: "Unser Zuhause Chat",
        status: "online"
      }, 200, origin);
    }

    if (request.method !== "POST" || url.pathname !== "/chat") {
      return json({ error: "Nicht gefunden." }, 404, origin);
    }

    if (!env.OPENAI_API_KEY) {
      return json({
        error: "Der OpenAI-Schlüssel ist auf dem Server nicht eingerichtet."
      }, 500, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Ungültige Anfrage." }, 400, origin);
    }

    if (!Array.isArray(body.messages)) {
      return json({
        error: "Es wurden keine Nachrichten übergeben."
      }, 400, origin);
    }

    const messages = body.messages
      .filter(message =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
      )
      .slice(-MAX_MESSAGES)
      .map(message => ({
        role: message.role,
        content: message.content.slice(0, MAX_CHARS)
      }));

    if (messages.length === 0) {
      return json({
        error: "Bitte zuerst eine Nachricht eingeben."
      }, 400, origin);
    }

    const context = typeof body.context === "string"
      ? body.context.slice(0, 12000)
      : "";

    const input = context
      ? [
          {
            role: "user",
            content: "APP-KONTEXT (nur zur Einordnung, nicht als neue Nutzerfrage):\n" + context
          },
          ...messages
        ]
      : messages;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000);
      let response;
      try {
        response = await fetch("https://api.openai.com/v1/responses", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "gpt-5.6-luna",
            store: false,
            instructions: SYSTEM_PROMPT,
            input
          }),
          signal: controller.signal
        });
      } finally {
        clearTimeout(timeout);
      }

      const data = await response.json();

      if (!response.ok) {
        return json({
          error: "Die KI konnte gerade nicht antworten.",
          details: data?.error?.message || "OpenAI API error"
        }, 502, origin);
      }

      return json({
        ok: true,
        reply: data.output_text || "Ich konnte gerade keine Antwort erzeugen."
      }, 200, origin);

    } catch (err) {
      return json({
        error: err?.name === "AbortError"
          ? "Die KI-Anfrage hat zu lange gedauert."
          : "Verbindung zur KI fehlgeschlagen."
      }, 502, origin);
    }
  }
};
