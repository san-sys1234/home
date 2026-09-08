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
// Auch die früheren „Keller allgemein“-Punkte sind jetzt direkt in die jeweiligen Kellerräume integriert.
for (const room of ["Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum","Flur KG"]) {
  const row=catalogSeed.find(r=>r[0]===room);
  if(row){
    for(const t of ["Spinnweben entfernen","Sichtbare Ablagerungen entfernen","Ecken kontrollieren"]) if(!row[2].includes(t)) row[2].push(t);
  }
}

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
function defaultState(){return {done:{},lastDone:{},completionHistory:{},dailyDone:{},postponed:{},custom:[],catalogEdits:{},catalogDates:{},manualDates:{},catalogDeleted:{},todayExtras:[],completedDays:{},completedOpen:false,postponedOpen:false,chaos:false,sundayOptional:{},energyOffset:0,energySkipDay:"",energySeen:[],calendarYear:new Date().getFullYear(),todayPlanLock:{},todayPlanSnapshot:{}}}
function migrateWCRoomNames(s){
 if(!s)return;
 const renameKey=k=>String(k||"").replace(/\|WC(?=\||$)/g,"|Eltern-WC");
 const maps=["done","lastDone","postponed","catalogEdits","catalogDates","manualDates","catalogDeleted"];
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
 s.todayExtras=Array.isArray(s.todayExtras)?s.todayExtras:[];s.completedDays=s.completedDays||{};s.todayPlanLock=s.todayPlanLock&&typeof s.todayPlanLock==="object"?s.todayPlanLock:{};s.todayPlanSnapshot=s.todayPlanSnapshot&&typeof s.todayPlanSnapshot==="object"?s.todayPlanSnapshot:{};s.energyOffset=Number.isFinite(Number(s.energyOffset))?Number(s.energyOffset):0;s.energySkipDay=s.energySkipDay||"";s.energySeen=Array.isArray(s.energySeen)?s.energySeen:[];s.roomFocus=s.roomFocus&&typeof s.roomFocus==="object"?s.roomFocus:{};
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
function toggleTask(x){
  // Daily routines are independent calendar-day occurrences. Never touch the
  // normal done/lastDone recurrence maps when toggling one.
  if(isDailyTask(x)){
    const k=dayKey();
    state.dailyDone=state.dailyDone&&typeof state.dailyDone==="object"?state.dailyDone:{};
    state.dailyDone[k]=state.dailyDone[k]&&typeof state.dailyDone[k]==="object"?state.dailyDone[k]:{};
    if(state.dailyDone[k][taskId(x)]) delete state.dailyDone[k][taskId(x)];
    else state.dailyDone[k][taskId(x)]=true;
    save();render();
    return;
  }
  const base=x.source==="extra"?canonicalTaskFor(x):null;
  const target=base||x;
  if(isDone(x)){
    unmarkDone(target);delete state.lastDone[lastKey(target)];
    if(target!==x){unmarkDone(x);delete state.lastDone[lastKey(x)];}
  }else markDone(x);
  syncCompletedDay(today);save();render();
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
function buildCatalog(){const out=[];const add=(text,room,area,meta={})=>{const key=meta.key||`seed|${room}|${text}`;if(catalogDeleted(key))return;const e=editFor(key)||{};const savedDate=state.manualDates?.[key]||state.catalogDates?.[key]||e.start||meta.start||"";out.push({text:e.text??text,room:e.room??room,area:e.area??area,place:e.place??meta.place??"",description:e.description??meta.description??"",start:savedDate,manualStart:!!(state.manualDates?.[key]||state.catalogDates?.[key]||e.manualStart||meta.manualStart),interval:Number(e.interval??meta.interval??0)||0,key,source:meta.source||"seed",editable:meta.editable!==false,window:!!meta.window,windowKey:meta.windowKey,windowGroup:meta.windowGroup,seasonal:!!meta.seasonal,seasonalKey:meta.seasonalKey})};for(const [room,area,tasks] of catalogSeed){for(const text of tasks){if(/^(Fenster innen reinigen|Fenster außen reinigen, wenn sicher|Fensterbänke reinigen|Dichtungen kontrollieren|Vorhangstangen reinigen|Vorhänge nach Pflegeetikett reinigen|Raffstores nach Herstellerangabe reinigen)$/.test(text))continue;add(text,room,area,{key:`seed|${room}|${text}`})}}const roomText=new Set(out.map(x=>`${x.room}|${x.text}`));for(const r of ROTATIONS){for(const room of r.rooms||[]){const rk=`${room}|${r.text}`;if(roomText.has(rk))continue;add(r.text,room,r.area,{key:`rotation|${room}|${r.text}`,editable:true,source:"rotation",interval:r.interval});roomText.add(rk)}}for(const c of state.custom){const key=c.key||`custom|${c.id}`;if(catalogDeleted(key))continue;add(c.text,c.room,c.area,{...c,key,source:"custom",editable:true,start:c.start||c.date||"",interval:Number(c.interval||c.repeat||0)||60,place:c.place,description:c.description})}for(const w of WINDOW_TASKS)out.push(w);return out}
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
 return "v182|"+JSON.stringify(state.manualDates||{})+"|"+JSON.stringify(state.catalogDates||{})+"|"+CATALOG.length+"|"+JSON.stringify(state.lastDone||{})+"|"+JSON.stringify(state.catalogDeleted||{})+"|"+JSON.stringify(state.custom||[])+"|"+JSON.stringify(state.catalogEdits||{})+"|"+JSON.stringify(state.postponed||{})+"|"+JSON.stringify(state.todayPlanLock||{})+"|"+JSON.stringify(state.sundayOptional||{});
}
function plannerHorizon(){
 const start=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
 // The planner must be able to place EVERY active catalog task. A fixed
 // calendar end can leave long-interval tasks (e.g. annual tasks) without a
 // plan. Extend the horizon far enough beyond the furthest current due date
 // to guarantee a legal +/-30-day planning window.
 let end=fromKey("2027-12-31");
 for(const x of CATALOG){
   if(x.area==="Alltag"||isInvalidLegacyTask(x))continue;
   const due=nextDue(x,today);
   if(due instanceof Date && !Number.isNaN(due.getTime())){
     const candidate=addDays(due,30);
     if(candidate>end)end=candidate;
   }
 }
 return {start,end};
}
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
     const sameTheme=arr.some(y=>groupFor(y)===targetGroup);
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
       const sameTheme=arr.some(y=>groupFor(y)===groupFor(occ.x));
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
   if(x.area==="Alltag")continue;
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
     const used=arr._weight||0, sameTheme=arr.some(y=>groupFor(y)===groupFor(x));
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
   if(x.area==="Alltag")continue;
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
function plannedForDate(d){return buildIntelligentPlan().days.get(dayKey(d))||[]}
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
function calendarTasksForDate(d){const year=d.getFullYear();if(calendarCache.year!==year)calendarCache={year,days:new Map()};const k=iso(d);if(calendarCache.days.has(k))return calendarCache.days.get(k);const v=plannedForDate(d);calendarCache.days.set(k,v);return v}
function isDailyTask(x){return !!x&&(x.source==="daily"||String(x.key||"").startsWith("daily|")||String(x.id||"").startsWith("daily|"))}
function nextDueLabel(x){return isDailyTask(x)?"täglich":nextDue(x).toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"})}
function plannedDateForTask(x){
 const plan=buildIntelligentPlan(),id=taskId(x),due=nextDue(x,today);
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
       const used=arr._weight||0, sameTheme=arr.some(y=>groupFor(y)===groupFor(x));
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
 const tasks=plannedForDate(d);
 if(!tasks.length)return "✨ Leichter Haushalt";
 const scores={};
 for(const x of tasks){const g=groupFor(x);scores[g]=(scores[g]||0)+taskWeight(x);}
 return Object.entries(scores).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],"de"))[0]?.[0]||"✨ Leichter Haushalt";
}

function dailyTasks(){const out=[];for(const [group,tasks] of DAILY)for(const text of tasks)out.push({key:`daily|${text}`,id:`daily|${text}`,text,room:"Alltag",area:"Haushalt",group,source:"daily",editable:false});return out}
function recent(x,d=today,days=7){const l=lastDone(x);return !!l&&(d-fromKey(l))/86400000<days}
function groupFor(x){if(x.window)return "🪟 Fenster & Glas";if(x.raffstore)return "☀️ Sonnenschutz";if(["Wohnzimmer","Essbereich","Küche"].includes(x.room))return "EG · Wohnen, Essen & Küche";if(["Gäste-WC","Kinderbad","Bad","Eltern-WC"].includes(x.room))return "Bäder & WCs";if(["Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2","Saunaraum"].includes(x.room))return "OG · Schlafen, Kinder & Sauna";if(["Eingangsbereich","Garderobe","Flur","Büro","Abstellraum","Speis"].includes(x.room))return "EG · Nebenräume";if(BASEMENT.includes(x.room))return "Keller · "+x.room;return "Weitere Aufgaben"}
function weeklyCandidates(d){return plannedForDate(d).filter(x=>!x.window&&x.source!=="rotation").map(x=>({...x,group:groupFor(x)}))}
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

function definition(x){const t=x.text.toLowerCase();let what=x.description||x.text,belongs=[x.place?"Genauer Ort: "+x.place:"genau der genannte Bereich bzw. Gegenstand"],not=["Aufgaben anderer Räume nicht automatisch mitmachen","keine unnötige Perfektion"],care=["Material- und Herstellerangaben haben Vorrang."];if(x.window){
   what=x.description||(x.windowSide==="innen"?"Nur die Innenseite des genannten Fensters gründlich reinigen – inklusive Glas, Rahmen, Falz und Fensterbank.":"Nur die Außenseite des genannten Fensters gründlich reinigen – inklusive zugänglichem Glas, Rahmen und Falz; Außen-/Höhenarbeiten nur, wenn sicher möglich.");
   belongs=x.windowSide==="innen"?[x.place||"genanntes Fenster","Fensterglas innen","Rahmen und Falz","Fensterbank"]:[x.place||"genanntes Fenster","Fensterglas außen","zugänglicher Rahmen und Falz"];
   not=["Keine anderen Fenster des Hauses zusätzlich","Keine unsicheren Außen-/Höhenarbeiten"]
}else if(/kamin|asche|ruß|feuerraum|rost/.test(t)){what=x.description||"Den genannten Kaminbereich nur vollständig erkaltet und sicher reinigen.";not=["Heiße Asche oder Glut anfassen","Feuerraum bei brennendem Feuer reinigen"];care=["Herstellerangaben beachten; fachgerechte Kontrolle/Wartung nach Vorgabe."]}else if(/lichtschalter|steckdose/.test(t)){what=x.description||"Nur die zugängliche Außenfläche vorsichtig abwischen.";not=["Schalter/Steckdose öffnen","Flüssigkeit in Öffnungen bringen"]}else if(/sauna/.test(t)){what=x.description||"Saunaraum im genannten Umfang reinigen und gut lüften.";belongs=["Bänke","Boden","zugängliche Glas-/Holzflächen je nach Aufgabe"];not=["Saunaofen zerlegen"];care=["Holz und Saunaofen ausschließlich nach Herstellerangaben behandeln."]}else if(/toilette|wc-bürste/.test(t)){what=x.description||"Das genannte WC-Element gründlich hygienisch reinigen.";care=["Handschuhe tragen. Chlor-/Bleichmittel niemals mit sauren WC-Reinigern oder Entkalkern mischen."]}return {what,belongs,not,care}}
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
function taskRow(x,opts={}){const el=document.createElement("div");el.className="task"+(isDone(x)?" done":"");const showDue=!!opts.showDue;const hideRoom=!!opts.hideRoom;const showPullToday=!!opts.showPullToday;const due=nextDueLabel(x);const planned=plannedDateForTask(x);const plannedText=planned?planned.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}):"—";const plannedDiff=planned?Math.round((planned-nextDue(x))/86400000):null;const shiftNote=plannedDiff!==null&&plannedDiff!==0?` <span class="small">(${plannedDiff>0?"+":""}${plannedDiff} ${Math.abs(plannedDiff)===1?"Tag":"Tage"})</span>`:"";el.innerHTML=`<div class="swipeBg"><span class="swipeLabel">✓ Erledigt</span></div><div class="taskContent"><button class="check">${isDone(x)?"✓":""}</button><div class="taskMain"><div class="taskName">${esc(x.text)}</div>${!hideRoom?`<div class="meta">${esc(x.room)}${x.area?" · "+esc(x.area):""}</div>`:""}${showDue&&!isDone(x)?`<div class="meta nextDue">Fällig: <b>${esc(due)}</b></div><div class="meta plannedDate">Geplant: <b>${esc(plannedText)}</b>${shiftNote}</div>`:""}${isDone(x)?`<div class="meta nextDue">${isDailyTask(x)?"Fälligkeit: <b>täglich</b>":`Nächster Termin: <b>${esc(due)}</b>`}</div>`:""}</div><div class="taskButtons">${showPullToday&&!isDone(x)?`<button class="iconBtn pullToday" title="Aufgabe vorziehen">⚡</button>`:""}<button class="iconBtn info">ⓘ</button></div></div>`;el.querySelector(".check").onclick=()=>toggleTask(x);el.querySelector(".info").onclick=()=>openDetail(x);const pull=el.querySelector(".pullToday");if(pull)pull.onclick=()=>{pullCatalogTaskToday(x);render()};swipeRow(el,x);return el}

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
  return CATALOG
    .filter(x=>focusRoomMatches(x,room) && !isDone(x))
    .filter(x=>!state.todayExtras.some(e=>e.date===day && (e.sourceKey===taskId(x)||e.canonical===taskId(x))))
    .filter(x=>!recent(x,d,7))
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
  // “Später” is a same-day action log, not a second scheduling system.
  // Entries remain visible in Today on the day the user postponed them, so the
  // user can reopen them if desired. At the next calendar day this section is
  // automatically empty; the stored postponedUntil date remains untouched and
  // controls when the task returns to the real Today/calendar plan.
  const postponedToday=postponedTodayEntries();
  if(postponedToday.length){
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<div class="topline"><b>↩️ Später (${postponedToday.length})</b><button class="btn" id="po">Ausblenden</button></div>`;
    const body=document.createElement("div");
    body.dataset.postponedBody="1";
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
      const body=card.querySelector('[data-postponed-body="1"]');
      const hidden=body.style.display==="none";
      body.style.display=hidden?"":"none";
      card.querySelector("#po").textContent=hidden?"Ausblenden":"Anzeigen";
    };
  }
  const groups={};
  for(const x of tasks.filter(x=>!isDone(x)))(groups[x.group||groupFor(x)]??=[]).push(x);
  for(const [g,arr] of Object.entries(groups)){const sec=document.createElement("section");sec.innerHTML=`<div class="sectionTitle">${esc(g)}</div>`;arr.forEach(x=>sec.appendChild(taskRow(x)));main.appendChild(sec)}
  // The general Today → Erledigt section is the single home for every task
  // actually completed today, including voluntary room-focus tasks that were
  // not part of the regular Today plan. This keeps room focus as a view, not
  // as a second completion hierarchy.
  // One completed task = one row.  Room-focus / Today-extra occurrences may
  // point to the same canonical catalog task, so taskId alone is not enough
  // for deduplication.  Always collapse extras to their canonical source key.
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
  if(completed.length){const card=document.createElement("div");card.className="card";card.innerHTML=`<div class="topline"><b>✓ Erledigt (${completed.length})</b><button class="btn" id="co">${state.completedOpen?"Ausblenden":"Anzeigen"}</button></div>`;if(state.completedOpen)completed.forEach(x=>card.appendChild(taskRow(x)));main.appendChild(card);card.querySelector("#co").onclick=()=>{state.completedOpen=!state.completedOpen;save();render()}}
  renderRoomFocus(main,tasks);
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
function openEditor(x=null){const edit=!!x,old=x||{},rooms=[...new Set([...Object.keys(SEED_ROOMS),...state.custom.map(c=>c.room).filter(Boolean)])].sort(),overlay=document.createElement("div");overlay.className="catalogEditorOverlay";overlay.id="editor";overlay.innerHTML=`<div class="catalogEditorSheet"><div class="sheetTop"><div><div class="small">${edit?"Aufgabe bearbeiten":"Neue Aufgabe"}</div><h2>${edit?"✏️ Aufgabe ändern":"＋ Aufgabe hinzufügen"}</h2></div><button class="close" id="x">×</button></div><label class="editorLabel">Aufgabe<input id="t" value="${esc(old.text||"")}"></label><label class="editorLabel">Raum<input id="r" list="rooms" value="${esc(old.room||"")}"><datalist id="rooms">${rooms.map(r=>`<option value="${esc(r)}">`).join("")}</datalist></label><label class="editorLabel">Bereich / Etage<input id="a" value="${esc(old.area||"")}"></label><label class="editorLabel">Genauer Ort<input id="p" value="${esc(old.place||"")}"></label><label class="editorLabel">Beschreibung / genaue Durchführung<textarea id="d">${esc(old.description||"")}</textarea></label><div class="editorTwo"><label class="editorLabel">Erster Fälligkeitstermin<input id="s" type="date" value="${esc(state.manualDates?.[old.key]||state.catalogDates?.[old.key]||old.start||iso(nextDue(old)))}"></label><label class="editorLabel">Periode (Tage)<input id="i" type="number" min="1" value="${old.interval||catalogInterval(old)||60}"></label></div><div class="editorHint">Dieser Termin ist die verbindliche Fälligkeit. Der intelligente Planer darf flexible Aufgaben nur auf einen geeigneten Tag verschieben; die Fälligkeit bleibt im Katalog sichtbar.</div><div class="editorActions"><button class="btn" id="cancel">Abbrechen</button><button class="btn primary" id="saveTask">${edit?"Änderungen speichern":"Aufgabe speichern"}</button></div>${edit?`<button class="deleteBtn" id="del">🗑️ Aufgabe aus dem Katalog löschen</button>`:""}</div>`;document.body.appendChild(overlay);const close=()=>overlay.remove();overlay.querySelector("#x").onclick=close;overlay.querySelector("#cancel").onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};overlay.querySelector("#saveTask").onclick=()=>{const text=overlay.querySelector("#t").value.trim(),room=overlay.querySelector("#r").value.trim(),area=overlay.querySelector("#a").value.trim(),place=overlay.querySelector("#p").value.trim(),description=overlay.querySelector("#d").value.trim(),start=overlay.querySelector("#s").value,interval=Math.max(1,Number(overlay.querySelector("#i").value)||60);if(!text||!room||!area||!start)return toast("Bitte Aufgabe, Raum, Bereich und Termin ausfüllen ❤️");if(edit){state.manualDates=state.manualDates||{};state.catalogDates=state.catalogDates||{};state.manualDates[old.key]=start;state.catalogDates[old.key]=start;state.catalogEdits[old.key]={text,room,area,place,description,start,interval,manualStart:true};if(old.source==="custom"){const c=state.custom.find(c=>(c.key||`custom|${c.id}`)===old.key);if(c)Object.assign(c,{text,room,area,place,description,start,interval})}}else{const id=`custom|${uid()}`;state.custom.push({id,key:id,text,room,area,place,description,start,interval,manualStart:true});state.manualDates=state.manualDates||{};state.manualDates[id]=start;state.catalogDates=state.catalogDates||{};state.catalogDates[id]=start}save();refreshCatalog();close();render();toast(edit?"Aufgabe geändert ❤️":"Neue Aufgabe hinzugefügt ❤️")};if(edit)overlay.querySelector("#del").onclick=()=>{if(!confirm(`„${old.text}“ wirklich löschen?`))return;state.catalogDeleted[old.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==old.key);save();refreshCatalog();close();render();toast("Aufgabe gelöscht")}}
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
function renderCatalog(){const main=document.getElementById("main");main.innerHTML=`<div class="card"><div class="topline"><div><h2 style="margin:0">📚 Aufgabenkatalog</h2><div class="small">Hier ist die vollständige Masterliste – jede Aufgabe kann bearbeitet oder gelöscht werden.</div></div><button class="btn primary" id="new">＋ Aufgabe hinzufügen</button></div><input class="search" id="q" placeholder="Aufgabe, Raum, Bereich, Ort suchen …" style="margin-top:14px"><div id="res"></div></div>`;const q=main.querySelector("#q"),res=main.querySelector("#res");main.querySelector("#new").onclick=()=>openEditor();const draw=()=>{const term=q.value.trim().toLowerCase(),arr=CATALOG.filter(x=>!isInvalidLegacyTask(x)&&(!term||[x.text,x.room,x.area,x.place,x.description].join(" ").toLowerCase().includes(term)));const plan=buildIntelligentPlan();const plannedMap=new Map();for(const x of arr){const d=plannedDateForTask(x);plannedMap.set(taskId(x),d instanceof Date?d:null);}arr.sort((a,b)=>{const da=plannedMap.get(taskId(a))||null,db=plannedMap.get(taskId(b))||null;if(da&&db){const diff=da.getTime()-db.getTime();if(diff)return diff;}else if(da&&!db)return -1;else if(!da&&db)return 1;return String(a.text||"").localeCompare(String(b.text||""),"de");});res.innerHTML=`<div class="small" style="padding:10px 4px">${arr.length} Aufgaben</div>`;arr.forEach(x=>{const r=document.createElement("div");r.className="result";const pd=plannedMap.get(taskId(x))||null;const due=nextDue(x);const ptxt=pd?pd.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}):"—";const diff=pd?Math.round((pd-due)/86400000):null;const note=diff!==null&&diff!==0?` <span class="small">(${diff>0?"+":""}${diff} ${Math.abs(diff)===1?"Tag":"Tage"})</span>`:"";r.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · ${esc(x.area)}${x.place?" · "+esc(x.place):""}</div><div class="meta nextDue">Fällig: <b>${esc(nextDueLabel(x))}</b></div><div class="meta plannedDate">Geplant: <b>${esc(ptxt)}</b>${note}</div></div><div class="catalogActions"><button class="iconBtn edit" title="Bearbeiten">✏️</button><button class="iconBtn remove" title="Löschen">🗑️</button><button class="iconBtn pullToday" title="Heute vorziehen">⚡</button><button class="iconBtn info" title="Info">ⓘ</button></div>`;r.querySelector(".edit").onclick=()=>openEditor(x);r.querySelector(".remove").onclick=()=>{if(confirm(`„${x.text}“ wirklich löschen?`)){state.catalogDeleted[x.key]=true;state.custom=state.custom.filter(c=>(c.key||`custom|${c.id}`)!==x.key);save();refreshCatalog();renderCatalog();toast("Aufgabe gelöscht")}};r.querySelector(".pullToday").onclick=()=>pullCatalogTaskToday(x);r.querySelector(".info").onclick=()=>openDetail(x);res.appendChild(r)})};q.oninput=draw;draw()}
function renderWeek(){const main=document.getElementById("main"),base=addDays(today,-((today.getDay()||7)-1));main.innerHTML=`<div class="card"><h2 style="margin-top:0">Diese Woche</h2><p class="small">Wochenanker sind Themen, keine Pflicht, jeden Raum komplett zu schaffen.</p><div class="weekgrid" id="wg"></div></div>`;const wg=main.querySelector("#wg");for(let i=0;i<7;i++){const d=addDays(base,i),tasks=scheduledForDate(d),el=document.createElement("div");el.className="daycard"+(sameDay(d,today)?" today":"")+(d.getDay()===0?" free":"");el.innerHTML=`<div class="dayname">${new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit"}).format(d)}</div><div class="daytheme">${esc(themeFor(d))}</div><div class="small" style="margin-top:8px">${tasks.length} sinnvoll eingeplante Aufgaben</div>`;wg.appendChild(el)}}
function renderCalendar(){const main=document.getElementById("main"),year=state.calendarYear||today.getFullYear(),months=["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];main.innerHTML=`<div class="card"><div class="yearIntro"><div><div class="small">Jahresvorschau</div><div class="yearTitle">📅 ${year}</div></div><div class="yearNav"><button id="prev">‹</button><button id="cur">Dieses Jahr</button><button id="next">›</button></div></div><div class="calendarLegend"><span>🟢 erledigt</span><span>☀️ Sonntag frei</span><span>Die Zahl = sinnvoll eingeplante Aufgaben</span></div><div class="monthGrid" id="mg"></div><div id="detailDay"></div></div>`;const mg=main.querySelector("#mg");for(let m=0;m<12;m++){const card=document.createElement("div");card.className="monthCard";card.innerHTML=`<div class="monthName">${months[m]}</div><div class="weekdays">${["Mo","Di","Mi","Do","Fr","Sa","So"].map(x=>`<span>${x}</span>`).join("")}</div><div class="monthDays"></div>`;const grid=card.querySelector(".monthDays"),first=new Date(year,m,1,12),offset=(first.getDay()+6)%7;for(let z=0;z<offset;z++)grid.appendChild(document.createElement("span"));const count=new Date(year,m+1,0).getDate();for(let n=1;n<=count;n++){const d=new Date(year,m,n,12),tasks=calendarTasksForDate(d),el=document.createElement("button");el.className="yearDay"+(d.getDay()===0?" free":"")+(sameDay(d,today)?" today":"")+(state.completedDays[dayKey(d)]?" completed":"");el.innerHTML=`<span class="dayNum">${n}</span>${tasks.length?`<span class="dayMark">${tasks.length}</span>`:""}`;el.onclick=()=>showCalendarDay(d,tasks);grid.appendChild(el)}mg.appendChild(card)}main.querySelector("#prev").onclick=()=>{state.calendarYear=year-1;save();renderCalendar()};main.querySelector("#next").onclick=()=>{state.calendarYear=year+1;save();renderCalendar()};main.querySelector("#cur").onclick=()=>{state.calendarYear=today.getFullYear();save();renderCalendar()}}
function showCalendarDay(d,tasks){const box=document.getElementById("detailDay"),by={};tasks.forEach(x=>(by[x.room]??=[]).push(x));box.innerHTML=`<div class="yearDetail"><h3>${esc(dateLabel(d))}</h3><div class="small">${esc(themeFor(d))}</div>${tasks.length?Object.entries(by).map(([r,arr])=>`<div class="detailTasks"><b>${esc(r)} · ${arr.length} geplante Aufgaben</b>${arr.map(x=>`<div class="detailTask">• ${esc(x.text)}<br><span class="small">Geplant am: ${esc(d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"}))}</span></div>`).join("")}</div>`).join(""):`<div class="empty">Keine fest eingeplanten Aufgaben.</div>`}</div>`;box.scrollIntoView({behavior:"smooth",block:"nearest"})}

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
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{selectedTab=b.dataset.tab;render()});document.getElementById("closeDetail").onclick=()=>document.getElementById("detailOverlay").classList.remove("open");document.getElementById("detailOverlay").onclick=e=>{if(e.target.id==="detailOverlay")e.currentTarget.classList.remove("open")};
render();
