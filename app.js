/* Unser Zuhause – V109 · raumweise Türrahmen */
const STORAGE="unser-zuhause-v109";
const LEGACY_STORAGE="unser-zuhause-v50";
const DAILY=[
 ["☀️ Morgenroutine",["Bett machen","Schlafzimmer kurz lüften","Kleidung wegräumen","Schmutzwäsche in den Wäschekorb","Vorhänge/Raffstores öffnen","Geschirrspüler ausräumen","Frühstücksgeschirr einräumen","Küchenarbeitsfläche abwischen","Esstisch abwischen","Hochstuhl/Essplatz sauber machen","Schuhe, Jacken & Taschen kurz ordnen"]],
 ["🍽️ Nach Mahlzeiten",["Geschirr in den Geschirrspüler","Tisch abwischen","Hochstuhl/Essplatz sauber machen","Heruntergefallenes Essen vom Boden entfernen","Arbeitsfläche bei Bedarf abwischen"]],
 ["🌙 Abend · max. 10 Minuten",["Geschirrspüler einräumen & einschalten","Küchenflächen kurz abwischen","Spüle & Herd kurz sauber machen","Esstisch + Hochstuhl/Essplatz","Müll kontrollieren","Wohnzimmer grob zurücksetzen","Garderobe kurz ordnen","Kleidung wegräumen","Vorhänge/Raffstores schließen"]],
 ["🔎 Tagescheck",["Restmüll kontrollieren","Biomüll kontrollieren","Wäsche nur bei Bedarf starten","Kühlschrank nur bei Bedarf prüfen","Toiletten nur bei Bedarf prüfen","Küchenboden bei Essensresten reinigen","Sichtbare Bodenflecken beseitigen"]]
];
const ROTATIONS=[
 ["🚪 Türklinken & häufig berührte Stellen",7],["🚪 Türblätter gründlich",75],
 ["🧹 Sockelleisten",42],["🕸️ Decken-/Wandecken auf Spinnweben",30],["✨ Lichtschalter außen abwischen",30],
 ["🔌 Steckdosen außen abwischen",75],["🏛️ Stuck vorsichtig trocken entstauben",120],["🪟 Fenster EG – Abschnitt",180],
 ["🪟 Fenster OG – Abschnitt",180],["☀️ Raffstores / Sonnenschutz nach Herstellerangabe",180],
 ["🪟 Vorhangstangen / Schienen",180],["💡 Erreichbare Lampen vorsichtig reinigen",120],["🧊 Kühlschrank prüfen und bei Bedarf reinigen",30],
 ["🔥 Backofen gründlich reinigen",75],["🍽️ Geschirrspüler: Filter, Dichtung & Pflegeprogramm nach Hersteller",30],
 ["🧺 Waschmaschine: Waschmittelschublade & Dichtung reinigen",30],["🧖 Sauna reinigen / pflegen",30],
 ["🛏️ Matratzen wenden/pflegen nach Herstellerangabe",180],["🧼 Fugen & Silikon kontrollieren / materialgerecht reinigen",90],
 ["🔥 Kamin: erkaltete Asche entfernen",30],["🔥 Kamin: Feuerraum auskehren",60],["🔥 Kaminrost reinigen",60],
 ["🔥 Kaminbesteck abwischen",30],["🔥 Kaminholz schlichten",14],["🔥 Holzablage reinigen",30],
 ["🔥 Bereich direkt vor Kamin gründlich absaugen",14],["🔥 Ruß-/Aschespuren entfernen",30],["🔥 Kaminverkleidung materialgerecht reinigen",90],
 ["🔥 Kaminglas reinigen, falls vorhanden",30],["🔥 Fachgerechte Kamin-/Schornsteinkontrolle und Wartung nach Vorgabe",365]
];
const catalogSeed=[
['Wohnzimmer','EG',['Polster absaugen','Sofaritze absaugen','Sofakissen ausschütteln','Decken ordentlich zusammenlegen','Fernbedienungen sammeln','Dekoration abstauben','Bilderrahmen abstauben','Fensterbank abwischen','Möbelfüße sichtbar reinigen','Teppich gründlich absaugen','Teppichränder kontrollieren','Vorhänge auf Staub prüfen','Kaminbereich reinigen']],
['Essbereich','EG',['Esstischoberseite reinigen','Tischkanten abwischen','Tischbeine abwischen','Stuhlsitze reinigen','Stuhllehnen abwischen','Krümel aus Tischritzen entfernen','Sideboard abstauben','Sideboardfronten abwischen','Dekoration abstauben','Boden unter dem Tisch gründlich reinigen']],
['Küche','EG',['Arbeitsplatten gründlich reinigen','Herd gründlich reinigen','Kochfeldränder reinigen','Dunstabzug außen reinigen','Dunstabzugfilter nach Herstellerangabe reinigen','Spüle entkalken','Armatur entkalken','Backofeninnenraum reinigen','Backofentür reinigen','Backofenbleche reinigen','Mikrowelle reinigen, falls vorhanden','Kühlschrank Fächer reinigen','Kühlschrank Türdichtungen reinigen','Kühlschrank Gemüsefächer reinigen','Gefrierfach prüfen/abtauen nach Herstellerangabe','Vorratsschrank auswischen','Schubladen innen auswischen','Mülleimer auswischen','Fronten gründlich abwischen','Sockelleisten reinigen','Boden unter beweglichen Möbeln reinigen']],
['Garderobe','EG',['Jacken nach Saison ordnen','Schuhe paarweise ordnen','Schuhsohlen bei Bedarf reinigen','Schuhschrank außen reinigen','Schuhschrank innen auswischen','Ablageflächen leeren','Taschen ordnen','Schlüsselplatz reinigen','Spiegel gründlich reinigen','Garderobenhaken abwischen','Türklinken reinigen']],
['Eingangsbereich','EG',['Fußmatte ausschütteln/absaugen','Fußmatte nach Hersteller reinigen','Tür innen abwischen','Tür außen bei Bedarf reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Boden gründlich saugen','Boden wischen','Ecken kontrollieren']],
['Flur','EG',['Bilderrahmen abstauben','Lichtschalter außen reinigen','Türklinken reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Ecken absaugen','Boden saugen','Boden wischen']],
['Büro','EG',['Schreibtisch komplett leeren','Schreibtischfläche reinigen','Monitor außen reinigen','Tastatur reinigen','Maus reinigen','Kabel grob ordnen','Papierstapel sortieren','Papierkorb leeren','Regale abstauben','Bücheroberseiten entstauben','Fensterbank reinigen','Boden saugen','Boden wischen']],
['Abstellraum','EG',['Vorräte prüfen','Reinigungsmittelbestand prüfen','Regale abstauben','Regalböden auswischen','Schubladen auswischen','Besen/Staubsaugerbereich reinigen','Mülltrennung ordnen','Boden gründlich saugen','Boden wischen']],
['Speis','EG',['Vorräte nach Kategorien ordnen','Mindesthaltbarkeit prüfen','Angebrochene Packungen prüfen','Regale abstauben','Regalböden auswischen','Schubladen auswischen','Behälter außen reinigen','Boden unter Regalen reinigen','Boden saugen','Boden wischen']],
['Gäste-WC','EG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Toilette innen gründlich reinigen','Toilettenrand reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter innen reinigen','Papierhalter abwischen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Boden saugen','Boden wischen']],
['Kinderbad','OG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Dusche reinigen','Duschrinne kontrollieren','Badewanne reinigen','Toilette reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Silikon kontrollieren','Boden saugen','Boden wischen']],
['Bad','OG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Dusche entkalken','Duschglas reinigen','Duschrinne reinigen','Badewanne reinigen','Badewannenarmatur entkalken','Toilette innen gründlich reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Silikon kontrollieren','Boden saugen','Boden wischen']],
['WC','OG',['Waschbecken reinigen','Armatur entkalken','Spiegel reinigen','Toilette innen reinigen','Toilettenrand reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Boden saugen','Boden wischen']],
['Schlafzimmer','OG',['Bettwäsche wechseln','Matratze absaugen','Matratze nach Hersteller pflegen','Unter Bett saugen','Nachttische komplett reinigen','Lampen außen abstauben','Kopfteil abstauben','Fensterbank reinigen','Spiegel reinigen','Kleidung aussortieren','Boden gründlich saugen','Boden wischen']],
['Ankleidezimmer','OG',['Kleidung nach Saison ordnen','Kleiderbügel vereinheitlichen','Schubladen ordnen','Schubladen auswischen','Regalböden reinigen','Spiegel reinigen','Schrankfronten abwischen','Schrankgriffe reinigen','Boden unter Schränken reinigen','Boden saugen','Boden wischen']],
['Kinderzimmer 1','OG',['Spielzeug grob sortieren','Bücher ordnen','Kleidung ordnen','Schubladen ordnen','Schrankfronten abwischen','Regale abstauben','Fensterbank reinigen','Türklinke reinigen','Boden unter Möbeln saugen','Boden saugen','Boden wischen']],
['Kinderzimmer 2','OG',['Spielzeug grob sortieren','Bücher ordnen','Kleidung ordnen','Schubladen ordnen','Schrankfronten abwischen','Regale abstauben','Fensterbank reinigen','Türklinke reinigen','Boden unter Möbeln saugen','Boden saugen','Boden wischen']],
['Waschküche','Keller',['Waschmaschine außen reinigen','Waschmittelschublade reinigen','Türdichtung reinigen','Waschmaschinenpflegeprogramm nach Hersteller','Trockner außen reinigen','Flusensieb nach Herstellerangabe reinigen','Arbeitsflächen reinigen','Wäschekörbe auswischen','Vorräte an Waschmittel prüfen','Sockelleisten reinigen','Boden saugen','Boden wischen','Bereich hinter/zwischen Geräten nur wenn sicher zugänglich']],
['Musikzimmer','Keller',['Instrumente materialgerecht entstauben','Noten ordnen','Regale abstauben','Oberflächen reinigen','Kabel grob ordnen','Fensterbank reinigen','Sockelleisten reinigen','Boden saugen','Boden wischen']],
['Trainingsraum','Keller',['Trainingsgeräte abwischen','Matten reinigen','Gewichte/Griffe abwischen','Handtücher einsammeln','Ablageflächen ordnen','Spiegel reinigen','Boden saugen','Boden wischen']],
['Technikraum','Keller',['Sichtbaren Staub entfernen','Zugänge freihalten','Boden bei Bedarf reinigen','Keine technischen Komponenten öffnen']],
['Lagerraum','Keller',['Kartons ordnen','Vorräte prüfen','Regale abstauben','Boden saugen','Boden wischen']],
['Keller allgemein','Keller',['Spinnweben entfernen','Sichtbare Ablagerungen entfernen','Boden saugen','Boden wischen','Ecken kontrollieren']],
['Saunaraum','OG',['Nach Nutzung lüften','Holzflächen nach Hersteller reinigen','Bänke reinigen','Glasflächen reinigen','Boden saugen','Boden wischen','Saunaofen nur nach Herstellerangabe reinigen']],
['Treppenhaus','Ganzes Haus',['Stufen saugen','Stufen wischen','Handlauf abwischen','Geländer abstauben','Ecken absaugen','Sockelleisten reinigen','Spinnweben entfernen']],
['Fenster / Ganzes Haus','Ganzes Haus',['Fenster innen reinigen','Fenster außen reinigen, wenn sicher','Fensterbänke reinigen','Dichtungen kontrollieren','Vorhangstangen reinigen','Vorhänge nach Pflegeetikett reinigen','Raffstores nach Herstellerangabe reinigen']],
['Türen / Ganzes Haus','Ganzes Haus',['Türklinken reinigen','Türrahmen/Zargen reinigen','Türblätter abwischen','Türkanten reinigen','Lichtschalter außen reinigen','Steckdosen außen abwischen','Spinnweben über Türen entfernen']],
['Kamin / Wohnzimmer','EG',['Erkaltete Asche aus Feuerraum entfernen','Feuerraum auskehren','Kaminrost reinigen','Kaminbesteck abwischen','Kaminholz schlichten','Holzablage reinigen','Bereich direkt vor Kamin gründlich absaugen','Ruß-/Aschespuren entfernen','Kaminverkleidung materialgerecht reinigen','Kaminglas, falls vorhanden, reinigen','Fachgerechte Kontrolle/Wartung nach Vorgabe']],
['Ganzes Haus – Textilien','Ganzes Haus',['Bettwäsche wechseln','Handtücher wechseln','Decken nach Pflegeetikett reinigen','Teppiche nach Pflegehinweisen reinigen','Vorhänge nach Pflegeetikett reinigen','Polster nach Pflegehinweisen reinigen']],
['Ganzes Haus – Allgemein','Ganzes Haus',['Sockelleisten reinigen','Decken-/Wandecken entstauben','Stuck vorsichtig trocken entstauben','Erreichbare Lampen reinigen','Lichtschalter außen reinigen','Steckdosen außen reinigen','Türrahmen reinigen','Türblätter reinigen']]
];
// Türrahmen/Zargen werden bewusst raumweise geführt – nie als „ganzes Haus“-Aufgabe.
// Dadurch kann der Planer das Pensum pro Raum sinnvoll portionieren.
const DOORFRAME_ROOMS = new Set(catalogSeed.map(r=>r[0]).filter(r =>
  !r.includes("Ganzes Haus") &&
  r !== "Kamin / Wohnzimmer"
));
for (const row of catalogSeed) {
  const [room, area, tasks] = row;
  if (DOORFRAME_ROOMS.has(room) && !tasks.includes("Türrahmen / Zargen reinigen")) {
    tasks.push("Türrahmen / Zargen reinigen");
  }
}

const SEED_ROOMS = {
 "Wohnzimmer":["Wohnzimmer","EG"],"Essbereich":["Essbereich","EG"],"Küche":["Küche","EG"],"Garderobe":["Garderobe","EG"],
 "Eingangsbereich":["Eingangsbereich","EG"],"Flur":["Flur","EG"],"Büro":["Büro","EG"],"Abstellraum":["Abstellraum","EG"],
 "Speis":["Speis","EG"],"Gäste-WC":["Gäste-WC","EG"],"Kinderbad":["Kinderbad","OG"],"Bad":["Bad","OG"],"WC":["WC","OG"],
 "Schlafzimmer":["Schlafzimmer","OG"],"Ankleidezimmer":["Ankleidezimmer","OG"],"Kinderzimmer 1":["Kinderzimmer 1","OG"],
 "Kinderzimmer 2":["Kinderzimmer 2","OG"],"Waschküche":["Waschküche","Keller"],"Musikzimmer":["Musikzimmer","Keller"],
 "Trainingsraum":["Trainingsraum","Keller"],"Technikraum":["Technikraum","Keller"],"Lagerraum":["Lagerraum","Keller"],"Flur KG":["Flur KG","Keller"],
 "Keller allgemein":["Keller allgemein","Keller"],"Saunaraum":["Saunaraum","OG"],"Treppenhaus":["Treppenhaus","Ganzes Haus"],
 "Fenster / Ganzes Haus":["Fenster / Ganzes Haus","Ganzes Haus"],"Türen / Ganzes Haus":["Türen / Ganzes Haus","Ganzes Haus"],
 "Kamin / Wohnzimmer":["Kamin / Wohnzimmer","EG"],"Ganzes Haus – Textilien":["Ganzes Haus – Textilien","Ganzes Haus"],
 "Ganzes Haus – Allgemein":["Ganzes Haus – Allgemein","Ganzes Haus"]
};
const WINDOW_INVENTORY = [
 ["KG","Waschküche",2],["KG","Musikzimmer",2],["KG","Technikraum",2],["KG","Trainingsraum",2],["KG","Flur KG",2],["KG","Stiegenhaus",1],
 ["EG","Garderobe",1],["EG","Büro",3],["EG","Wohnzimmer",1],["EG","Essbereich",2],["EG","Küche",2],["EG","Speis",1],["EG","Abstellraum",1],["EG","WC",1],
 ["OG","Kinderzimmer 1",2],["OG","Kinderzimmer 2",3],["OG","Kinderbad",1],["OG","Schlafzimmer",1],["OG","Ankleide",1],["OG","Eltern-WC",1],["OG","Saunaraum",1],["OG","Bad",2]
];
const SEASONAL_SPECIALS = [
 // Herbst 2026 – erste Runde, bewusst klein portioniert
 {key:"fenster-kg-waschkueche-musik",text:"🪟 Fenster KG · Waschküche + Musikzimmer",room:"Waschküche + Musikzimmer",area:"KG",dates:["2026-09-15","2026-09-17","2026-09-19"]},
 {key:"fenster-kg-technik-training",text:"🪟 Fenster KG · Technikraum + Trainingsraum",room:"Technikraum + Trainingsraum",area:"KG",dates:["2026-09-22","2026-09-24","2026-09-26"]},
 {key:"fenster-kg-flur-stiegenhaus",text:"🪟 Fenster KG · Flur + großes Stiegenhausfenster",room:"Flur KG + Stiegenhaus",area:"KG",dates:["2026-09-29","2026-10-01","2026-10-03"]},
 {key:"fenster-eg-garderobe-buero",text:"🪟 Fenster EG · Garderobe + Büro",room:"Garderobe + Büro",area:"EG",dates:["2026-10-06","2026-10-08","2026-10-10"]},
 {key:"fenster-eg-wohnen-essen",text:"🪟 Fenster EG · Wohnzimmer + Essbereich",room:"Wohnzimmer + Essbereich",area:"EG",dates:["2026-10-13","2026-10-15","2026-10-17"]},
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + WC",room:"Küche + Speis + Abstellraum + WC",area:"EG",dates:["2026-10-20","2026-10-22","2026-10-24"]},
 {key:"fenster-og-kinder",text:"🪟 Fenster OG · beide Kinderzimmer",room:"Kinderzimmer 1 + Kinderzimmer 2",area:"OG",dates:["2026-10-27","2026-10-29","2026-10-31"]},
 {key:"fenster-og-schlaf-ankleide",text:"🪟 Fenster OG · Schlafzimmer + Ankleide",room:"Schlafzimmer + Ankleide",area:"OG",dates:["2026-11-03","2026-11-05","2026-11-07"]},
 {key:"fenster-og-baeder-wc-sauna",text:"🪟 Fenster OG · Kinderbad + Eltern-WC + Sauna",room:"Kinderbad + Eltern-WC + Sauna",area:"OG",dates:["2026-11-10","2026-11-12","2026-11-14"]},
 {key:"fenster-og-bad",text:"🪟 Fenster OG · großes Bad",room:"Bad",area:"OG",dates:["2026-11-17","2026-11-19","2026-11-21"]},

 // Ab Frühjahr 2027 derselbe Rhythmus, nochmals mit kleinen Portionen.
 {key:"fenster-kg-waschkueche-musik",text:"🪟 Fenster KG · Waschküche + Musikzimmer",room:"Waschküche + Musikzimmer",area:"KG",dates:["2027-04-06","2027-04-08","2027-04-10"]},
 {key:"fenster-kg-technik-training",text:"🪟 Fenster KG · Technikraum + Trainingsraum",room:"Technikraum + Trainingsraum",area:"KG",dates:["2027-04-13","2027-04-15","2027-04-17"]},
 {key:"fenster-kg-flur-stiegenhaus",text:"🪟 Fenster KG · Flur + großes Stiegenhausfenster",room:"Flur KG + Stiegenhaus",area:"KG",dates:["2027-04-20","2027-04-22","2027-04-24"]},
 {key:"fenster-eg-garderobe-buero",text:"🪟 Fenster EG · Garderobe + Büro",room:"Garderobe + Büro",area:"EG",dates:["2027-04-27","2027-04-29","2027-05-01"]},
 {key:"fenster-eg-wohnen-essen",text:"🪟 Fenster EG · Wohnzimmer + Essbereich",room:"Wohnzimmer + Essbereich",area:"EG",dates:["2027-05-04","2027-05-06","2027-05-08"]},
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + WC",room:"Küche + Speis + Abstellraum + WC",area:"EG",dates:["2027-05-11","2027-05-13","2027-05-15"]},
 {key:"fenster-og-kinder",text:"🪟 Fenster OG · beide Kinderzimmer",room:"Kinderzimmer 1 + Kinderzimmer 2",area:"OG",dates:["2027-05-18","2027-05-20","2027-05-22"]},
 {key:"fenster-og-schlaf-ankleide",text:"🪟 Fenster OG · Schlafzimmer + Ankleide",room:"Schlafzimmer + Ankleide",area:"OG",dates:["2027-05-25","2027-05-27","2027-05-29"]},
 {key:"fenster-og-baeder-wc-sauna",text:"🪟 Fenster OG · Kinderbad + Eltern-WC + Sauna",room:"Kinderbad + Eltern-WC + Sauna",area:"OG",dates:["2027-06-01","2027-06-03","2027-06-05"]},
 {key:"fenster-og-bad",text:"🪟 Fenster OG · großes Bad",room:"Bad",area:"OG",dates:["2027-06-08","2027-06-10","2027-06-12"]},

 // Herbst 2027
 {key:"fenster-kg-waschkueche-musik",text:"🪟 Fenster KG · Waschküche + Musikzimmer",room:"Waschküche + Musikzimmer",area:"KG",dates:["2027-09-07","2027-09-09","2027-09-11"]},
 {key:"fenster-kg-technik-training",text:"🪟 Fenster KG · Technikraum + Trainingsraum",room:"Technikraum + Trainingsraum",area:"KG",dates:["2027-09-14","2027-09-16","2027-09-18"]},
 {key:"fenster-kg-flur-stiegenhaus",text:"🪟 Fenster KG · Flur + großes Stiegenhausfenster",room:"Flur KG + Stiegenhaus",area:"KG",dates:["2027-09-21","2027-09-23","2027-09-25"]},
 {key:"fenster-eg-garderobe-buero",text:"🪟 Fenster EG · Garderobe + Büro",room:"Garderobe + Büro",area:"EG",dates:["2027-09-28","2027-09-30","2027-10-02"]},
 {key:"fenster-eg-wohnen-essen",text:"🪟 Fenster EG · Wohnzimmer + Essbereich",room:"Wohnzimmer + Essbereich",area:"EG",dates:["2027-10-05","2027-10-07","2027-10-09"]},
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + WC",room:"Küche + Speis + Abstellraum + WC",area:"EG",dates:["2027-10-12","2027-10-14","2027-10-16"]},
 {key:"fenster-og-kinder",text:"🪟 Fenster OG · beide Kinderzimmer",room:"Kinderzimmer 1 + Kinderzimmer 2",area:"OG",dates:["2027-10-19","2027-10-21","2027-10-23"]},
 {key:"fenster-og-schlaf-ankleide",text:"🪟 Fenster OG · Schlafzimmer + Ankleide",room:"Schlafzimmer + Ankleide",area:"OG",dates:["2027-10-26","2027-10-28","2027-10-30"]},
 {key:"fenster-og-baeder-wc-sauna",text:"🪟 Fenster OG · Kinderbad + Eltern-WC + Sauna",room:"Kinderbad + Eltern-WC + Sauna",area:"OG",dates:["2027-11-02","2027-11-04","2027-11-06"]},
 {key:"fenster-og-bad",text:"🪟 Fenster OG · großes Bad",room:"Bad",area:"OG",dates:["2027-11-09","2027-11-11","2027-11-13"]}
];

const BASEMENT=["Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG"];
const WEEKDAYS={Wohnzimmer:1,Essbereich:1,Küche:1,"Gäste-WC":2,Kinderbad:2,Bad:2,WC:2,Schlafzimmer:3,Ankleidezimmer:3,"Kinderzimmer 1":3,"Kinderzimmer 2":3,Saunaraum:3,Treppenhaus:3,Eingangsbereich:4,Garderobe:4,Flur:4,Büro:4,Abstellraum:4,Speis:4};
const DAY_THEME={1:"EG · Wohnen, Essen & Küche",2:"Bäder & WCs",3:"OG · Schlafen, Kinder & Sauna",4:"EG · Nebenräume",5:"Keller · nur ein Raum",6:"Wäsche + maximal eine Sonderaufgabe",0:"Haushaltsfrei ❤️"};

function uid(){return Math.random().toString(36).slice(2)+Date.now().toString(36)}
function pad(n){return String(n).padStart(2,"0")}
function iso(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function fromKey(k){return new Date(k+"T12:00:00")}
function dayKey(d=new Date()){return iso(d)}
function sameDay(a,b){return iso(a)===iso(b)}
function addDays(d,n){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()+n);return x}
function nextDow(d,dow){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()+((dow-x.getDay()+7)%7));return x}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function dateLabel(d=today){return new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}).format(d)}
function toast(t){const el=document.getElementById("toast");if(!el)return;el.textContent=t;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),1800)}

function defaultState(){return {done:{},lastDone:{},postponed:{},custom:[],catalogEdits:{},catalogDeleted:{},todayExtras:[],completedDays:{},completedOpen:false,postponedOpen:false,chaos:false,sundayOptional:{},calendarYear:new Date().getFullYear()}}
function loadState(){let raw=null;try{raw=JSON.parse(localStorage.getItem(STORAGE)||"null")}catch{};if(!raw){try{raw=JSON.parse(localStorage.getItem(LEGACY_STORAGE)||"null")}catch{}}const s=Object.assign(defaultState(),raw||{});s.done=s.done||{};s.lastDone=s.lastDone||{};s.postponed=s.postponed||{};s.custom=Array.isArray(s.custom)?s.custom:[];s.catalogEdits=s.catalogEdits||{};s.catalogDeleted=s.catalogDeleted||{};s.todayExtras=Array.isArray(s.todayExtras)?s.todayExtras:[];s.completedDays=s.completedDays||{};return s}
let state=loadState();
let selectedTab="today";
let today=new Date();today.setHours(12,0,0,0);
let CATALOG=[];
let calendarCache={year:null,days:new Map()};
let plannerCache={key:null,days:new Map(),next:new Map()};
function invalidatePlans(){calendarCache={year:null,days:new Map()};plannerCache={key:null,days:new Map(),next:new Map()}}
function save(){localStorage.setItem(STORAGE,JSON.stringify(state));invalidatePlans()}
function taskId(x){return x.key||x.id||((x.source||"task")+"|"+x.room+"|"+x.text)}
function doneKey(x){return "done|"+taskId(x)}
function lastKey(x){return "last|"+taskId(x)}
function isDone(x){return !!state.done[doneKey(x)]||!!state.done[x.id]||!!state.done[x.canonical]}
function lastDone(x){return state.lastDone[lastKey(x)]||state.lastDone[x.key]||state.lastDone[x.id]||state.lastDone[x.canonical]||""}
function markDone(x){state.done[doneKey(x)]=true;state.lastDone[lastKey(x)]=dayKey()}
function unmarkDone(x){delete state.done[doneKey(x)]}
function isPostponed(x){return !!state.postponed[taskId(x)]}
function postponeTask(x){state.postponed[taskId(x)]={...x,from:dayKey()};save();render();toast("Für heute verschoben ❤️")}
function restorePostponed(id){delete state.postponed[id];save();render()}
function purgePostponed(){const k=dayKey();for(const [id,v] of Object.entries(state.postponed||{}))if(v.from&&v.from<k)delete state.postponed[id]}
function syncCompletedDay(d=today){
 const k=dayKey(d), tasks=plannedTodayForDate(d);
 if(tasks.length && tasks.every(isDone)) state.completedDays[k]=true; else delete state.completedDays[k];
}
function plannedTodayForDate(d){
 const old=today;today=new Date(d);today.setHours(12,0,0,0);const result=plannedToday();today=old;return result;
}
function toggleTask(x){if(isDone(x))unmarkDone(x);else markDone(x);syncCompletedDay(today);save();render()}

function catalogDeleted(key){return !!state.catalogDeleted?.[key]}
function editFor(key){return state.catalogEdits?.[key]||null}
function catalogInterval(x){if(Number(x.interval)>0)return Number(x.interval);const t=(x.text||"").toLowerCase();if(/türklink|lichtschalter|steckdose|arbeitsfläche|esstisch|waschbecken|toilette|wc-bürste|boden saugen|boden wischen/.test(t))return 7;if(/sockelleiste|fensterbank|spinnweb|abstauben|abwischen/.test(t))return 30;if(/bettwäsche|handtücher|kaminholz|holz schlichten|direkt vor kamin/.test(t))return 14;if(/fenster|raffstore|vorhangstange|matratze|teppich|polster/.test(t))return 180;if(/türblätter|türrahmen|zargen|fugen|silikon|backofen|kühlschrank|geschirrspüler|waschmaschine|trockner|sauna|stuck|lampe/.test(t))return 90;return 60}

function windowEntries(){const map={"KG|Waschküche":"fenster-kg-waschkueche-musik","KG|Musikzimmer":"fenster-kg-waschkueche-musik","KG|Technikraum":"fenster-kg-technik-training","KG|Trainingsraum":"fenster-kg-technik-training","KG|Flur KG":"fenster-kg-flur-stiegenhaus","KG|Stiegenhaus":"fenster-kg-flur-stiegenhaus","EG|Garderobe":"fenster-eg-garderobe-buero","EG|Büro":"fenster-eg-garderobe-buero","EG|Wohnzimmer":"fenster-eg-wohnen-essen","EG|Essbereich":"fenster-eg-wohnen-essen","EG|Küche":"fenster-eg-kueche-speis-abstell","EG|Speis":"fenster-eg-kueche-speis-abstell","EG|Abstellraum":"fenster-eg-kueche-speis-abstell","EG|WC":"fenster-eg-kueche-speis-abstell","OG|Kinderzimmer 1":"fenster-og-kinder","OG|Kinderzimmer 2":"fenster-og-kinder","OG|Kinderbad":"fenster-og-baeder-wc-sauna","OG|Eltern-WC":"fenster-og-baeder-wc-sauna","OG|Saunaraum":"fenster-og-baeder-wc-sauna","OG|Schlafzimmer":"fenster-og-schlaf-ankleide","OG|Ankleide":"fenster-og-schlaf-ankleide","OG|Bad":"fenster-og-bad"};const out=[];for(const [area,room,count] of WINDOW_INVENTORY)for(let i=1;i<=count;i++){const large=/Stiegenhaus|Trainingsraum|Wohnzimmer|Schlafzimmer|Bad/.test(room);out.push({key:`window|${area}|${room}|${i}`,text:`🪟 Fenster ${area} · ${room}${count>1?" "+i:""}${large?" · groß":""}`,room:`Fenster ${area} · ${room}`,area,place:`Fenster ${i}`,description:"Nur dieses Fenster bzw. diesen kleinen Fensterbereich gründlich reinigen – innen, außen nur wenn sicher, inklusive Fensterbank sowie Rahmen und Falz dieses Fensters.",window:true,windowKey:`${area}|${room}|${i}`,windowGroup:map[area+"|"+room],source:"window",editable:false,interval:180});}return out}
const WINDOW_TASKS=windowEntries();
const WINDOW_GROUP_DATES={};for(const s of SEASONAL_SPECIALS){if(!WINDOW_GROUP_DATES[s.key])WINDOW_GROUP_DATES[s.key]=[];WINDOW_GROUP_DATES[s.key].push(...s.dates)}for(const k in WINDOW_GROUP_DATES)WINDOW_GROUP_DATES[k]=[...new Set(WINDOW_GROUP_DATES[k])].sort();
function windowDate(x,ref=today){
 const rounds=SEASONAL_SPECIALS.filter(s=>s.key===x.windowGroup);
 if(!rounds.length)return null;
 const idx=Math.max(0,Number((x.windowKey||"|1").split("|").pop())-1);
 const candidates=[];
 for(const round of rounds){
   const dates=(round.dates||[]).slice().sort();
   if(dates.length)candidates.push(fromKey(dates[idx%dates.length]));
 }
 candidates.sort((a,b)=>a-b);
 for(const d of candidates)if(d>=ref)return d;
 // Continue the seasonal rhythm: after the last published round, repeat every 6 months.
 let d=candidates[candidates.length-1];
 while(d<ref)d=addDays(d,180);
 return d;
}

function buildCatalog(){const out=[];const add=(text,room,area,meta={})=>{const key=meta.key||`seed|${room}|${text}`;if(catalogDeleted(key))return;const e=editFor(key)||{};out.push({text:e.text??text,room:e.room??room,area:e.area??area,place:e.place??meta.place??"",description:e.description??meta.description??"",start:e.start??meta.start??"",interval:Number(e.interval??meta.interval??0)||0,key,source:meta.source||"seed",editable:meta.editable!==false,window:!!meta.window,windowKey:meta.windowKey,windowGroup:meta.windowGroup,seasonal:!!meta.seasonal,seasonalKey:meta.seasonalKey})};for(const [room,area,tasks] of catalogSeed){if(room==="Fenster / Ganzes Haus")continue;for(const text of tasks){if(/^(Fenster innen reinigen|Fenster außen reinigen, wenn sicher|Fensterbänke reinigen|Dichtungen kontrollieren|Vorhangstangen reinigen|Vorhänge nach Pflegeetikett reinigen|Raffstores nach Herstellerangabe reinigen)$/.test(text))continue;add(text,room,area,{key:`seed|${room}|${text}`})}}for(const [text,interval] of ROTATIONS)add(text,"Rotationsaufgabe","Turnus",{key:`rotation|${text}`,editable:false,source:"rotation",interval});for(const c of state.custom){const key=c.key||`custom|${c.id}`;if(catalogDeleted(key))continue;add(c.text,c.room,c.area,{...c,key,source:"custom",editable:true,start:c.start||c.date||"",interval:Number(c.interval||c.repeat||0)||60,place:c.place,description:c.description})}for(const w of WINDOW_TASKS)out.push(w);return out}
function refreshCatalog(){CATALOG=buildCatalog();invalidatePlans()}
refreshCatalog();

function roomItems(room){return CATALOG.filter(x=>x.room===room&&!x.window&&x.source!=="rotation"&&x.area!=="Alltag")}
function basementRoom(d){const base=fromKey("2026-09-04"),diff=Math.round((d-base)/86400000);return BASEMENT[((Math.floor(diff/7)%BASEMENT.length)+BASEMENT.length)%BASEMENT.length]}
function weeklyDate(x){const dow=WEEKDAYS[x.room];if(dow===undefined)return null;const items=roomItems(x.room),idx=Math.max(0,items.findIndex(y=>y.key===x.key));return addDays(nextDow(fromKey("2026-08-31"),dow),Math.floor(idx/3)*7)}
function rotationAnchor(x){const idx=Math.max(0,ROTATIONS.findIndex(r=>r[0]===x.text));return addDays(fromKey("2026-09-07"),(idx*5)%150)}
function explicitNext(x,ref){const start=/^\d{4}-\d{2}-\d{2}$/.test(x.start||"")?fromKey(x.start):ref;const interval=catalogInterval(x);let d=new Date(start),last=lastDone(x);if(last&&fromKey(last)>=d)d=fromKey(last);while(d<ref)d=addDays(d,interval);if(last&&sameDay(d,fromKey(last)))d=addDays(d,interval);return d}
function rawNextDue(x,ref=today){
 if(x.window)return windowDate(x,ref)||ref;
 if(x.start)return explicitNext(x,ref);
 if(x.source==="rotation"){const interval=catalogInterval(x),last=lastDone(x);let d=last?addDays(fromKey(last),interval):rotationAnchor(x);while(d<ref)d=addDays(d,interval);return d}
 if(BASEMENT.includes(x.room)){const items=roomItems(x.room),idx=Math.max(0,items.findIndex(y=>y.key===x.key));const firstFriday=fromKey("2026-09-04");let d=addDays(firstFriday,Math.floor(idx/3)*7);while(d<ref)d=addDays(d,7*BASEMENT.length);return d}
 const w=weeklyDate(x);if(!w)return ref;
 const items=roomItems(x.room),cycleWeeks=Math.max(1,Math.ceil(items.length/3));
 const last=lastDone(x);
 let d=last?addDays(fromKey(last),cycleWeeks*7):w;
 while(d<ref)d=addDays(d,cycleWeeks*7);
 return d;
}
function rawDueOn(x,d){
 if(x.area==="Alltag")return false;
 if(x.window)return sameDay(windowDate(x,d),d);
 if(x.start){const start=fromKey(x.start),interval=catalogInterval(x),last=lastDone(x);let anchor=start;if(last&&fromKey(last)>anchor)anchor=fromKey(last);if(d<anchor)return false;const diff=Math.round((d-anchor)/86400000);return diff>=0&&diff%interval===0}
 if(x.source==="rotation"){const interval=catalogInterval(x),a=rotationAnchor(x),last=lastDone(x);let anchor=last?addDays(fromKey(last),interval):a;if(d<anchor)return false;return Math.round((d-anchor)/86400000)%interval===0}
 if(BASEMENT.includes(x.room)){return sameDay(rawNextDue(x,d),d);}
 const w=weeklyDate(x);
 if(!w)return false;
 // Standard room tasks are a rotation, not weekly repetition of every task.
 // The room's tasks are distributed over a cycle so that only a small portion
 // of each room is due at once.
 const items=roomItems(x.room),idx=Math.max(0,items.findIndex(y=>y.key===x.key));
 const slots=Math.max(1,Math.ceil(items.length/3));
 const diff=Math.round((d-w)/86400000);
 return diff>=0 && diff%(slots*7)===0;
}
function taskWeight(x){const t=(x.text||"").toLowerCase();
 if(x.window||/fenster|raffstore/.test(t))return 10;
 if(/kamin|schornstein|stuck|matratze|teppich|polster|backofen|dusche entkalken|badewanne|duschglas|fugen|silikon/.test(t))return 5;
 if(/waschmaschine|trockner|kühlschrank|geschirrspüler|sauna|türblätter|türrahmen|zargen|boden wischen|boden gründlich|schrank|regal|spiegel/.test(t))return 3;
 return 1;
}
function roomCap(x){if(x.window)return 1;if(/boden|fenster|kamin|bad|dusche|wanne|wc|toilette/i.test(x.text||""))return 1;return 2}
function dayBudget(d){if(d.getDay()===0)return 0;if(d.getDay()===6)return 3;if(d.getDay()===3)return 6;return 6}
function isFixedTask(x){return x.window||x.source==="seasonal"||x.source==="custom"||!!x.start}
function rawTasksForDate(d){return CATALOG.filter(x=>rawDueOn(x,d))}
function plannerKey(){return JSON.stringify({ed:state.catalogEdits,del:state.catalogDeleted,custom:state.custom,done:state.lastDone,sunday:state.sundayOptional})}
function plannerHorizon(){return {start:fromKey("2026-09-01"),end:fromKey("2027-12-31")}}
function buildIntelligentPlan(){
 const key=plannerKey();if(plannerCache.key===key)return plannerCache;
 const {start,end}=plannerHorizon();const days=new Map();const dates=[];for(let d=new Date(start);d<=end;d=addDays(d,1)){const k=dayKey(d);days.set(k,[]);dates.push(d)}
 const addFixed=(k,x)=>{const arr=days.get(k);if(!arr)return;arr.push(x)};
 // Fixed/seasonal work goes first. A mighty fixed task essentially owns the day.
 for(const d of dates){const k=dayKey(d);if(d.getDay()===0&&!state.sundayOptional[k])continue;for(const x of rawTasksForDate(d).filter(isFixedTask))addFixed(k,x);const season=SEASONAL_SPECIALS.find(s=>(s.dates||[]).includes(k));if(season)addFixed(k,{key:`seasonal|${season.key}|${k}`,text:season.text,room:season.room,area:season.area,group:"Fenster",major:true,source:"seasonal",window:true})}
 // Flexible occurrences: create only the next required occurrence per task and
 // then place it on the first genuinely light day. This prevents a whole room
 // from landing on one anchor day.
 const flex=[];
 for(const x of CATALOG.filter(x=>x.area!=="Alltag"&&!isFixedTask(x))){
   let base=rawNextDue(x,today);
   if(base<start)base=start;
   flex.push({x,base});
 }
 flex.sort((a,b)=>a.base-b.base||taskWeight(b.x)-taskWeight(a.x)||a.x.room.localeCompare(b.x.room,"de"));
 const maxLook=120;
 for(const occ of flex){
   let chosen=null;
   for(let delta=0;delta<=maxLook;delta++){
     const d=addDays(occ.base,delta),k=dayKey(d);if(!days.has(k)||d.getDay()===0&&!state.sundayOptional[k])continue;
     const arr=days.get(k);
     if(arr.some(y=>taskId(y)===taskId(occ.x)))continue;
     const weight=taskWeight(occ.x),used=arr.reduce((n,y)=>n+taskWeight(y),0);
     const hasMighty=arr.some(y=>y.window||taskWeight(y)>=5);
     const hasLarge=arr.some(y=>taskWeight(y)>=3);
     const cap=dayBudget(d);
     // One mighty task = the day's housework. Only a tiny add-on is allowed.
     if(hasMighty){if(weight>1)continue;}
     if(weight>=5 && arr.length)continue;
     if(hasLarge && weight>=3)continue;
     if(used+weight>cap)continue;
     // Efficient room grouping: tasks from the same room may be bundled
     // when the remaining daily capacity allows it. A room package is capped
     // at roughly one normal work block; mighty/large work still dominates.
     const sameRoomWeight=arr.filter(y=>y.room===occ.x.room).reduce((n,y)=>n+taskWeight(y),0);
     const roomLimit=(weight>=5||hasMighty)?1:6;
     if(sameRoomWeight+weight>roomLimit)continue;
     chosen=k;break;
   }
   if(chosen)days.get(chosen).push(occ.x);
 }
 for(const [k,arr] of days)arr.sort((a,b)=>taskWeight(b)-taskWeight(a)||a.room.localeCompare(b,"de")||a.text.localeCompare(b.text,"de"));
 plannerCache={key,days,next:new Map()};
 for(const x of CATALOG){let found=null;for(const [k,arr] of days){if(arr.some(y=>taskId(y)===taskId(x))){const d=fromKey(k);if(d>=today&&!found)found=d;}}if(found)plannerCache.next.set(taskId(x),found)}
 return plannerCache;
}
function plannedForDate(d){return buildIntelligentPlan().days.get(dayKey(d))||[]}
function scheduledForDate(d){return plannedForDate(d)}
function nextDue(x,ref=today){
 const p=buildIntelligentPlan().next.get(taskId(x));
 if(p&&p>=ref)return p;
 return rawNextDue(x,ref);
}
function dueOn(x,d){return plannedForDate(d).some(y=>taskId(y)===taskId(x))}
function calendarTasksForDate(d){const year=d.getFullYear();if(calendarCache.year!==year)calendarCache={year,days:new Map()};const k=iso(d);if(calendarCache.days.has(k))return calendarCache.days.get(k);const v=plannedForDate(d);calendarCache.days.set(k,v);return v}
function nextDueLabel(x){return nextDue(x).toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"})}
function themeFor(d){if(d.getDay()===0)return DAY_THEME[0];if(d.getDay()===5)return DAY_THEME[5]+" · "+basementRoom(d);return DAY_THEME[d.getDay()]||""}

function dailyTasks(){const out=[];for(const [group,tasks] of DAILY)for(const text of tasks)out.push({key:`daily|${text}`,id:`daily|${text}`,text,room:"Ganzes Haus",area:"Alltag",group,source:"daily",editable:false});return out}
function recent(x,d=today,days=7){const l=lastDone(x);return !!l&&(d-fromKey(l))/86400000<days}
function groupFor(x){if(["Wohnzimmer","Essbereich","Küche"].includes(x.room))return "EG · Wohnen, Essen & Küche";if(["Gäste-WC","Kinderbad","Bad","WC"].includes(x.room))return "Bäder & WCs";if(["Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Saunaraum"].includes(x.room))return "OG · Schlafen, Kinder & Sauna";if(["Eingangsbereich","Garderobe","Flur","Büro","Abstellraum","Speis"].includes(x.room))return "EG · Nebenräume";if(BASEMENT.includes(x.room))return "Keller · "+x.room;if(x.source==="rotation")return "Rotationsaufgabe";if(x.window)return "Fenster";return "Weitere Aufgabe"}
function weeklyCandidates(d){return plannedForDate(d).filter(x=>!x.window&&x.source!=="rotation").map(x=>({...x,group:groupFor(x)}))}
function plannedToday(){const d=today;if(d.getDay()===0&&!state.sundayOptional[dayKey(d)])return [];if(state.chaos)return dailyTasks().filter(x=>/Geschirrspüler|Küchenarbeitsfläche|Esstisch|Hochstuhl|Heruntergefallenes|Müll/.test(x.text));const out=dailyTasks();const plan=plannedForDate(d);for(const x of plan)out.push({...x,group:groupFor(x)});for(const e of state.todayExtras.filter(e=>e.date===dayKey(d)))out.push({...e,key:e.id,source:"extra",group:"Heute zusätzlich"});const seen=new Set();return out.filter(x=>{const id=taskId(x);if(seen.has(id))return false;seen.add(id);return !isPostponed(x)})}

function definition(x){const t=x.text.toLowerCase();let what=x.description||x.text,belongs=[x.place?"Genauer Ort: "+x.place:"genau der genannte Bereich bzw. Gegenstand"],not=["Aufgaben anderer Räume nicht automatisch mitmachen","keine unnötige Perfektion"],care=["Material- und Herstellerangaben haben Vorrang."];if(x.window){what=x.description||"Nur das genannte Fenster gründlich reinigen – innen, außen nur wenn sicher, inklusive Fensterbank sowie Rahmen und Falz dieses Fensters.";belongs=[x.place||"genanntes Fenster","Fensterbank","Rahmen und Falz dieses Fensters"];not=["Keine anderen Fenster des Hauses zusätzlich","Keine unsicheren Außen-/Höhenarbeiten"]}else if(/kamin|asche|ruß|feuerraum|rost/.test(t)){what=x.description||"Den genannten Kaminbereich nur vollständig erkaltet und sicher reinigen.";not=["Heiße Asche oder Glut anfassen","Feuerraum bei brennendem Feuer reinigen"];care=["Herstellerangaben beachten; fachgerechte Kontrolle/Wartung nach Vorgabe."]}else if(/lichtschalter|steckdose/.test(t)){what=x.description||"Nur die zugängliche Außenfläche vorsichtig abwischen.";not=["Schalter/Steckdose öffnen","Flüssigkeit in Öffnungen bringen"]}else if(/sauna/.test(t)){what=x.description||"Saunaraum im genannten Umfang reinigen und gut lüften.";belongs=["Bänke","Boden","zugängliche Glas-/Holzflächen je nach Aufgabe"];not=["Saunaofen zerlegen"];care=["Holz und Saunaofen ausschließlich nach Herstellerangaben behandeln."]}else if(/toilette|wc-bürste/.test(t)){what=x.description||"Das genannte WC-Element gründlich hygienisch reinigen.";care=["Handschuhe tragen. Chlor-/Bleichmittel niemals mit sauren WC-Reinigern oder Entkalkern mischen."]}return {what,belongs,not,care}}
function openDetail(x){const d=definition(x);document.getElementById("detailMeta").textContent=[x.room,x.area].filter(Boolean).join(" · ")+" · nächster Termin: "+nextDueLabel(x);document.getElementById("detailTitle").textContent=x.text;document.getElementById("detailContent").innerHTML=`<div class="detailBox"><b>Was mache ich?</b><div>${esc(d.what)}</div></div><div class="detailBox"><b>Was gehört dazu?</b><ul>${d.belongs.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div><div class="detailBox"><b>Was gehört nicht dazu?</b><ul>${d.not.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div><div class="detailBox"><b>Worauf achten?</b><ul>${d.care.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`;document.getElementById("detailOverlay").classList.add("open")}
function swipeRow(el,x){
  let sx=0,sy=0,dx=0,drag=false,moved=false;
  const c=el.querySelector(".taskContent"),bg=el.querySelector(".swipeBg");
  const reset=()=>{dx=0;drag=false;moved=false;c.style.transition="transform .18s";c.style.transform="translateX(0)";bg.style.opacity="0";bg.classList.remove("green","red")};
  const upd=()=>{c.style.transform=`translateX(${dx}px)`;bg.classList.toggle("green",dx>0);bg.classList.toggle("red",dx<0);bg.style.opacity=Math.min(1,Math.abs(dx)/70);bg.querySelector(".swipeLabel").textContent=dx<0?"↩ Später":"✓ Erledigt"};
  const start=(clientX,clientY)=>{sx=clientX;sy=clientY;dx=0;drag=true;moved=false;c.style.transition="none"};
  const move=(clientX,clientY,e)=>{if(!drag)return;const rawX=clientX-sx,rawY=clientY-sy;if(!moved && Math.abs(rawY)>Math.abs(rawX)+6){drag=false;return}dx=Math.max(-150,Math.min(150,rawX));if(Math.abs(dx)>6)moved=true;if(moved){if(e&&e.cancelable)e.preventDefault();upd()}};
  const end=()=>{if(!drag)return;drag=false;c.style.transition="transform .18s";if(dx>75){c.style.transform="translateX(105%)";bg.classList.add("green");bg.style.opacity="1";setTimeout(()=>toggleTask(x),120)}else if(dx<-75){c.style.transform="translateX(-105%)";bg.classList.add("red");bg.style.opacity="1";setTimeout(()=>postponeTask(x),120)}else reset()};
  el.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;start(e.clientX,e.clientY);el.setPointerCapture?.(e.pointerId)},{passive:true});
  el.addEventListener("pointermove",e=>move(e.clientX,e.clientY,e),{passive:false});
  el.addEventListener("pointerup",end,{passive:true});
  el.addEventListener("pointercancel",reset,{passive:true});
  el.addEventListener("touchstart",e=>start(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
  el.addEventListener("touchmove",e=>move(e.touches[0].clientX,e.touches[0].clientY,e),{passive:false});
  el.addEventListener("touchend",end,{passive:true});
  el.addEventListener("touchcancel",reset,{passive:true});
}
function taskRow(x){const el=document.createElement("div");el.className="task"+(isDone(x)?" done":"");el.innerHTML=`<div class="swipeBg"><span class="swipeLabel">✓ Erledigt</span></div><div class="taskContent"><button class="check">${isDone(x)?"✓":""}</button><div class="taskMain"><div class="taskName">${esc(x.text)}</div><div class="meta">${esc(x.room)}${x.area?" · "+esc(x.area):""}</div>${isDone(x)?`<div class="meta nextDue">Nächster Termin: <b>${esc(nextDueLabel(x))}</b></div>`:""}</div><div class="taskButtons"><button class="iconBtn info">ⓘ</button></div></div>`;el.querySelector(".check").onclick=()=>toggleTask(x);el.querySelector(".info").onclick=()=>openDetail(x);swipeRow(el,x);return el}

function renderToday(){purgePostponed();const main=document.getElementById("main");if(today.getDay()===0&&!state.sundayOptional[dayKey(today)]){main.innerHTML=`<div class="card"><div class="celebrate">🌿 Sonntag = haushaltsfrei.</div><h2>Heute müsst ihr nichts aufholen.</h2><p class="small">Wenn du möchtest, kannst du freiwillig einen Sonntagsschwerpunkt freischalten.</p><button class="btn primary" id="sun">☀️ Sonntag nutzen</button></div>`;main.querySelector("#sun").onclick=()=>{state.sundayOptional[dayKey(today)]=true;save();render()};return}const tasks=plannedToday(),done=tasks.filter(isDone).length;main.innerHTML=`<div class="card hero"><div class="topline"><div><b>${esc(dateLabel())}</b><div class="small">${esc(themeFor(today))}</div></div><span class="badge">🧸 ${state.chaos?"Heute leicht":"Normal"}</span></div><div class="progress"><i style="width:${tasks.length?Math.round(done/tasks.length*100):0}%"></i></div><div class="small">${done} von ${tasks.length} Aufgaben erledigt</div><div class="swipeHint">👈 ROT · Später &nbsp; | &nbsp; Erledigt · GRÜN 👉</div><div class="actions"><button class="btn" id="energy">⚡ Ich habe Energie</button><button class="btn" id="chaos">🧸 Heute leicht</button></div><div class="notice">Nichts wird automatisch auf morgen gestapelt. Große Aufgaben bekommen Vorrang und verdrängen kleinere Pflegepunkte. Fälligkeiten werden dabei möglichst gleichmäßig verteilt. ❤️</div></div>`;const groups={};for(const x of tasks.filter(x=>!isDone(x)))(groups[x.group||groupFor(x)]??=[]).push(x);for(const [g,arr] of Object.entries(groups)){const sec=document.createElement("section");sec.innerHTML=`<div class="sectionTitle">${esc(g)}</div>`;arr.forEach(x=>sec.appendChild(taskRow(x)));main.appendChild(sec)}const completed=tasks.filter(isDone);if(completed.length){const card=document.createElement("div");card.className="card";card.innerHTML=`<div class="topline"><b>✓ Erledigt (${completed.length})</b><button class="btn" id="co">${state.completedOpen?"Ausblenden":"Anzeigen"}</button></div>`;if(state.completedOpen)completed.forEach(x=>card.appendChild(taskRow(x)));main.appendChild(card);card.querySelector("#co").onclick=()=>{state.completedOpen=!state.completedOpen;save();render()}}renderPostponed(main);main.querySelector("#energy").onclick=showEnergy;main.querySelector("#chaos").onclick=()=>{state.chaos=!state.chaos;save();render()}}
function renderPostponed(main){const arr=Object.entries(state.postponed||{});if(!arr.length)return;const c=document.createElement("div");c.className="card";c.innerHTML=`<div class="topline"><b>↩ Später (${arr.length})</b><button class="btn" id="po">${state.postponedOpen?"Ausblenden":"Anzeigen"}</button></div>`;if(state.postponedOpen)arr.forEach(([id,x])=>{const r=document.createElement("div");r.className="result";r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · verschoben am ${esc(x.from)}</div></div><button class="btn">Wieder öffnen</button>`;r.querySelector("button").onclick=()=>restorePostponed(id);c.appendChild(r)});main.appendChild(c);c.querySelector("#po").onclick=()=>{state.postponedOpen=!state.postponedOpen;save();render()}}
function showEnergy(){const main=document.getElementById("main");let box=document.getElementById("energyBox");if(!box){box=document.createElement("div");box.id="energyBox";box.className="card";main.insertBefore(box,main.children[1]||null)}const candidates=CATALOG.filter(x=>x.area!=="Alltag"&&!x.window&&!isDone(x)&&!isPostponed(x)&&!recent(x,today,7)).sort((a,b)=>nextDue(a)-nextDue(b)).slice(0,3);box.innerHTML=`<div class="topline"><div><b>⚡ Ich habe Energie</b><div class="small">Nur wenn du möchtest – diese Aufgaben werden heute zusätzlich vorgezogen.</div></div></div>`;if(!candidates.length)box.innerHTML+=`<div class="empty">Gerade gibt es keine sinnvolle Zusatzaufgabe. 🥰</div>`;candidates.forEach(x=>{const r=document.createElement("div");r.className="result";r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · regulär ${esc(nextDueLabel(x))}</div></div><button class="btn primary">Heute vorziehen</button>`;r.querySelector("button").onclick=()=>{state.todayExtras.push({id:`extra|${dayKey()}|${uid()}`,date:dayKey(),text:x.text,room:x.room,area:x.area,description:x.description,source:"extra"});save();render();showEnergy()};box.appendChild(r)})}

function openEditor(x=null){const edit=!!x,old=x||{},rooms=[...new Set([...Object.keys(SEED_ROOMS),...state.custom.map(c=>c.room).filter(Boolean)])].sort(),overlay=document.createElement("div");overlay.className="catalogEditorOverlay";overlay.id="editor";overlay.innerHTML=`<div class="catalogEditorSheet"><div class="sheetTop"><div><div class="small">${edit?"Aufgabe bearbeiten":"Neue Aufgabe"}</div><h2>${edit?"✏️ Aufgabe ändern":"＋ Aufgabe hinzufügen"}</h2></div><button class="close" id="x">×</button></div><label class="editorLabel">Aufgabe<input id="t" value="${esc(old.text||"")}"></label><label class="editorLabel">Raum<input id="r" list="rooms" value="${esc(old.room||"")}"><datalist id="rooms">${rooms.map(r=>`<option value="${esc(r)}">`).join("")}</datalist></label><label class="editorLabel">Bereich / Etage<input id="a" value="${esc(old.area||"")}"></label><label class="editorLabel">Genauer Ort<input id="p" value="${esc(old.place||"")}"></label><label class="editorLabel">Beschreibung / genaue Durchführung<textarea id="d">${esc(old.description||"")}</textarea></label><div class="editorTwo"><label class="editorLabel">Erster Fälligkeitstermin<input id="s" type="date" value="${esc(old.start||nextDue(old))}"></label><label class="editorLabel">Periode (Tage)<input id="i" type="number" min="1" value="${old.interval||catalogInterval(old)||60}"></label></div><div class="editorHint">Dieser Termin ist die verbindliche Quelle. Kalender, Heute und Katalog berechnen daraus exakt dieselben Fälligkeiten.</div><div class="editorActions"><button class="btn" id="cancel">Abbrechen</button><button class="btn primary" id="saveTask">${edit?"Änderungen speichern":"Aufgabe speichern"}</button></div>${edit?`<button class="deleteBtn" id="del">🗑️ Aufgabe aus dem Katalog löschen</button>`:""}</div>`;document.body.appendChild(overlay);const close=()=>overlay.remove();overlay.querySelector("#x").onclick=close;overlay.querySelector("#cancel").onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};overlay.querySelector("#saveTask").onclick=()=>{const text=overlay.querySelector("#t").value.trim(),room=overlay.querySelector("#r").value.trim(),area=overlay.querySelector("#a").value.trim(),place=overlay.querySelector("#p").value.trim(),description=overlay.querySelector("#d").value.trim(),start=overlay.querySelector("#s").value,interval=Math.max(1,Number(overlay.querySelector("#i").value)||60);if(!text||!room||!area||!start)return toast("Bitte Aufgabe, Raum, Bereich und Termin ausfüllen ❤️");if(edit){state.catalogEdits[old.key]={text,room,area,place,description,start,interval};if(old.source==="custom"){const c=state.custom.find(c=>(c.key||`custom|${c.id}`)===old.key);if(c)Object.assign(c,{text,room,area,place,description,start,interval})}}else{const id=`custom|${uid()}`;state.custom.push({id,key:id,text,room,area,place,description,start,interval})}save();refreshCatalog();close();render();toast(edit?"Aufgabe geändert ❤️":"Neue Aufgabe hinzugefügt ❤️")};if(edit)overlay.querySelector("#del").onclick=()=>{if(!confirm(`„${old.text}“ wirklich löschen?`))return;state.catalogDeleted[old.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==old.key);save();refreshCatalog();close();render();toast("Aufgabe gelöscht")}}
function renderCatalog(){const main=document.getElementById("main");main.innerHTML=`<div class="card"><div class="topline"><div><h2 style="margin:0">📚 Aufgabenkatalog</h2><div class="small">Hier ist die einzige Stelle zum Hinzufügen, Bearbeiten und Löschen.</div></div><button class="btn primary" id="new">＋ Aufgabe hinzufügen</button></div><input class="search" id="q" placeholder="Aufgabe, Raum, Bereich, Ort suchen …" style="margin-top:14px"><div id="res"></div></div>`;const q=main.querySelector("#q"),res=main.querySelector("#res");main.querySelector("#new").onclick=()=>openEditor();const draw=()=>{const term=q.value.trim().toLowerCase(),arr=CATALOG.filter(x=>!term||[x.text,x.room,x.area,x.place,x.description].join(" ").toLowerCase().includes(term));res.innerHTML=`<div class="small" style="padding:10px 4px">${arr.length} Aufgaben</div>`;arr.forEach(x=>{const r=document.createElement("div");r.className="result";r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · ${esc(x.area)}${x.place?" · "+esc(x.place):""}</div><div class="meta nextDue">Nächster Termin: <b>${esc(nextDueLabel(x))}</b></div></div>${x.editable?`<button class="iconBtn edit">✏️</button><button class="iconBtn remove">🗑️</button>`:""}<button class="iconBtn info">ⓘ</button>`;if(x.editable){r.querySelector(".edit").onclick=()=>openEditor(x);r.querySelector(".remove").onclick=()=>{if(confirm(`„${x.text}“ wirklich löschen?`)){state.catalogDeleted[x.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==x.key);save();refreshCatalog();renderCatalog();toast("Aufgabe gelöscht")}}}r.querySelector(".info").onclick=()=>openDetail(x);res.appendChild(r)})};q.oninput=draw;draw()}

function renderWeek(){const main=document.getElementById("main"),base=addDays(today,-((today.getDay()||7)-1));main.innerHTML=`<div class="card"><h2 style="margin-top:0">Diese Woche</h2><p class="small">Wochenanker sind Themen, keine Pflicht, jeden Raum komplett zu schaffen.</p><div class="weekgrid" id="wg"></div></div>`;const wg=main.querySelector("#wg");for(let i=0;i<7;i++){const d=addDays(base,i),tasks=scheduledForDate(d),el=document.createElement("div");el.className="daycard"+(sameDay(d,today)?" today":"")+(d.getDay()===0?" free":"");el.innerHTML=`<div class="dayname">${new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit"}).format(d)}</div><div class="daytheme">${esc(themeFor(d))}</div><div class="small" style="margin-top:8px">${tasks.length} sinnvoll eingeplante Aufgaben</div>`;wg.appendChild(el)}}
function renderCalendar(){const main=document.getElementById("main"),year=state.calendarYear||today.getFullYear(),months=["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];main.innerHTML=`<div class="card"><div class="yearIntro"><div><div class="small">Jahresvorschau</div><div class="yearTitle">📅 ${year}</div></div><div class="yearNav"><button id="prev">‹</button><button id="cur">Dieses Jahr</button><button id="next">›</button></div></div><div class="calendarLegend"><span>🟢 erledigt</span><span>☀️ Sonntag frei</span><span>Die Zahl = sinnvoll eingeplante Aufgaben</span></div><div class="monthGrid" id="mg"></div><div id="detailDay"></div></div>`;const mg=main.querySelector("#mg");for(let m=0;m<12;m++){const card=document.createElement("div");card.className="monthCard";card.innerHTML=`<div class="monthName">${months[m]}</div><div class="weekdays">${["Mo","Di","Mi","Do","Fr","Sa","So"].map(x=>`<span>${x}</span>`).join("")}</div><div class="monthDays"></div>`;const grid=card.querySelector(".monthDays"),first=new Date(year,m,1,12),offset=(first.getDay()+6)%7;for(let z=0;z<offset;z++)grid.appendChild(document.createElement("span"));const count=new Date(year,m+1,0).getDate();for(let n=1;n<=count;n++){const d=new Date(year,m,n,12),tasks=calendarTasksForDate(d),el=document.createElement("button");el.className="yearDay"+(d.getDay()===0?" free":"")+(sameDay(d,today)?" today":"")+(state.completedDays[dayKey(d)]?" completed":"");el.innerHTML=`<span class="dayNum">${n}</span>${tasks.length?`<span class="dayMark">${tasks.length}</span>`:""}`;el.onclick=()=>showCalendarDay(d,tasks);grid.appendChild(el)}mg.appendChild(card)}main.querySelector("#prev").onclick=()=>{state.calendarYear=year-1;save();renderCalendar()};main.querySelector("#next").onclick=()=>{state.calendarYear=year+1;save();renderCalendar()};main.querySelector("#cur").onclick=()=>{state.calendarYear=today.getFullYear();save();renderCalendar()}}
function showCalendarDay(d,tasks){const box=document.getElementById("detailDay"),by={};tasks.forEach(x=>(by[x.room]??=[]).push(x));box.innerHTML=`<div class="yearDetail"><h3>${esc(dateLabel(d))}</h3><div class="small">${esc(themeFor(d))}</div>${tasks.length?Object.entries(by).map(([r,arr])=>`<div class="detailTasks"><b>${esc(r)} · ${arr.length} geplante Aufgaben</b>${arr.map(x=>`<div class="detailTask">• ${esc(x.text)}<br><span class="small">Geplant am: ${esc(d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}))}</span></div>`).join("")}</div>`).join(""):`<div class="empty">Keine fest eingeplanten Aufgaben.</div>`}</div>`;box.scrollIntoView({behavior:"smooth",block:"nearest"})}

function render(){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===selectedTab));if(selectedTab==="today")renderToday();else if(selectedTab==="week")renderWeek();else if(selectedTab==="calendar")renderCalendar();else renderCatalog()}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{selectedTab=b.dataset.tab;render()});document.getElementById("closeDetail").onclick=()=>document.getElementById("detailOverlay").classList.remove("open");document.getElementById("detailOverlay").onclick=e=>{if(e.target.id==="detailOverlay")e.currentTarget.classList.remove("open")};
render();
