/* Unser Zuhause – V157 · korrigierte Fälligkeit & Planung */
const STORAGE="unser-zuhause-v168";
const LEGACY_STORAGE="unser-zuhause-v165";
const LEGACY_STORAGE_OLD="unser-zuhause-v148";
const LEGACY_STORAGE_OLD2="unser-zuhause-v139";
const LEGACY_STORAGE_2="unser-zuhause-v109";
const DAILY=[
 ["☀️ Morgenroutine",["Bett machen","Schlafzimmer kurz lüften","Kleidung wegräumen","Schmutzwäsche in den Wäschekorb","Vorhänge/Raffstores öffnen","Geschirrspüler ausräumen","Frühstücksgeschirr einräumen","Küchenarbeitsfläche abwischen","Esstisch abwischen","Hochstuhl/Essplatz sauber machen","Schuhe, Jacken & Taschen kurz ordnen"]],
 ["🍽️ Nach Mahlzeiten",["Geschirr in den Geschirrspüler","Tisch abwischen","Hochstuhl/Essplatz sauber machen","Heruntergefallenes Essen vom Boden entfernen","Arbeitsfläche bei Bedarf abwischen"]],
 ["🌙 Abend · max. 10 Minuten",["Geschirrspüler einräumen & einschalten","Küchenflächen kurz abwischen","Spüle & Herd kurz sauber machen","Esstisch + Hochstuhl/Essplatz","Müll kontrollieren","Wohnzimmer grob zurücksetzen","Garderobe kurz ordnen","Kleidung wegräumen","Vorhänge/Raffstores schließen"]],
 ["🔎 Tagescheck",["Restmüll kontrollieren","Biomüll kontrollieren","Wäsche nur bei Bedarf starten","Kühlschrank nur bei Bedarf prüfen","Toiletten nur bei Bedarf prüfen","Küchenboden bei Essensresten reinigen","Sichtbare Bodenflecken beseitigen"]]
];
const ROTATIONS=[
 {text:"Türklinken reinigen",interval:7,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"Türblätter gründlich reinigen",interval:75,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"Sockelleisten reinigen",interval:42,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"Decken-/Wandecken auf Spinnweben prüfen",interval:30,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"Lichtschalter außen reinigen",interval:30,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"Steckdosen außen reinigen",interval:75,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"🏛️ Stuck vorsichtig trocken entstauben",interval:120,rooms:["Wohnzimmer","Flur","Stiegenhaus"],area:"Raum"},
 {text:"Vorhangstangen / Schienen reinigen",interval:180,rooms:["Wohnzimmer","Essbereich","Schlafzimmer","Kinderzimmer 1","Kinderzimmer 2","Ankleidezimmer"],area:"Raum"},
 {text:"Erreichbare Lampen reinigen",interval:120,rooms:["Wohnzimmer","Essbereich","Küche","Garderobe","Eingangsbereich","Flur","Büro","Abstellraum","Speis","Gäste-WC","Kinderbad","Bad","Eltern-WC","Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Flur OG","Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG","Saunaraum","Stiegenhaus"],area:"Raum"},
 {text:"🧊 Kühlschrank prüfen und bei Bedarf reinigen",interval:30,rooms:["Küche"],area:"EG"},
 {text:"🔥 Backofen gründlich reinigen",interval:75,rooms:["Küche"],area:"EG"},
 {text:"🍽️ Geschirrspüler: Filter, Dichtung & Pflegeprogramm nach Hersteller",interval:30,rooms:["Küche"],area:"EG"},
 {text:"🧺 Waschmaschine: Waschmittelschublade & Dichtung reinigen",interval:30,rooms:["Waschküche"],area:"Keller"},
 {text:"🧖 Sauna reinigen / pflegen",interval:30,rooms:["Saunaraum"],area:"OG"},
 {text:"🛏️ Matratzen wenden/pflegen nach Herstellerangabe",interval:180,rooms:["Schlafzimmer","Kinderzimmer 1","Kinderzimmer 2"],area:"OG"},
 {text:"🧼 Fugen & Silikon kontrollieren / materialgerecht reinigen",interval:90,rooms:["Gäste-WC","Kinderbad","Bad","Eltern-WC"],area:"Raum"},
 {text:"🔥 Kamin: erkaltete Asche entfernen",interval:30,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kamin: Feuerraum auskehren",interval:60,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kaminrost reinigen",interval:60,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kaminbesteck abwischen",interval:30,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kaminholz schlichten",interval:14,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Holzablage reinigen",interval:30,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Bereich direkt vor Kamin gründlich absaugen",interval:14,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Ruß-/Aschespuren entfernen",interval:30,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kaminverkleidung materialgerecht reinigen",interval:90,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Kaminglas reinigen, falls vorhanden",interval:90,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🔥 Fachgerechte Kamin-/Schornsteinkontrolle und Wartung nach Vorgabe",interval:365,rooms:["Wohnzimmer"],area:"EG"},
 {text:"🧺 Bettwäsche wechseln",interval:14,rooms:["Schlafzimmer","Kinderzimmer 1","Kinderzimmer 2"],area:"OG"},
 {text:"🧺 Handtücher wechseln",interval:14,rooms:["Gäste-WC","Kinderbad","Bad","Eltern-WC"],area:"Raum"},
 {text:"🧺 Decken nach Pflegeetikett reinigen",interval:180,rooms:["Wohnzimmer","Schlafzimmer","Kinderzimmer 1","Kinderzimmer 2"],area:"Raum"},
 {text:"🧺 Teppiche nach Pflegehinweisen reinigen",interval:180,rooms:["Wohnzimmer","Essbereich","Kinderzimmer 1","Kinderzimmer 2"],area:"Raum"},
 {text:"🧺 Vorhänge nach Pflegeetikett reinigen",interval:180,rooms:["Wohnzimmer","Essbereich","Schlafzimmer","Kinderzimmer 1","Kinderzimmer 2"],area:"Raum"}
];
const catalogSeed=[
['Wohnzimmer','EG',['Polster absaugen','Sofaritze absaugen','Sofakissen ausschütteln','Decken ordentlich zusammenlegen','Fernbedienungen sammeln','Dekoration abstauben','Bilderrahmen abstauben','Fensterbank abwischen','Möbelfüße sichtbar reinigen','Teppich gründlich absaugen','Teppichränder kontrollieren','Vorhänge auf Staub prüfen','Kaminbereich reinigen']],
['Essbereich','EG',['Esstischoberseite reinigen','Tischkanten abwischen','Tischbeine abwischen','Stuhlsitze reinigen','Stuhllehnen abwischen','Krümel aus Tischritzen entfernen','Sideboard abstauben','Sideboardfronten abwischen','Dekoration abstauben','Boden unter dem Tisch gründlich reinigen']],
['Küche','EG',['Arbeitsplatten gründlich reinigen','Herd gründlich reinigen','Kochfeldränder reinigen','Dunstabzug außen reinigen','Dunstabzugfilter nach Herstellerangabe reinigen','Spüle entkalken','Armatur entkalken','Backofeninnenraum reinigen','Backofentür reinigen','Backofenbleche reinigen','Mikrowelle reinigen, falls vorhanden','Kühlschrank Fächer reinigen','Kühlschrank Türdichtungen reinigen','Kühlschrank Gemüsefächer reinigen','Gefrierfach prüfen/abtauen nach Herstellerangabe','Vorratsschrank auswischen','Schubladen innen auswischen','Mülleimer auswischen','Fronten gründlich abwischen','Sockelleisten reinigen','Boden unter beweglichen Möbeln reinigen']],
['Garderobe','EG',['Jacken nach Saison ordnen','Schuhe paarweise ordnen','Schuhsohlen bei Bedarf reinigen','Schuhschrank außen reinigen','Schuhschrank innen auswischen','Ablageflächen leeren','Taschen ordnen','Schlüsselplatz reinigen','Spiegel gründlich reinigen','Garderobenhaken abwischen','Türklinken reinigen']],
['Eingangsbereich','EG',['Fußmatte ausschütteln/absaugen','Fußmatte nach Hersteller reinigen','Tür innen abwischen','Tür außen bei Bedarf reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Boden gründlich saugen','Boden wischen','Ecken kontrollieren']],
['Flur','EG',['Bilderrahmen abstauben','Lichtschalter außen reinigen','Türklinken reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Ecken absaugen','Boden saugen','Boden wischen']],
['Flur OG','OG',['Bilderrahmen/Dekoration abstauben','Lichtschalter außen reinigen','Türklinken reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Ecken absaugen','Boden saugen','Boden wischen']],
['Flur KG','Keller',['Lichtschalter außen reinigen','Türklinken reinigen','Türrahmen reinigen','Sockelleisten reinigen','Spinnweben entfernen','Ecken absaugen','Boden saugen','Boden wischen']],
['Büro','EG',['Schreibtisch komplett leeren','Schreibtischfläche reinigen','Monitor außen reinigen','Tastatur reinigen','Maus reinigen','Kabel grob ordnen','Papierstapel sortieren','Papierkorb leeren','Regale abstauben','Bücheroberseiten entstauben','Fensterbank reinigen','Boden saugen','Boden wischen']],
['Abstellraum','EG',['Vorräte prüfen','Reinigungsmittelbestand prüfen','Regale abstauben','Regalböden auswischen','Schubladen auswischen','Besen/Staubsaugerbereich reinigen','Mülltrennung ordnen','Boden gründlich saugen','Boden wischen']],
['Speis','EG',['Vorräte nach Kategorien ordnen','Mindesthaltbarkeit prüfen','Angebrochene Packungen prüfen','Regale abstauben','Regalböden auswischen','Schubladen auswischen','Behälter außen reinigen','Boden unter Regalen reinigen','Boden saugen','Boden wischen']],
['Gäste-WC','EG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Toilette innen gründlich reinigen','Toilettenrand reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter innen reinigen','Papierhalter abwischen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Boden saugen','Boden wischen']],
['Kinderbad','OG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Dusche reinigen','Duschrinne kontrollieren','Badewanne reinigen','Toilette reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Silikon kontrollieren','Boden saugen','Boden wischen']],
['Bad','OG',['Waschbecken gründlich reinigen','Armatur entkalken','Spiegel reinigen','Dusche entkalken','Duschglas reinigen','Duschrinne reinigen','Badewanne reinigen','Badewannenarmatur entkalken','Toilette innen gründlich reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Silikon kontrollieren','Boden saugen','Boden wischen']],
['Eltern-WC','OG',['Waschbecken reinigen','Armatur entkalken','Spiegel reinigen','Toilette innen reinigen','Toilettenrand reinigen','Toilette außen reinigen','WC-Bürste reinigen','WC-Bürstenhalter reinigen','Türklinke reinigen','Lichtschalter außen reinigen','Sockelleisten reinigen','Fugen kontrollieren','Boden saugen','Boden wischen']],
['Schlafzimmer','OG',['Bettwäsche wechseln','Matratze absaugen','Matratze nach Hersteller pflegen','Unter Bett saugen','Nachttische komplett reinigen','Lampen außen abstauben','Kopfteil abstauben','Fensterbank reinigen','Spiegel reinigen','Kleidung aussortieren','Boden gründlich saugen','Boden wischen']],
['Ankleidezimmer','OG',['Kleidung nach Saison ordnen','Kleiderbügel vereinheitlichen','Schubladen ordnen','Schubladen auswischen','Regalböden reinigen','Spiegel reinigen','Schrankfronten abwischen','Schrankgriffe reinigen','Boden unter Schränken reinigen','Boden saugen','Boden wischen']],
['Kinderzimmer 1','OG',['Spielzeug grob sortieren','Bücher ordnen','Kleidung ordnen','Schubladen ordnen','Schrankfronten abwischen','Regale abstauben','Fensterbank reinigen','Türklinke reinigen','Boden unter Möbeln saugen','Boden saugen','Boden wischen']],
['Kinderzimmer 2','OG',['Spielzeug grob sortieren','Bücher ordnen','Kleidung ordnen','Schubladen ordnen','Schrankfronten abwischen','Regale abstauben','Fensterbank reinigen','Türklinke reinigen','Boden unter Möbeln saugen','Boden saugen','Boden wischen']],
['Waschküche','Keller',['Waschmaschine außen reinigen','Waschmittelschublade reinigen','Türdichtung reinigen','Waschmaschinenpflegeprogramm nach Hersteller','Trockner außen reinigen','Flusensieb nach Herstellerangabe reinigen','Arbeitsflächen reinigen','Wäschekörbe auswischen','Vorräte an Waschmittel prüfen','Sockelleisten reinigen','Boden saugen','Boden wischen','Bereich hinter/zwischen Geräten nur wenn sicher zugänglich']],
['Musikzimmer','Keller',['Instrumente materialgerecht entstauben','Noten ordnen','Regale abstauben','Oberflächen reinigen','Kabel grob ordnen','Fensterbank reinigen','Sockelleisten reinigen','Boden saugen','Boden wischen']],
['Trainingsraum','Keller',['Trainingsgeräte abwischen','Matten reinigen','Gewichte/Griffe abwischen','Handtücher einsammeln','Ablageflächen ordnen','Spiegel reinigen','Boden saugen','Boden wischen']],
['Technikraum','Keller',['Sichtbaren Staub entfernen','Zugänge freihalten','Boden bei Bedarf reinigen','Keine technischen Komponenten öffnen']],
['Lagerraum','Keller',['Kartons ordnen','Vorräte prüfen','Regale abstauben','Boden saugen','Boden wischen']],
['Saunaraum','OG',['Nach Nutzung lüften','Holzflächen nach Hersteller reinigen','Bänke reinigen','Glasflächen reinigen','Boden saugen','Boden wischen','Saunaofen nur nach Herstellerangabe reinigen']],
['Stiegenhaus','EG/OG',['Stufen saugen','Stufen wischen','Handlauf abwischen','Geländer abstauben','Ecken absaugen','Sockelleisten reinigen','Spinnweben entfernen']],
];
// Keine pauschalen Keller-Aufgaben: Jeder Raum erhält nur konkrete Tätigkeiten.

// Türrahmen/Zargen werden bewusst raumweise geführt – nie als „ganzes Haus“-Aufgabe.
// Dadurch kann der Planer das Pensum pro Raum sinnvoll portionieren.
const DOORFRAME_ROOMS = new Set(catalogSeed.map(r=>r[0]).filter(r =>
  !r.includes("Ganzes Haus") &&
  r !== "Stiegenhaus"
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
 "Speis":["Speis","EG"],"Gäste-WC":["Gäste-WC","EG"],"Kinderbad":["Kinderbad","OG"],"Bad":["Bad","OG"],"Eltern-WC":["Eltern-WC","OG"],
 "Schlafzimmer":["Schlafzimmer","OG"],"Ankleidezimmer":["Ankleidezimmer","OG"],"Kinderzimmer 1":["Kinderzimmer 1","OG"],
 "Kinderzimmer 2":["Kinderzimmer 2","OG"],"Flur OG":["Flur OG","OG"],"Waschküche":["Waschküche","Keller"],"Musikzimmer":["Musikzimmer","Keller"],
 "Trainingsraum":["Trainingsraum","Keller"],"Flur KG":["Flur KG","Keller"],"Technikraum":["Technikraum","Keller"],"Lagerraum":["Lagerraum","Keller"],
 "Saunaraum":["Saunaraum","OG"],"Stiegenhaus":["Stiegenhaus","EG/OG"]
};
const WINDOW_INVENTORY = [
 ["KG","Waschküche",2],["KG","Musikzimmer",2],["KG","Technikraum",2],["KG","Trainingsraum",2],["KG","Flur KG",2],["KG","Stiegenhaus",1],
 ["EG","Garderobe",1],["EG","Büro",3],["EG","Wohnzimmer",1],["EG","Essbereich",2],["EG","Küche",2],["EG","Speis",1],["EG","Abstellraum",1],["EG","Gäste-WC",1],
 ["OG","Kinderzimmer 1",2],["OG","Kinderzimmer 2",3],["OG","Kinderbad",1],["OG","Schlafzimmer",1],["OG","Ankleide",1],["OG","Eltern-WC",1],["OG","Saunaraum",1],["OG","Bad",2]
];
const SEASONAL_SPECIALS = [
 // Herbst 2026 – erste Runde, bewusst klein portioniert
 {key:"fenster-kg-waschkueche-musik",text:"🪟 Fenster KG · Waschküche + Musikzimmer",room:"Waschküche + Musikzimmer",area:"KG",dates:["2026-09-15","2026-09-17","2026-09-19"]},
 {key:"fenster-kg-technik-training",text:"🪟 Fenster KG · Technikraum + Trainingsraum",room:"Technikraum + Trainingsraum",area:"KG",dates:["2026-09-22","2026-09-24","2026-09-26"]},
 {key:"fenster-kg-flur-stiegenhaus",text:"🪟 Fenster KG · Flur + großes Stiegenhausfenster",room:"Flur KG + Stiegenhaus",area:"KG",dates:["2026-09-29","2026-10-01","2026-10-03"]},
 {key:"fenster-eg-garderobe-buero",text:"🪟 Fenster EG · Garderobe + Büro",room:"Garderobe + Büro",area:"EG",dates:["2026-10-06","2026-10-08","2026-10-10"]},
 {key:"fenster-eg-wohnen-essen",text:"🪟 Fenster EG · Wohnzimmer + Essbereich",room:"Wohnzimmer + Essbereich",area:"EG",dates:["2026-10-13","2026-10-15","2026-10-17"]},
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + Gäste-WC",room:"Küche + Speis + Abstellraum + Gäste-WC",area:"EG",dates:["2026-10-20","2026-10-22","2026-10-24"]},
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
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + Gäste-WC",room:"Küche + Speis + Abstellraum + Gäste-WC",area:"EG",dates:["2027-05-11","2027-05-13","2027-05-15"]},
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
 {key:"fenster-eg-kueche-speis-abstell",text:"🪟 Fenster EG · Küche + Speis + Abstellraum + Gäste-WC",room:"Küche + Speis + Abstellraum + Gäste-WC",area:"EG",dates:["2027-10-12","2027-10-14","2027-10-16"]},
 {key:"fenster-og-kinder",text:"🪟 Fenster OG · beide Kinderzimmer",room:"Kinderzimmer 1 + Kinderzimmer 2",area:"OG",dates:["2027-10-19","2027-10-21","2027-10-23"]},
 {key:"fenster-og-schlaf-ankleide",text:"🪟 Fenster OG · Schlafzimmer + Ankleide",room:"Schlafzimmer + Ankleide",area:"OG",dates:["2027-10-26","2027-10-28","2027-10-30"]},
 {key:"fenster-og-baeder-wc-sauna",text:"🪟 Fenster OG · Kinderbad + Eltern-WC + Sauna",room:"Kinderbad + Eltern-WC + Sauna",area:"OG",dates:["2027-11-02","2027-11-04","2027-11-06"]},
 {key:"fenster-og-bad",text:"🪟 Fenster OG · großes Bad",room:"Bad",area:"OG",dates:["2027-11-09","2027-11-11","2027-11-13"]}
];

const BASEMENT=["Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG"];
const WEEKDAYS={Wohnzimmer:1,Essbereich:1,Küche:1,"Gäste-WC":2,Kinderbad:2,Bad:2,"Eltern-WC":2,Schlafzimmer:3,Ankleidezimmer:3,"Kinderzimmer 1":3,"Kinderzimmer 2":3,"Flur OG":3,Saunaraum:3,Stiegenhaus:3,Eingangsbereich:4,Garderobe:4,Flur:4,Büro:4,Abstellraum:4,Speis:4};
const DAY_THEME={1:"EG · Wohnen, Essen & Küche",2:"Bäder & WCs",3:"OG · Schlafen, Kinder & Sauna",4:"EG · Nebenräume",5:"Keller · nur ein Raum",6:"Wäsche + maximal eine Sonderaufgabe",0:"Haushaltsfrei ❤️"};

function uid(){return Math.random().toString(36).slice(2)+Date.now().toString(36)}
function pad(n){return String(n).padStart(2,"0")}
function iso(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function fromKey(k){return new Date(k+"T12:00:00")}
function dayKey(d=new Date()){return iso(d)}
function sameDay(a,b){return iso(a)===iso(b)}
function formatDateKey(k){const d=fromKey(k);return d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"})}
function addDays(d,n){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()+n);return x}
function nextDow(d,dow){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()+((dow-x.getDay()+7)%7));return x}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const DATE_LABEL_CACHE=new Map();
function dateLabel(d=today){const k=iso(d);if(DATE_LABEL_CACHE.has(k))return DATE_LABEL_CACHE.get(k);const v=new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}).format(d);DATE_LABEL_CACHE.set(k,v);return v}
function toast(t){const el=document.getElementById("toast");if(!el)return;el.textContent=t;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),1800)}

function isInvalidLegacyTask(t){
 const text=String(t?.text||t?.name||t?.title||"").toLowerCase();
 const room=String(t?.room||"").toLowerCase();
 const area=String(t?.area||"").toLowerCase();
 const combined=(text+" "+room+" "+area).replace(/\s+/g," ");
 return text.includes("türrahmen") && /(ganzes haus|gesamtes haus)/.test(combined);
}
function purgeWholeHouseDoorFrameData(s){
 if(!s) return;
 if(Array.isArray(s.custom)) s.custom=s.custom.filter(c=>!isInvalidLegacyTask(c));
 if(s.catalogEdits&&typeof s.catalogEdits==="object"){
   for(const [k,v] of Object.entries(s.catalogEdits)){
     if(isInvalidLegacyTask(v)||/türrahmen.*(ganzes haus|gesamtes haus)|(ganzes haus|gesamtes haus).*türrahmen/i.test(String(k)+" "+JSON.stringify(v))){
       s.catalogDeleted[k]=true; delete s.catalogEdits[k];
     }
   }
 }
 if(Array.isArray(s.todayExtras)) s.todayExtras=s.todayExtras.filter(e=>!isInvalidLegacyTask(e));
 if(s.postponed&&typeof s.postponed==="object"){
   for(const [k,v] of Object.entries(s.postponed)) if(isInvalidLegacyTask(v)){delete s.postponed[k]}
 }
}
function defaultState(){return {done:{},lastDone:{},completionHistory:{},dailyDone:{},postponed:{},custom:[],catalogEdits:{},catalogDates:{},manualDates:{},catalogDeleted:{},todayExtras:[],completedDays:{},dayCelebrations:{},plannedOverrides:{},completedOpen:false,postponedOpen:false,chaos:false,sundayOptional:{},energyOffset:0,energySkipDay:"",energySeen:[],calendarYear:new Date().getFullYear(),todayPlanLock:{},todayPlanSnapshot:{}}}
function migrateWCRoomNames(s){
 if(!s)return;
 const renameKey=k=>String(k||"").replace(/\|WC(?=\||$)/g,"|Eltern-WC");
 const maps=["done","lastDone","postponed","catalogEdits","catalogDates","manualDates","catalogDeleted","plannedOverrides"];
 for(const name of maps){
   if(!s[name]||typeof s[name]!=="object")continue;
   const out={};
   for(const [k,v] of Object.entries(s[name])){
     const nk=renameKey(k);
     let nv=v;
     if(v&&typeof v==="object"&&!Array.isArray(v)){nv={...v};if(nv.room==="WC")nv.room="Eltern-WC";if(nv.text)nv.text=String(nv.text).replace(/\bWC\b/g,"Eltern-WC");}
     out[nk]=nv;
   }
   s[name]=out;
 }
 if(Array.isArray(s.custom))s.custom=s.custom.map(c=>c&&c.room==="WC"?{...c,room:"Eltern-WC"}:c);
 if(Array.isArray(s.todayExtras))s.todayExtras=s.todayExtras.map(c=>c&&c.room==="WC"?{...c,room:"Eltern-WC"}:c);
 if(s.roomFocus&&typeof s.roomFocus==="object")for(const [d,r] of Object.entries(s.roomFocus))if(r==="WC")s.roomFocus[d]="Eltern-WC";
 for(const name of ["todayPlanLock","todayPlanSnapshot"]){
   if(!s[name]||typeof s[name]!=="object")continue;
   for(const [d,val] of Object.entries(s[name])){
     if(Array.isArray(val))s[name][d]=val.map(renameKey);
     else if(val&&typeof val==="object")s[name][d]=val;
   }
 }
}
function migrateTaskCatalogQuality(s){
  if(s.catalogEdits["seed|Wohnzimmer|Teppichränder kontrollieren"]) s.catalogEdits["seed|Wohnzimmer|Teppichränder kontrollieren"].text="Teppichr\u00e4nder gr\u00fcndlich absaugen";
  if(s.catalogEdits["seed|Wohnzimmer|Vorhänge auf Staub prüfen"]) s.catalogEdits["seed|Wohnzimmer|Vorhänge auf Staub prüfen"].text="Vorh\u00e4nge absaugen/entstauben";
  if(s.catalogEdits["seed|Garderobe|Schuhsohlen bei Bedarf reinigen"]) s.catalogEdits["seed|Garderobe|Schuhsohlen bei Bedarf reinigen"].text="Schuhe au\u00dfen reinigen";
  if(s.catalogEdits["seed|Eingangsbereich|Tür außen bei Bedarf reinigen"]) s.catalogEdits["seed|Eingangsbereich|Tür außen bei Bedarf reinigen"].text="Haust\u00fcr au\u00dfen reinigen";
  if(s.catalogEdits["seed|Eingangsbereich|Ecken kontrollieren"]) s.catalogEdits["seed|Eingangsbereich|Ecken kontrollieren"].text="Ecken absaugen";
  if(s.catalogEdits["seed|Musikzimmer|Oberflächen reinigen"]) s.catalogEdits["seed|Musikzimmer|Oberflächen reinigen"].text="M\u00f6bel- und Ablagefl\u00e4chen reinigen";
  if(s.catalogEdits["seed|Technikraum|Sichtbaren Staub entfernen"]) s.catalogEdits["seed|Technikraum|Sichtbaren Staub entfernen"].text="Technikraum-Oberfl\u00e4chen vorsichtig entstauben";
  if(s.catalogEdits["seed|Technikraum|Boden bei Bedarf reinigen"]) s.catalogEdits["seed|Technikraum|Boden bei Bedarf reinigen"].text="Boden reinigen";
  const __removeLegacy=["Technikraum|Keine technischen Komponenten öffnen", "Waschküche|Sichtbare Ablagerungen entfernen", "Musikzimmer|Sichtbare Ablagerungen entfernen", "Trainingsraum|Sichtbare Ablagerungen entfernen", "Technikraum|Sichtbare Ablagerungen entfernen", "Lagerraum|Sichtbare Ablagerungen entfernen", "Flur KG|Sichtbare Ablagerungen entfernen", "Waschküche|Ecken kontrollieren", "Musikzimmer|Ecken kontrollieren", "Trainingsraum|Ecken kontrollieren", "Technikraum|Ecken kontrollieren", "Lagerraum|Ecken kontrollieren", "Flur KG|Ecken kontrollieren", "Waschküche|Spinnweben entfernen", "Musikzimmer|Spinnweben entfernen", "Trainingsraum|Spinnweben entfernen", "Technikraum|Spinnweben entfernen", "Lagerraum|Spinnweben entfernen"];
  for(const __t of __removeLegacy){const __key="seed|"+__t;s.catalogDeleted[__key]=true;if(s.catalogEdits[__key])delete s.catalogEdits[__key];}
}

function loadState(){
 let raw=null;
 try{raw=JSON.parse(localStorage.getItem(STORAGE)||"null")}catch{}
 if(!raw){try{raw=JSON.parse(localStorage.getItem(LEGACY_STORAGE)||"null")}catch{}}
 if(!raw){try{raw=JSON.parse(localStorage.getItem(LEGACY_STORAGE_OLD)||"null")}catch{}}
 if(!raw){try{raw=JSON.parse(localStorage.getItem(LEGACY_STORAGE_OLD2)||"null")}catch{}}
 if(!raw){try{raw=JSON.parse(localStorage.getItem(LEGACY_STORAGE_2)||"null")}catch{}}
 const s=Object.assign(defaultState(),raw||{});
 migrateWCRoomNames(s);
 s.done=s.done||{};s.lastDone=s.lastDone||{};s.completionHistory=s.completionHistory&&typeof s.completionHistory==='object'?s.completionHistory:{};s.dailyDone=s.dailyDone&&typeof s.dailyDone==="object"?s.dailyDone:{};s.postponed=s.postponed||{};
 s.custom=Array.isArray(s.custom)?s.custom.filter(c=>!isInvalidLegacyTask(c)):[];
 s.catalogEdits=s.catalogEdits||{};s.catalogDates=s.catalogDates||{};s.manualDates=s.manualDates||{};s.catalogDeleted=s.catalogDeleted||{};
 purgeWholeHouseDoorFrameData(s);
  migrateTaskCatalogQuality(s);
 s.todayExtras=Array.isArray(s.todayExtras)?s.todayExtras:[];s.completedDays=s.completedDays||{};s.dayCelebrations=s.dayCelebrations&&typeof s.dayCelebrations==="object"?s.dayCelebrations:{};s.completedOpen=false;s.postponedOpen=false;s.todayPlanLock=s.todayPlanLock&&typeof s.todayPlanLock==="object"?s.todayPlanLock:{};s.todayPlanSnapshot=s.todayPlanSnapshot&&typeof s.todayPlanSnapshot==="object"?s.todayPlanSnapshot:{};s.energyOffset=Number.isFinite(Number(s.energyOffset))?Number(s.energyOffset):0;s.energySkipDay=s.energySkipDay||"";s.energySeen=Array.isArray(s.energySeen)?s.energySeen:[];s.roomFocus=s.roomFocus&&typeof s.roomFocus==="object"?s.roomFocus:{};
 // Purge legacy global door-frame edits/custom tasks once, so old data cannot resurrect them.
 for(const [k,v] of Object.entries(s.catalogEdits)){if(isInvalidLegacyTask(v)){s.catalogDeleted[k]=true;delete s.catalogEdits[k]}}
 // Alte generische „Ganzes Haus“-/„Keller allgemein“-Aufgaben dürfen nicht wieder im Katalog auftauchen.
 for(const [k,v] of Object.entries(s.catalogEdits)){const blob=(String(k)+" "+JSON.stringify(v)).toLowerCase();if(/ganzes haus|gesamtes haus|keller allgemein/.test(blob)){s.catalogDeleted[k]=true;delete s.catalogEdits[k]}}
 if(Array.isArray(s.custom)) s.custom=s.custom.filter(c=>{const blob=(String(c?.room||"")+" "+String(c?.text||"")).toLowerCase();return !/ganzes haus|gesamtes haus|keller allgemein/.test(blob)})
 try{localStorage.setItem(STORAGE,JSON.stringify(s))}catch{}
 return s
}
let state=loadState();
// V168 repair: earlier builds could leave daily routines marked as completed
// for the current day even when the user had not checked them. Clear only the
// current-day daily ledger once; historical days remain untouched.
(function repairDailyLedger(){
  const k=dayKey();
  if(!state.__dailyLedgerRepairV168){
    if(state.dailyDone && state.dailyDone[k]) delete state.dailyDone[k];
    state.__dailyLedgerRepairV168=true;
    try{localStorage.setItem(STORAGE,JSON.stringify(state))}catch{}
  }
})();
let selectedTab="today";
let catalogSearchTerm="";
let today=new Date();today.setHours(12,0,0,0);
let CATALOG=[];
let calendarCache={year:null,days:new Map()};
let plannerCache={key:null,days:new Map(),next:new Map()};
function invalidatePlanner(){plannerCache={key:null,days:new Map(),next:new Map()}}
// UI-only saves should not throw away the expensive planner cache. The planner
// itself is keyed by the state that actually affects scheduling, so it will
// automatically rebuild when a scheduling input changes.
function invalidatePlans(){calendarCache={year:null,days:new Map()};invalidatePlanner()}
function save(){state.__planRevision=(state.__planRevision||0)+1;localStorage.setItem(STORAGE,JSON.stringify(state));invalidatePlans()}
function taskId(x){return x.key||x.id||((x.source||"task")+"|"+x.room+"|"+x.text)}
function doneKey(x){return "done|"+taskId(x)}
function lastKey(x){return "last|"+taskId(x)}
function isDone(x,ref=today){
 // Array.filter passes index/array as extra arguments; only a real Date may
 // override the reference day. This keeps Today rendering stable.
 if(!(ref instanceof Date))ref=today;
 // Daily routines have their own occurrence ledger. A routine is completed
 // ONLY when today's exact daily occurrence was explicitly checked off.
 // Legacy global done/lastDone flags are deliberately ignored here.
 if(isDailyTask(x)){
   const k=dayKey(ref),id=taskId(x);
   return !!(state.dailyDone?.[k]?.[id]);
 }
 const l=lastDone(x);
 if(l)return l===dayKey(ref);
 return !!state.done[doneKey(x)]||!!state.done[x.id]||!!state.done[x.canonical];
}
function lastDone(x){return state.lastDone[lastKey(x)]||state.lastDone[x.key]||state.lastDone[x.id]||state.lastDone[x.canonical]||""}
function canonicalTaskFor(x){
 const sourceKey=x?.sourceKey||x?.canonical;
 if(!sourceKey)return null;
 return CATALOG.find(y=>taskId(y)===sourceKey||y.key===sourceKey||y.id===sourceKey)||null;
}
function recordCompletion(x,dateKey){
 const id=taskId(x); if(!id)return;
 state.completionHistory=state.completionHistory&&typeof state.completionHistory==='object'?state.completionHistory:{};
 const arr=Array.isArray(state.completionHistory[id])?state.completionHistory[id].slice():[];
 if(!arr.includes(dateKey)) arr.push(dateKey);
 arr.sort((a,b)=>String(b).localeCompare(String(a)));
 state.completionHistory[id]=arr.slice(0,20);
}
function completionHistoryFor(x){
 const id=taskId(x), out=[];
 const add=v=>{if(/^\d{4}-\d{2}-\d{2}$/.test(String(v))&&!out.includes(String(v)))out.push(String(v))};
 const saved=state.completionHistory?.[id];
 if(Array.isArray(saved))saved.forEach(add);
 // Backfill the current known completion for older data.
 add(lastDone(x));
 // Daily routines have date-scoped completion records.
 if(isDailyTask(x)) for(const [d,items] of Object.entries(state.dailyDone||{})) if(items&&items[id])add(d);
 out.sort((a,b)=>b.localeCompare(a));
 return out.slice(0,2);
}
function markDone(x){
 const k=dayKey();
 // Daily routines are independent calendar-day occurrences. A routine is
 // completed only for the exact day on which it was checked off.
 if(isDailyTask(x)){
   state.dailyDone=state.dailyDone&&typeof state.dailyDone==='object'?state.dailyDone:{};
   state.dailyDone[k]=state.dailyDone[k]||{};
   state.dailyDone[k][taskId(x)]=true;
   recordCompletion(x,k);
   return;
 }
 const base=x.source==="extra"?canonicalTaskFor(x):null;
 const target=base||x;
 state.done[doneKey(target)]=true;
 state.lastDone[lastKey(target)]=k;
 recordCompletion(target,k);
 if(target!==x){state.done[doneKey(x)]=true;state.lastDone[lastKey(x)]=k;recordCompletion(x,k);}
 delete state.postponed[taskId(target)];
 if(target!==x)delete state.postponed[taskId(x)];
}

function unmarkDone(x){
 const k=dayKey(),id=taskId(x);
 if(isDailyTask(x)){
   if(state.dailyDone?.[k])delete state.dailyDone[k][id];
   if(Array.isArray(state.completionHistory?.[id])) state.completionHistory[id]=state.completionHistory[id].filter(d=>d!==k);
   return;
 }
 delete state.done[doneKey(x)];
 if(Array.isArray(state.completionHistory?.[id])) state.completionHistory[id]=state.completionHistory[id].filter(d=>d!==k);
}

function postponedEntry(x){
 const exact=state.postponed?.[taskId(x)];
 if(exact)return exact;
 const key=String(x.key||"");
 const sourceKey=String(x.sourceKey||"");
 for(const p of Object.values(state.postponed||{})){
   if(!p||!p.postponedUntil)continue;
   if(key && String(p.key||"")===key)return p;
   if(sourceKey && String(p.sourceKey||"")===sourceKey)return p;
   if(String(p.text||"")===String(x.text||"") && String(p.room||"")===String(x.room||"") && (!x.area || !p.area || String(p.area)===String(x.area)))return p;
 }
 return null;
}
function isPostponed(x){const p=postponedEntry(x);return !!(p&&p.postponedUntil&&p.postponedUntil>dayKey())}
function postponedTodayEntries(){
 const k=dayKey();
 const out=[];
 const seen=new Set();
 for(const [id,p] of Object.entries(state.postponed||{})){
   if(!p||p.actionDate!==k||!p.postponedUntil||p.postponedUntil<=k)continue;
   const tid=taskId(p)||id;
   if(seen.has(tid))continue;
   seen.add(tid);
   out.push({...p,key:p.key||tid,source:p.source||"postponed",_postponedId:id});
 }
 return out.sort((a,b)=>String(a.postponedUntil).localeCompare(String(b.postponedUntil))||String(a.text||"").localeCompare(String(b.text||""),"de"));
}
function postponeTask(x){
 const day=dayKey();
 const current=plannedToday().filter(y=>!isDone(y)&&!isPostponed(y)&&y.source!=="daily"&&y.source!=="extra");
 state.todayPlanLock=state.todayPlanLock||{};
 state.todayPlanLock[day]=[...new Set([...(state.todayPlanLock[day]||[]),...current.map(taskId)])].filter(id=>id!==taskId(x));
 // "Später" verschiebt ausschließlich die aktuelle Planung. Die Fälligkeit
 // bleibt unverändert und wird erst nach echtem "Erledigt" neu berechnet.
 const due=nextDue(x,today);
 // "Später" moves the CURRENT planned occurrence, not the recurrence/fällig date.
 // Read the exact date currently shown by the planner before changing state.
 const currentPlan=plannerCache.key===plannerKey()?plannerCache.next.get(taskId(x)):buildIntelligentPlan().next.get(taskId(x));
 const currentBase=currentPlan instanceof Date && currentPlan>=today?currentPlan:due;
 // Move at least one day into the future, but never more than 30 days away from
 // the actual due date. This user choice becomes authoritative until completion.
 let planned=addDays(currentBase,1);
 for(let i=0;i<=30;i++){
   const candidate=addDays(currentBase,1+i);
   if(candidate>=today && Math.abs(Math.round((candidate-due)/86400000))<=30 &&
      (candidate.getDay()!==0 || state.sundayOptional[dayKey(candidate)])){planned=candidate;break;}
 }
 const until=dayKey(planned);const id=taskId(x);
 delete state.done[doneKey(x)];
 state.postponed[id]={...x,key:x.key||id,from:day,postponedUntil:until,actionDate:day,planningOnly:true};
 save();render();toast(`Für später geplant · ${formatDateKey(until)} ❤️`)
}
function restorePostponed(id){delete state.postponed[id];save();render()}
function purgePostponed(){const k=dayKey();for(const [id,v] of Object.entries(state.postponed||{}))if(v.from&&v.from<k&&!v.postponedUntil)delete state.postponed[id]}
function syncCompletedDay(d=today){
 const k=dayKey(d), tasks=plannedTodayForDate(d);
 if(tasks.length && tasks.every(isDone)) state.completedDays[k]=true; else delete state.completedDays[k];
}
function plannedTodayForDate(d){
 const old=today;today=new Date(d);today.setHours(12,0,0,0);const result=plannedToday();today=old;return result;
}
function celebrateCompletedDay(){
  const k=dayKey(),tasks=plannedToday(),count=tasks.length;
  if(!count || !tasks.every(isDone) || state.dayCelebrations?.[k]) return;
  state.dayCelebrations=state.dayCelebrations&&typeof state.dayCelebrations==="object"?state.dayCelebrations:{};
  state.dayCelebrations[k]=true;
  const rewards=[
    ["🛋️","Jetzt ist wirklich Feierabend.","Mach es dir gemütlich — dein Zuhause ist für heute versorgt."],
    ["☕","Diese Pause hast du dir verdient.","Jetzt darfst du ganz ohne schlechtes Gewissen genießen."],
    ["🌿","Heute darfst du einfach zufrieden sein.","Du hast deinem Zuhause etwas Gutes getan."],
    ["🍰","Kleine Belohnung, großer Unterschied.","Jetzt ist Zeit für etwas Schönes nur für dich."],
    ["🕯️","Zuhause geschafft.","Licht an, Füße hoch — für heute ist genug getan."],
    ["👑","Haushaltsheldin des Tages.","Dein Reich ist für heute in Ordnung. Der Rest darf bis morgen warten."],
    ["🎬","Haushalt aus. Entspannung an.","Heute hast du dir einen richtig guten Feierabend verdient."],
    ["💐","Ein schöner Abschluss für heute.","Du hast wieder ein kleines Stück Zuhause geschaffen."]
  ];
  const dt=new Date(k+"T12:00:00"),r=rewards[(dt.getDate()+dt.getMonth())%rewards.length];
  const overlay=document.createElement("div");
  overlay.className="rewardOverlay";
  overlay.innerHTML=`<div class="rewardSparkles" aria-hidden="true">✦　✧　✦　✧　✦</div><div class="rewardCard"><div class="rewardIcon">${r[0]}</div><div class="rewardEyebrow">✨ Tagesabschluss</div><h2>Heute ist geschafft!</h2><div class="rewardCount">${count} ${count===1?"Aufgabe":"Aufgaben"} erledigt</div><p><b>${r[1]}</b><br>${r[2]}</p><button class="btn primary" id="rewardClose">🌙 Feierabend genießen</button></div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(()=>overlay.classList.add("open"));
  const close=()=>{overlay.classList.remove("open");setTimeout(()=>overlay.remove(),220)};
  overlay.querySelector("#rewardClose").onclick=close;
  overlay.onclick=e=>{if(e.target===overlay)close()};
  save();
}

function toggleTask(x){
  const wasComplete=plannedToday().length>0 && plannedToday().every(isDone);
  // Daily routines are independent calendar-day occurrences.
  if(isDailyTask(x)){
    const k=dayKey();
    state.dailyDone=state.dailyDone&&typeof state.dailyDone==="object"?state.dailyDone:{};
    state.dailyDone[k]=state.dailyDone[k]&&typeof state.dailyDone[k]==="object"?state.dailyDone[k]:{};
    if(state.dailyDone[k][taskId(x)]) delete state.dailyDone[k][taskId(x)];
    else state.dailyDone[k][taskId(x)]=true;
  }else{
    const base=x.source==="extra"?canonicalTaskFor(x):null;
    const target=base||x;
    if(isDone(x)){
      unmarkDone(target);delete state.lastDone[lastKey(target)];
      if(target!==x){unmarkDone(x);delete state.lastDone[lastKey(x)];}
    }else markDone(x);
  }
  syncCompletedDay(today);
  const nowComplete=plannedToday().length>0 && plannedToday().every(isDone);
  save();render();
  if(!wasComplete && nowComplete) celebrateCompletedDay();
}

function catalogDeleted(key){return !!state.catalogDeleted?.[key]}
function editFor(key){return state.catalogEdits?.[key]||null}
function catalogInterval(x){
 if(Number(x.interval)>0)return Number(x.interval);
 const t=(x.text||"").toLowerCase();
 if(/toilette|\bwc\b|wc-bürste|toilettenrand/.test(t))return 3;
 if(/waschbecken|armatur|spüle|kochfeld|herd|arbeitsplatte|esstisch|hochstuhl|sichtbare.*bodenflecken/.test(t))return 7;
 if(/boden saugen|ecken absaugen|unter .* saugen|küchenboden/.test(t))return 7;
 if(/boden wischen/.test(t))return 10;
 if(/handtücher/.test(t))return 7;
 if(/bettwäsche/.test(t))return 14;
 if(/müll|papierkorb|mülleimer/.test(t))return 7;
 if(/türklink|lichtschalter|steckdosen/.test(t))return 30;
 if(/fensterbank|spinnweb|abstauben|abwischen/.test(t))return 30;
 if(/fugen|silikon|dunstabzugfilter|kühlschrank|geschirrspüler|waschmaschine|trockner|sauna/.test(t))return 60;
 if(/backofen|türblätter|türrahmen|zargen/.test(t))return 90;
 if(/kaminholz|polster|teppich|matratze|vorhang|vorhangstange/.test(t))return 180;
 if(/raffstore|sonnenschutz/.test(t))return 365;
 if(/fenster/.test(t))return 180;
 return 60;
}

function windowEntries(){
 const map={"KG|Waschküche":"fenster-kg-waschkueche-musik","KG|Musikzimmer":"fenster-kg-waschkueche-musik","KG|Technikraum":"fenster-kg-technik-training","KG|Trainingsraum":"fenster-kg-technik-training","KG|Flur KG":"fenster-kg-flur-stiegenhaus","KG|Stiegenhaus":"fenster-kg-flur-stiegenhaus","EG|Garderobe":"fenster-eg-garderobe-buero","EG|Büro":"fenster-eg-garderobe-buero","EG|Wohnzimmer":"fenster-eg-wohnen-essen","EG|Essbereich":"fenster-eg-wohnen-essen","EG|Küche":"fenster-eg-kueche-speis-abstell","EG|Speis":"fenster-eg-kueche-speis-abstell","EG|Abstellraum":"fenster-eg-kueche-speis-abstell","EG|Gäste-WC":"fenster-eg-kueche-speis-abstell","OG|Kinderzimmer 1":"fenster-og-kinder","OG|Kinderzimmer 2":"fenster-og-kinder","OG|Kinderbad":"fenster-og-baeder-wc-sauna","OG|Eltern-WC":"fenster-og-baeder-wc-sauna","OG|Saunaraum":"fenster-og-baeder-wc-sauna","OG|Schlafzimmer":"fenster-og-schlaf-ankleide","OG|Ankleide":"fenster-og-schlaf-ankleide","OG|Bad":"fenster-og-bad"};
 const out=[];
 for(const [area,room,count] of WINDOW_INVENTORY)for(let i=1;i<=count;i++){
   const large=/Stiegenhaus|Trainingsraum|Wohnzimmer|Schlafzimmer|Bad/.test(room);
   const wk=`${area}|${room}|${i}`;
   const baseLabel=`Fenster ${area} · ${room}${count>1?" "+i:""}${large?" · groß":""}`;
   const sides=[
     {side:"innen",key:`window-in|${area}|${room}|${i}`,editKey:`window-in|${area}|${room}|${i}`,text:`🪟 ${baseLabel} · innen`,description:"Nur die Innenseite dieses Fensters gründlich reinigen – inklusive Glas, Rahmen und Falz dieses Fensters sowie der zugehörigen Fensterbank. Keine anderen Fenster zusätzlich."},
     {side:"außen",key:`window-out|${area}|${room}|${i}`,editKey:`window-out|${area}|${room}|${i}`,text:`🪟 ${baseLabel} · außen`,description:"Nur die Außenseite dieses Fensters gründlich reinigen – inklusive Außenglas, zugänglichem Rahmen und Falz dieses Fensters. Außen-/Höhenarbeiten nur durchführen, wenn sie sicher möglich sind; keine anderen Fenster zusätzlich."}
   ];
   // Fensterbank is a property of every physical window. Keep it as a
   // separate catalog task so each window can be planned, completed and
   // repeated independently rather than only a handful of room-level seed tasks.
   const sillKey=`window-sill|${area}|${room}|${i}`;
   const se=editFor(sillKey)||{};
   if(!catalogDeleted(sillKey)) out.push({
     key:sillKey,
     text:se.text??`🪟 Fensterbank ${area} · ${room}${count>1?" "+i:""}`,
     room:se.room??room,
     area:se.area??area,
     place:se.place??`Fenster ${i} · Fensterbank`,
     description:se.description??"Die zu diesem Fenster gehörende Fensterbank vollständig von Staub, Krümeln und sichtbaren Spuren befreien und die zugänglichen Kanten mitreinigen. Nur diese eine Fensterbank bearbeiten; andere Fensterbänke nicht zusätzlich.",
     windowSill:true,
     windowKey:wk,
     source:"windowSill",
     editable:true,
     interval:Number(se.interval??30)||30,
     start:se.start||""
   });
   for(const side of sides){
     const oldKey=`window|${area}|${room}|${i}`;
     const we=editFor(side.editKey)||editFor(oldKey)||{};
     if(!catalogDeleted(side.key) && !catalogDeleted(oldKey)) out.push({
       key:side.key,text:we.text??side.text,room:we.room??room,area:we.area??area,place:we.place??`Fenster ${i} · ${side.side}`,
       description:we.description??side.description,window:true,windowSide:side.side,windowKey:wk,windowGroup:map[area+"|"+room],source:"window",editable:true,
       interval:Number(we.interval??180)||180,start:we.start||""
     });
   }
   const raffKey=`raffstore|${area}|${room}|${i}`;const re=editFor(raffKey)||{};
   if(!catalogDeleted(raffKey))out.push({key:raffKey,text:re.text??`☀️ Raffstore ${area} · ${room}${count>1?" "+i:""}`,room:re.room??room,area:re.area??area,place:re.place??`Raffstore ${i}`,description:re.description??"Nur den zum jeweiligen Fenster gehörenden Raffstore/Sonnenschutz reinigen und nach Herstellerangabe pflegen. Lamellen vorsichtig behandeln; bei empfindlichen Oberflächen keine ungeeigneten Reiniger verwenden.",raffstore:true,raffstoreWindowKey:wk,source:"raffstore",editable:true,interval:Number(re.interval??365)||365,start:re.start||""});
 }
 return out
}
const WINDOW_TASKS=windowEntries();
const WINDOW_GROUP_DATES={};for(const s of SEASONAL_SPECIALS){if(!WINDOW_GROUP_DATES[s.key])WINDOW_GROUP_DATES[s.key]=[];WINDOW_GROUP_DATES[s.key].push(...s.dates)}for(const k in WINDOW_GROUP_DATES)WINDOW_GROUP_DATES[k]=[...new Set(WINDOW_GROUP_DATES[k])].sort();
function windowDate(x,ref=today){
 const rounds=SEASONAL_SPECIALS.filter(s=>s.key===x.windowGroup);
 if(!rounds.length)return null;
 const idx=Math.max(0,Number((x.windowKey||"|1").split("|").pop())-1);
 const candidates=[];
 for(const round of rounds){const dates=(round.dates||[]).slice().sort();if(dates.length)candidates.push(fromKey(dates[idx%dates.length]));}
 candidates.sort((a,b)=>a-b);
 for(const d of candidates)if(d>=ref)return d;
 let d=candidates[candidates.length-1];while(d<ref)d=addDays(d,180);return d;
}
function buildCatalog(){const out=[];const add=(text,room,area,meta={})=>{const key=meta.key||`seed|${room}|${text}`;if(catalogDeleted(key))return;const e=editFor(key)||{};const savedDate=state.manualDates?.[key]||state.catalogDates?.[key]||e.start||meta.start||"";out.push({text:e.text??text,room:e.room??room,area:e.area??area,place:e.place??meta.place??"",description:e.description??meta.description??"",start:savedDate,manualStart:!!(state.manualDates?.[key]||state.catalogDates?.[key]||e.manualStart||meta.manualStart),interval:Number(e.interval??meta.interval??0)||0,key,source:meta.source||"seed",editable:meta.editable!==false,window:!!meta.window,windowKey:meta.windowKey,windowGroup:meta.windowGroup,seasonal:!!meta.seasonal,seasonalKey:meta.seasonalKey})};for(const [room,area,tasks] of catalogSeed){for(const text of tasks){if(/^(Fenster innen reinigen|Fenster außen reinigen, wenn sicher|Fensterbänke reinigen|Fensterbank reinigen|Fensterbank abwischen|Dichtungen kontrollieren|Vorhangstangen reinigen|Vorhänge nach Pflegeetikett reinigen|Raffstores nach Herstellerangabe reinigen)$/.test(text))continue;add(text,room,area,{key:`seed|${room}|${text}`})}}const roomText=new Set(out.map(x=>`${x.room}|${x.text}`));for(const r of ROTATIONS){for(const room of r.rooms||[]){const rk=`${room}|${r.text}`;if(roomText.has(rk))continue;add(r.text,room,r.area,{key:`rotation|${room}|${r.text}`,editable:true,source:"rotation",interval:r.interval});roomText.add(rk)}}for(const c of state.custom){const key=c.key||`custom|${c.id}`;if(catalogDeleted(key))continue;add(c.text,c.room,c.area,{...c,key,source:"custom",editable:true,start:c.start||c.date||"",interval:Number(c.interval||c.repeat||0)||60,place:c.place,description:c.description})}for(const [group,tasks] of DAILY){for(const text of tasks){const key=`daily|${text}`;if(catalogDeleted(key))continue;const e=editFor(key)||{};out.push({text:e.text??text,room:e.room??"Alltag",area:e.area??"Haushalt",place:e.place??"",description:e.description??"",start:"",manualStart:false,interval:0,key,source:"daily",editable:true,group});}}for(const w of WINDOW_TASKS)out.push(w);return out}
function refreshCatalog(){
 CATALOG=buildCatalog().filter(x=>!isInvalidLegacyTask(x));
 invalidatePlans();
 invalidatePlanner();
}
refreshCatalog();

function roomItems(room){return CATALOG.filter(x=>x.room===room&&!x.window&&!x.raffstore&&x.source!=="rotation"&&x.area!=="Alltag")}
function basementRoom(d){const base=fromKey("2026-09-04"),diff=Math.round((d-base)/86400000);return BASEMENT[((Math.floor(diff/7)%BASEMENT.length)+BASEMENT.length)%BASEMENT.length]}
function weeklyDate(x){const dow=WEEKDAYS[x.room];if(dow===undefined)return null;const items=roomItems(x.room),idx=Math.max(0,items.findIndex(y=>y.key===x.key));return addDays(nextDow(fromKey("2026-08-31"),dow),Math.floor(idx/3)*7)}
function rotationAnchor(x){const idx=Math.max(0,ROTATIONS.findIndex(r=>r.text===x.text));return addDays(fromKey("2026-09-07"),(idx*5)%150)}
function explicitNext(x,ref){const start=/^\d{4}-\d{2}-\d{2}$/.test(x.start||"")?fromKey(x.start):ref;const interval=catalogInterval(x);let d=new Date(start),last=lastDone(x);if(last&&fromKey(last)>=d)d=fromKey(last);while(d<ref)d=addDays(d,interval);if(last&&sameDay(d,fromKey(last)))d=addDays(d,interval);return d}
function raffstoreFirstDate(x,ref=today){
 const wk=String(x.raffstoreWindowKey||"");
 const [area,room,idxRaw]=wk.split("|");
 const idx=Math.max(0,Number(idxRaw||1)-1);
 const groups={"KG|Waschküche":"fenster-kg-waschkueche-musik","KG|Musikzimmer":"fenster-kg-waschkueche-musik","KG|Technikraum":"fenster-kg-technik-training","KG|Trainingsraum":"fenster-kg-technik-training","KG|Flur KG":"fenster-kg-flur-stiegenhaus","KG|Stiegenhaus":"fenster-kg-flur-stiegenhaus","EG|Garderobe":"fenster-eg-garderobe-buero","EG|Büro":"fenster-eg-garderobe-buero","EG|Wohnzimmer":"fenster-eg-wohnen-essen","EG|Essbereich":"fenster-eg-wohnen-essen","EG|Küche":"fenster-eg-kueche-speis-abstell","EG|Speis":"fenster-eg-kueche-speis-abstell","EG|Abstellraum":"fenster-eg-kueche-speis-abstell","EG|Gäste-WC":"fenster-eg-kueche-speis-abstell","OG|Kinderzimmer 1":"fenster-og-kinder","OG|Kinderzimmer 2":"fenster-og-kinder","OG|Kinderbad":"fenster-og-baeder-wc-sauna","OG|Eltern-WC":"fenster-og-baeder-wc-sauna","OG|Saunaraum":"fenster-og-baeder-wc-sauna","OG|Schlafzimmer":"fenster-og-schlaf-ankleide","OG|Ankleide":"fenster-og-schlaf-ankleide","OG|Bad":"fenster-og-bad"};
 const group=groups[area+"|"+room];
 if(!group)return null;
 return windowDate({window:true,windowKey:`${area}|${room}|${idx+1}`,windowGroup:group},ref);
}
function rawNextDue(x,ref=today){
 const manual=state.manualDates?.[x.key]||state.catalogDates?.[x.key];
 if(/^\d{4}-\d{2}-\d{2}$/.test(manual||""))return explicitNext({...x,start:manual},ref);
 if(x.start)return explicitNext(x,ref);
 if(x.window)return windowDate(x,ref)||ref;
 if(x.raffstore){
   const first=raffstoreFirstDate(x,ref)||ref;
   let d=new Date(first),last=lastDone(x);
   if(last&&fromKey(last)>=d)d=fromKey(last);
   while(d<ref)d=addDays(d,365);
   if(last&&sameDay(d,fromKey(last)))d=addDays(d,365);
   return d;
 }
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
 const manual=state.manualDates?.[x.key]||state.catalogDates?.[x.key];
 if(/^\d{4}-\d{2}-\d{2}$/.test(manual||"")){
   const start=fromKey(manual),interval=catalogInterval(x),last=lastDone(x);
   let anchor=start;if(last&&fromKey(last)>anchor)anchor=fromKey(last);
   if(d<anchor)return false;
   const diff=Math.round((d-anchor)/86400000);
   return diff>=0&&diff%interval===0;
 }
 // A "Später" date is a planning override only. It must NEVER become the
 // task's recurrence/fällig date. The planner below places the occurrence on
 // that explicit planned date; rawDueOn remains purely cadence-based.
 if(isDailyTask(x)||x.area==="Alltag")return false;
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
 if(x.window||/fenster/.test(t))return 8;
 if(x.raffstore||/raffstore|sonnenschutz/.test(t))return 5;
 if(/schornstein|stuck|matratze|teppich|polster|backofen|dusche entkalken|badewanne|duschglas/.test(t))return 5;
 if(/kamin|fugen|silikon|kühlschrank|geschirrspüler|waschmaschine|trockner|sauna|türblätter|türrahmen|zargen|boden gründlich|schrank|regal/.test(t))return 3;
 if(/boden wischen|boden saugen|spiegel|armatur|waschbecken|toilette|wc|bettwäsche|handtücher/.test(t))return 2;
 return 1;
}
function roomCap(x){if(x.window)return 1;if(x.raffstore)return 2;if(/boden|kamin|bad|dusche|wanne|wc|toilette/i.test(x.text||""))return 2;return 6}
function dayBudget(d){if(d.getDay()===0)return 0;if(d.getDay()===6)return 5;if(d.getDay()===3)return 7;return 8}
function isFixedTask(x){return x.window||x.source==="seasonal"}
function rawTasksForDate(d){return CATALOG.filter(x=>rawDueOn(x,d))}
function plannerKey(){
 // Do not key the expensive planner off the generic save revision: toggling a
 // UI state (e.g. opening Erledigt) must not force a full year re-plan.
 return "v189|"+JSON.stringify(state.manualDates||{})+"|"+JSON.stringify(state.catalogDates||{})+"|"+CATALOG.length+"|"+JSON.stringify(state.lastDone||{})+"|"+JSON.stringify(state.catalogDeleted||{})+"|"+JSON.stringify(state.custom||[])+"|"+JSON.stringify(state.catalogEdits||{})+"|"+JSON.stringify(state.postponed||{})+"|"+JSON.stringify(state.todayPlanLock||{})+"|"+JSON.stringify(state.sundayOptional||{});
}
function plannerHorizon(){
 const start=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
 // The planner must be able to place EVERY active catalog task. A fixed
 // calendar end can leave long-interval tasks (e.g. annual tasks) without a
 // plan. Extend the horizon far enough beyond the furthest current due date
 // to guarantee a legal +/-30-day planning window.
 let end=fromKey("2027-12-31");
 for(const x of CATALOG){
   if(isDailyTask(x)||isInvalidLegacyTask(x))continue;
   const due=nextDue(x,today);
   if(due instanceof Date && !Number.isNaN(due.getTime())){
     const candidate=addDays(due,30);
     if(candidate>end)end=candidate;
   }
 }
 return {start,end};
}
function dominantCategory(arr){if(!arr||!arr.length)return "";const scores={};for(const y of arr){const g=taskCategory(y);scores[g]=(scores[g]||0)+taskWeight(y)}return Object.entries(scores).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],"de"))[0]?.[0]||""}
function nearbyCategoryPenalty(days,k,cat){let penalty=0;for(const off of [-1,1]){const a=days.get(dayKey(addDays(fromKey(k),off)));if(a&&dominantCategory(a)===cat)penalty+=12}return penalty}
function buildIntelligentPlan(){
 const key=plannerKey();if(plannerCache.key===key)return plannerCache;
 const {start,end}=plannerHorizon();const days=new Map();const dates=[];for(let d=new Date(start);d<=end;d=addDays(d,1)){const k=dayKey(d);days.set(k,[]);dates.push(d)}
 const addFixed=(k,x)=>{const arr=days.get(k);if(!arr)return;arr.push(x);arr._weight=(arr._weight||0)+taskWeight(x)};
 // Once the user postpones a task, keep the remaining tasks that were already
 // planned for today. Do not refill the freed capacity with new tasks.
 const todayLockKey=dayKey(today);
 const lockedToday=Array.isArray(state.todayPlanLock?.[todayLockKey])?state.todayPlanLock[todayLockKey]:[];
 const hasTodayLock=Array.isArray(state.todayPlanLock?.[todayLockKey]);
 if(hasTodayLock){
   const lockedSet=new Set(lockedToday);
   for(const x of CATALOG){
     if(lockedSet.has(taskId(x))&&!isDone(x)&&!isPostponed(x)){
       // A stale today-lock must never override the absolute +/-30-day planning window.
       const lockDue=nextDue(x,today);
       if(Math.abs(Math.round((today-lockDue)/86400000))>30)continue;
       const arr=days.get(dayKey(today));
       if(arr&&!arr.some(y=>taskId(y)===taskId(x))){arr.push(x);arr._weight=(arr._weight||0)+taskWeight(x);}
     }
   }
 }
 // Fixed/seasonal work goes first. A mighty fixed task essentially owns the day.
 // Once the user has used "Später" today, the current non-daily plan is frozen:
 // never refill the freed slot with a different task. Daily routines remain independent.
 const todayKey=dayKey(today);
 const todayLock=Array.isArray(state.todayPlanLock?.[todayKey])?state.todayPlanLock[todayKey]:null;
 const fixedTasks=CATALOG.filter(isFixedTask);
 for(const d of dates){
   const k=dayKey(d);
   if(d<today)continue;
   if(d.getDay()===0&&!state.sundayOptional[k])continue;
   for(const x of fixedTasks){
     if(!rawDueOn(x,d))continue;
     if(k===todayKey && todayLock && !todayLock.includes(taskId(x)))continue;
     addFixed(k,x);
   }
   const season=SEASONAL_SPECIALS.find(s=>(s.dates||[]).includes(k));
   if(season && !(k===todayKey && todayLock))addFixed(k,{key:`seasonal|${season.key}|${k}`,text:season.text,room:season.room,area:season.area,group:"Fenster",major:true,source:"seasonal",window:true});
 }
 // Flexible occurrences: create only the next required occurrence per task and
 // then place it on the first genuinely light day. This prevents a whole room
 // from landing on one anchor day.
 const flex=[];
 for(const x of CATALOG.filter(x=>x.area!=="Alltag"&&!isFixedTask(x))){
   let base=nextDue(x,today);
   if(base<start)base=start;
   flex.push({x,base});
 }
 flex.sort((a,b)=>a.base-b.base||taskWeight(b.x)-taskWeight(a.x)||a.x.room.localeCompare(b.x.room,"de"));
 const maxLook=30;
 for(const occ of flex){
   let chosen=null;
   const postponedUntil=postponedEntry(occ.x)?.postponedUntil;
   const postponedDelta=postponedUntil?Math.round((fromKey(postponedUntil)-occ.base)/86400000):null;
   const validPostponed=postponedUntil && Math.abs(postponedDelta)<=30;
   if(validPostponed){
     const pd=fromKey(postponedUntil),pk=dayKey(pd);
     if(days.has(pk) && (pd.getDay()!==0 || state.sundayOptional[pk])){
       const arr=days.get(pk);
       const weight=taskWeight(occ.x);
       const used=arr._weight||0;
       const hasMighty=arr.some(y=>y.window||taskWeight(y)>=5);
       const hasLarge=arr.some(y=>taskWeight(y)>=3);
       const cap=dayBudget(pd);
       const sameRoomWeight=arr.filter(y=>y.room===occ.x.room).reduce((n,y)=>n+taskWeight(y),0);
       const roomLimit=(weight>=5||hasMighty)?1:6;
       if(!arr.some(y=>taskId(y)===taskId(occ.x)) && !(hasMighty&&weight>1) && !(weight>=5&&arr.length) && !(hasLarge&&weight>=3) && used+weight<=cap && sameRoomWeight+weight<=roomLimit){
         chosen=pk;
       }
     }
   }
   if(chosen){const a=days.get(chosen);a.push(occ.x);a._weight=(a._weight||0)+taskWeight(occ.x);continue;}
   // A user-set "Später" date is authoritative: never silently move it
   // to another calendar day because of planner capacity.
   if(validPostponed){
     const pd=fromKey(postponedUntil),pk=dayKey(pd);
     if(days.has(pk) && (pd.getDay()!==0 || state.sundayOptional[pk])){
       const a=days.get(pk);
       if(!a.some(y=>taskId(y)===taskId(occ.x))){a.push(occ.x);a._weight=(a._weight||0)+taskWeight(occ.x);}
       continue;
     }
   }
   for(let delta=-30;delta<=maxLook;delta++){
     const d=addDays(occ.base,delta),k=dayKey(d);if(d<today||!days.has(k)||d.getDay()===0&&!state.sundayOptional[k])continue;
     if(k===todayKey&&hasTodayLock&&!lockedToday.includes(taskId(occ.x)))continue;
     const arr=days.get(k);
     if(arr.some(y=>taskId(y)===taskId(occ.x)))continue;
     const weight=taskWeight(occ.x);
     const used=arr._weight||0;
     const hasMighty=arr.some(y=>y.window||taskWeight(y)>=8);
     const hasLarge=arr.some(y=>!y.window&&taskWeight(y)>=5);
     const cap=dayBudget(d);
     // One mighty task essentially owns the day. Only a tiny add-on is allowed.
     if(hasMighty){if(weight>1)continue;}
     if(weight>=8 && arr.length)continue;
     if(weight>=5 && hasLarge)continue;
     if(hasLarge && weight>=3)continue;
     if(used+weight>cap)continue;
     // Efficient room grouping: tasks from the same room may be bundled
     // when the remaining daily capacity allows it. A room package is capped
     // at roughly one normal work block; mighty/large work still dominates.
     const sameRoomWeight=arr.filter(y=>y.room===occ.x.room).reduce((n,y)=>n+taskWeight(y),0);
     const roomLimit=(weight>=5||hasMighty)?1:6;
     if(sameRoomWeight+weight>roomLimit)continue;
     const targetGroup=groupFor(occ.x);
     const sameTheme=arr.some(y=>taskCategory(y)===targetGroup);
     const emptyDay=arr.length===0;
     if(!sameTheme && !emptyDay && weight<=3)continue;
     chosen=k;break;
   }
   if(chosen){const a=days.get(chosen);a.push(occ.x);a._weight=(a._weight||0)+taskWeight(occ.x);}
   else {
     // Every active task must always receive a concrete planned date. The +/-30-day
     // tolerance is an absolute hard limit: no candidate outside this window
     // may ever be considered. Prefer the least-loaded valid day inside it.
     const weight=taskWeight(occ.x), candidates=[];
     for(let delta=-30;delta<=30;delta++){
       const d=addDays(occ.base,delta),k=dayKey(d);
       if(d<today||!days.has(k)|| (d.getDay()===0&&!state.sundayOptional[k])) continue;
       const arr=days.get(k);
       if(arr.some(y=>taskId(y)===taskId(occ.x))) continue;
       const used=arr._weight||0, cap=dayBudget(d);
       const hasMighty=arr.some(y=>y.window||taskWeight(y)>=8);
       const hasLarge=arr.some(y=>!y.window&&taskWeight(y)>=5);
       const canFit=weight>=8 ? arr.length===0 : (!hasMighty && !(weight>=5&&hasLarge) && !(hasLarge&&weight>=3) && used+weight<=cap);
       const sameTheme=arr.some(y=>taskCategory(y)===taskCategory(occ.x));
       const score=(canFit?0:100000)+(sameTheme?0:20)+used*10+Math.abs(delta)*0.1;
       candidates.push({k,score,canFit,used,delta});
     }
     candidates.sort((a,b)=>a.score-b.score);
     const fb=candidates[0];
     if(fb && Math.abs(fb.delta)<=30){const a=days.get(fb.k);a.push(occ.x);a._weight=(a._weight||0)+weight;chosen=fb.k;}
   }
 }
 for(const [k,arr] of days)arr.sort((a,b)=>taskWeight(b)-taskWeight(a)||a.room.localeCompare(b,"de")||a.text.localeCompare(b.text,"de"));
 const next=new Map();
 for(const [k,arr] of days){
   for(const y of arr){
     const id=taskId(y);
     if(!next.has(id)){const d=fromKey(k);if(d>=today)next.set(id,d);}
   }
 }
 // HARD GUARANTEE: every active catalog task receives a concrete planned date.
 // Never expose an unplanned state. If an earlier placement was impossible,
 // place the task on the least-loaded valid day within the absolute +/-30 day
 // window around its actual due date. This fallback may relax capacity, but
 // it may NEVER relax the 30-day boundary or create an invalid Sunday plan.
 for(const x of CATALOG){
   if(isDailyTask(x))continue;
   const id=taskId(x);
   if(next.has(id))continue;
   const due=nextDue(x,today), candidates=[];
   for(let delta=-30;delta<=30;delta++){
     const d=addDays(due,delta),k=dayKey(d);
     if(d<today||!days.has(k))continue;
     if(k===todayKey&&hasTodayLock&&!lockedToday.includes(id))continue;
     if(d.getDay()===0&&!state.sundayOptional[k])continue;
     const arr=days.get(k);
     if(arr.some(y=>taskId(y)===id))continue;
     const used=arr._weight||0, sameTheme=arr.some(y=>taskCategory(y)===taskCategory(x));
     candidates.push({k,delta,used,sameTheme});
   }
   candidates.sort((a,b)=> (a.used-b.used)||((b.sameTheme?1:0)-(a.sameTheme?1:0))||(Math.abs(a.delta)-Math.abs(b.delta)));
   const fb=candidates[0];
   if(fb){const a=days.get(fb.k);a.push(x);a._weight=(a._weight||0)+taskWeight(x);next.set(id,fromKey(fb.k));}
 }
 // FINAL HARD VALIDATION: no planned date may ever be more than 30 days
 // before or after the task's currently displayed due date. This also repairs
 // stale today-lock entries or cached placements created by older versions.
 const byId=new Map(CATALOG.map(x=>[taskId(x),x]));
 for(const [id,pd] of [...next.entries()]){
   const x=byId.get(id); if(!x)continue;
   const due=nextDue(x,today);
   const delta=Math.round((pd-due)/86400000);
   if(Math.abs(delta)<=30)continue;
   const oldK=dayKey(pd),oldArr=days.get(oldK);
   if(oldArr){const ix=oldArr.findIndex(y=>taskId(y)===id);if(ix>=0){oldArr.splice(ix,1);oldArr._weight=Math.max(0,(oldArr._weight||0)-taskWeight(x));}}
   next.delete(id);
   const candidates=[];
   for(let delta2=-30;delta2<=30;delta2++){
     const d=addDays(due,delta2),k=dayKey(d);
     if(d<today||!days.has(k)||(d.getDay()===0&&!state.sundayOptional[k]))continue;
     if(k===todayKey&&hasTodayLock&&!lockedToday.includes(id))continue;
     const arr=days.get(k);
     if(arr.some(y=>taskId(y)===id))continue;
     const used=arr._weight||0, cap=dayBudget(d), weight=taskWeight(x);
     const hasMighty=arr.some(y=>y.window||taskWeight(y)>=8);
     const hasLarge=arr.some(y=>!y.window&&taskWeight(y)>=5);
     const canFit=weight>=8 ? arr.length===0 : (!hasMighty && !(weight>=5&&hasLarge) && !(hasLarge&&weight>=3) && used+weight<=cap);
     const sameTheme=arr.some(y=>groupFor(y)===groupFor(x));
     candidates.push({k,delta:delta2,used,sameTheme,canFit});
   }
   candidates.sort((a,b)=>(a.canFit?0:100000)-(b.canFit?0:100000)||a.used-b.used||((b.sameTheme?1:0)-(a.sameTheme?1:0))||Math.abs(a.delta)-Math.abs(b.delta));
   const fb=candidates[0];
   if(fb){const a=days.get(fb.k);a.push(x);a._weight=(a._weight||0)+taskWeight(x);next.set(id,fromKey(fb.k));}
 }
 // FINAL GLOBAL INVARIANTS:
 // 1) no planned date may be in the past;
 // 2) every active non-daily task has a concrete planned date;
 // 3) the planned date is never more than +/-30 days from its CURRENT due date.
 // This pass is deliberately independent from all earlier planner heuristics so
 // stale data from older versions cannot leak into the calendar.
 for(const x of CATALOG){
   if(isDailyTask(x))continue;
   const id=taskId(x),due=nextDue(x,today);
   let pd=next.get(id);
   const valid=pd instanceof Date && pd>=today && Math.abs(Math.round((pd-due)/86400000))<=30;
   if(valid)continue;
   if(pd instanceof Date){
     const old=days.get(dayKey(pd));
     if(old){const ix=old.findIndex(y=>taskId(y)===id);if(ix>=0){old.splice(ix,1);old._weight=Math.max(0,(old._weight||0)-taskWeight(x));}}
   }
   next.delete(id);
   let best=null;
   for(let delta=0;delta<=30;delta++){
     for(const sign of delta===0?[1]:[1,-1]){
       const offset=delta*sign,d=addDays(due,offset),k=dayKey(d);
       if(d<today||!days.has(k)||Math.abs(Math.round((d-due)/86400000))>30)continue;
       if(d.getDay()===0&&!state.sundayOptional[k])continue;
       const arr=days.get(k),used=arr._weight||0,weight=taskWeight(x);
       const hasMighty=arr.some(y=>y.window||taskWeight(y)>=8);
       const hasLarge=arr.some(y=>!y.window&&taskWeight(y)>=5);
       const cap=dayBudget(d);
       const canFit=weight>=8 ? arr.length===0 : (!hasMighty && !(weight>=5&&hasLarge) && !(hasLarge&&weight>=3) && used+weight<=cap);
       const sameTheme=arr.some(y=>groupFor(y)===groupFor(x));
       const score=(canFit?0:100000)+used*10+(sameTheme?0:20)+Math.abs(offset)*0.1;
       if(!best||score<best.score)best={k,d,score};
     }
   }
   // There should always be a legal future candidate in a 30-day window. If
   // capacity is exhausted everywhere, use the least-loaded legal day rather
   // than ever returning a past date or an unplanned state.
   if(!best){
     for(let delta=0;delta<=30;delta++){
       for(const sign of delta===0?[1]:[1,-1]){
         const d=addDays(due,delta*sign),k=dayKey(d);
         if(d<today||!days.has(k)||Math.abs(Math.round((d-due)/86400000))>30)continue;
         if(k===todayKey&&hasTodayLock&&!lockedToday.includes(id))continue;
         if(d.getDay()===0&&!state.sundayOptional[k])continue;
         const arr=days.get(k),score=(arr._weight||0)*10+Math.abs(delta*sign);
         if(!best||score<best.score)best={k,d,score};
       }
     }
   }
   if(best){
     const arr=days.get(best.k);arr.push(x);arr._weight=(arr._weight||0)+taskWeight(x);next.set(id,best.d);
   }
 }
 plannerCache={key,days,next};
 return plannerCache;
}
function plannedForDate(d){
 const arr=buildIntelligentPlan().days.get(dayKey(d))||[];
 // A user-postponed date is authoritative. Even if an older planner/cache
 // failed to place the task, the task must still appear on that exact date in
 // Today, the room view, week view and calendar. This is not a new plan: it is
 // simply the persisted user choice being surfaced everywhere consistently.
 const k=dayKey(d),seen=new Set(arr.map(taskId));
 for(const p of Object.values(state.postponed||{})){
   if(!p||String(p.postponedUntil)!==k)continue;
   const id=String(p.sourceKey||p.canonical||p.key||taskId(p));
   if(seen.has(id))continue;
   const x=CATALOG.find(y=>taskId(y)===id) || CATALOG.find(y=>String(y.key||'')===String(p.key||'')) || CATALOG.find(y=>String(y.text||'')===String(p.text||'')&&String(y.room||'')===String(p.room||''));
   if(x && !isDone(x)){arr.push(x);seen.add(taskId(x));}
 }
 return arr;
}
function scheduledForDate(d){return plannedForDate(d)}
function normalizeDateKey(v){return /^\d{4}-\d{2}-\d{2}$/.test(String(v||""))?String(v):""}
function nextDue(x,ref=today){
 // The lifecycle has a strict order:
 // 1) after completion, the next due date is completion + this task's interval;
 // 2) a postponement changes planning only; it never changes due date;
 // 3) only before the first action does the manually entered start date act as
 //    the initial due date. This prevents an old/manual anchor from overriding
 //    a newly calculated recurrence date.
 const last=lastDone(x);
 if(last){
   const interval=Math.max(1,catalogInterval(x));
   let d=addDays(fromKey(last),interval);
   while(d<ref)d=addDays(d,interval);
   return d;
 }
 const override=normalizeDateKey(state.manualDates?.[x.key]||state.catalogDates?.[x.key]);
 if(/^\d{4}-\d{2}-\d{2}$/.test(override||"")){const od=fromKey(override);if(od>=ref)return od;}
 if(x.manualStart&&normalizeDateKey(x.start)){const sd=fromKey(x.start);if(sd>=ref)return sd;}
 if(x.start)return explicitNext(x,ref);
 return rawNextDue(x,ref);
}
function dueOn(x,d){return plannedForDate(d).some(y=>taskId(y)===taskId(x))}
function calendarTasksForDate(d){const year=d.getFullYear();if(calendarCache.year!==year)calendarCache={year,days:new Map()};const k=iso(d);if(calendarCache.days.has(k))return calendarCache.days.get(k);const v=plannedForDate(d).filter(x=>!isDailyTask(x));calendarCache.days.set(k,v);return v}
function isDailyTask(x){return !!x&&(x.source==="daily"||String(x.key||"").startsWith("daily|")||String(x.id||"").startsWith("daily|"))}
function nextDueLabel(x){return isDailyTask(x)?"täglich":nextDue(x).toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"})}
function plannedDateForTask(x){
 const plan=buildIntelligentPlan(),id=taskId(x),due=nextDue(x,today);
 const preserved=normalizeDateKey(state.plannedOverrides?.[id]);
 if(preserved){const pd=fromKey(preserved);if(pd>=today&&Math.abs(Math.round((pd-due)/86400000))<=30)return pd;}
 // The catalog must describe the exact same visible plan as Today. In particular,
 // after "Später" has been used, a task that is excluded by today's lock is NOT
 // allowed to keep showing "Geplant: heute" in the catalog.
 const lockKey=dayKey(today);
 const locked=Array.isArray(state.todayPlanLock?.[lockKey])?new Set(state.todayPlanLock[lockKey]):null;
 const allowedToday=!locked || locked.has(id) || x.source==="daily" || x.source==="extra";
 const d=plan.next.get(id);
 if(d instanceof Date && d>=today){
   const dk=dayKey(d);
   if(dk!==lockKey || allowedToday){
     if(Math.abs(Math.round((d-due)/86400000))<=30)return d;
   }
 }
 // Search the actual planner days, not a separately calculated fallback.
 for(const [k,arr] of plan.days){
   if(!arr.some(y=>taskId(y)===id))continue;
   if(k===lockKey && !allowedToday)continue;
   const dd=fromKey(k);
   if(dd>=today && Math.abs(Math.round((dd-due)/86400000))<=30)return dd;
 }
 // Absolute display invariant: an active task may NEVER be shown without a
 // concrete plan. If an older/overloaded planner state somehow failed to expose
 // a date, allocate one directly into the same planner cache. This is a final
 // safety net, not a second planning system: Today, calendar and catalog all
 // read the same mutated plan object afterwards.
 if(!isDailyTask(x)){
   let fallbackDue=due instanceof Date && !Number.isNaN(due.getTime())?due:new Date(today);
   let best=null;
   for(let delta=0;delta<=30;delta++){
     for(const sign of delta===0?[1]:[1,-1]){
       const d=addDays(fallbackDue,delta*sign),k=dayKey(d);
       if(d<today||!plan.days.has(k)||Math.abs(Math.round((d-fallbackDue)/86400000))>30)continue;
       if(d.getDay()===0&&!state.sundayOptional[k])continue;
       if(k===lockKey&&locked&&!locked.has(id))continue;
       const arr=plan.days.get(k);
       if(arr.some(y=>taskId(y)===id))continue;
       const used=arr._weight||0, sameTheme=arr.some(y=>taskCategory(y)===taskCategory(x));
       const score=used*10+(sameTheme?0:20)+Math.abs(delta);
       if(!best||score<best.score)best={k,d,score};
     }
   }
   if(best){
     const arr=plan.days.get(best.k);
     arr.push(x);
     arr._weight=(arr._weight||0)+taskWeight(x);
     plan.next.set(id,best.d);
     return best.d;
   }
 }
 return null;
}
function plannedDateLabel(x){
 const d=plannedDateForTask(x);
 return d?d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}):"—";
}
function themeFor(d){
 if(d.getDay()===0)return DAY_THEME[0];
 const tasks=plannedForDate(d).filter(x=>x.source!=="rotation");
 if(!tasks.length)return "✨ Leichter Haushalt";
 const cat=dominantCategory(tasks);
 if(cat)return cat;
 return "✨ Leichter Haushalt";
}

function dailyTasks(){
 const out=[];
 for(const [group,tasks] of DAILY){
   for(const text of tasks){
     const key=`daily|${text}`;
     if(catalogDeleted(key))continue;
     const e=editFor(key)||{};
     out.push({key,id:key,text:e.text??text,room:e.room??"Alltag",area:e.area??"Haushalt",place:e.place??"",description:e.description??"",group,source:"daily",editable:true});
   }
 }
 return out;
}
function recent(x,d=today,days=7){const l=lastDone(x);return !!l&&(d-fromKey(l))/86400000<days}
function groupFor(x){if(x.window)return "🪟 Fenster & Glas";if(x.raffstore)return "☀️ Sonnenschutz";if(["Wohnzimmer","Essbereich","Küche"].includes(x.room))return "EG · Wohnen, Essen & Küche";if(["Gäste-WC","Kinderbad","Bad","Eltern-WC"].includes(x.room))return "Bäder & WCs";if(["Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Saunaraum"].includes(x.room))return "OG · Schlafen, Kinder & Sauna";if(["Eingangsbereich","Garderobe","Flur","Büro","Abstellraum","Speis"].includes(x.room))return "EG · Nebenräume";if(BASEMENT.includes(x.room))return "Keller · "+x.room;return "Weitere Aufgaben"}
// A task category is deliberately more granular than the room/floor group. It is
// used by the planner to bundle compatible work together, while groupFor()
// remains useful for room/floor context elsewhere in the app.
function taskCategory(x){const t=(x.text||"").toLowerCase();
 if(x.window)return "🪟 Fenster & Glas";
 if(x.raffstore)return "☀️ Sonnenschutz";
 if(/toilette|wc|wc-bürste|wc bürste|waschbecken|armatur|papierhalter/.test(t))return "🚿 Sanitär & WCs";
 if(/dusche|duschglas|duschrinne|badewanne|badewannenarmatur|fuge|silikon/.test(t))return "🛁 Dusche, Wanne & Fugen";
 if(/boden|sockelleisten|stufen|stiege|ecken absaugen|unter bett|unter möbeln|unter schränken/.test(t))return "🧹 Böden & Sockelleisten";
 if(/bettwäsche|handtücher|decke|vorhang|wäsche|waschmaschine|trockner|waschmittel|wäschekörbe/.test(t))return "🧺 Textilien & Wäsche";
 if(/kühlschrank|gefrierfach|herd|kochfeld|dunstabzug|backofen|mikrowelle|spüle|mülleimer|arbeitsplatten|fronten|schubladen innen|sockelleisten reinigen/.test(t))return "🍽️ Küche & Geräte";
 if(/vorrat|mindesthaltbarkeit|packungen|ordnen|sortieren|kleidung|spielzeug|bücher|schreibtisch|papier|regal|schrank|schubladen|ablage|jacken|schuhe/.test(t))return "📦 Ordnung & Organisation";
 if(/staub|abstauben|entstauben|spinnweben|lichtschalter|türklink|türrahmen|türblätter|handlauf|geländer|fensterbank|spiegel|oberflächen|dekor/.test(t))return "✨ Staub & Oberflächen";
 if(/kamin|ruß|asche/.test(t))return "🔥 Kamin & Feuerstelle";
 if(/sauna/.test(t))return "🧖 Sauna";
 if(/technik|zugänge|komponenten/.test(t))return "🔧 Technik & Keller";
 return groupFor(x);
}
function weeklyCandidates(d){return plannedForDate(d).filter(x=>!x.window&&x.source!=="rotation").map(x=>({...x,group:taskCategory(x)}))}
function ensureTodayPlanSnapshot(d=today){
 // Legacy compatibility only. Today is intentionally NOT snapshot-based anymore.
 // Keep the helper for old data, but always derive the visible plan live.
 return plannedForDate(d).map(taskId);
}
function plannedToday(){
 const d=today;
 if(state.chaos)return dailyTasks().filter(x=>/Geschirrspüler|Küchenarbeitsfläche|Esstisch|Hochstuhl|Heruntergefallenes|Müll/.test(x.text));
 const out=dailyTasks();
 const plan=plannedForDate(d);
 // Once "Später" is used today, the non-daily plan for today is a fixed set.
 // Never let the planner refill a freed slot with another task. The planner
 // already respects this lock when calculating dates; this second guard keeps
 // the Today view stable even if an older cached/legacy plan contains extras.
 const lockKey=dayKey(d);
 const locked=Array.isArray(state.todayPlanLock?.[lockKey]) ? new Set(state.todayPlanLock[lockKey]) : null;
 for(const x of plan){
   if(locked && x.source!=="daily" && x.source!=="extra" && !locked.has(taskId(x))) continue;
   out.push({...x,group:groupFor(x)});
 }
 // Final display invariant: every non-daily catalog task whose authoritative
 // planned date is today must be present in Today. This is intentionally a
 // second guard against any stale/legacy planner entry becoming visible only
 // in the catalog. The today lock remains authoritative and can still exclude
 // tasks that were not part of the frozen plan.
 const visibleIds=new Set(out.map(taskId));
 for(const x of CATALOG){
   if(x.area==="Alltag"||isDone(x)||isPostponed(x)||visibleIds.has(taskId(x)))continue;
   if(locked && !locked.has(taskId(x)))continue;
   const pd=plannedDateForTask(x);
   if(pd && sameDay(pd,d)){out.push({...x,group:groupFor(x)});visibleIds.add(taskId(x));}
 }
 for(const e of state.todayExtras.filter(e=>e.date===dayKey(d)))out.push({...e,key:e.id,source:"extra",group:"Heute zusätzlich"});
 const seen=new Set();return out.filter(x=>{
   const id=taskId(x);
   if(seen.has(id))return false;
   seen.add(id);
   const p=postponedEntry(x);
   // A postponed task is hidden only during the day on which the user pressed
   // “Später”. On its authoritative new planned date it must re-enter Today.
   if(p&&p.postponedUntil&&p.postponedUntil>dayKey(d))return false;
   return true;
 })
}

function definition(x){
 const raw=String(x.text||"").trim();
 // Nur führende Icons/Emojis entfernen – niemals das erste echte Wort.
 const t=raw.replace(/^[^\p{L}\p{N}]+/u,"").toLowerCase();
 const place=x.place?String(x.place):"";
 let what=(x.source==="custom"&&x.description)?x.description:raw;
 let belongs=[place?"Genauer Ort: "+place:"genannter Bereich bzw. Gegenstand"];
 let not=["Aufgaben anderer Räume nicht automatisch mitmachen","keine unnötige Perfektion oder zusätzliche Grundreinigung"];
 let care=["Material- und Herstellerangaben haben Vorrang."];
 const set=(w,b,n,c)=>{what=w;belongs=b;not=n;care=c};
 const area=String(x.area||"");
 const room=String(x.room||"");
 const wetCare=["Geeignete Reinigungsmittel verwenden und niemals verschiedene Reiniger miteinander mischen."];
 const dryCare=["Bei empfindlichen Oberflächen nur materialgerechte, möglichst wenig feuchte Reinigung verwenden."];
 const roomLabel=place||room||"genannten Bereich";

 if(x.window){
   set(x.windowSide==="innen"
     ? `Das genannte Fenster von innen gründlich reinigen: Glas streifenfrei putzen und Rahmen, Falz sowie die direkt zugehörige Fensterbank von Staub und Ablagerungen befreien.`
     : `Das genannte Fenster von außen gründlich reinigen: zugängliches Glas sowie Rahmen und Falz von Schmutz und Spuren befreien.`,
     x.windowSide==="innen"?[roomLabel,"Fensterglas innen","Rahmen und Falz","direkt zugehörige Fensterbank"]:[roomLabel,"Fensterglas außen","zugänglicher Rahmen und Falz"],
     ["Keine anderen Fenster des Hauses zusätzlich reinigen","Keine unsicheren Arbeiten auf Leitern, außen oder in großer Höhe"],
     ["Geeigneten Glas-/Flächenreiniger verwenden; bei schwer erreichbaren Stellen lieber eine sichere Lösung wählen."]);
 }
 else if(/taschen ordnen/.test(t)){
   set("Die Taschen in der Garderobe kurz durchsehen, leeren, zusammenlegen bzw. aufrecht stellen und wieder an ihrem vorgesehenen Platz verstauen.",
     ["Hand- und Alltagstaschen","Rucksäcke und häufig verwendete Taschen","sichtbare leere Verpackungen bzw. offensichtlicher Abfall","vorgesehener Garderobenplatz"],
     ["Keine Schränke oder Schubladen komplett ausräumen","Keine persönlichen Dinge ohne Prüfung wegwerfen","Keine Taschen anderer Räume ohne Anlass umsortieren"],
     ["Wichtige persönliche Gegenstände, Schlüssel und Unterlagen in den Taschen belassen bzw. bewusst zurücklegen."]);
 }
 else if(/jacken nach saison ordnen/.test(t)||/kleidung nach saison ordnen/.test(t)){
   const isJacke=/jacken/.test(t);
   set(isJacke?"Jacken nach aktueller Saison und Nutzung sortieren und so aufhängen, dass die häufig benötigten Stücke gut erreichbar sind.":"Kleidung nach Saison und tatsächlicher Nutzung ordnen und die aktuell benötigten Stücke gut erreichbar verstauen.",
     isJacke?["aktuell benötigte Jacken","saisonale Jacken","Garderobenhaken bzw. Aufbewahrungsplatz"]:["Kleidungsstücke der aktuellen Saison","Kleidung der anderen Saison","Kleiderstange, Schubladen oder Regalfächer"],
     ["Nichts nur wegen der Saison entsorgen","Keine fremden Räume oder Schränke zusätzlich umsortieren"],
     ["Bei der Ordnung nach Nutzung statt nach einem starren Schema vorgehen; empfindliche Kleidung nicht unnötig quetschen."]);
 }
 else if(/kleidung aussortieren/.test(t)){
   set("Kleidung Stück für Stück durchsehen und nur wirklich nicht mehr benötigte, unpassende oder beschädigte Stücke aussortieren.",
     ["Kleidung im genannten Schrank-/Zimmerbereich","zu kleine, nicht mehr getragene oder beschädigte Stücke","Stücke, die behalten werden sollen"],
     ["Keine Entscheidung unter Zeitdruck erzwingen","Keine Dinge anderer Personen ohne Rücksprache aussortieren"],
     ["Bei Unsicherheit lieber eine kleine Prüfstapel-/Vielleicht-Gruppe bilden statt vorschnell etwas wegzugeben."]);
 }
 else if(/kleidung ordnen/.test(t)){
   set("Die vorhandene Kleidung ordentlich zusammenlegen bzw. aufhängen und wieder nach der bereits vorhandenen Ordnung verstauen.",
     ["Kleidungsstapel","Schubladen und Fächer","Kleiderstange bzw. Kleiderbügel"],
     ["Keine Kleidung aussortieren, sofern das nicht ausdrücklich Teil der Aufgabe ist","Keine komplette Schrankinventur"],
     ["Schrankfächer nicht überfüllen; empfindliche Kleidungsstücke entsprechend ihrer Pflegeart aufbewahren."]);
 }
 else if(/schuhe paarweise ordnen/.test(t)){
   set("Die Schuhe im genannten Bereich paarweise zusammenstellen und ordentlich im vorgesehenen Fach bzw. auf der Ablage platzieren.",
     ["Schuhpaare","Schuhschrank bzw. Schuhablage","sichtbar herumstehende einzelne Schuhe"],
     ["Keine Schuhe aus anderen Räumen zusammentragen, wenn sie dort bewusst aufbewahrt werden","Keine Schuhe aussortieren"],
     ["Nasse Schuhe erst trocknen lassen, bevor sie in geschlossene Fächer gestellt werden."]);
 }
 else if(/schuhsohlen/.test(t)){
   set("Bei den genannten Schuhen sichtbaren Schmutz von den Sohlen entfernen und die Schuhe anschließend ordentlich zurückstellen.",
     ["Schuhsohlen","Sohlenränder und sichtbare Profile","Schuhablage bzw. Schuhschrank"],
     ["Keine empfindlichen Obermaterialien mit aggressiven Mitteln behandeln","Keine komplette Schuhpflege durchführen"],
     ["Schuhmaterial und Pflegehinweise beachten; stark nasse Schuhe vollständig trocknen lassen."]);
 }
 else if(/schuhschrank außen/.test(t)){
   set("Die außen sichtbaren Flächen des Schuhschranks gründlich abwischen und Griffe, Kanten und den sichtbaren Sockel von Staub und Spuren befreien.",
     ["Schrankfronten","Griffe","sichtbare Kanten und Sockel"],["Innenfächer und Schuhbestand nicht automatisch mitbearbeiten"],dryCare);
 }
 else if(/schuhschrank innen/.test(t)){
   set("Den Schuhschrank fachweise leeren, Krümel und losen Schmutz entfernen und die Innenflächen anschließend auswischen und trocknen lassen.",
     ["Innenböden","Seitenflächen","Ecken und Kanten","Schuhfächer"],["Schuhe nicht aussortieren, sofern das nicht geplant ist","Nicht alle Schränke der Garderobe gleichzeitig ausräumen"],["Vor dem Einräumen alle Flächen vollständig trocknen lassen."]);
 }
 else if(/ablageflächen leeren/.test(t)){
   set("Die genannte Ablage vollständig freimachen, Gegenstände ihrem vorgesehenen Platz zuordnen und die freie Fläche sauber hinterlassen.",
     ["genannte Ablagefläche","darauf liegende Alltagsgegenstände","freie Oberfläche"],["Keine wichtigen Dinge ohne Prüfung entsorgen","Keine angrenzenden Schränke komplett ausräumen"],["Schlüssel, Unterlagen und persönliche Gegenstände bewusst zurücklegen."]);
 }
 else if(/ablageflächen ordnen/.test(t)){
   set("Die genannte Ablage übersichtlich ordnen: Dinge gruppieren, häufig Benötigtes griffbereit halten und Überflüssiges an seinen normalen Platz zurücklegen.",
     ["Ablagefläche","darauf liegende Gegenstände","vorgesehene Plätze in unmittelbarer Nähe"],["Keine Gegenstände ohne klaren Grund wegwerfen","Keine komplette Raumordnung daraus machen"],["Eine einfache, dauerhaft alltagstaugliche Ordnung ist wichtiger als perfekte Symmetrie."]);
 }
 else if(/schlüsselplatz reinigen/.test(t)){
   set("Die Schlüsselablage leeren, Staub und Krümel entfernen und Schlüssel anschließend übersichtlich an ihren vorgesehenen Platz legen.",
     ["Schlüsselablage","Schlüssel bzw. Schlüsselbund","unmittelbare Ablagefläche"],["Schlüssel nicht dauerhaft an einen neuen Ort verlegen","Keine Schlüssel ohne Prüfung entsorgen"],["Kleine wichtige Gegenstände nicht versehentlich mit dem Abfall entfernen."]);
 }
 else if(/garderobenhaken/.test(t)){
   set("Die zugänglichen Garderobenhaken und die direkt angrenzende Fläche von Staub, Fusseln und sichtbaren Spuren befreien.",
     ["Garderobenhaken","Hakenleiste","direkte Wand-/Kontaktfläche"],["Jacken und Taschen nicht neu sortieren, sofern das nicht Teil der Aufgabe ist"],dryCare);
 }
 else if(/türklinken|türklinke|türgriffe/.test(t)){
   set("Die Türklinken bzw. Türgriffe im genannten Bereich gründlich abwischen, besonders die häufig berührten Flächen und die direkt angrenzenden Rosetten.",
     ["Klinke bzw. Griff","Rosette","direkt berührte Randbereiche"],["Türblatt und Zarge nicht automatisch komplett reinigen"],["Reiniger sparsam einsetzen und keine Flüssigkeit in Beschläge laufen lassen."]);
 }
 else if(/spiegel/.test(t)){
   set("Die gesamte Spiegelfläche von Staub, Fingerabdrücken und Spritzern befreien und anschließend streifenfrei nachwischen.",
     ["gesamte Spiegelfläche","Randbereich","sichtbarer Rahmen bzw. Halterung"],["Andere Glasflächen nicht automatisch mitreinigen"],["Reiniger nicht direkt auf empfindliche Rahmen oder Kanten sprühen; Glas trocken nachpolieren."]);
 }
 else if(/kamin/.test(t)||/ruß|asche|feuerraum|kaminrost|kaminbesteck|kaminholz|holzablage/.test(t)){
   if(/fachgerechte.*kontrolle|schornstein/.test(t)){
     set("Den vorgesehenen Termin für die fachgerechte Kontrolle bzw. Wartung des Kamins und Schornsteins sicherstellen und notwendige Nachweise bzw. Hinweise beachten.",["Kaminanlage","Schornstein bzw. Abgasanlage","Wartungs-/Kontrolltermin"],["Keine technische Wartung selbst ersetzen","Keine Bauteile eigenständig öffnen oder verändern"],["Gesetzliche, fachliche und herstellerseitige Vorgaben haben Vorrang."]);
   }else if(/holz schlichten/.test(t)){
     set("Das vorhandene Kaminholz ordentlich und stabil in der vorgesehenen Holzablage schlichten und lose Stücke zusammenstellen.",["Kaminholz","Holzablage","unmittelbarer Bodenbereich"],["Keine schweren Stapel unsicher aufbauen","Kein Holz mit sichtbarer Feuchtigkeit oder Schädlingsbefall unbesehen einlagern"],["Stapel standsicher halten und ausreichenden Abstand zu Hitzequellen einhalten."]);
   }else if(/kaminbesteck/.test(t)){
     set("Kaminbesteck von Staub und sichtbaren Asche-/Rußspuren befreien und anschließend ordentlich am vorgesehenen Platz abstellen.",["Schürhaken","Schaufel","Zange und Besen","Ständer bzw. Ablage"],["Kein heißes Kaminbesteck anfassen","Keine technische Prüfung der Werkzeuge"],["Nur vollständig erkaltete Gegenstände reinigen."]);
   }else if(/kaminglas/.test(t)){
     set("Das Kaminglas – falls vorhanden – von sichtbarem Ruß und Rauchspuren befreien und streifenfrei nachwischen.",["Innenseite des Kaminglases","Außenseite des Glases","Dichtungs-/Rahmenbereich oberflächlich"],["Glas nicht bei heißem Feuerraum reinigen","Keine Dichtung oder Ofentechnik ausbauen"],["Nur bei vollständig abgekühltem Kamin arbeiten und geeigneten Glasreiniger verwenden."]);
   }else if(/kaminverkleidung/.test(t)){
     set("Die sichtbaren Flächen der Kaminverkleidung materialgerecht von Staub und leichten Verschmutzungen befreien.",["Kaminverkleidung","sichtbare Kanten und Fugen"],["Feuerraum und technische Teile nicht verändern","Keine aggressive Nassreinigung empfindlicher Naturstein-/Holzflächen"],["Material der Verkleidung beachten und nur vollständig erkaltete Bereiche reinigen."]);
   }else if(/bereich direkt vor kamin/.test(t)){
     set("Den Bodenbereich unmittelbar vor dem Kamin gründlich absaugen und dabei Asche, Holzsplitter und Staub aufnehmen.",["Boden direkt vor dem Kamin","Randbereiche um die Feuerstelle","sichtbare Holz-/Aschereste"],["Keine Asche aus dem Feuerraum entfernen, sofern das nicht Teil der Aufgabe ist","Nur vollständig erkalteten Schmutz aufnehmen"],["Bei Asche besonders auf vollständige Erkaltung achten; geeigneten Staubsauger verwenden."]);
   }else if(/ruß-\/aschespuren/.test(t)){
     set("Sichtbare Ruß- und Aschespuren im direkten Kaminbereich vorsichtig entfernen, ohne sie unnötig zu verteilen.",["sichtbare Spuren an Boden und angrenzenden Flächen","direkter Kaminbereich"],["Keine heiße Asche oder Glut anfassen","Keine komplette Kaminreinigung daraus machen"],["Nur vollständig erkaltete Rückstände entfernen und Material der Oberfläche beachten."]);
   }else if(/erkaltete asche/.test(t)){
     set("Nur vollständig erkaltete Asche aus dem vorgesehenen Bereich entfernen und sicher entsorgen.",["Asche im Feuerraum bzw. Aschebereich","Aschebehälter"],["Keine Glut oder warme Asche anfassen","Kein brennendes Feuer reinigen"],["Vollständige Erkaltung sicherstellen; geeigneten, feuerfesten Behälter und Herstellerangaben beachten."]);
   }else if(/feuerraum auskehren/.test(t)){
     set("Den vollständig erkalteten Feuerraum vorsichtig auskehren und lose Aschereste aufnehmen.",["Feuerraum","Boden und Ecken des Feuerraums","Aschebehälter"],["Keine Glut oder warmen Rückstände anfassen","Keine Bauteile ausbauen"],["Nur bei vollständig erloschenem und abgekühltem Feuer arbeiten."]);
   }else if(/kaminrost/.test(t)){
     set("Den vollständig erkalteten Kaminrost von Asche- und Rußresten befreien und wieder korrekt einsetzen.",["Kaminrost","sichtbare Rostflächen","direkter Feuerraumbereich"],["Keinen heißen Rost anfassen","Keine Ofentechnik zerlegen"],["Nur vollständig abgekühlt arbeiten und Rost anschließend trocken bzw. nach Herstellerangabe behandeln."]);
   }else{
     set("Den genannten Kaminbereich nur vollständig erkaltet von Staub, Asche und sichtbaren Rückständen reinigen.",[roomLabel,"direkter Bereich um die Feuerstelle","sichtbare Rückstände"],["Keine heiße Asche oder Glut anfassen","Feuerraum bei brennendem Feuer nicht reinigen"],["Herstellerangaben beachten; fachgerechte Kontrolle und Wartung nicht durch Reinigung ersetzen."]);
   }
 }
 else if(/lichtschalter|steckdosen/.test(t)){
   const socket=/steckdosen/.test(t);
   set(socket?"Die Außenflächen der zugänglichen Steckdosen vorsichtig von Staub und sichtbaren Spuren befreien.":"Die Außenflächen der Lichtschalter und ihre direkt angrenzenden Bereiche von Fingerabdrücken und Staub befreien.",
     socket?["Steckdosenabdeckungen","sichtbare Randbereiche"]:["Schalterabdeckungen","sichtbare Randbereiche"],
     ["Schalter oder Steckdose nicht öffnen","Keine Flüssigkeit in Öffnungen bringen"],["Stromführende Komponenten nur äußerlich reinigen; möglichst trocken bzw. nur sehr leicht nebelfeucht arbeiten."]);
 }
 else if(/sauna/.test(t)){
   if(/lüften/.test(t))set("Nach der Saunanutzung den Raum ausreichend lüften, damit Wärme und Feuchtigkeit abziehen können.",["Saunaraum","Tür bzw. Lüftungsmöglichkeit","Holzflächen nach der Nutzung"],["Keine technische Lüftungsanlage verändern"],["Herstellerangaben und die vorgesehene Lüftungsweise beachten."]);
   else if(/holzflächen/.test(t))set("Die zugänglichen Holzflächen der Sauna nach Herstellerangabe reinigen: sichtbare Verschmutzungen entfernen und das Holz nicht unnötig durchnässen.",["Holzverkleidung","Saunabänke und Holzflächen soweit von der Aufgabe umfasst"],["Holz nicht mit aggressiven Haushaltsreinigern behandeln","Saunaofen und elektrische Teile nicht reinigen oder öffnen"],["Nur geeignete Pflegeprodukte und die Herstellerangaben verwenden; Holz anschließend gut trocknen lassen."]);
   else if(/bänke/.test(t))set("Die Saunabänke gründlich von Staub, Schweiß- und sichtbaren Gebrauchsspuren befreien und anschließend trocknen lassen.",["Sitz- und Liegeflächen","Unterseiten bzw. zugängliche Kanten"],["Holz nicht durchnässen","Keine Ofen- oder Elektroteile reinigen"],["Holzmaterial und Herstellerangaben beachten; keine aggressiven Desinfektionsmittel verwenden, wenn nicht vorgesehen."]);
   else if(/glasflächen/.test(t))set("Die zugänglichen Glasflächen der Sauna streifenfrei reinigen und von Fingerabdrücken sowie Kalk-/Wasserspuren befreien.",["Saunaglastür bzw. Glasflächen","Griffe und sichtbare Ränder"],["Keine anderen Räume oder Fenster zusätzlich reinigen"],["Glasreiniger sparsam einsetzen und empfindliche Dichtungen nicht unnötig durchnässen."]);
   else if(/saunaofen/.test(t))set("Den Saunaofen ausschließlich im Rahmen der vom Hersteller vorgesehenen äußeren Reinigung pflegen.",["zugängliche Außenflächen des Saunaofens","Ofenumfeld, soweit in der Anleitung vorgesehen"],["Ofen nicht öffnen oder zerlegen","Steine, Elektroanschlüsse und technische Bauteile nicht eigenmächtig warten"],["Nur vollständig abgekühlt arbeiten und ausschließlich die Herstellerangaben befolgen."]);
   else set("Den Saunaraum im genannten Umfang reinigen und anschließend gut lüften.",["Bänke","Boden","zugängliche Glas- und Holzflächen"],["Saunaofen nicht zerlegen","Keine technischen Komponenten öffnen"],["Holz und Saunaofen ausschließlich nach Herstellerangaben behandeln."]);
 }
 else if(/toilette innen gründlich/.test(t)){
   set("Das WC-Becken innen gründlich reinigen, besonders unter dem Rand sowie sichtbare Kalk-, Urin- und andere Ablagerungen entfernen.",["WC-Becken innen","Toilettenrand innen","sichtbare Ablagerungen"],["WC-Außenseite, Boden und andere Sanitärobjekte nicht automatisch mitreinigen"],["Handschuhe tragen; saure WC-Reiniger niemals mit Chlor-/Bleichmitteln mischen."]);
 }
 else if(/toilette innen/.test(t)){
   set("Das WC-Becken innen hygienisch reinigen und dabei den zugänglichen Bereich unter dem Toilettenrand mitnehmen.",["WC-Becken innen","Toilettenrand innen","sichtbare Verschmutzungen"],["WC-Außenseite und Boden nicht automatisch mitreinigen"],["Geeigneten WC-Reiniger verwenden und Reinigungsmittel niemals miteinander mischen."]);
 }
 else if(/toilette außen/.test(t)){
   set("Die Außenseite der Toilette gründlich abwischen, einschließlich Sitz außen, Keramik, Spülbereich und häufig berührter Flächen.",["WC-Sitz außen","WC-Keramik außen","Spültaste bzw. Spülbereich"],["WC-Becken innen nicht automatisch mitreinigen"],["Reiniger passend zur Oberfläche verwenden und keine Flüssigkeit in technische Öffnungen gelangen lassen."]);
 }
 else if(/^toilette reinigen$/.test(t)){
   set("Das WC als Ganzes hygienisch reinigen: Becken innen sowie die zugänglichen Außen- und Kontaktflächen gründlich säubern.",["WC-Becken innen","Toilettenrand","Sitz und Deckel außen","Keramik außen","Spültaste"],["Boden, Wände und andere Sanitärobjekte nicht automatisch mitreinigen"],["Handschuhe tragen und Reinigungsmittel niemals miteinander mischen."]);
 }
 else if(/toilettenrand/.test(t)){
   set("Den Toilettenrand rundum von sichtbaren Ablagerungen und Schmutz befreien, insbesondere die schwer erreichbare Unterseite.",["Unterseite des Toilettenrands","Rand innen","sichtbare Ablagerungen"],["WC-Becken und Außenseite nicht automatisch komplett reinigen"],["Geeigneten WC-Reiniger verwenden; keine Reiniger miteinander mischen."]);
 }
 else if(/wc-bürstenhalter innen/.test(t)){
   set("Den WC-Bürstenhalter innen leeren, Rückstände ausspülen bzw. auswischen und anschließend gut trocknen lassen.",["Innenraum des Bürstenhalters","Boden und Rand des Halters","WC-Bürste"],["Keine technischen Teile oder andere Badutensilien reinigen"],["Handschuhe verwenden und den Halter vor dem Zurückstellen der Bürste möglichst trocknen lassen."]);
 }
 else if(/wc-bürstenhalter/.test(t)){
   set("Den WC-Bürstenhalter außen und an den zugänglichen Innenflächen gründlich reinigen und sichtbare Rückstände entfernen.",["Bürstenhalter","Rand und Boden","direktes Umfeld"],["Andere Sanitärobjekte nicht automatisch mitreinigen"],["Hygienisch arbeiten und Reinigungsmittel nicht miteinander mischen."]);
 }
 else if(/wc-bürste/.test(t)){
   set("Die WC-Bürste und ihre Borsten gründlich ausspülen bzw. reinigen und anschließend abtropfen bzw. trocknen lassen.",["Borsten","Bürstenkopf","Schaft und Griff"],["Bürste nicht mit anderen Reinigungsutensilien vermischen"],["Handschuhe tragen und die Bürste nach der Reinigung vollständig abtropfen lassen."]);
 }
 else if(/waschbecken/.test(t)){
   set("Das Waschbecken gründlich reinigen: Becken, Rand, Ablaufbereich und sichtbare Spritzspuren säubern.",["Waschbecken innen","Rand und Armaturbereich","Ablauf und sichtbare Ablagerungen"],["Armatur nicht automatisch entkalken, wenn das eine eigene Aufgabe ist","Keine Schränke unter dem Waschbecken ausräumen"],wetCare);
 }
 else if(/armatur|wasserhahn|hahn/.test(t)){
   set("Die Armatur rundum von Kalk, Wasserflecken und Fingerabdrücken befreien, besonders an Auslauf, Griffen und Übergängen.",["Armatur","Auslauf","Griffe","sichtbare Übergänge und Kalkstellen"],["Keine Armatur zerlegen","Waschbecken bzw. Badewanne nicht automatisch komplett reinigen"],["Entkalker nur materialgeeignet einsetzen und empfindliche Oberflächen danach gründlich mit Wasser nachwischen."]);
 }
 else if(/dusche entkalken/.test(t)){
   set("Die zugänglichen Kalkstellen der Dusche gezielt entkalken, insbesondere Armaturen, Brausebereiche und sichtbare Ränder.",["Duscharmatur","Brause/Handbrause","Kalkstellen an Fliesen und Kanten, soweit materialgeeignet"],["Duschglas nicht automatisch komplett reinigen, wenn es eine eigene Aufgabe ist","Dichtungen und empfindliche Natursteinflächen nicht mit ungeeignetem Entkalker behandeln"],["Materialverträglichkeit prüfen; saure Entkalker niemals mit Chlor-/Bleichmitteln mischen."]);
 }
 else if(/dusche reinigen/.test(t)){
   set("Die Dusche gründlich reinigen: Duschfläche, zugängliche Wände, Armatur und sichtbare Seifen-/Schmutzreste säubern.",["Duschboden bzw. Duschwanne","zugängliche Fliesen-/Wandflächen","Armatur und Brause","sichtbare Ablagerungen"],["Duschglas nicht automatisch gründlich polieren, wenn es separat geplant ist","Fugen/Silikon nicht ohne konkreten Bedarf bearbeiten"],wetCare);
 }
 else if(/duschglas/.test(t)){
   set("Das Duschglas von Wasserflecken, Seifenresten und Kalkspuren befreien und anschließend streifenfrei nachwischen.",["gesamte zugängliche Glasfläche","Glaskanten","sichtbare Griffe"],["Fliesen und Fugen nicht automatisch komplett reinigen"],["Geeigneten Glas-/Kalkreiniger verwenden und Dichtungen bzw. Beschläge materialgerecht behandeln."]);
 }
 else if(/duschrinne kontrollieren/.test(t)){
   set("Die Duschrinne auf Haare, stehendes Wasser, Geruch und sichtbare Ablagerungen kontrollieren und oberflächlich zugänglichen Schmutz entfernen.",["Abdeckung der Duschrinne","sichtbarer Ablaufbereich","Haare und Ablagerungen"],["Keine Rohrleitung zerlegen","Keine tiefen Reparaturen oder chemische Rohrreinigung ohne Bedarf"],["Bei schlechtem Ablauf, Leckage oder wiederkehrendem Geruch Ursache fachgerecht prüfen lassen."]);
 }
 else if(/duschrinne reinigen/.test(t)){
   set("Die zugängliche Duschrinne gründlich von Haaren, Seifenresten und Ablagerungen befreien und den Ablauf anschließend mit Wasser prüfen.",["Rinnenabdeckung","Rinnenkörper und zugängliche Kanten","Ablaufbereich"],["Keine Rohrleitungen oder Geruchsverschlüsse zerlegen, sofern nicht vorgesehen"],["Handschuhe tragen und bei anhaltendem Ablaufproblem nicht mit aggressiven Chemikalien experimentieren."]);
 }
 else if(/badewanne reinigen/.test(t)){
   set("Die Badewanne gründlich reinigen: Innenfläche, Rand und zugängliche Spritzbereiche von Seifenresten, Kalk und Schmutz befreien.",["Wanneninnenfläche","Wannenrand","Ablaufbereich","sichtbare Armaturumgebung"],["Armatur nicht automatisch entkalken, wenn sie separat geplant ist","Unterseite/Verkleidung nicht ohne Anlass öffnen"],wetCare);
 }
 else if(/badewannenarmatur/.test(t)){
   set("Die Badewannenarmatur gezielt von Kalk- und Wasserflecken befreien, besonders Auslauf, Griffe und Übergänge.",["Armatur","Auslauf","Griffe","sichtbare Kalkstellen"],["Armatur nicht zerlegen","Badewanne nicht automatisch komplett reinigen"],["Materialverträglichen Entkalker verwenden und empfindliche Oberflächen danach gründlich abspülen."]);
 }
 else if(/fugen kontrollieren/.test(t)){
   set("Die Fliesenfugen im genannten Nassbereich auf Verfärbungen, Risse, Ausbrüche, weiche Stellen oder auffällige Ablagerungen kontrollieren.",["Fliesenfugen","Ecken und Übergänge","Bereiche um Dusche, Wanne und Waschbecken"],["Fugen nicht ohne konkreten Bedarf auskratzen, abschleifen oder neu verfugen"],["Auffällige Schäden oder möglicher Schimmel sollten fachgerecht beurteilt werden."]);
 }
 else if(/silikon kontrollieren/.test(t)){
   set("Die Silikonfugen im Nassbereich rundum auf Risse, Ablösungen, Verfärbungen und mögliche Undichtigkeiten kontrollieren.",["Silikonfugen an Wanne/Dusche/Waschbecken","Ecken und Anschlüsse","sichtbare Übergänge"],["Silikon nicht ohne konkreten Anlass entfernen","Keine Reparatur erzwingen, wenn die Ursache unklar ist"],["Bei Ablösung, Rissbildung oder Feuchtigkeit hinter der Fuge rechtzeitig fachgerechte Erneuerung prüfen."]);
 }
 else if(/papierhalter/.test(t)){
   set("Den Papierhalter außen gründlich von Staub und Fingerabdrücken befreien, einschließlich Halterung und direkt zugänglicher Unterseite.",["Papierhalter","Halterung","direkte Kontaktflächen"],["Wand und andere Badflächen nicht automatisch mitreinigen"],dryCare);
 }
 else if(/waschmaschine.*außen/.test(t)){
   set("Die Außenflächen der Waschmaschine gründlich abwischen, einschließlich Bedienfeld, Türrahmen und Griff.",["Gehäuse","Bedienfeld","Tür und Griff"],["Waschmittelschublade und Dichtung nicht automatisch reinigen, wenn sie separat geplant sind","Gerät nicht öffnen"],["Nur nebelfeucht reinigen und Wasser von elektrischen Öffnungen fernhalten."]);
 }
 else if(/waschmittelschublade/.test(t)){
   set("Die Waschmittelschublade herausnehmen, Waschmittelreste und Ablagerungen aus allen Fächern entfernen, ausspülen und trocken wieder einsetzen.",["Waschmittelschublade","einzelne Waschmittelfächer","zugänglicher Einlaufbereich"],["Keine technischen Komponenten öffnen"],["Schublade vollständig trocknen lassen und Waschmittelrückstände nicht mit ungeeigneten Chemikalien mischen."]);
 }
 else if(/türdichtung/.test(t)){
   set("Die Gummidichtung rund um die Waschmaschinentür gründlich auswischen und aus der Falz Haare, Fusseln und Waschmittelrückstände entfernen.",["gesamte Türdichtung","Falz der Dichtung","untere Bereiche der Gummilippe"],["Dichtung nicht ausbauen","Keine scharfen Gegenstände verwenden"],["Nach der Reinigung trocken nachwischen und die Tür zum Trocknen offen lassen, sofern im Alltag möglich."]);
 }
 else if(/waschmaschinenpflegeprogramm/.test(t)){
   set("Das vom Hersteller vorgesehene Pflegeprogramm der Waschmaschine zum richtigen Zeitpunkt durchführen und anschließend die Maschine nach Vorgabe trocknen bzw. offen lassen.",["Waschmaschine","Pflege-/Trommelprogramm","gegebenenfalls dafür vorgesehene Reinigungsmittel"],["Kein beliebiges Programm als Ersatz wählen","Keine technischen Komponenten öffnen"],["Bedienungsanleitung und Dosierangaben des Herstellers befolgen."]);
 }
 else if(/trockner außen/.test(t)){
   set("Die Außenflächen des Trockners, Bedienfeld, Tür und Griff gründlich von Staub und sichtbaren Spuren befreien.",["Gehäuse","Bedienfeld","Tür und Griff"],["Flusensieb und technische Innenbereiche nicht automatisch mitreinigen, wenn separat geplant"],["Nur nebelfeucht arbeiten und Flüssigkeit von Öffnungen fernhalten."]);
 }
 else if(/flusensieb/.test(t)){
   set("Das Flusensieb gemäß Herstellerangabe entnehmen, von Flusen befreien und korrekt wieder einsetzen; sichtbare Ablagerungen im zugänglichen Bereich entfernen.",["Flusensieb","zugänglicher Filterbereich","Flusenbehälter bzw. Filteraufnahme"],["Keine Geräteabdeckungen öffnen","Keine Bauteile beschädigen oder mit scharfen Gegenständen reinigen"],["Herstellerangaben beachten und Filter vor dem Betrieb korrekt einsetzen."]);
 }
 else if(/wäscher?körbe/.test(t)){
   set("Die Wäschekörbe innen und außen von Staub, Fusseln und sichtbaren Rückständen befreien und anschließend trocken wieder bereitstellen.",["Innenflächen","Griffe","Boden und sichtbare Kanten"],["Keine Wäsche sortieren, sofern das nicht Teil der Aufgabe ist"],["Bei waschbaren Körben Material- und Pflegehinweise beachten."]);
 }
 else if(/vorräte an waschmittel/.test(t)){
   set("Den Bestand an Waschmittel und Wäschepflegeprodukten kurz prüfen, angebrochene Produkte zusammenstellen und feststellen, was bald nachgekauft werden muss.",["Waschmittel","Weichspüler bzw. Pflegeprodukte","Vorratsplatz"],["Keine Produkte nur wegen eines alten Designs oder einer angebrochenen Packung wegwerfen","Keine anderen Vorräte inventarisieren"],["Reinigungs- und Waschmittel sicher und außerhalb der Reichweite von Kindern lagern."]);
 }
 else if(/bettwäsche wechseln/.test(t)||/🧺 bettwäsche wechseln/.test(raw.toLowerCase())){
   set("Die Bettwäsche vollständig abziehen, frische Bettwäsche aufziehen und gebrauchte Wäsche zur Wäsche geben.",["Bettlaken","Kissenbezüge","Deckenbezug","Bett bzw. Matratze"],["Matratze nicht automatisch gründlich reinigen","Keine Schrank- oder Zimmerordnung daraus machen"],["Saubere Wäsche trocken und sauber aufbewahren; Matratze kurz auslüften lassen, wenn es gut passt."]);
 }
 else if(/matratze absaugen/.test(t)){
   set("Die zugängliche Matratzenoberfläche gründlich absaugen, besonders Nähte, Kanten und den Bereich um das Kopfende.",["Matratzenoberseite","Kanten und Nähte","zugängliche Seiten"],["Matratze nicht durchnässen","Keine chemische Behandlung ohne Herstellerfreigabe"],["Geeignete Polster-/Matratzendüse verwenden und die Matratze anschließend gut auslüften lassen."]);
 }
 else if(/matratze.*pflege|matratzen wenden/.test(t)){
   set("Die Matratze nach den Vorgaben des Herstellers pflegen und – sofern vorgesehen – wenden bzw. drehen.",["Matratze","Kopf-/Fußende und Liegefläche","Bettunterseite nur soweit für die vorgesehene Pflege nötig"],["Keine Matratze entgegen der Herstellerangabe wenden","Keine aggressive Nass- oder Dampfreinigung"],["Herstellerangaben zu Wenden, Lüften und Reinigung beachten."]);
 }
 else if(/unter bett/.test(t)){
   set("Den Boden und die zugänglichen Bereiche unter dem Bett gründlich absaugen, besonders an den Bettkanten und in den Ecken.",["Boden unter dem Bett","Ecken und Kanten","zugänglicher Bereich unter dem Bett"],["Bett nicht komplett zerlegen","Aufbewahrungsboxen nicht automatisch ausräumen"],["Nur so weit unter das Bett greifen, wie es sicher und ohne Beschädigungsrisiko möglich ist."]);
 }
 else if(/nachttische/.test(t)){
   set("Die Nachttische vollständig, aber überschaubar reinigen: Oberfläche freimachen, Staub und Spuren entfernen und Dinge wieder ordentlich zurückstellen.",["Oberseite","Schubladenfronten und Griffe","direkte Ablagefläche"],["Schubladen nicht automatisch komplett ausräumen, wenn nicht nötig","Persönliche Gegenstände nicht aussortieren"],["Lampen, Ladegeräte und persönliche Dinge vorsichtig behandeln; Flüssigkeit von Elektronik fernhalten."]);
 }
 else if(/lampen außen/.test(t)||/erreichbare lampen/.test(t)){
   set("Die von außen zugänglichen Lampen vorsichtig von Staub befreien, einschließlich Schirm, Sockel und sichtbarer Kanten.",["Lampenoberfläche","Schirm","Sockel bzw. Standfläche"],["Keine Leuchten öffnen oder elektrische Teile ausbauen","Keine schwer erreichbaren Arbeiten erzwingen"],["Stromquelle ausschalten, Lampen abkühlen lassen und möglichst trocken reinigen."]);
 }
 else if(/kopfteil/.test(t)){
   set("Das Kopfteil des Bettes gründlich von Staub befreien und sichtbare Ablagerungen an Kanten und Übergängen entfernen.",["gesamtes zugängliches Kopfteil","Kanten und Nähte","Übergang zum Bett"],["Polster-/Holzpflege nicht automatisch intensiv durchführen"],dryCare);
 }
 else if(/küchenarbeitsfläche|arbeitsplatten/.test(t)){
   set("Die gesamte Arbeitsfläche freimachen und gründlich reinigen: Krümel, Fett- und Kochspuren entfernen und die Fläche anschließend trocken bzw. streifenfrei hinterlassen.",["gesamte Arbeitsplatten","Kanten und Ecken","Bereich um Spüle und Kochfeld"],["Schränke und Schubladen nicht automatisch ausräumen","Geräte nicht ungefragt verschieben"],["Material der Arbeitsplatte beachten; stehendes Wasser besonders bei empfindlichen Fugen vermeiden."]);
 }
 else if(/^herd gründlich reinigen$/.test(t)||/kochfeldränder/.test(t)){
   if(/kochfeldränder/.test(t))set("Die Ränder des Kochfelds gründlich von Fett, Krümeln und angebrannten Rückständen befreien, ohne das Kochfeld zu beschädigen.",["Rand des Kochfelds","Übergänge zur Arbeitsplatte","sichtbare Kochrückstände"],["Kochfeld nicht zerlegen","Keine aggressive Scheuermittel auf empfindlichen Oberflächen"],["Nur bei abgekühltem Kochfeld arbeiten und Herstellerangaben des Kochfelds beachten."]);
   else set("Den Herd im vorgesehenen Umfang gründlich reinigen: Kochbereich, zugängliche Frontflächen und sichtbare Fett-/Kochrückstände entfernen.",["Kochfeld","Bedienelemente außen","Front und zugängliche Ränder"],["Backofeninnenraum nicht automatisch reinigen, wenn er separat geplant ist","Gerät nicht öffnen"],["Nur bei vollständig abgekühltem Gerät arbeiten und Reiniger materialgerecht einsetzen."]);
 }
 else if(/dunstabzug außen/.test(t)){
   set("Die Außenseite des Dunstabzugs von Fett, Staub und Kochspuren befreien, einschließlich Unterkante und zugänglicher Bedienelemente.",["sichtbare Außenflächen","Unterkante","Bedienfeld"],["Filter nicht automatisch reinigen, wenn das separat geplant ist","Motor oder Gehäuse nicht öffnen"],["Gerät ausgeschaltet und abgekühlt reinigen; keine Flüssigkeit in Öffnungen bringen."]);
 }
 else if(/dunstabzugfilter/.test(t)){
   set("Den Dunstabzugfilter gemäß Herstellerangabe entnehmen, reinigen bzw. ersetzen und vollständig korrekt wieder einsetzen.",["Filter","Filteraufnahme","zugänglicher Innenbereich"],["Motor und elektrische Teile nicht öffnen"],["Bei Fettfiltern Herstellerangaben zur Reinigung beachten; Aktivkohlefilter nur entsprechend der vorgesehenen Pflege behandeln."]);
 }
 else if(/spüle entkalken/.test(t)){
   set("Die Spüle gezielt von Kalk- und Wasserablagerungen befreien und anschließend gründlich abspülen und trocken nachwischen.",["Spülenbecken","Rand","Ablaufbereich","sichtbare Kalkstellen"],["Armatur nicht automatisch entkalken, wenn sie separat geplant ist"],["Materialverträglichkeit prüfen; bei Naturstein keine ungeeigneten sauren Entkalker verwenden."]);
 }
 else if(/backofeninnenraum/.test(t)){
   set("Den vollständig abgekühlten Backofen innen gründlich von Fett, Krümeln und eingebrannten Rückständen befreien.",["Backofenboden","Seitenwände","Rückwand soweit zugänglich","sichtbare Ablagerungen"],["Heizelemente und technische Teile nicht zerlegen","Backofentür nicht automatisch intensiv reinigen, wenn sie separat geplant ist"],["Herstellerangaben und geeignete Backofenreiniger beachten; Gerät vor der Reinigung vollständig abkühlen lassen."]);
 }
 else if(/backofentür/.test(t)){
   set("Die Backofentür außen und – soweit zugänglich und vorgesehen – innen von Fett, Fingerabdrücken und Kochspuren befreien.",["Türglas","Türrahmen","Griff","sichtbare Außenflächen"],["Tür nicht ausbauen","Zwischenräume nicht mit scharfen Gegenständen bearbeiten"],["Backofen vollständig abkühlen lassen und Herstellerangaben zur Tür-/Glasreinigung beachten."]);
 }
 else if(/backofenbleche/.test(t)){
   set("Die Backofenbleche von Fett, eingebrannten Speiseresten und sichtbaren Ablagerungen befreien und anschließend trocken verstauen.",["Backbleche","Ränder und Ecken","Backofenrost, falls von der Aufgabe umfasst"],["Keine beschädigten Beschichtungen aggressiv abschrubben"],["Material und Beschichtung beachten; Bleche vor dem Einsetzen vollständig trocknen lassen."]);
 }
 else if(/mikrowelle/.test(t)){
   set("Die Mikrowelle innen und außen von Spritzern, Krümeln und Gerüchen verursachenden Rückständen reinigen, sofern vorhanden.",["Drehteller","Innenraum","Türinnenseite","Außenfläche und Bedienbereich"],["Gerät nicht öffnen","Keine Flüssigkeit in Lüftungsöffnungen bringen"],["Gerät ausschalten und abkühlen lassen; Innenraum nur nebelfeucht reinigen."]);
 }
 else if(/kühlschrank fächer/.test(t)||/kühlschrank gemüsefächer/.test(t)||/kühlschrank.*türdichtungen/.test(t)){
   if(/türdichtungen/.test(t))set("Die Kühlschrank-Türdichtungen rundum von Krümeln, Staub und klebrigen Rückständen befreien und auf sichtbare Schäden kontrollieren.",["Türdichtung rundum","Falz und Ecken","sichtbare Ablagerungen"],["Dichtung nicht ausbauen","Kühlschrankfächer nicht automatisch komplett reinigen"],["Dichtung nur materialgerecht reinigen und anschließend trocken nachwischen."]);
   else if(/gemüsefächer/.test(t))set("Die Gemüsefächer leeren, Krümel und Rückstände entfernen, auswischen und trocken wieder einsetzen.",["Gemüsefächer","Fachboden und Kanten","sichtbare Rückstände"],["Keine Lebensmittelinventur daraus machen","Lebensmittel nicht unnötig entsorgen"],["Fächer vor dem Einsetzen vollständig trocknen und verdorbene Lebensmittel nur bei eindeutigem Befund entfernen."]);
   else set("Die herausnehmbaren Kühlschrankfächer leeren, von Krümeln und Rückständen befreien, auswischen und trocken wieder einsetzen.",["Fächer und Ablagen","Kanten und Ecken","sichtbare Rückstände"],["Keine komplette Kühlschrankinventur","Lebensmittel nicht ohne Prüfung entsorgen"],["Kunststoffteile materialgerecht reinigen und vollständig trocknen lassen."]);
 }
 else if(/gefrierfach/.test(t)){
   set("Das Gefrierfach auf Eisbildung, ausgelaufene Rückstände und Ordnung prüfen und nur bei Bedarf nach Herstellerangabe abtauen.",["Gefrierfach","Schubladen/Fächer","Dichtungen und sichtbare Eisbildung"],["Nicht unnötig abtauen","Keine Lebensmittel ohne Prüfung entsorgen"],["Nur nach Herstellerangabe vorgehen und Kühlkette verderblicher Lebensmittel beachten."]);
 }
 else if(/vorratsschrank/.test(t)){
   set("Den Vorratsschrank fachweise leeren bzw. freimachen, Krümel und Staub entfernen und die Innenflächen auswischen.",["Innenböden","Seitenflächen","Ecken und Kanten"],["Keine Vorräte automatisch aussortieren","Nicht mehrere Schränke gleichzeitig komplett ausräumen"],["Flächen vor dem Einräumen trocknen lassen und Lebensmittel nur sauber und trocken lagern."]);
 }
 else if(/mülleimer/.test(t)){
   set("Den Mülleimer leeren, innen und außen von sichtbaren Rückständen befreien und den Bereich um Deckel, Rand und Griff sauber wischen.",["Innenbehälter","Deckel und Rand","Griff","direkter Bodenbereich"],["Mülltrennung nicht neu organisieren, wenn das eine eigene Aufgabe ist"],["Hygienisch arbeiten und den Behälter vor dem Einsetzen eines neuen Sacks vollständig trocknen lassen."]);
 }
 else if(/fronten/.test(t)){
   set("Die sichtbaren Möbel- bzw. Küchenfronten von Staub, Fingerabdrücken und Spritzern befreien, einschließlich Griffe und zugängliche Kanten.",["Frontflächen","Griffe","untere und seitliche Kanten"],["Schrankinnenräume nicht automatisch ausräumen","Arbeitsplatten und Geräte nicht automatisch mitreinigen"],["Reiniger passend zur Oberfläche verwenden und keine Feuchtigkeit in Fugen stehen lassen."]);
 }
 else if(/sockelleisten/.test(t)){
   set("Die Sockelleisten im genannten Raum entlang der zugänglichen Wandflächen von Staub, Haaren und sichtbaren Spuren befreien.",["Sockelleisten","Ecken und Übergänge","zugängliche Bereiche hinter Möbeln"],["Wände nicht komplett reinigen","Schwere Möbel nicht allein für diese Aufgabe verrücken"],["Bei Holz- oder empfindlichen Leisten möglichst trocken bzw. nebelfeucht und materialgerecht arbeiten."]);
 }
 else if(/boden unter beweglichen möbeln/.test(t)){
   set("Unter leicht und sicher beweglichen Möbeln saugen bzw. den Boden reinigen, insbesondere sichtbare Krümel, Staub und Haare entfernen.",["Boden unter zugänglichen Möbeln","Möbelkanten und erreichbare Ecken"],["Schwere Möbel nicht allein verschieben","Keine Möbel zerlegen"],["Nur Möbel bewegen, die sicher und ohne Beschädigungsrisiko verschoben werden können."]);
 }
 else if(/boden unter dem tisch/.test(t)){
   set("Den Boden direkt unter und rund um den Esstisch gründlich von Krümeln, Staub und sichtbaren Flecken befreien.",["Boden unter dem Tisch","Tischkanten und erreichbare Ecken","sichtbare Essensreste"],["Stühle/Tisch nicht komplett verrücken, wenn nicht nötig"],["Bei Essensresten hygienisch arbeiten und Flecken passend zum Bodenbelag behandeln."]);
 }
 else if(/boden unter möbeln/.test(t)){
   set("Den zugänglichen Boden unter den Möbeln gründlich absaugen und sichtbare Schmutzstellen entfernen.",["Boden unter Möbeln","Ecken und Kanten","zugängliche Bereiche"],["Schwere Möbel nicht allein bewegen"],["Nur sicher erreichbare Bereiche bearbeiten."]);
 }
 else if(/boden unter regalen/.test(t)){
   set("Den Boden direkt unter und vor den Regalen von Staub, Krümeln und Haaren befreien.",["Boden unter Regalen","Sockelbereich","Ecken vor dem Regal"],["Regale nicht komplett ausräumen","Schwere Regale nicht verschieben"],["Nur sicher zugängliche Bereiche reinigen."]);
 }
 else if(/boden unter schränken/.test(t)){
   set("Den zugänglichen Boden unter den Schränken von Staub und Haaren befreien, ohne schwere Möbel unsicher zu bewegen.",["Boden unter Schränken","Sockelbereich","erreichbare Ecken"],["Schränke nicht ausräumen oder allein verschieben"],["Nur sichere, zugängliche Bereiche bearbeiten."]);
 }
 else if(/boden gründlich saugen/.test(t)||/boden saugen/.test(t)||/stufen saugen/.test(t)){
   const stairs=/stufen saugen/.test(t);
   set(stairs?"Alle zugänglichen Stufen gründlich absaugen, einschließlich Kanten, Ecken und sichtbarer Fusseln.":"Den Boden des genannten Raumes vollständig absaugen, einschließlich Kanten, Ecken und unter leicht zugänglichen Möbeln.",
     stairs?["Stufenflächen","Stufenkanten","Ecken und Übergänge"]:["gesamte zugängliche Bodenfläche","Kanten und Ecken","unter leicht zugänglichen Möbeln"],
     ["Schwere Möbel nicht allein bewegen","Keine anderen Räume automatisch mitsaugen"],["Passende Düse für den Bodenbelag verwenden und empfindliche Oberflächen nicht beschädigen."]);
 }
 else if(/boden wischen/.test(t)||/stufen wischen/.test(t)){
   const stairs=/stufen wischen/.test(t);
   set(stairs?"Die zugänglichen Stufen nebelfeucht wischen und anschließend so hinterlassen, dass sie sicher begehbar sind.":"Den Boden des genannten Raumes nebelfeucht und gründlich wischen, einschließlich zugänglicher Kanten und Ecken.",
     stairs?["Stufenflächen","Stufenkanten","Übergänge"]:["gesamte zugängliche Bodenfläche","Kanten und Ecken"],
     ["Keine anderen Räume automatisch wischen","Boden nicht übermäßig durchnässen"],["Reinigungsmittel und Wassermenge an den Bodenbelag anpassen; Rutschgefahr während der Reinigung beachten."]);
 }
 else if(/böden|boden bei bedarf reinigen/.test(t)){
   set("Den Boden im genannten Bereich bei sichtbarem Bedarf gezielt reinigen und Flecken bzw. Verschmutzungen entfernen.",["sichtbare Bodenflächen","Flecken und Verschmutzungen","Kanten und Ecken soweit nötig"],["Keine Grundreinigung ohne sichtbaren Bedarf","Keine angrenzenden Räume automatisch reinigen"],["Reinigungsmethode an den Bodenbelag anpassen."]);
 }
 else if(/spinnweben/.test(t)||/decken-\/wandecken/.test(t)){
   set("Die oberen Ecken und zugänglichen Randbereiche des genannten Raumes auf Spinnweben prüfen und vorhandene Spinnweben vorsichtig entfernen.",["Decken-/Wandecken","hinter bzw. neben sichtbaren Möbeln","zugängliche obere Randbereiche"],["Keine komplette Decken- oder Wandreinigung","Keine unsicheren Höhenarbeiten"],["Teleskop- oder geeignete Staubdüse verwenden und nur sicher erreichbare Stellen bearbeiten."]);
 }
 else if(/ecken absaugen|ecken kontrollieren/.test(t)){
   set(/kontrollieren/.test(t)?"Die Ecken des genannten Raumes gezielt kontrollieren und sichtbaren Staub, Haare, Krümel oder Spinnweben bei Bedarf entfernen.":"Die zugänglichen Ecken und Kanten gründlich absaugen, besonders dort, wo sich Staub und Haare sammeln.",["Bodenecken","Kanten und schwer zugängliche Randbereiche","sichtbare Ablagerungen"],["Keine Möbel unsicher verrücken","Keine komplette Wand-/Deckenreinigung"],["Nur sicher erreichbare Bereiche bearbeiten und passende Düse verwenden."]);
 }
 else if(/bilderrahmen/.test(t)){
   set("Bilderrahmen und die direkt sichtbaren Rahmenkanten vorsichtig von Staub befreien.",["Rahmenoberflächen","obere und seitliche Kanten","sichtbare Ablage-/Hängeflächen"],["Bilder nicht abnehmen, wenn das nicht nötig ist","Glas nicht automatisch gründlich reinigen"],["Empfindliche Bilder und Rahmen nur trocken bzw. materialgerecht reinigen."]);
 }
 else if(/dekoration abstauben|bilderrahmen\/dekoration/.test(t)){
   set("Die sichtbare Dekoration im genannten Bereich vorsichtig von Staub befreien und anschließend wieder ordentlich platzieren.",["Deko-Gegenstände","Ober- und Seitenflächen","vorgesehene Ablage"],["Dekoration nicht aussortieren oder neu arrangieren, sofern nicht geplant"],["Zerbrechliche und empfindliche Gegenstände vorsichtig handhaben."]);
 }
 else if(/fernbedienungen sammeln/.test(t)){
   set("Die herumliegenden Fernbedienungen einsammeln, kurz von sichtbaren Spuren befreien und gemeinsam am vorgesehenen Platz ablegen.",["Fernbedienungen","Lade-/Ablageplatz","sichtbare Kontaktflächen"],["Batteriefächer nicht öffnen","Keine Geräte oder Kabel umorganisieren"],["Elektronik nur leicht nebelfeucht bzw. trocken reinigen und Flüssigkeit von Öffnungen fernhalten."]);
 }
 else if(/sofaritze/.test(t)){
   set("Die zugänglichen Sofaritzen gründlich absaugen und Krümel, Staub, Haare sowie kleine Fremdkörper entfernen.",["Ritzen zwischen Sitzflächen","Ritzen zwischen Sitz und Lehne","zugängliche Falten und Kanten"],["Sofa nicht zerlegen","Polsterbezüge nicht automatisch abziehen"],["Passende Polsterdüse verwenden und empfindliche Stoffe nicht beschädigen."]);
 }
 else if(/so(fa)?kissen/.test(t)){
   set("Die Sofakissen ausschütteln, von losem Staub befreien und anschließend ordentlich auf dem Sofa platzieren.",["Sofakissen","Kissenbezüge","Sofaablage"],["Bezüge nicht automatisch waschen","Kissen nicht aussortieren"],["Pflegeetikett beachten, falls eine weitergehende Reinigung nötig ist."]);
 }
 else if(/polster absaugen/.test(t)){
   set("Die Polster des Sofas bzw. der Sitzmöbel gründlich absaugen, einschließlich sichtbarer Kanten, Nähte und Sitzflächen.",["Sitzflächen","Lehnen","Nähte und Kanten"],["Bezüge nicht automatisch abziehen","Keine Nassreinigung ohne Bedarf"],["Geeignete Polsterdüse verwenden und Materialpflege beachten."]);
 }
 else if(/decke.*zusammenlegen/.test(t)){
   set("Herumliegende Decken ordentlich zusammenlegen und an ihrem vorgesehenen Platz bzw. auf dem Möbel ablegen.",["Decken","vorgesehene Ablage"],["Decken nicht waschen, sofern das nicht separat geplant ist"],["Saubere Decken trocken und nicht unnötig feucht verstauen."]);
 }
 else if(/teppich.*absaugen/.test(t)){
   set("Den genannten Teppich gründlich absaugen, einschließlich Kanten und gut erreichbarer Bereiche unter bzw. neben Möbeln.",["gesamte Teppichfläche","Teppichkanten","sichtbare Ecken"],["Teppich nicht nass reinigen","Schwere Möbel nicht allein verschieben"],["Saugleistung und Düse an Teppichmaterial anpassen."]);
 }
 else if(/teppichränder/.test(t)){
   set("Die Teppichränder kontrollieren und sichtbaren Staub, Fusseln oder hochstehende Kanten erkennen und bei Bedarf vorsichtig richten.",["alle zugänglichen Teppichränder","Ecken und Übergänge zum Boden"],["Keine professionelle Reparatur selbst durchführen","Teppich nicht komplett reinigen"],["Stolperstellen ernst nehmen; beschädigte oder stark aufstehende Kanten gegebenenfalls fachgerecht beheben lassen."]);
 }
 else if(/vorhänge auf staub/.test(t)||/vorhänge nach pflegeetikett/.test(t)){
   if(/nach pflegeetikett/.test(t))set("Die Vorhänge nach Pflegeetikett reinigen bzw. zur vorgesehenen Reinigung vorbereiten und anschließend entsprechend wieder anbringen.",["Vorhangstoff","Saum und sichtbare Kanten","Aufhängung soweit für die Reinigung nötig"],["Keine chemische Reinigung oder Wäsche entgegen dem Pflegeetikett"],["Pflegeetikett beachten; empfindliche Stoffe nicht unnötig nass oder heiß behandeln."]);
   else set("Die Vorhänge im genannten Bereich auf Staub, Fusseln und sichtbare Verschmutzungen prüfen und bei Bedarf vorsichtig absaugen bzw. abstauben.",["Vorhangflächen","Saum und sichtbare Falten","direkte Aufhängung"],["Vorhänge nicht automatisch abnehmen oder waschen"],["Stoffart beachten und nur eine geeignete, schonende Düse verwenden."]);
 }
 else if(/vorhangstangen|vorhangstangen \/ schienen/.test(t)){
   set("Vorhangstangen bzw. Schienen von Staub befreien und die zugänglichen Halterungen sowie sichtbaren Kanten reinigen.",["Stange bzw. Schiene","Halterungen","zugängliche Enden und Kanten"],["Vorhänge nicht automatisch abnehmen","Keine Montagearbeiten oder Reparaturen"],["Nur sicher erreichbare Stellen reinigen und Halterungen nicht unnötig belasten."]);
 }
 else if(/fensterbank/.test(t)){
   set("Die Fensterbank vollständig von Staub, Krümeln und sichtbaren Spuren befreien und die zugänglichen Kanten mitreinigen.",["gesamte Fensterbank","Kanten und Ecken","Bereich direkt am Fensterrahmen"],["Fensterglas nicht automatisch reinigen","Keine Gegenstände ohne Prüfung entsorgen"],["Dekoration und Pflanzen vorsichtig versetzen und empfindliche Oberflächen materialgerecht reinigen."]);
 }
 else if(/tür innen/.test(t)||/tür außen/.test(t)){
   const outside=/tür außen/.test(t);
   set(outside?"Die Außenseite der genannten Tür bei sichtbarem Bedarf gründlich abwischen und Schmutz- bzw. Griffspuren entfernen.":"Die Innenseite der genannten Tür von Staub, Fingerabdrücken und sichtbaren Spuren befreien.",[outside?"Türblatt außen":"Türblatt innen","Türgriff bzw. Klinke","sichtbare Kanten"],["Türrahmen nicht automatisch mitreinigen, wenn separat geplant ist","Keine unsicheren Außenarbeiten"],["Material der Tür beachten und Reiniger sparsam einsetzen."]);
 }
 else if(/türrahmen|türblätter/.test(t)){
   if(/türblätter/.test(t))set("Die sichtbaren Türblätter gründlich von Staub, Fingerabdrücken und Gebrauchsspuren befreien, einschließlich der zugänglichen Kanten.",["Türblatt","sichtbare Kanten","Bereich um Griff"],["Türrahmen/Zarge nicht automatisch komplett reinigen","Keine Türen ausbauen"],dryCare);
   else set("Türrahmen und Zargen im genannten Raum von Staub, Spuren und sichtbaren Ablagerungen befreien, einschließlich der zugänglichen Kanten.",["Türrahmen/Zarge","obere und seitliche Kanten","Bereich um die Klinke"],["Türblatt nicht automatisch komplett reinigen","Keine Türen ausbauen"],["Material beachten und Beschläge nicht mit Reinigungsflüssigkeit durchnässen."]);
 }
 else if(/fußmatte/.test(t)){
   if(/hersteller/.test(t))set("Die Fußmatte gemäß Pflege- bzw. Herstellerangabe reinigen und anschließend vollständig trocknen lassen.",["gesamte Fußmatte","Unterseite und Kanten soweit vorgesehen"],["Keine Nassreinigung entgegen dem Pflegehinweis"],["Pflegehinweise und Material beachten; erst vollständig trocken wieder auslegen."]);
   else set("Die Fußmatte gründlich ausschütteln bzw. absaugen und dabei Sand, Krümel und lose Verschmutzungen entfernen.",["gesamte Fußmatte","Kanten und Unterseite soweit zugänglich","direkter Bodenbereich"],["Keine intensive Nassreinigung ohne Bedarf"],["Matte anschließend vollständig trocken und rutschfest zurücklegen."]);
 }
 else if(/stuhl(sitze|lehnen)/.test(t)){
   set(/stuhlsitze/.test(t)?"Die Stuhlsitze von Krümeln, Staub und sichtbaren Flecken befreien.":"Die Stuhllehnen von Staub, Fingerabdrücken und sichtbaren Spuren befreien.",["Sitz- bzw. Lehnenfläche","Kanten und erreichbare Unterseite"],["Stühle nicht zerlegen","Polster nicht automatisch nass reinigen"],["Material der Sitz-/Lehnenfläche beachten und bei Polsterstoffen schonend arbeiten."]);
 }
 else if(/esstischoberseite|tischkanten|tischbeine|krümel aus tischritzen/.test(t)){
   if(/esstischoberseite/.test(t))set("Die Tischoberseite vollständig von Krümeln, Staub, Fett- und Getränkespuren befreien und sauber trocken hinterlassen.",["gesamte Tischoberseite","Ecken und Randbereiche"],["Tischbeine nicht automatisch reinigen","Keine Tischschubladen ausräumen"],dryCare);
   else if(/tischkanten/.test(t))set("Die Tischkanten rundum von Fingerabdrücken, Krümeln und sichtbaren Spuren befreien.",["Tischkanten","Unterkante soweit zugänglich","Ecken"],["Tischoberseite nicht automatisch gründlich reinigen, wenn separat geplant"],dryCare);
   else if(/tischbeine/.test(t))set("Die zugänglichen Tischbeine und ihre sichtbaren unteren Bereiche von Staub und Schmutz befreien.",["Tischbeine","Standfüße","sichtbare Unterseiten"],["Tisch nicht allein anheben","Keine Bodenreinigung daraus ableiten"],dryCare);
   else set("Krümel und kleine Rückstände aus den Ritzen und Übergängen des Tisches entfernen, besonders an schwer zugänglichen Kanten.",["Tischritzen","Übergänge und Fugen","sichtbare Krümel"],["Tisch nicht zerlegen","Keine aggressive Werkzeugreinigung"],["Geeignete weiche Bürste bzw. Staubsaugerdüse verwenden, ohne die Oberfläche zu zerkratzen."]);
 }
 else if(/sideboard/.test(t)){
   set(/fronten/.test(t)?"Die sichtbaren Sideboardfronten von Staub, Fingerabdrücken und Gebrauchsspuren befreien, einschließlich Griffe und Kanten.":"Die sichtbaren Sideboardflächen gründlich abstauben, einschließlich Oberseite, Kanten und zugänglicher Zwischenräume.",["Sideboard-Oberseite","Fronten und Griffe","sichtbare Kanten"],["Schubladen und Innenfächer nicht automatisch ausräumen"],dryCare);
 }
 else if(/schubladen/.test(t)){
   if(/ordnen/.test(t))set("Die Schubladen im genannten Bereich übersichtlich ordnen: Dinge gruppieren, lose Gegenstände zusammenlegen und wieder an ihren vorgesehenen Platz legen.",["Schubladeninhalt","Trennbereiche bzw. vorhandene Ordnung"],["Keine Gegenstände ohne Prüfung entsorgen","Keine anderen Schränke automatisch neu ordnen"],["Eine alltagstaugliche Ordnung herstellen und häufig Benötigtes gut erreichbar lassen."]);
   else set("Die genannten Schubladen innen auswischen und dabei Krümel, Staub und sichtbare Rückstände aus Ecken und Kanten entfernen.",["Schubladeninnenflächen","Ecken und Kanten","Schubladenboden"],["Inhalt nicht automatisch aussortieren","Keine Schubladenmechanik zerlegen"],["Schubladen vor dem Einräumen vollständig trocknen lassen."]);
 }
 else if(/regalböden/.test(t)){
   set("Die Regalböden im genannten Bereich von Gegenständen freimachen, Staub bzw. Schmutz entfernen und die Böden sauber wieder einräumen.",["Regalböden","Kanten und Ecken","direkte Seitenbereiche"],["Bücher/Vorräte nicht ohne Prüfung aussortieren","Regal nicht komplett umstellen"],["Flächen vor dem Einräumen vollständig trocknen lassen."]);
 }
 else if(/regale abstauben|regale/.test(t)){
   set("Die zugänglichen Regale von Staub befreien, insbesondere Oberseiten, Kanten und sichtbare Zwischenräume.",["Regaloberseiten","Regalböden soweit zugänglich","Kanten und Ecken"],["Regale nicht komplett ausräumen, wenn nicht nötig","Gegenstände nicht ohne Prüfung entsorgen"],dryCare);
 }
 else if(/bücheroberseiten/.test(t)){
   set("Die Oberseiten der Bücher vorsichtig von Staub befreien und die Bücher anschließend wieder ordentlich und stabil zurückstellen.",["Buchoberseiten","Buchrücken und sichtbare Kanten","Regalplatz"],["Bücher nicht aussortieren","Keine feuchte Reinigung von Buchseiten"],["Nur trocken und schonend entstauben, besonders bei empfindlichen Einbänden."]);
 }
 else if(/bücher ordnen|bücher/.test(t)){
   set("Die Bücher im genannten Bereich ordentlich zurückstellen, lose Exemplare zusammenführen und die vorhandene Ordnung beibehalten bzw. sinnvoll vereinheitlichen.",["Bücher","Bücherregal bzw. Ablage","lose Bücherstapel"],["Keine Bücher aussortieren, sofern das nicht ausdrücklich geplant ist"],["Schwere Bücher standsicher und möglichst unten einordnen."]);
 }
 else if(/spielzeug grob sortieren/.test(t)){
   set("Das Spielzeug grob nach vorhandenen Gruppen bzw. Spielarten zusammenlegen und lose Teile in die vorgesehenen Kisten oder Fächer zurücklegen.",["sichtbar herumliegendes Spielzeug","Kisten und Fächer","zusammengehörige Spielteile"],["Keine Lieblingsstücke oder Spielzeug ohne Rücksprache aussortieren","Keine komplette Kinderzimmer-Inventur"],["Kleine Teile kindersicher verstauen, wenn sie nicht für das Alter geeignet sind."]);
 }
 else if(/papierstapel sortieren/.test(t)){
   set("Die genannten Papierstapel kurz durchsehen, zusammengehörige Unterlagen bündeln und sie an ihren vorgesehenen Ablageort legen.",["Papierstapel","lose Zettel und Unterlagen","Ablagefächer"],["Wichtige Unterlagen nicht ungeprüft entsorgen","Keine vollständige Aktenarchivierung"],["Vertrauliche Unterlagen nicht offen liegen lassen."]);
 }
 else if(/papierkorb leeren/.test(t)){
   set("Den Papierkorb leeren, neuen Beutel einsetzen falls verwendet und den direkten Bereich von Papierfetzen bzw. Staub befreien.",["Papierkorb","Innenrand und Boden","direkter Bodenbereich"],["Keine Unterlagen aus dem Papierkorb wieder zusammensuchen, sofern sie bewusst entsorgt wurden"],["Bei vertraulichen Unterlagen sichere Entsorgung beachten."]);
 }
 else if(/schreibtisch komplett leeren/.test(t)){
   set("Die Arbeitsfläche des Schreibtischs vollständig freimachen, Gegenstände ihrem vorgesehenen Platz zuordnen und die Fläche für die Reinigung vorbereiten.",["gesamte Schreibtischoberfläche","lose Gegenstände","direkte Ablagen"],["Keine Unterlagen ohne Prüfung entsorgen","Schubladen und Schränke nicht automatisch ausräumen"],["Wichtige Unterlagen, Geräte und persönliche Dinge bewusst zurücklegen."]);
 }
 else if(/schreibtischfläche/.test(t)){
   set("Die freie Schreibtischfläche gründlich von Staub, Krümeln und sichtbaren Spuren befreien und anschließend wieder ordentlich nutzbar hinterlassen.",["Arbeitsfläche","Kanten","sichtbare Ablagebereiche"],["Schubladen nicht automatisch ausräumen","Unterlagen nicht ohne Prüfung entsorgen"],["Elektronik nur äußerlich und möglichst trocken reinigen."]);
 }
 else if(/monitor/.test(t)){
   set("Den Monitor außen vorsichtig von Staub und Fingerabdrücken befreien, einschließlich Display, Rahmen und Standfuß.",["Displayfläche","Rahmen","Standfuß"],["Monitor nicht öffnen","Keine Flüssigkeit direkt auf das Display sprühen"],["Herstellerhinweise beachten und Flüssigkeit nur auf ein geeignetes Tuch geben."]);
 }
 else if(/^tastatur reinigen$/.test(t)||/^maus reinigen$/.test(t)){
   const mouse=/maus/.test(t);
   set(mouse?"Die Maus außen von Staub, Fingerabdrücken und sichtbaren Rückständen befreien, besonders an Tasten und Griffbereich.":"Die Tastatur von Staub und Krümeln befreien, insbesondere zwischen den Tasten und an den sichtbaren Kanten.",[mouse?"Mausoberfläche":"Tastenoberseiten","Zwischenräume soweit zugänglich","Kanten und Unterseite soweit erreichbar"],["Gerät nicht öffnen","Keine Flüssigkeit in Öffnungen bringen"],["Gerät ausschalten bzw. trennen und nur trocken oder sehr leicht nebelfeucht reinigen."]);
 }
 else if(/kabel grob ordnen/.test(t)){
   set("Die sichtbaren Kabel grob entwirren, zusammenführen und so ablegen, dass sie übersichtlich, zugänglich und nicht im Weg sind.",["sichtbare Kabel","Kabelwege","Ablage-/Steckdosenbereich"],["Keine elektrischen Verbindungen verändern","Keine Geräte öffnen oder Kabel gewaltsam lösen"],["Kabel nicht knicken, unter Spannung setzen oder in Stolperwege legen."]);
 }
 else if(/instrumente materialgerecht/.test(t)){
   set("Die im Musikzimmer vorhandenen Instrumente vorsichtig und materialgerecht von Staub befreien und wieder sicher an ihrem vorgesehenen Platz aufbewahren.",["genannte Instrumente","zugängliche Außenflächen","Instrumentenständer bzw. Aufbewahrung"],["Keine Instrumente zerlegen oder technisch warten","Keine Saiten, Klappen oder Mechaniken eigenmächtig behandeln"],["Pflegehinweise des jeweiligen Instruments beachten; empfindliche Instrumente nur mit geeigneten Materialien reinigen."]);
 }
 else if(/noten ordnen/.test(t)){
   set("Notenblätter und Notenmappen nach der vorhandenen Ordnung zusammenstellen und lose Blätter an ihren vorgesehenen Platz legen.",["Notenmappen","lose Notenblätter","Notenablage"],["Keine Noten wegwerfen, sofern sie nicht eindeutig entsorgt werden sollen"],["Blätter knickfrei und trocken lagern."]);
 }
 else if(/oberflächen reinigen/.test(t)){
   set("Die zugänglichen Oberflächen im genannten Raum gründlich von Staub, Fingerabdrücken und sichtbaren Spuren befreien.",["genannte Möbel- und Ablageflächen","Kanten und Ecken","sichtbare Gebrauchsspuren"],["Schubladen und Schränke nicht automatisch ausräumen","Empfindliche Geräte nicht nass reinigen"],dryCare);
 }
 else if(/trainingsgeräte/.test(t)){
   set("Die zugänglichen Trainingsgeräte von Schweißspuren, Staub und sichtbaren Rückständen befreien, besonders an häufig berührten Griffen und Flächen.",["Griffe","Sitz-/Auflageflächen","sichtbare Außenflächen"],["Geräte nicht zerlegen","Mechanik und elektrische Komponenten nicht öffnen"],["Reinigungsmittel für das jeweilige Material geeignet wählen und Geräte vor Nutzung trocknen lassen."]);
 }
 else if(/matten reinigen/.test(t)){
   set("Trainingsmatten von Staub, Schweiß und sichtbaren Rückständen befreien und anschließend vollständig trocknen lassen.",["Mattenoberfläche","Unterseite soweit zugänglich","Kanten"],["Matten nicht mit ungeeigneten Lösungsmitteln behandeln"],["Material- und Pflegehinweise beachten und erst trocken wieder verwenden."]);
 }
 else if(/gewichte\/griffe/.test(t)){
   set("Gewichte und Griffe von Schweiß, Staub und sichtbaren Spuren befreien, besonders an den häufig berührten Bereichen.",["Gewichtsoberflächen","Griffe","Ablageflächen"],["Gewichte nicht technisch zerlegen","Keine Bodenreinigung daraus ableiten"],["Materialgerechten Reiniger verwenden und Metall-/Gummiflächen entsprechend behandeln."]);
 }
 else if(/handtücher einsammeln|handtücher wechseln/.test(t)){
   if(/wechseln/.test(t))set("Benutzte Handtücher im genannten Bad gegen frische Handtücher austauschen und die gebrauchten zur Wäsche geben.",["Hand- und Gästehandtücher","Handtuchhalter","gebrauchte Handtücher"],["Keine Badtextilien außerhalb des genannten Bereichs komplett neu sortieren"],["Frische Handtücher sauber und trocken lagern; gebrauchte Wäsche direkt zur vorgesehenen Wäsche geben."]);
   else set("Benutzte Handtücher im Trainingsraum einsammeln und zur vorgesehenen Wäsche bzw. Ablage bringen.",["Handtücher","Handtuchablage","Wäschekorb"],["Keine sauberen Handtücher unnötig zur Wäsche geben"],["Nasse Handtücher nicht länger feucht zusammenknüllen."]);
 }
 else if(/kartons ordnen/.test(t)){
   set("Kartons im Lagerbereich stabil und übersichtlich stapeln, zusammengehörige Kartons gruppieren und Zugänge frei halten.",["Kartons","Stapelbereiche","Beschriftungen soweit vorhanden","Zugangswege"],["Kartons nicht ungeprüft entsorgen","Keine schweren Stapel unsicher hoch aufbauen"],["Schwere Kartons unten, leichte oben; Flucht- und Zugangswege frei halten."]);
 }
 else if(/mülltrennung ordnen/.test(t)){
   set("Den Bereich für die Mülltrennung übersichtlich ordnen und Behälter bzw. Säcke eindeutig den vorgesehenen Fraktionen zuordnen.",["Müllbehälter","Trennsystem","direkter Bodenbereich"],["Keine bereits korrekt sortierten Säcke unnötig umpacken"],["Lokale Trennregeln beachten und scharfe bzw. gefährliche Gegenstände nicht ungeschützt handhaben."]);
 }
 else if(/vorräte nach kategorien/.test(t)){
   set("Die Vorräte nach sinnvollen Produktgruppen ordnen, gleiche Produkte zusammenstellen und häufig benötigte Dinge gut erreichbar platzieren.",["Vorratsregale","gleiche Produktgruppen","angebrochene und geschlossene Packungen"],["Keine Lebensmittel ohne konkreten Grund aussortieren","Keine komplette Speisekammer-Inventur"],["Lebensmittel trocken und sauber lagern; beschädigte oder verdächtige Packungen separat prüfen."]);
 }
 else if(/vorräte prüfen/.test(t)){
   set("Den Vorratsbestand kurz überblicken und prüfen, welche Produkte vorhanden, knapp oder offensichtlich nicht mehr verwendbar sind.",["Vorratsbereich","angebrochene und geschlossene Packungen","Produkte mit kurzem Datum"],["Nicht alles ausräumen","Produkte nicht allein wegen überschrittenem MHD automatisch wegwerfen"],["MHD und Verbrauchsdatum unterscheiden und verdorbene bzw. unsichere Lebensmittel nicht verwenden."]);
 }
 else if(/mindesthaltbarkeit/.test(t)){
   set("Die Vorräte auf Mindesthaltbarkeits- bzw. Verbrauchsdaten prüfen und Produkte mit kürzerem Datum nach vorne stellen.",["Vorratsregale","Produkte mit kurzem Datum","angebrochene Packungen"],["MHD-Überschreitung nicht automatisch mit Verderb gleichsetzen","Keine vollständige Inventur nötig"],["Verbrauchsdatum und MHD unterscheiden; auffällige oder verdorbene Lebensmittel nicht verwenden."]);
 }
 else if(/angebrochene packungen/.test(t)){
   set("Angebrochene Packungen auf ordentlichen Verschluss, Zustand und sinnvolle Aufbewahrung prüfen und offene Produkte gut verschließen bzw. nach vorne stellen.",["angebrochene Lebensmittelpackungen","Verschlüsse","Vorratsfach"],["Keine Lebensmittel ohne konkreten Grund entsorgen","Keine ungeöffnete Ware umfüllen, wenn nicht nötig"],["Auf Verderb, Feuchtigkeit und Schädlingsspuren achten; geöffnete Produkte nach Packungshinweis lagern."]);
 }
 else if(/reinigungsmittelbestand/.test(t)){
   set("Den Bestand an Reinigungsmitteln kurz prüfen, angebrochene Produkte zusammenstellen und feststellen, welche Mittel bald nachgekauft werden müssen.",["Reinigungsmittel","angebrochene Flaschen","Vorratsplatz"],["Keine Produkte nur wegen geringer Restmenge wegwerfen","Keine vollständige Inventur aller Haushaltsartikel"],["Reinigungsmittel sicher, verschlossen und außerhalb der Reichweite von Kindern lagern; Produkte niemals mischen."]);
 }
 else if(/besen\/staubsaugerbereich/.test(t)){
   set("Den Bereich um Besen und Staubsauger ordentlich freimachen und von Staub, Haaren und herumliegenden Kleinteilen befreien.",["Besen und Stiele","Staubsaugerbereich","Boden und Wandbereich direkt dahinter"],["Staubsauger nicht zerlegen","Keine Gerätewartung daraus ableiten"],["Geräte so abstellen, dass sie sicher stehen und gut zugänglich bleiben."]);
 }
 else if(/zugänge freihalten/.test(t)){
   set("Die Zugänge und Bewegungswege im Technikraum frei halten: herumstehende Gegenstände ordentlich an ihren vorgesehenen Platz stellen und Stolperstellen beseitigen.",["Türbereich","Zugangswege zu Technik und Installationen","Bodenflächen"],["Technische Anlagen nicht umstellen oder öffnen","Keine Leitungen, Schalter oder Geräte verändern"],["Flucht- und Wartungswege jederzeit frei und sicher halten."]);
 }
 else if(/sichtbaren staub entfernen/.test(t)){
   set("Sichtbaren Staub im Technikraum gezielt von den zugänglichen, nicht-technischen Flächen entfernen.",["zugängliche Boden- und Ablageflächen","sichtbare Staubablagerungen","Ecken und Randbereiche"],["Keine technischen Geräte öffnen","Keine Kabel, Leitungen oder Installationen auseinandernehmen"],["Nur trockene bzw. sehr schonende Reinigung in der Nähe technischer Komponenten; Sicherheit hat Vorrang."]);
 }
 else if(/keine technischen komponenten öffnen/.test(t)){
   set("Diese Aufgabe ist als Sicherheitsregel gedacht: technische Geräte, Verkleidungen und Installationen geschlossen lassen und nur die ausdrücklich vorgesehenen äußeren Flächen reinigen.",["sichtbare Außenflächen technischer Bereiche","Zugangswege und Bodenflächen"],["Keine Geräte oder Verkleidungen öffnen","Keine Leitungen, Anschlüsse oder Sicherungen verändern"],["Bei Wartungs- oder Reparaturbedarf eine fachkundige Person bzw. den Hersteller einbeziehen."]);
 }
 else if(/schuhe|jacken|taschen|kleidung/.test(t)){
   set("Die genannten Kleidungs- bzw. Garderobengegenstände übersichtlich ordnen und wieder an ihren vorgesehenen Platz legen oder hängen.",[roomLabel,"betroffene Kleidungs-/Garderobengegenstände","vorgesehene Ablage"],["Keine Dinge ohne Prüfung entsorgen","Keine anderen Räume automatisch neu ordnen"],["Alltagstaugliche Ordnung vor Perfektion; empfindliche Materialien entsprechend lagern."]);
 }
 else if(/boden/.test(t)){
   set("Die zugängliche Bodenfläche im genannten Bereich gründlich von sichtbarem Schmutz befreien und passend zum Bodenbelag reinigen.",["Bodenfläche","Kanten und Ecken","sichtbare Flecken"],["Keine anderen Räume automatisch mitreinigen","Keine schweren Möbel unsicher verschieben"],["Reinigungsmethode und Feuchtigkeit an den Bodenbelag anpassen."]);
 }
 else if(/staub|abstauben|entstauben/.test(t)){
   set("Die genannten Oberflächen gründlich und schonend von Staub befreien, einschließlich zugänglicher Kanten, Ecken und sichtbarer Ablagerungen.",[roomLabel,"genannte Oberfläche bzw. Gegenstand","Kanten und Ecken"],["Keine Schränke oder Schubladen automatisch ausräumen","Keine angrenzenden Bereiche ohne Anlass mitmachen"],dryCare);
 }
 else if(/ordnen|sortieren|leeren/.test(t)){
   set("Den genannten Bereich bzw. Gegenstand übersichtlich ordnen: Dinge kurz prüfen, zusammengehörige Stücke gruppieren und wieder an ihren vorgesehenen Platz legen.",[roomLabel,"genannter Gegenstand bzw. Ablage","zugehöriger Aufbewahrungsplatz"],["Keine Dinge ohne Prüfung entsorgen","Keine komplette Raum- oder Schrankinventur"],["Eine einfache, im Alltag haltbare Ordnung herstellen."]);
 }
 else if(/reinigen|abwischen|auswischen/.test(t)){
   set("Den genannten Gegenstand bzw. Bereich gründlich von sichtbarem Staub, Schmutz und Gebrauchsspuren befreien und sauber hinterlassen.",[roomLabel,"genannter Gegenstand bzw. Oberfläche","Kanten und zugängliche Ecken"],["Keine angrenzenden Bereiche automatisch mitreinigen","Keine technischen Teile öffnen"],dryCare);
 }
 else if(/kontrollieren|prüfen/.test(t)){
   set("Den genannten Bereich gezielt kontrollieren und auf sichtbaren Schmutz, Auffälligkeiten oder Handlungsbedarf prüfen.",[roomLabel,"genannter Gegenstand bzw. Bereich","auffällige Stellen"],["Keine Reparatur ohne konkreten Befund","Keine unnötige Komplettreinigung"],["Auffällige Schäden oder technische Probleme nicht eigenmächtig zerlegen, sondern fachgerecht beurteilen lassen."]);
 }
 else {
   // Bewusster, hilfreicher Fallback statt der bisherigen sehr allgemeinen Ein-Zeilen-Info.
   set(`Die Aufgabe „${raw}“ im genannten Bereich vollständig, aber im vorgesehenen Umfang erledigen und den Bereich anschließend ordentlich hinterlassen.`,
     [roomLabel,place?"genauer Ort: "+place:"betroffene Oberfläche bzw. Gegenstand","direkt zugängliche Kanten und Ecken"],
     ["Keine anderen Räume oder Aufgaben automatisch hinzufügen","Keine Gegenstände ohne Prüfung entsorgen","Keine technischen Komponenten öffnen"],
     ["Material-, Hersteller- und Sicherheitshinweise beachten; lieber gezielt und sorgfältig als unnötig umfangreich arbeiten."]);
 }
 return {what,belongs,not,care};
}
function openDetail(x){const d=definition(x),hist=completionHistoryFor(x);document.getElementById("detailMeta").textContent=[x.room,x.area].filter(Boolean).join(" · ")+" · "+(isDailyTask(x)?"Fälligkeit: täglich":"nächster Termin: "+nextDueLabel(x));document.getElementById("detailTitle").textContent=x.text;document.getElementById("detailContent").innerHTML=`<div class="detailBox"><b>Zuletzt erledigt</b><div>${hist.length?hist.map((v,i)=>`<div style="margin-top:6px"><b>${i===0?"Letztes Mal":"Davor"}:</b> ${esc(formatDateKey(v))}</div>`).join(""):"Noch keine Erledigung gespeichert."}</div><div class="detailBox"><b>Was mache ich?</b><div>${esc(d.what)}</div></div><div class="detailBox"><b>Was gehört dazu?</b><ul>${d.belongs.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div><div class="detailBox"><b>Was gehört nicht dazu?</b><ul>${d.not.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div><div class="detailBox"><b>Worauf achten?</b><ul>${d.care.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`;document.getElementById("detailOverlay").classList.add("open")}
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
function taskRow(x,opts={}){const el=document.createElement("div");el.className="task"+(isDone(x)?" done":"");const showDue=!!opts.showDue,hideRoom=!!opts.hideRoom,showPullToday=!!opts.showPullToday;const showManage=opts.showManage!==false&&x.source!=="extra";const due=nextDueLabel(x),planned=plannedDateForTask(x);const plannedText=planned?planned.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}):"—";const plannedDiff=planned?Math.round((planned-nextDue(x))/86400000):null;const shiftNote=plannedDiff!==null&&plannedDiff!==0?` <span class="small">(${plannedDiff>0?"+":""}${plannedDiff} ${Math.abs(plannedDiff)===1?"Tag":"Tage"})</span>`:"";el.innerHTML=`<div class="swipeBg"><span class="swipeLabel">✓ Erledigt</span></div><div class="taskContent"><button class="check">${isDone(x)?"✓":""}</button><div class="taskMain"><div class="taskName">${esc(x.text)}</div>${!hideRoom?`<div class="meta">${esc(x.room)}${x.area?" · "+esc(x.area):""}</div>`:""}${showDue&&!isDone(x)?`<div class="meta nextDue">Fällig: <b>${esc(due)}</b></div><div class="meta plannedDate">Geplant: <b>${esc(plannedText)}</b>${shiftNote}</div>`:""}${isDone(x)?`<div class="meta nextDue">${isDailyTask(x)?"Fälligkeit: <b>täglich</b>":`Nächster Termin: <b>${esc(due)}</b>`}</div>`:""}</div><div class="taskButtons">${showPullToday&&!isDone(x)?`<button class="iconBtn pullToday" title="Aufgabe vorziehen">⚡</button>`:""}${showManage?`<button class="iconBtn todayEdit" title="Aufgabe bearbeiten">✏️</button><button class="iconBtn todayDelete" title="Aufgabe löschen">🗑️</button>`:""}<button class="iconBtn info">ⓘ</button></div></div>`;el.querySelector(".check").onclick=()=>toggleTask(x);el.querySelector(".info").onclick=()=>openDetail(x);const pull=el.querySelector(".pullToday");if(pull)pull.onclick=()=>{pullCatalogTaskToday(x);render()};const edit=el.querySelector(".todayEdit");if(edit)edit.onclick=e=>{e.stopPropagation();openEditor(x,{preservePlan:true,returnTo:"today"})};const del=el.querySelector(".todayDelete");if(del)del.onclick=e=>{e.stopPropagation();if(!confirm(`„${x.text}“ wirklich aus dem Aufgabenkatalog löschen?`))return;state.catalogDeleted=state.catalogDeleted||{};state.catalogDeleted[x.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==x.key);delete state.catalogEdits?.[x.key];save();refreshCatalog();render();toast("Aufgabe gelöscht")};swipeRow(el,x);return el}

function focusRoomMatches(x,room){
  if(!x || !room)return false;
  // Normal catalog tasks belong directly to the selected room.
  if(x.room===room && !x.window)return true;
  // Fenster und Raffstores gehören beide zum echten Raum.
  if(x.window || x.raffstore)return x.room===room;
  return false;
}
function roomFocusTasks(room,d=today){
  if(!room)return [];
  const day=dayKey(d);
  // “Heute einen Raum machen” is deliberately a room view, not a second
  // planner. It must show EVERY currently open catalog task belonging to the
  // selected room, regardless of its due/planned date or when it was last
  // completed. The previous “recent” filter incorrectly hid perfectly valid
  // catalog tasks such as “Kopfteil abstauben”.
  return CATALOG
    .filter(x=>focusRoomMatches(x,room) && !isDone(x))
    .filter(x=>!state.todayExtras.some(e=>e.date===day && (e.sourceKey===taskId(x)||e.canonical===taskId(x))))
    .sort((a,b)=>nextDue(a,d)-nextDue(b,d)||taskWeight(b)-taskWeight(a)||String(a.text).localeCompare(String(b.text),"de"));
}
function renderRoomFocus(main, tasks){
  const card=document.createElement("div");
  card.className="card roomFocus";
  const rooms=[...new Set(CATALOG.filter(x=>x && !x.window && x.source!=="window").map(x=>x.room).filter(r=>r && r!=="Ganzes Haus" && r!=="Rotationsaufgabe" && r!=="Keller allgemein" && !String(r).startsWith("Fenster ")))].sort((a,b)=>a.localeCompare(b,"de"));
  const day=dayKey(today), selected=state.roomFocus?.[day]||"";
  card.innerHTML=`<div class="topline"><div><b>🏡 Heute einen Raum machen</b><div class="small">Freiwillig: Wähle einen Raum und sieh alle offenen Aufgaben dieses Raumes – auch wenn sie regulär erst später fällig wären.</div></div></div><select class="roomSelect" id="roomSelect"><option value="">Raum auswählen …</option>${rooms.map(r=>`<option value="${esc(r)}"${r===selected?" selected":""}>${esc(r)}</option>`).join("")}</select>`;
  main.appendChild(card);
  const select=card.querySelector("#roomSelect");
  const renderSelected=()=>{
    const room=select.value;
    const old=main.querySelector(".roomFocusTasks"); if(old)old.remove();
    if(!room)return;
    state.roomFocus=state.roomFocus||{};
    const open=roomFocusTasks(room,today);
    const sec=document.createElement("section");sec.className="roomFocusTasks";
    const heading=document.createElement("div");heading.className="sectionTitle";heading.textContent=`${room} · heute freiwillig`;sec.appendChild(heading);
    if(!open.length){const empty=document.createElement("div");empty.className="card empty";empty.textContent="In diesem Raum ist gerade nichts Sinnvolles offen. 🥰";sec.appendChild(empty)}
    else {
      // All open tasks are shown together under the selected room. They can also be pulled into the real Today plan.
      open.forEach(x=>sec.appendChild(taskRow(x,{showDue:true,hideRoom:true,showPullToday:true})));
    }
    main.appendChild(sec);
  };
  select.onchange=()=>{
    state.roomFocus=state.roomFocus||{};
    state.roomFocus[day]=select.value||"";
    save();
    renderSelected();
  };
  if(selected)renderSelected();
}

function renderToday(){
  purgePostponed();
  const main=document.getElementById("main");
  const sunday=today.getDay()===0;
  const tasks=plannedToday(),done=tasks.filter(x=>isDone(x)).length;
  main.innerHTML=`<div class="card hero"><div class="topline"><div><b>${esc(dateLabel())}</b><div class="small">${esc(themeFor(today))}</div></div><span class="badge">🧸 ${state.chaos?"Heute leicht":(sunday?"Haushaltsfrei":"Normal")}</span></div><div class="progress"><i style="width:${tasks.length?Math.round(done/tasks.length*100):0}%"></i></div><div class="small">${done} von ${tasks.length} Aufgaben erledigt</div><div class="actions"><button class="btn" id="energy">⚡ Ich habe Energie</button><button class="btn" id="chaos">🧸 Heute leicht</button></div></div>`;
  if(sunday){
    const note=document.createElement("div");note.className="card";note.innerHTML=`<div class="celebrate">🌿 Sonntag = haushaltsfrei.</div><div class="small">Heute gibt es keinen festen Tagesplan. Wenn du trotzdem Lust auf einen Raum hast, kannst du ihn unten freiwillig öffnen.</div>`;main.appendChild(note);
  }
  // Regular Today tasks: daily routines and scheduled tasks are rendered here
  // before the collapsed summary sections. Keep this as the authoritative
  // visible task list; V187 accidentally omitted this block.
  const groups={};
  for(const x of tasks.filter(x=>!isDone(x)))(groups[x.group||groupFor(x)]??=[]).push(x);
  for(const [g,arr] of Object.entries(groups)){
    const sec=document.createElement("section");
    sec.innerHTML=`<div class="sectionTitle">${esc(g)}</div>`;
    arr.forEach(x=>sec.appendChild(taskRow(x)));
    main.appendChild(sec);
  }

  // Erledigt stays before the optional room-focus area, and both collapsible
  // UI sections are intentionally transient: they are not persisted across
  // app restarts or tab changes.
  const completedMap=new Map();
  const completionId=(x)=>{
    if(x?.source==="extra") return String(x.sourceKey||x.canonical||taskId(x));
    return String(x?.sourceKey||taskId(x));
  };
  for(const x of tasks)if(isDone(x))completedMap.set(completionId(x),x);
  for(const x of CATALOG)if(isDone(x) && !isPostponed(x))completedMap.set(completionId(x),x);
  for(const e of (state.todayExtras||[]).filter(e=>e.date===dayKey(today) && isDone({...e,key:e.id,source:"extra"}))){
    const extra={...e,key:e.id,source:"extra",group:"Heute zusätzlich"};
    const id=completionId(extra);
    if(!completedMap.has(id))completedMap.set(id,extra);
  }
  const completed=[...completedMap.values()];
  if(completed.length){
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<div class="topline"><b>✓ Erledigt (${completed.length})</b><button class="btn" id="co">${state.completedOpen?"Ausblenden":"Anzeigen"}</button></div>`;
    if(state.completedOpen)completed.forEach(x=>card.appendChild(taskRow(x)));
    main.appendChild(card);
    card.querySelector("#co").onclick=()=>{state.completedOpen=!state.completedOpen;render()};
  }

  // Room focus remains above the optional "Später" log so that Später is
  // visually the final section of Today.
  renderRoomFocus(main,tasks);

  // “Später” is a same-day action log, not a second scheduling system. It is
  // deliberately the LAST section in Today. Its expanded/collapsed state is
  // transient and resets when the user changes tabs or restarts the app.
  const postponedToday=postponedTodayEntries();
  if(postponedToday.length){
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<div class="topline"><b>↩️ Später (${postponedToday.length})</b><button class="btn" id="po">${state.postponedOpen?"Ausblenden":"Anzeigen"}</button></div>`;
    const body=document.createElement("div");
    body.dataset.postponedBody="1";
    body.style.display=state.postponedOpen?"":"none";
    postponedToday.forEach(x=>{
      const row=document.createElement("div");
      row.className="result";
      row.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room||"")}${x.area?" · "+esc(x.area):""} · verschoben heute</div><div class="meta"><strong>Fällig:</strong> ${esc(nextDueLabel(x))}</div><div class="meta"><strong>Geplant:</strong> ${esc(formatDateKey(x.postponedUntil))}</div></div><button class="btn" data-reopen="1">Wieder öffnen</button>`;
      row.querySelector('[data-reopen="1"]').onclick=()=>restorePostponed(x._postponedId||taskId(x));
      body.appendChild(row);
    });
    card.appendChild(body);
    main.appendChild(card);
    card.querySelector("#po").onclick=()=>{
      state.postponedOpen=!state.postponedOpen;
      render();
    };
  }
  // The “Später” section above is intentionally scoped to today's action date.
  // Its stored planned date is never changed by the midnight reset.
  main.querySelector("#energy").onclick=showEnergy;
  main.querySelector("#chaos").onclick=()=>{state.chaos=!state.chaos;save();render()};
}
function showEnergy(){
  const main=document.getElementById("main");
  let box=document.getElementById("energyBox");
  if(!box){box=document.createElement("div");box.id="energyBox";box.className="card";main.insertBefore(box,main.children[1]||null)}
  const day=dayKey();
  if(state.energySkipDay!==day){state.energySkipDay=day;state.energySeen=[];state.energyOffset=0}
  const todayIds=new Set(plannedToday().filter(x=>x.source!=="daily"&&x.source!=="extra").map(taskId));
  const extraIds=new Set(state.todayExtras.filter(e=>e.date===day).map(e=>e.sourceKey||e.key||taskId(e)));
  const base=CATALOG.filter(x=>x.area!=="Alltag"&&!x.window&&!isDone(x)&&!isPostponed(x)&&!todayIds.has(taskId(x))&&!extraIds.has(taskId(x))&&!recent(x,today,7)).sort((a,b)=>nextDue(a)-nextDue(b)||String(a.id).localeCompare(String(b.id)));
  const seen=new Set(Array.isArray(state.energySeen)?state.energySeen:[]);
  let candidates=[];
  if(base.length){
    // Always prefer tasks not shown earlier today. Only reuse old suggestions
    // when there are fewer than three genuinely new candidates available.
    const fresh=base.filter(x=>!seen.has(taskId(x)));
    const pool=fresh.length>=3?fresh:base;
    const offset=((Number(state.energyOffset)||0)%pool.length+pool.length)%pool.length;
    const count=Math.min(3,pool.length);
    for(let i=0;i<count;i++){
      const x=pool[(offset+i)%pool.length];
      if(!candidates.some(y=>taskId(y)===taskId(x)))candidates.push(x);
    }
  }
  box.innerHTML=`<div class="topline"><div><b>⚡ Ich habe Energie</b><div class="small">Nur wenn du möchtest – diese Aufgaben werden heute zusätzlich vorgezogen.</div></div><button class="btn" id="energyOther">↻ Andere 3</button></div>`;
  if(!candidates.length)box.innerHTML+=`<div class="empty">Gerade gibt es keine sinnvolle Zusatzaufgabe. 🥰</div>`;
  candidates.forEach(x=>{
    const r=document.createElement("div");r.className="result";
    r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)}</div><div class="meta"><strong>Fällig:</strong> ${esc(nextDueLabel(x))}</div><div class="meta"><strong>Geplant:</strong> ${esc(isDailyTask(x)?"täglich":formatDateKey(dayKey(plannedDateForTask(x))))}</div></div><button class="btn primary">Heute vorziehen</button>`;
    r.querySelector("button").onclick=()=>{
      state.todayExtras.push({id:`extra|${day}|${uid()}`,date:day,text:x.text,room:x.room,area:x.area,description:x.description,source:"extra"});
      state.energySeen=[...(state.energySeen||[]),taskId(x)].slice(-200);
      save();render();showEnergy();
    };
    box.appendChild(r);
  });
  box.querySelector("#energyOther").onclick=()=>{
    if(base.length>0){
      const ids=candidates.map(taskId);
      state.energySeen=[...(state.energySeen||[]),...ids].slice(-200);
      state.energyOffset=0;
      save();
      showEnergy();
    }
  };
}
function openEditor(x=null,opts={}){
 const edit=!!x,old=x||{},daily=edit&&isDailyTask(old),preservePlan=!!opts.preservePlan,returnTo=opts.returnTo||"catalog";
 const rooms=[...new Set([...Object.keys(SEED_ROOMS),...state.custom.map(c=>c.room).filter(Boolean)])].sort();
 const overlay=document.createElement("div");overlay.className="catalogEditorOverlay";overlay.id="editor";
 const dailyDescription=daily?(old.description||definition(old).what):"";
 overlay.innerHTML=`<div class="catalogEditorSheet"><div class="sheetTop"><div><div class="small">${edit?"Aufgabe bearbeiten":"Neue Aufgabe"}</div><h2>${edit?"✏️ Aufgabe ändern":"＋ Aufgabe hinzufügen"}</h2></div><button class="close" id="x">×</button></div><label class="editorLabel">Aufgabe<input id="t" value="${esc(old.text||"")}"></label><label class="editorLabel">Raum<input id="r" list="rooms" value="${esc(old.room||"")} "><datalist id="rooms">${rooms.map(r=>`<option value="${esc(r)}">`).join("")}</datalist></label><label class="editorLabel">Bereich / Etage<input id="a" value="${esc(old.area||"")}"></label><label class="editorLabel">Genauer Ort<input id="p" value="${esc(old.place||"")}"></label><label class="editorLabel">Beschreibung / genaue Durchführung<textarea id="d">${esc(dailyDescription||old.description||"")}</textarea></label>${daily?`<div class="editorHint">Diese Aufgabe bleibt eine tägliche Aufgabe. Fälligkeit und Wiederholung bleiben automatisch „täglich“ und können hier nicht verändert werden.</div>`:`<div class="editorTwo"><label class="editorLabel">Erster Fälligkeitstermin<input id="s" type="date" value="${esc(state.manualDates?.[old.key]||state.catalogDates?.[old.key]||old.start||iso(nextDue(old)))}" ${preservePlan?"disabled":""}></label><label class="editorLabel">Periode (Tage)<input id="i" type="number" min="1" value="${old.interval||catalogInterval(old)||60}" ${preservePlan?"disabled":""}></label></div><div class="editorHint">${preservePlan?"Beim Bearbeiten aus „Heute“ bleiben Fälligkeit, Intervall und der bestehende Geplant-Termin unverändert.":"Dieser Termin ist die verbindliche Fälligkeit. Der intelligente Planer darf flexible Aufgaben nur auf einen geeigneten Tag verschieben; die Fälligkeit bleibt im Katalog sichtbar."}</div>`}<div class="editorActions"><button class="btn" id="cancel">Abbrechen</button><button class="btn primary" id="saveTask">${edit?"Änderungen speichern":"Aufgabe speichern"}</button></div>${edit?`<button class="deleteBtn" id="del">🗑️ Aufgabe aus dem Katalog löschen</button>`:""}</div>`;
 document.body.appendChild(overlay);
 const close=()=>overlay.remove();overlay.querySelector("#x").onclick=close;overlay.querySelector("#cancel").onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};
 overlay.querySelector("#saveTask").onclick=()=>{
   const text=overlay.querySelector("#t").value.trim(),room=overlay.querySelector("#r").value.trim(),area=overlay.querySelector("#a").value.trim(),place=overlay.querySelector("#p").value.trim(),description=overlay.querySelector("#d").value.trim();
   if(!text||!room||!area)return toast("Bitte Aufgabe, Raum und Bereich ausfüllen ❤️");
   if(edit){
     const prior=state.catalogEdits?.[old.key]||{};
     if(daily){
       state.catalogEdits[old.key]={...prior,text,room,area,place,description};
     }else{
       const start=overlay.querySelector("#s").value,interval=Math.max(1,Number(overlay.querySelector("#i").value)||60);
       if(!start)return toast("Bitte Aufgabe, Raum, Bereich und Termin ausfüllen ❤️");
       state.catalogEdits[old.key]={text,room,area,place,description,start:preservePlan?(state.manualDates?.[old.key]||state.catalogDates?.[old.key]||old.start||iso(nextDue(old))):start,interval:preservePlan?(old.interval||catalogInterval(old)||60):interval,manualStart:true};
       if(!preservePlan){state.manualDates=state.manualDates||{};state.catalogDates=state.catalogDates||{};state.manualDates[old.key]=start;state.catalogDates[old.key]=start;}
       if(old.source==="custom"){const c=state.custom.find(c=>(c.key||`custom|${c.id}`)===old.key);if(c)Object.assign(c,{text,room,area,place,description,...(preservePlan?{}:{start,interval})})}
     }
   }else{
     const start=overlay.querySelector("#s")?.value,interval=Math.max(1,Number(overlay.querySelector("#i")?.value)||60);if(!start)return toast("Bitte Aufgabe, Raum, Bereich und Termin ausfüllen ❤️");
     const id=`custom|${uid()}`;state.custom.push({id,key:id,text,room,area,place,description,start,interval,manualStart:true});state.manualDates=state.manualDates||{};state.manualDates[id]=start;state.catalogDates=state.catalogDates||{};state.catalogDates[id]=start;
   }
   if(edit&&preservePlan&&!daily){const currentPlan=plannedDateForTask(old);if(currentPlan){state.plannedOverrides=state.plannedOverrides||{};state.plannedOverrides[old.key]=dayKey(currentPlan)}}
   save();refreshCatalog();close();(returnTo==="today"?renderToday():renderCatalog());toast(edit?"Aufgabe geändert ❤️":"Neue Aufgabe hinzugefügt ❤️");
 };
 if(edit)overlay.querySelector("#del").onclick=()=>{if(!confirm(`„${old.text}“ wirklich löschen?`))return;state.catalogDeleted=state.catalogDeleted||{};state.catalogDeleted[old.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==old.key);save();refreshCatalog();close();(returnTo==="today"?renderToday():renderCatalog());toast("Aufgabe gelöscht")};
}
function pullCatalogTaskToday(x){
  const day=dayKey(today);
  if(today.getDay()===0 && !state.sundayOptional[day]){
    state.sundayOptional[day]=true;
  }
  const existing=state.todayExtras.some(e=>e.date===day && (e.sourceKey===x.key || e.text===x.text && e.room===x.room));
  if(existing){toast("Diese Aufgabe ist heute schon eingeplant ❤️");return;}
  state.todayExtras.push({id:`extra|${day}|${uid()}`,date:day,text:x.text,room:x.room,area:x.area,place:x.place||"",description:x.description||"",source:"extra",sourceKey:x.key,canonical:x.key,interval:x.interval,start:x.start,manual:true});
  state.energySeen=[...(state.energySeen||[]),taskId(x)].slice(-200);
  save();
  toast(`„${x.text}“ für heute vorgezogen ❤️`);
}
function renderCatalog(){const main=document.getElementById("main");main.innerHTML=`<div class="card"><div class="topline"><div><h2 style="margin:0">📚 Aufgabenkatalog</h2><div class="small">Hier ist die vollständige Masterliste – jede Aufgabe kann bearbeitet oder gelöscht werden.</div></div><button class="btn primary" id="new">＋ Aufgabe hinzufügen</button></div><input class="search" id="q" placeholder="Aufgabe, Raum, Bereich, Ort suchen …" style="margin-top:14px"><div id="res"></div></div>`;const q=main.querySelector("#q"),res=main.querySelector("#res");q.value=catalogSearchTerm||"";main.querySelector("#new").onclick=()=>openEditor();const draw=()=>{catalogSearchTerm=q.value;const term=q.value.trim().toLowerCase(),arr=CATALOG.filter(x=>!isInvalidLegacyTask(x)&&(!term||[x.text,x.room,x.area,x.place,x.description].join(" ").toLowerCase().includes(term)));const plan=buildIntelligentPlan();const plannedMap=new Map();for(const x of arr){const d=plannedDateForTask(x);plannedMap.set(taskId(x),d instanceof Date?d:null);}arr.sort((a,b)=>{const da=plannedMap.get(taskId(a))||null,db=plannedMap.get(taskId(b))||null;if(da&&db){const diff=da.getTime()-db.getTime();if(diff)return diff;}else if(da&&!db)return -1;else if(!da&&db)return 1;return String(a.text||"").localeCompare(String(b.text||""),"de");});res.innerHTML=`<div class="small" style="padding:10px 4px">${arr.length} Aufgaben</div>`;arr.forEach(x=>{const r=document.createElement("div");r.className="result";const pd=plannedMap.get(taskId(x))||null;const due=nextDue(x);const ptxt=x.source==="daily"?"täglich":(pd?pd.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}):"—");const diff=(x.source==="daily"||!pd||!due)?null:Math.round((pd-due)/86400000);const note=diff!==null&&diff!==0?` <span class="small">(${diff>0?"+":""}${diff} ${Math.abs(diff)===1?"Tag":"Tage"})</span>`:"";r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · ${esc(x.area)}${x.place?" · "+esc(x.place):""}</div><div class="meta nextDue">Fällig: <b>${esc(nextDueLabel(x))}</b></div><div class="meta plannedDate">Geplant: <b>${esc(ptxt)}</b>${note}</div></div><div class="catalogActions"><button class="iconBtn edit" title="Bearbeiten">✏️</button><button class="iconBtn remove" title="Löschen">🗑️</button>${x.source!=="daily"?`<button class="iconBtn pullToday" title="Heute vorziehen">⚡</button>`:""}<button class="iconBtn info" title="Info">ⓘ</button></div>`;r.querySelector(".edit").onclick=()=>openEditor(x);r.querySelector(".remove").onclick=()=>{if(confirm(`„${x.text}“ wirklich löschen?`)){state.catalogDeleted[x.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==x.key);save();refreshCatalog();renderCatalog();toast("Aufgabe gelöscht")}};const pull=r.querySelector(".pullToday");if(pull)pull.onclick=()=>pullCatalogTaskToday(x);r.querySelector(".info").onclick=()=>openDetail(x);res.appendChild(r)})};q.oninput=draw;draw()}
function renderWeek(){const main=document.getElementById("main"),base=addDays(today,-((today.getDay()||7)-1));main.innerHTML=`<div class="card"><h2 style="margin-top:0">Diese Woche</h2><p class="small">Wochenanker sind Themen, keine Pflicht, jeden Raum komplett zu schaffen.</p><div class="weekgrid" id="wg"></div></div>`;const wg=main.querySelector("#wg");for(let i=0;i<7;i++){const d=addDays(base,i),tasks=scheduledForDate(d),el=document.createElement("div");el.className="daycard"+(sameDay(d,today)?" today":"")+(d.getDay()===0?" free":"");el.innerHTML=`<div class="dayname">${new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit"}).format(d)}</div><div class="daytheme">${esc(themeFor(d))}</div><div class="small" style="margin-top:8px">${tasks.length} sinnvoll eingeplante Aufgaben</div>`;wg.appendChild(el)}}
function renderCalendar(){const main=document.getElementById("main"),year=state.calendarYear||today.getFullYear(),months=["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];main.innerHTML=`<div class="card"><div class="yearIntro"><div><div class="small">Jahresvorschau</div><div class="yearTitle">📅 ${year}</div></div><div class="yearNav"><button id="prev">‹</button><button id="cur">Dieses Jahr</button><button id="next">›</button></div></div><div class="calendarLegend"><span>🟢 erledigt</span><span>☀️ Sonntag frei</span><span>Die Zahl = sinnvoll eingeplante Aufgaben · ✨ = Tag geschafft</span></div><div class="monthGrid" id="mg"></div><div id="detailDay"></div></div>`;const mg=main.querySelector("#mg");for(let m=0;m<12;m++){const card=document.createElement("div");card.className="monthCard";card.innerHTML=`<div class="monthName">${months[m]}</div><div class="weekdays">${["Mo","Di","Mi","Do","Fr","Sa","So"].map(x=>`<span>${x}</span>`).join("")}</div><div class="monthDays"></div>`;const grid=card.querySelector(".monthDays"),first=new Date(year,m,1,12),offset=(first.getDay()+6)%7;for(let z=0;z<offset;z++)grid.appendChild(document.createElement("span"));const count=new Date(year,m+1,0).getDate();for(let n=1;n<=count;n++){const d=new Date(year,m,n,12),tasks=calendarTasksForDate(d),el=document.createElement("button");const completed=!!state.completedDays[dayKey(d)];el.className="yearDay"+(d.getDay()===0?" free":"")+(sameDay(d,today)?" today":"")+(completed?" completed":"");el.innerHTML=`<span class="dayNum">${n}</span>${tasks.length?`<span class="dayMark">${tasks.length}</span>`:""}${completed?`<span class="dayComplete" title="Tag geschafft">✨</span>`:""}`;el.onclick=()=>showCalendarDay(d,tasks);grid.appendChild(el)}mg.appendChild(card)}main.querySelector("#prev").onclick=()=>{state.calendarYear=year-1;save();renderCalendar()};main.querySelector("#next").onclick=()=>{state.calendarYear=year+1;save();renderCalendar()};main.querySelector("#cur").onclick=()=>{state.calendarYear=today.getFullYear();save();renderCalendar()}}
function showCalendarDay(d,tasks){const box=document.getElementById("detailDay"),by={};tasks.forEach(x=>(by[x.room]??=[]).push(x));const completed=!!state.completedDays[dayKey(d)];box.innerHTML=`<div class="yearDetail"><h3>${esc(dateLabel(d))}${completed?` ✨`:``}</h3><div class="small">${esc(themeFor(d))}</div>${completed?`<div class="completedDayBadge">✨ <b>Tag geschafft!</b><br><span class="small">Alle geplanten Aufgaben dieses Tages wurden erledigt.</span></div>`:""}${tasks.length?Object.entries(by).map(([r,arr])=>`<div class="detailTasks"><b>${esc(r)} · ${arr.length} geplante Aufgaben</b>${arr.map(x=>`<div class="detailTask">• ${esc(x.text)}<br><span class="small">Geplant am: ${esc(d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}))}</span></div>`).join("")}</div>`).join(""):`<div class="empty">Keine fest eingeplanten Aufgaben.</div>`}</div>`;box.scrollIntoView({behavior:"smooth",block:"nearest"})}

function syncCurrentDay(){
 const now=new Date();now.setHours(12,0,0,0);
 const nk=dayKey(now);
 if(dayKey(today)!==nk){
   today=now;
   // Old same-day UI state must never carry into a new calendar day. The
   // postponed records themselves are intentionally retained because their
   // postponedUntil date is the authoritative plan.
   state.completedOpen=false;
   state.postponedOpen=false;
   state.energySkipDay="";
   state.energySeen=[];
   state.energyOffset=0;
   save();
 }
}
function render(){syncCurrentDay();document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===selectedTab));if(selectedTab==="today")renderToday();else if(selectedTab==="week")renderWeek();else if(selectedTab==="calendar")renderCalendar();else renderCatalog()}
setInterval(()=>{const before=dayKey(today);syncCurrentDay();if(before!==dayKey(today))render()},60000);
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{selectedTab=b.dataset.tab;state.completedOpen=false;state.postponedOpen=false;render()});document.getElementById("closeDetail").onclick=()=>document.getElementById("detailOverlay").classList.remove("open");document.getElementById("detailOverlay").onclick=e=>{if(e.target.id==="detailOverlay")e.currentTarget.classList.remove("open")};
render();
