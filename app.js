
const STORAGE="unser-zuhause-v50";
const ROOM_PLAN={
  1:["Wohnzimmer","Essbereich","Küche"],
  3:["Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2"],
  4:["Eingangsbereich","Garderobe","Flur","Büro","Abstellraum","Speis"]
};
const BATH_A=["Gäste-WC","Kinderbad"], BATH_B=["Bad","WC"];
const BASEMENT=["Waschküche","Musikzimmer","Trainingsraum","Technikraum","Lagerraum"];
const BASEMENT_TASKS={
 "Waschküche":["Waschmaschine außen reinigen","Arbeitsflächen reinigen","Wäschekörbe auswischen","Boden saugen"],
 "Musikzimmer":["Instrumente materialgerecht entstauben","Noten ordnen","Regale abstauben","Boden saugen"],
 "Trainingsraum":["Trainingsgeräte abwischen","Matten reinigen","Ablageflächen ordnen","Boden saugen"],
 "Technikraum":["Sichtbaren Staub entfernen","Zugänge freihalten","Boden bei Bedarf reinigen"],
 "Lagerraum":["Kartons ordnen","Vorräte prüfen","Regale abstauben","Boden saugen"]
};
const DAILY=[
 ["☀️ Morgenroutine",["Bett machen","Schlafzimmer kurz lüften","Kleidung wegräumen","Schmutzwäsche in den Wäschekorb","Vorhänge/Raffstores öffnen","Geschirrspüler ausräumen","Frühstücksgeschirr einräumen","Küchenarbeitsfläche abwischen","Esstisch abwischen","Hochstuhl/Essplatz sauber machen","Schuhe, Jacken & Taschen kurz ordnen"]],
 ["🍽️ Nach Mahlzeiten",["Geschirr in den Geschirrspüler","Tisch abwischen","Hochstuhl/Essplatz sauber machen","Heruntergefallenes Essen vom Boden entfernen","Arbeitsfläche bei Bedarf abwischen"]],
 ["🌙 Abend · max. 10 Minuten",["Geschirrspüler einräumen & einschalten","Küchenflächen kurz abwischen","Spüle & Herd kurz sauber machen","Esstisch + Hochstuhl/Essplatz","Müll kontrollieren","Wohnzimmer grob zurücksetzen","Garderobe kurz ordnen","Kleidung wegräumen","Vorhänge/Raffstores schließen"]],
 ["🔎 Tagescheck",["Restmüll kontrollieren","Biomüll kontrollieren","Wäsche nur bei Bedarf starten","Kühlschrank nur bei Bedarf prüfen","Toiletten nur bei Bedarf prüfen","Küchenboden bei Essensresten reinigen","Sichtbare Bodenflecken beseitigen"]]
];
const ROTATIONS=[
 ["🚪 Türklinken & häufig berührte Stellen",7],["🚪 Türrahmen / Zargen",30],["🚪 Türblätter gründlich",75],
 ["🧹 Sockelleisten",42],["🕸️ Decken-/Wandecken auf Spinnweben",30],["✨ Lichtschalter außen abwischen",30],
 ["🔌 Steckdosen außen abwischen",75],["🏛️ Stuck vorsichtig trocken entstauben",120],["🪟 Fenster EG – Abschnitt",180],
 ["🪟 Fenster OG – Abschnitt",180],["☀️ Raffstores / Sonnenschutz nach Herstellerangabe",180],["🪟 Fensterrahmen & Falze",180],
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
['Fenster / Ganzes Haus','Ganzes Haus',['Fenster innen reinigen','Fenster außen reinigen, wenn sicher','Fensterrahmen reinigen','Falze reinigen','Fensterbänke reinigen','Dichtungen kontrollieren','Vorhangstangen reinigen','Vorhänge nach Pflegeetikett reinigen','Raffstores nach Herstellerangabe reinigen']],
['Türen / Ganzes Haus','Ganzes Haus',['Türklinken reinigen','Türrahmen/Zargen reinigen','Türblätter abwischen','Türkanten reinigen','Lichtschalter außen reinigen','Steckdosen außen abwischen','Spinnweben über Türen entfernen']],
['Kamin / Wohnzimmer','EG',['Erkaltete Asche aus Feuerraum entfernen','Feuerraum auskehren','Kaminrost reinigen','Kaminbesteck abwischen','Kaminholz schlichten','Holzablage reinigen','Bereich direkt vor Kamin gründlich absaugen','Ruß-/Aschespuren entfernen','Kaminverkleidung materialgerecht reinigen','Kaminglas, falls vorhanden, reinigen','Fachgerechte Kontrolle/Wartung nach Vorgabe']],
['Ganzes Haus – Textilien','Ganzes Haus',['Bettwäsche wechseln','Handtücher wechseln','Decken nach Pflegeetikett reinigen','Teppiche nach Pflegehinweisen reinigen','Vorhänge nach Pflegeetikett reinigen','Polster nach Pflegehinweisen reinigen']],
['Ganzes Haus – Allgemein','Ganzes Haus',['Sockelleisten reinigen','Decken-/Wandecken entstauben','Stuck vorsichtig trocken entstauben','Erreichbare Lampen reinigen','Lichtschalter außen reinigen','Steckdosen außen reinigen','Türrahmen reinigen','Türblätter reinigen']]
];
const SEED_ROOMS = {
 "Wohnzimmer":["Wohnzimmer","EG"],"Essbereich":["Essbereich","EG"],"Küche":["Küche","EG"],"Garderobe":["Garderobe","EG"],
 "Eingangsbereich":["Eingangsbereich","EG"],"Flur":["Flur","EG"],"Büro":["Büro","EG"],"Abstellraum":["Abstellraum","EG"],
 "Speis":["Speis","EG"],"Gäste-WC":["Gäste-WC","EG"],"Kinderbad":["Kinderbad","OG"],"Bad":["Bad","OG"],"WC":["WC","OG"],
 "Schlafzimmer":["Schlafzimmer","OG"],"Ankleidezimmer":["Ankleidezimmer","OG"],"Kinderzimmer 1":["Kinderzimmer 1","OG"],
 "Kinderzimmer 2":["Kinderzimmer 2","OG"],"Waschküche":["Waschküche","Keller"],"Musikzimmer":["Musikzimmer","Keller"],
 "Trainingsraum":["Trainingsraum","Keller"],"Technikraum":["Technikraum","Keller"],"Lagerraum":["Lagerraum","Keller"],
 "Keller allgemein":["Keller allgemein","Keller"],"Saunaraum":["Saunaraum","OG"],"Treppenhaus":["Treppenhaus","Ganzes Haus"],
 "Fenster / Ganzes Haus":["Fenster / Ganzes Haus","Ganzes Haus"],"Türen / Ganzes Haus":["Türen / Ganzes Haus","Ganzes Haus"],
 "Kamin / Wohnzimmer":["Kamin / Wohnzimmer","EG"],"Ganzes Haus – Textilien":["Ganzes Haus – Textilien","Ganzes Haus"],
 "Ganzes Haus – Allgemein":["Ganzes Haus – Allgemein","Ganzes Haus"]
};

let state=loadState();
let selectedTab="today";
let today=new Date(); today.setHours(12,0,0,0);

function loadState(){
 try{
  const s=JSON.parse(localStorage.getItem(STORAGE)||"null");
  return Object.assign({done:{},lastDone:{},postponed:{},custom:[],catalogEdits:{},catalogDeleted:{},completedDays:{},chaos:false,completedOpen:false,energyOpen:false},s||{});
 }catch(e){return {done:{},lastDone:{},postponed:{},custom:[],completedDays:{},chaos:false}}
}

function purgeExpiredPostponements(){
 const todayKey=dayKey();
 const p=state.postponed||{};
 let changed=false;
 for(const [id,x] of Object.entries(p)){
   if(x.from && x.from<todayKey){ delete p[id]; changed=true; }
 }
 if(changed)save();
}

function save(){localStorage.setItem(STORAGE,JSON.stringify(state))}
function pad(n){return String(n).padStart(2,"0")}
function iso(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function dayKey(d=today){return iso(d)}
function dateLabel(d=today){return new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}).format(d)}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>x.classList.remove("show"),1800)}
function uid(){return Math.random().toString(36).slice(2)+Date.now().toString(36)}

function weekNumber(d){
 const x=new Date(d); x.setHours(12,0,0,0); x.setDate(x.getDate()+4-(x.getDay()||7));
 const y=new Date(x.getFullYear(),0,1); return Math.ceil((((x-y)/86400000)+1)/7);
}
function weekA(d=today){return weekNumber(d)%2===0}
function basementRoom(d=today){
 const base=new Date(2026,8,4,12); const x=new Date(d); x.setHours(12,0,0,0);
 const diff=Math.round((x-base)/86400000);
 return BASEMENT[((Math.floor(diff/7)%BASEMENT.length)+BASEMENT.length)%BASEMENT.length];
}
function themeFor(d){
 const dow=d.getDay();
 if(dow===0)return "Haushaltsfrei ❤️";
 if(dow===1)return "EG · Wohnen, Essen & Küche";
 if(dow===2)return weekA(d)?"Gäste-WC + Kinderbad":"Bad + WC";
 if(dow===3)return "OG · Schlaf- & Kinderbereiche";
 if(dow===4)return weekA(d)?"Eingang + Garderobe + Flur":"Büro + Abstellraum + Speis";
 if(dow===5)return "Keller · nur ein Raum · "+basementRoom(d);
 return "Wäsche + maximal eine Sonderaufgabe";
}
function roomTasks(room){
 return allCatalog().filter(x=>x.room===room && x.area!=="Alltag" && !x.window && !x.seasonal && x.room!=="Rotationsaufgabe").map(x=>x.text);
}
function calendarTasksForDate(d){
 const k=dayKey(d), out=[];
 for(const x of allCatalog()){
   if(x.area==="Alltag" || x.seasonal) continue;
   const nd=catalogNextDate(x,d);
   if(nd && dayKey(nd)===k) out.push({text:x.text,room:x.room,area:x.area});
 }
 return out;
}
function planForDate(d=today){
 const tasks=calendarTasksForDate(d), by={};
 for(const x of tasks){
   const room=x.room||"Ganzes Haus";
   if(!by[room])by[room]=[];
   by[room].push(x.text);
 }
 return Object.entries(by).map(([room,tasks])=>[room,tasks]);
}

// Der gesamte Katalog ist jetzt auch Teil der Jahresrotation.
// Häufige Wochenaufgaben bleiben im Wochenanker; alles darüber hinaus bekommt
// einen eigenen, kleinen Turnus. So muss die Nutzerin nicht selbst mitdenken.
const WEEKLY_CORE=new Set([
 "Polster absaugen","Sofaritze absaugen","Sofakissen ausschütteln","Teppich gründlich absaugen",
 "Esstischoberseite reinigen","Stuhlsitze reinigen","Krümel aus Tischritzen entfernen",
 "Arbeitsplatten gründlich reinigen","Herd gründlich reinigen","Spüle entkalken",
 "Schuhe paarweise ordnen","Ablageflächen leeren","Schreibtischfläche reinigen","Papierkorb leeren",
 "Waschmaschine außen reinigen","Arbeitsflächen reinigen","Boden saugen","Boden wischen",
 "Instrumente materialgerecht entstauben","Trainingsgeräte abwischen","Handtücher einsammeln",
 "Nach Nutzung lüften","Bänke reinigen","Fensterbank reinigen"
]);
function careInterval(text){
 const t=text.toLowerCase();
 if(/fachgerechte|wartung|kontrolle.*schornstein/.test(t))return 365;
 if(/fenster.*außen|fenster.*innen|fensterrahmen|falze|raffstore|vorhangstange|vorhang.*pflege/.test(t))return 180;
 if(/matratze|teppich|polster|decke|vorhang/.test(t))return 180;
 if(/stuck|lampe|leuchte|dunstabzugfilter|gefrierfach|vorratsschrank|schuhschrank innen|schubladen innen|regalböden|regalböden|unter.*bett/.test(t))return 120;
 if(/backofen|dunstabzug außen|fronten gründlich|türblätter|türblatt|türkanten|kabel|papierstapel|kleidung aussortieren|jacken nach saison|schuhe.*sohlen|keller.*zone|kartons ordnen/.test(t))return 90;
 if(/fugen|silikon|duschglas|duschrinne|armatur entkalken|mülleimer|wc-bürstenhalter|spiegel gründlich|schrankfronten|sideboardfronten|tischbeine|stuhllehnen|garderobenhaken/.test(t))return 60;
 if(/türrahmen|zargen|lichtschalter|steckdosen|sockelleisten|spinnweben|deko|bilderrahmen|fensterbank|kühlschrank|geschirrspüler|waschmittelschublade|türdichtung|sauna|kamin|holzablage/.test(t))return 30;
 if(/ordnen|sortieren|prüfen|regale abstauben|oberflächen reinigen|schrankgriffe|notizen|bücher|spielzeug|kleidung ordnen|vorräte/.test(t))return 60;
 return 90;
}
function stableHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function buildCarePool(){
 const out=[];
 for(const r of catalogSeed){
   const room=r[0],area=r[1],tasks=r[2];
   for(const text of tasks){
     if(WEEKLY_CORE.has(text))continue;
     // Keine doppelte Tages-/Wochenbasis; diese Einträge werden dort bereits abgebildet.
     if(/^(Boden saugen|Boden wischen|Fensterbank reinigen)$/.test(text))continue;
     out.push({text,room,area,interval:careInterval(text),seed:stableHash(room+'|'+text)});
   }
 }
 // Die expliziten Spezialaufgaben (Kamin, Fenster etc.) kommen zusätzlich hinein.
 for(const [text,interval] of ROTATIONS){
   let room='Ganzes Haus',area='Hauspflege';
   if(/Kamin/.test(text)) {room='Wohnzimmer';area='EG';}
   if(/Fenster OG/.test(text)) {room='Fenster OG';area='OG';}
   if(/Fenster EG/.test(text)) {room='Fenster EG';area='EG';}
   out.push({text,room,area,interval,seed:stableHash('rot|'+text)});
 }
 return out.filter((x,i,a)=>i===a.findIndex(y=>y.text===x.text));
}
const CARE_POOL=buildCarePool();
const CARE_START=new Date(2026,7,31,12);
function careDateFor(task){
 const idx=Math.max(0,CARE_POOL.indexOf(task));
 // Gleichmäßig über das Jahr verteilen; Sonntage bleiben frei.
 let d=new Date(CARE_START);
 d.setDate(d.getDate()+((idx*2)%365));
 while(d.getDay()===0)d.setDate(d.getDate()+1);
 return d;
}
function careLastDone(task){
 return state.lastDone['care|'+task.room+'|'+task.text]||'';
}
function careDueOn(task,d=today){
 const last=careLastDone(task);
 if(last){
   const due=new Date(last); due.setDate(due.getDate()+task.interval);
   return dayKey(d)===iso(due);
 }
 return dayKey(d)===iso(careDateFor(task));
}

// --- Sinnvolle Jahresverteilung / leichte Tage ---
const WINDOW_INVENTORY = [
 ["KG","Waschküche",2],["KG","Musikzimmer",2],["KG","Technikraum",2],["KG","Trainingsraum",2],["KG","Flur KG",2],["KG","Stiegenhaus",1],
 ["EG","Garderobe",1],["EG","Büro",3],["EG","Wohnzimmer",1],["EG","Essbereich",2],["EG","Küche",2],["EG","Speis",1],["EG","Abstellraum",1],["EG","WC",1],
 ["OG","Kinderzimmer 1",2],["OG","Kinderzimmer 2",3],["OG","Kinderbad",1],["OG","Schlafzimmer",1],["OG","Ankleide",1],["OG","Eltern-WC",1],["OG","Saunaraum",1],["OG","Bad",2]
];
function windowCatalogEntries(){
 const out=[];
 for(const [area,room,count] of WINDOW_INVENTORY) for(let i=1;i<=count;i++){
   const large=/Stiegenhaus|Trainingsraum|Wohnzimmer|Schlafzimmer|Bad/.test(room);
   const keyMap={
     "KG|Waschküche":"fenster-kg-waschkueche-musik","KG|Musikzimmer":"fenster-kg-waschkueche-musik",
     "KG|Technikraum":"fenster-kg-technik-training","KG|Trainingsraum":"fenster-kg-technik-training",
     "KG|Flur KG":"fenster-kg-flur-stiegenhaus","KG|Stiegenhaus":"fenster-kg-flur-stiegenhaus",
     "EG|Garderobe":"fenster-eg-garderobe-buero","EG|Büro":"fenster-eg-garderobe-buero",
     "EG|Wohnzimmer":"fenster-eg-wohnen-essen","EG|Essbereich":"fenster-eg-wohnen-essen",
     "EG|Küche":"fenster-eg-kueche-speis-abstell","EG|Speis":"fenster-eg-kueche-speis-abstell","EG|Abstellraum":"fenster-eg-kueche-speis-abstell","EG|WC":"fenster-eg-kueche-speis-abstell",
     "OG|Kinderzimmer 1":"fenster-og-kinder","OG|Kinderzimmer 2":"fenster-og-kinder",
     "OG|Kinderbad":"fenster-og-baeder-wc-sauna","OG|Eltern-WC":"fenster-og-baeder-wc-sauna","OG|Saunaraum":"fenster-og-baeder-wc-sauna",
     "OG|Schlafzimmer":"fenster-og-schlaf-ankleide","OG|Ankleide":"fenster-og-schlaf-ankleide","OG|Bad":"fenster-og-bad"
   };
   out.push({text:`🪟 Fenster ${area} · ${room}${count>1?" "+i:""}${large?" · groß":""}`,room:`Fenster ${area} · ${room}`,area,window:true,windowKey:`${area}|${room}|${i}`,windowSeasonalKey:keyMap[area+"|"+room]});
 }
 return out;
}

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
function seasonalSpecialForDate(d){
 const k=dayKey(d);
 const exact=SEASONAL_SPECIALS.filter(x=>x.dates.includes(k));
 return exact[0]||null;
}
function isMajorSpecial(t){
 const x=(t?.text||"").toLowerCase();
 return /fenster|raffstore|kamin|stuck|vorhangstangen|matratzen|teppich|polster/.test(x);
}
function lightweightDayPlan(d, base){
 if(!base)return [];
 const essentialPatterns=/geschirrspüler|küchenarbeitsfläche|esstisch|hochstuhl|essplatz|heruntergefallen|müll|wäsche nur bei bedarf|sichtbare bodenflecken/i;
 const keep=[];
 for(const [room,tasks] of base){
   const filtered=tasks.filter(t=>essentialPatterns.test(t));
   if(filtered.length)keep.push([room,filtered]);
 }
 return keep;
}

function careCandidateForDate(d=today){
 if(d.getDay()===0)return null;
 const seasonal=seasonalSpecialForDate(d);
 if(seasonal){
   return {id:"care|seasonal|"+seasonal.key,canonical:"care|seasonal|"+seasonal.key,
           text:seasonal.text,room:seasonal.room,area:seasonal.area,interval:180,seed:0,seasonal:true};
 }
 const due=CARE_POOL.filter(t=>careDueOn(t,d));
 if(!due.length)return null;
 due.sort((a,b)=>{
   const age=x=>{const l=careLastDone(x);const base=l?new Date(l):careDateFor(x);return d-base};
   return age(b)-age(a);
 });
 return due[0];
}
function chaosPlan(){
 return [["Hanni-Modus",["Geschirrspüler einräumen/einschalten","Küchenarbeitsfläche abwischen","Esstisch abwischen","Hochstuhl/Essplatz sauber machen","Heruntergefallenes Essen vom Boden entfernen","Müll kontrollieren"]]];
}
function dailyTasks(){
 const out=[];
 for(const [group,tasks] of DAILY) for(const t of tasks) out.push({id:"daily|"+t,canonical:t,text:t,room:"Ganzes Haus",area:"Alltag",group});
 return out;
}

// ===== Intelligenter Tagesplan V70 =====
const TASK_WEIGHT_RULES=[
 [/fenster|raffstore|kamin|stuck|vorhangstange|matratze|teppich|polster/i,3],
 [/bad|dusche|wanne|wc.*gründlich|toilette.*gründlich/i,2],
 [/sockelleisten|türblätter|türrahmen|zargen|schubladen|regalböden|lampen/i,1],
 [/saugen|wischen|abwischen|abstauben|reinigen|ordnen|prüfen/i,1]
];
function taskWeight(text){
 for(const [re,w] of TASK_WEIGHT_RULES)if(re.test(text))return w;
 return 1;
}
function dayBudget(d=today){
 if(d.getDay()===0)return 0;
 if(d.getDay()===6)return 3;
 if(d.getDay()===3)return 5;
 return 5;
}
function taskLastDone(t){
 return state.lastDone?.[t.canonical] || state.lastDone?.[t.id] || "";
}
function taskAgeScore(t,d=today){
 const last=taskLastDone(t);
 if(!last)return 999999;
 return Math.max(0,Math.round((d-new Date(last+"T12:00:00"))/86400000));
}
function weeklyRoomsForDate(d){
 const dow=d.getDay();
 if(dow===1)return ["Wohnzimmer","Essbereich","Küche"];
 if(dow===2)return weekA(d)?BATH_A:BATH_B;
 if(dow===3)return ["Schlafzimmer","Ankleidezimmer","Kinderzimmer 1","Kinderzimmer 2"];
 if(dow===4)return weekA(d)?["Eingangsbereich","Garderobe","Flur"]:["Büro","Abstellraum","Speis"];
 if(dow===5)return [basementRoom(d)];
 if(dow===6)return ["Waschküche"];
 return [];
}
function weeklyCandidateTasks(room,d){
 return roomTasks(room).filter(text=>{
   if(WEEKLY_CORE.has(text))return true;
   if(/^(Boden saugen|Boden wischen|Fensterbank reinigen)$/.test(text))return false;
   return true;
 }).map(text=>({id:"plan|"+dayKey(d)+"|"+room+"|"+text,canonical:room+"|"+text,text,room,area:SEED_ROOMS[room]?.[1]||"",group:room}));
}
function adaptiveWeeklyPlan(d){
 const rooms=weeklyRoomsForDate(d),budget=dayBudget(d),chosen=[];let used=0;
 const candidatesForRoom=room=>roomRecentlyDone(room,d,7)?[]:
   weeklyCandidateTasks(room,d).filter(x=>taskAgeScore(x,d)>=7)
     .sort((a,b)=>taskAgeScore(b,d)-taskAgeScore(a,d));

 for(const room of rooms){
   const c=candidatesForRoom(room);
   const pick=c.find(x=>used+taskWeight(x.text)<=budget);
   if(pick){chosen.push(pick);used+=taskWeight(pick.text);}
 }
 const all=rooms.flatMap(r=>candidatesForRoom(r))
   .filter(x=>!chosen.some(y=>y.canonical===x.canonical))
   .sort((a,b)=>taskAgeScore(b,d)-taskAgeScore(a,d));
 for(const x of all){
   const w=taskWeight(x.text);
   if(used+w>budget)continue;
   chosen.push(x);used+=w;
   if(used>=budget)break;
 }
 return chosen;
}
function intelligentSpecialForDate(d=today){
 if(d.getDay()===0)return null;
 const seasonal=seasonalSpecialForDate(d);
 if(seasonal)return {...seasonal,weight:3,seasonal:true};
 return careCandidateForDate(d);
}
function isMajorSpecialTask(t){return !!t&&(t.seasonal||isMajorSpecial(t));}
function buildIntelligentToday(d=today){
 if(d.getDay()===0)return [];
 if(state.chaos)return dailyTasks().filter(x=>[
  "Geschirrspüler einräumen/einschalten","Küchenarbeitsfläche abwischen","Esstisch abwischen",
  "Hochstuhl/Essplatz sauber machen","Heruntergefallenes Essen vom Boden entfernen","Müll kontrollieren"
 ].includes(x.text));
 const out=[...dailyTasks()],special=intelligentSpecialForDate(d);
 if(special&&isMajorSpecialTask(special)){
   out.push({id:"care|"+special.room+"|"+special.text,canonical:"care|"+special.room+"|"+special.text,
     text:special.text,room:special.room,area:special.area||"Hauspflege",group:"🔄 Hauspflege · Schwerpunkt"});
   return out;
 }
 out.push(...adaptiveWeeklyPlan(d));
 const care=careCandidateForDate(d);
 if(care&&!out.some(x=>x.canonical===care.canonical)){
   const cost=out.filter(x=>x.group&&x.group!=="Ganzes Haus"&&x.group!=="Alltag")
     .reduce((a,x)=>a+taskWeight(x.text),0);
   if(cost+taskWeight(care.text)<=dayBudget(d))
     out.push({id:"care|"+care.room+"|"+care.text,canonical:"care|"+care.room+"|"+care.text,text:care.text,room:care.room,area:care.area,group:"🔄 Hauspflege · heute nur eine Sonderaufgabe"});
 }
 return out;
}
function plannedTasks(d=today){
 if(d.getDay()===0){
   if(d.getFullYear()===today.getFullYear()&&dayKey(d)===dayKey(today)&&sundayOptionalEnabled()){
     const care=careCandidateForDate(d);
     const calendarTasks=calendarTasksForDate(d);
     return care?[{id:care.id,canonical:care.canonical,text:care.text,room:care.room||"Ganzes Haus",area:care.area||"Turnus",group:"☀️ Sonntag optional"}]:[];
   }
   return [];
 }
 const out=buildIntelligentToday(d);
 if(dayKey(d)===dayKey(today)&&Array.isArray(state.todayExtras)){
   for(const x of state.todayExtras.filter(x=>x.date===dayKey(today))){
     if(!out.some(t=>t.canonical===x.canonical||(t.text===x.text&&t.room===x.room)))
       out.push({id:x.id,canonical:x.canonical||("extra|"+x.room+"|"+x.text),text:x.text,room:x.room||"Ganzes Haus",area:x.area||"",group:"＋ Heute hinzugefügt"});
   }
 }
 return out;
}

function isDone(task){return !!state.done[task.id]}
function isPostponed(task){
 return Object.values(state.postponed||{}).some(x=>x.id===task.id || x.canonical===task.canonical);
}

function markRoomCompleted(room){
 state.roomLastDone=state.roomLastDone||{};
 state.roomLastDone[room]=dayKey();
}
function roomRecentlyDone(room,d=today,days=7){
 const k=state.roomLastDone?.[room];
 if(k && Math.round((d-new Date(k+"T12:00:00"))/86400000)<days)return true;
 // Fallback for data created before roomLastDone existed:
 // any task in this room completed within the last 'days' is enough to avoid
 // immediately forcing the room back into the weekly plan.
 const cutoff=new Date(d);cutoff.setDate(cutoff.getDate()-days);
 for(const [canonical,date] of Object.entries(state.lastDone||{})){
   if(canonical.startsWith(room+"|")){
     const dd=new Date(date+"T12:00:00");
     if(dd>=cutoff && dd<=d)return true;
   }
 }
 return false;
}

function toggleTask(task){
 state.done[task.id]=!state.done[task.id];
 if(state.done[task.id]){
   state.lastDone[task.canonical]=dayKey();
   if(task.id.startsWith("care|"))state.lastDone[task.canonical]=dayKey();
   if(task.id.startsWith("extra|"))state.lastDone[task.room+"|"+task.text]=dayKey();
   if(task.room && task.room!=="Ganzes Haus" && task.group===task.room){
     const sameRoom=plannedTasks().filter(x=>x.room===task.room && x.group===task.room);
     if(sameRoom.length && sameRoom.every(x=>state.done[x.id]))markRoomCompleted(task.room);
   }
 }
 save(); purgeExpiredPostponements();
render();
}
function postponeTask(task){
 if(!isPostponed(task)){
   state.postponed[uid()]={id:task.id,text:task.text,room:task.room,area:task.area,canonical:task.canonical,from:dayKey()};
 }
 save(); render(); toast("Auf später verschoben ↩");
}
function restorePostponed(id){delete state.postponed[id];save();render();toast("Wieder geöffnet ❤️")}
function completedToday(){
 const tasks=plannedTasks().filter(t=>!isPostponed(t));
 return tasks.length>0 && tasks.every(isDone);
}
function updateCompletion(){
 const k=dayKey();
 if(completedToday()) state.completedDays[k]=true;
 else delete state.completedDays[k];
 save();
}
function swipeRow(el,task){
 let sx=0,sy=0,active=false,dragging=false;
 const content=el.querySelector(".taskContent"), bg=el.querySelector(".swipeBg");

 function reset(){
   content.style.transition="transform .18s ease";
   content.style.transform="translateX(0)";
   bg.style.opacity="0";
   bg.classList.remove("green","red");
   bg.querySelector(".swipeLabel").textContent="✓ Erledigt";
   setTimeout(()=>content.style.transition="",190);
 }
 function start(x,y){
   sx=x; sy=y; active=true; dragging=false;
   content.style.transition="none";
 }
 function move(x,y,e){
   if(!active)return;
   const dx=x-sx,dy=y-sy;
   if(!dragging){
     if(Math.abs(dx)<8 && Math.abs(dy)<8)return;
     if(Math.abs(dy)>Math.abs(dx)*1.15){ active=false; return; }
     dragging=true;
   }
   if(e && e.cancelable)e.preventDefault();
   const limited=Math.max(-145,Math.min(145,dx));
   content.style.transform=`translate3d(${limited}px,0,0)`;
   bg.classList.toggle("green",dx>0);
   bg.classList.toggle("red",dx<0);
   // Während des Wischens muss die Beschriftung die Richtung sofort anzeigen.
   bg.querySelector(".swipeLabel").textContent = dx<0 ? "↩ Später" : "✓ Erledigt";
   bg.style.opacity=String(Math.min(1,Math.abs(dx)/45));
 }
 function finish(x,y){
   if(!active)return;
   active=false;
   const dx=x-sx,dy=y-sy;
   if(dragging && Math.abs(dx)>=65 && Math.abs(dx)>Math.abs(dy)*1.1){
     if(dx>0){
       // RECHTS WISCHEN = GRÜN = ERLEDIGT
       content.style.transition="transform .16s ease";
       content.style.transform="translate3d(100%,0,0)";
       bg.classList.add("green"); bg.classList.remove("red");
       bg.querySelector(".swipeLabel").textContent="✓ Erledigt";
       bg.style.opacity="1";
       setTimeout(()=>{
         toggleTask(task);
         toast("Erledigt ✓");
       },150);
     }else{
       // LINKS WISCHEN = ROT = SPÄTER
       content.style.transition="transform .16s ease";
       content.style.transform="translate3d(-100%,0,0)";
       bg.classList.add("red"); bg.classList.remove("green");
       bg.querySelector(".swipeLabel").textContent="↩ Später";
       bg.style.opacity="1";
       setTimeout(()=>postponeTask(task),150);
     }
   }else reset();
 }
 el.addEventListener("touchstart",e=>{
   if(e.touches.length===1)start(e.touches[0].clientX,e.touches[0].clientY);
 },{passive:true});
 el.addEventListener("touchmove",e=>{
   if(e.touches.length===1)move(e.touches[0].clientX,e.touches[0].clientY,e);
 },{passive:false});
 el.addEventListener("touchend",e=>{
   if(e.changedTouches.length)finish(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
 },{passive:true});
 el.addEventListener("pointerdown",e=>{
   if(e.pointerType==="mouse" || e.pointerType==="pen")start(e.clientX,e.clientY);
 });
 el.addEventListener("pointermove",e=>{
   if(e.pointerType==="mouse" || e.pointerType==="pen")move(e.clientX,e.clientY,e);
 });
 el.addEventListener("pointerup",e=>{
   if(e.pointerType==="mouse" || e.pointerType==="pen")finish(e.clientX,e.clientY);
 });
 el.addEventListener("pointercancel",()=>{if(active){active=false;reset();}});
}
function nextDueForTask(task){
 const x=allCatalog().find(c=>c.text===task.text && c.room===task.room);
 return x?catalogNextDate(x):null;
}
function nextDueLabelForTask(task){
 const d=nextDueForTask(task);
 if(!d || task.room==="Ganzes Haus" || task.area==="Alltag")return "";
 return `Nächster Termin: <b>${esc(formatCatalogNextDate(d))}</b>`;
}
function taskRow(task){
 const el=document.createElement("div");el.className="task"+(isDone(task)?" done":"");
 const due=isDone(task)?nextDueLabelForTask(task):"";
 el.innerHTML=`<div class="swipeBg"><span class="swipeLabel">✓ Erledigt</span></div>
 <div class="taskContent"><button class="check" aria-label="Erledigt">${isDone(task)?"✓":""}</button>
 <div class="taskMain"><div class="taskName">${esc(task.text)}</div><div class="meta">${esc(task.room)}${task.area?" · "+esc(task.area):""}</div>${due?`<div class="meta nextDue">${due}</div>`:""}</div>
 <div class="taskButtons"><button class="iconBtn info" aria-label="Details">ⓘ</button><button class="iconBtn later" aria-label="Verschieben">↩</button></div></div>`;
 el.querySelector(".check").onclick=()=>toggleTask(task);
 el.querySelector(".info").onclick=()=>openDetail(task.text,task.room,task.area);
 el.querySelector(".later").onclick=()=>postponeTask(task);
 swipeRow(el,task);
 return el;
}
function renderToday(){
 updateCompletion();
 const main=document.getElementById("main");
 if(today.getDay()===0){
  main.innerHTML=`<div class="card" id="sundayOptionalCard" style="display:none">
  <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap">
    <div><b>☀️ Sonntag optional</b>
      <div class="small">Der Sonntag bleibt grundsätzlich haushaltsfrei. Wenn du heute Lust hast, kannst du freiwillig eine Hauspflege-Aufgabe freischalten.</div>
    </div>
    <button class="btn" id="sundayOptionalBtn">☀️ Sonntag nutzen</button>
  </div>
</div>
<div class="card"><div class="celebrate">🌿 Sonntag = haushaltsfrei.</div><h2>Heute müsst ihr nichts aufholen.</h2><p class="small">Wenn etwas unter der Woche liegen geblieben ist, darf es liegen bleiben. ❤️</p></div>`;
  return;
 }
 const tasks=plannedTasks().filter(t=>!isPostponed(t)),done=tasks.filter(isDone).length,pct=tasks.length?Math.round(done/tasks.length*100):0;
 let html=`<div class="card hero"><div class="topline"><div><b>${esc(dateLabel())}</b><div class="small">${esc(themeFor(today))}</div></div><span class="badge">🧸 ${state.chaos?"Hanni-Modus":"Normal"}</span></div>
 <div class="progress"><i style="width:${pct}%"></i></div>
 <div class="small">${done} von ${tasks.length} Aufgaben erledigt</div><div class="swipeHint">👈 ROT · Später &nbsp;&nbsp; | &nbsp;&nbsp; Erledigt · GRÜN 👉</div>
 <div class="actions" style="margin-top:15px"><button class="btn primary" id="addBtn">＋ Aufgabe hinzufügen</button><button class="btn" id="energyBtn">⚡ Ich habe Energie</button><button class="btn" id="chaosBtn">🧸 ${state.chaos?"Normalmodus":"Heute leicht"}</button><button class="btn ghost" id="catalogBtn">📚 Aufgabenkatalog</button></div>
 <div class="notice">Wenn heute Baby-Chaos ist: nur das Nötigste. Nichts wird morgen automatisch nachgeholt. ❤️</div></div>`;
 if(completedToday())html+=`<div class="celebrate">🥳 Alles geschafft! Jetzt ist Feierabend – Me-Time gehört dazu. ❤️</div>`;
 main.innerHTML=html;
 const plannerBox=document.createElement("div");
 plannerBox.className="intelBox";
 const special=intelligentSpecialForDate(today);
 if(special&&isMajorSpecialTask(special)){
   plannerBox.innerHTML=`<b>🎯 Heute ist ein Schwerpunkt</b><div class="intelMeta">${esc(special.text)} · ${esc(special.room||"")}</div><div class="intelMeta">Der normale Wochen- und Sonderturnus pausiert heute bewusst. ❤️</div>`;
 }else{
   plannerBox.innerHTML=`<b>🧠 Heute passend dosiert</b><div class="intelMeta">Die Wochenaufgaben werden nach Aufwand und tatsächlicher Erledigung ausgewählt.</div>`;
 }
 main.appendChild(plannerBox);
 const energyBox=document.createElement("div");
 energyBox.className="card";
 energyBox.id="energyBox";
 energyBox.style.display="none";
 main.appendChild(energyBox);
 const openTasks=tasks.filter(t=>!isDone(t));
 const completedTasks=tasks.filter(t=>isDone(t));

 // Completed tasks are collected into one compact, collapsed section.
 if(completedTasks.length){
   const completedCard=document.createElement("div");
   completedCard.className="card";
   completedCard.innerHTML=`<div class="topline"><b>✓ Erledigt (${completedTasks.length})</b><button class="btn" id="toggleCompleted">${state.completedOpen?"Ausblenden":"Anzeigen"}</button></div>`;
   if(state.completedOpen){
     const groupsDone={};
     for(const t of completedTasks)(groupsDone[t.group]??=[]).push(t);
     for(const [group,arr] of Object.entries(groupsDone)){
       const sec=document.createElement("section");
       sec.innerHTML=`<div class="sectionTitle">${esc(group)}</div>`;
       for(const t of arr)sec.appendChild(taskRow(t));
       completedCard.appendChild(sec);
     }
   }
   main.appendChild(completedCard);
   completedCard.querySelector("#toggleCompleted").onclick=()=>{
     state.completedOpen=!state.completedOpen; save(); render();
   };
 }

 const groups={};
 for(const t of openTasks)(groups[t.group]??=[]).push(t);
 for(const [group,arr] of Object.entries(groups)){
   const sec=document.createElement("section");
   sec.innerHTML=`<div class="sectionTitle">${esc(group)}</div>`;
   for(const t of arr)sec.appendChild(taskRow(t));
   main.appendChild(sec);
 }
 renderPostponed(main);
 document.getElementById("addBtn").onclick=addCustom;
 document.getElementById("energyBtn").onclick=showEnergyChoices;
 if(state.energyOpen) showEnergyChoices(false);
 document.getElementById("chaosBtn").onclick=()=>{state.chaos=!state.chaos;save();render()};
 document.getElementById("catalogBtn").onclick=()=>{selectedTab="catalog";render()};
}
function energyCandidates(){
 const planned=plannedTasks().filter(t=>!isPostponed(t));
 const recentCutoff=new Date(today);recentCutoff.setDate(recentCutoff.getDate()-7);
 return allCatalog()
  .filter(x=>x.area!=="Alltag")
  .filter(x=>!planned.some(t=>t.room===x.room && t.text===x.text))
  .filter(x=>!Object.values(state.postponed||{}).some(p=>p.canonical===x.room+"|"+x.text))
  .map(x=>({...x,canonical:x.room+"|"+x.text,next:catalogNextDate(x)}))
  .filter(x=>{
    const last=state.lastDone?.[x.canonical];
    if(!last)return true;
    return new Date(last+"T12:00:00")<recentCutoff;
  })
  .sort((a,b)=>{
    const ad=a.next?Math.round((today-a.next)/86400000):-999999;
    const bd=b.next?Math.round((today-b.next)/86400000):-999999;
    if(bd!==ad)return bd-ad;
    return taskWeight(b.text)-taskWeight(a.text);
  });
}
function showEnergyChoices(scroll=true){
 const box=document.getElementById("energyBox");
 if(!box)return;
 state.energyOpen=true;
 const arr=energyCandidates().slice(0,3);
 box.style.display="block";
 box.innerHTML=`<div class="topline"><div><b>⚡ Heute habe ich Energie</b><div class="small">Wähle so viele passende Aufgaben aus, wie du möchtest. Nach jeder Erledigung rückt automatisch eine neue nach. ❤️</div></div><button class="btn" id="closeEnergy">Schließen</button></div>`;
 if(!arr.length){box.innerHTML+=`<div class="empty" style="margin-top:12px">Gerade gibt es keine sinnvolle Zusatzaufgabe. Dann ist heute einfach genug. 🥰</div>`;}
 arr.forEach(x=>{
   const row=document.createElement("div");row.className="result";row.style.marginTop="10px";
   row.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · ${esc(x.area)}</div><div class="meta">Nächster regulärer Termin: <b>${esc(formatCatalogNextDate(x.next))}</b></div></div><button class="btn primary">Heute vorziehen</button>`;
   row.querySelector("button").onclick=()=>{
     addCatalogToToday(x);
     showEnergyChoices(false);
     toast("Für heute vorgezogen ❤️");
   };
   box.appendChild(row);
 });
 box.querySelector("#closeEnergy").onclick=()=>{state.energyOpen=false;save();box.style.display="none"};
 if(scroll)box.scrollIntoView({behavior:"smooth",block:"nearest"});
}

function renderPostponed(main){
 const ids=Object.keys(state.postponed);
 if(!ids.length)return;
 const card=document.createElement("div");card.className="card";
 card.innerHTML=`<div class="topline"><b>↩ Auf später verschoben (${ids.length})</b><button class="btn" id="togglePost">${state.postponedOpen?"Ausblenden":"Anzeigen"}</button></div>`;
 if(state.postponedOpen){
  for(const id of ids){
   const x=state.postponed[id],r=document.createElement("div");r.className="task";
   r.innerHTML=`<div class="taskMain"><div class="taskName">${esc(x.text)}</div><div class="meta">${esc(x.room)} · verschoben am ${esc(x.from)}</div></div><button class="btn">Wieder öffnen</button>`;
   r.querySelector("button").onclick=()=>restorePostponed(id);card.appendChild(r);
  }
 }
 main.appendChild(card);card.querySelector("#togglePost").onclick=()=>{state.postponedOpen=!state.postponedOpen;save();render()};
}
function addCustom(){ openCatalogEditor(null); }
function renderWeek(){
 const main=document.getElementById("main");
 main.innerHTML=`<div class="card"><h2 style="margin-top:0">Diese Woche</h2><p class="small">Die Themen sind Anker, keine Pflicht, jeden Raum komplett zu schaffen.</p><div class="weekgrid" id="weekgrid"></div></div>`;
 const grid=main.querySelector("#weekgrid"),base=new Date(today);base.setDate(base.getDate()-(base.getDay()||7)+1);
 for(let i=0;i<7;i++){const d=new Date(base);d.setDate(base.getDate()+i);const k=dayKey(d),el=document.createElement("div");
  el.className="daycard"+(k===dayKey()?" today":"")+(d.getDay()===0?" free":"");
  el.innerHTML=`<div class="dayname">${new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"2-digit"}).format(d)}</div><div class="daytheme">${esc(themeFor(d))}</div>${state.completedDays[k]?"<div class='small' style='margin-top:8px'>✓ vollständig erledigt</div>":""}`;
  grid.appendChild(el);
 }
}
function renderHistory(){
 const main=document.getElementById("main");
 if(!state.calendarYear)state.calendarYear=today.getFullYear();
 const year=state.calendarYear;
 const monthNames=["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
 const weekdayNames=["Mo","Di","Mi","Do","Fr","Sa","So"];

 function shortTheme(d){
   if(d.getDay()===0)return "frei";
   if(d.getDay()===1)return "EG";
   if(d.getDay()===2)return weekA(d)?"Bad A":"Bad B";
   if(d.getDay()===3)return "OG";
   if(d.getDay()===4)return weekA(d)?"EG A":"EG B";
   if(d.getDay()===5)return basementRoom(d);
   return "Wäsche";
 }
 function showDay(d){
   const k=dayKey(d);
   const plan=planForDate(d);
   const isToday=k===dayKey(today);
   const details=[];
   if(d.getDay()===0) details.push("Haushaltsfrei ❤️");
   else {
     plan.forEach(([room,tasks])=>{
       details.push(`<div class="detailTask"><b>${esc(room)}</b> · ${tasks.length} geplante Aufgaben</div>`);
       tasks.forEach(t=>details.push(`<div class="detailTask" style="padding-left:12px">• ${esc(t)}</div>`));
     });
   }
   const dateLabel=new Intl.DateTimeFormat("de-AT",{weekday:"long",day:"2-digit",month:"long",year:"numeric"}).format(d);
   const el=document.getElementById("yearDetail");
   el.innerHTML=`<h3>${esc(dateLabel)}${isToday?" · heute":""}</h3>
     <div class="small">${esc(themeFor(d))}</div>
     <div class="detailTasks">${details.length?details.join(""):`<div class="detailTask">Keine Hausarbeit geplant. ❤️</div>`}</div>`;
 }

 main.innerHTML=`<div class="card">
   <div class="yearIntro">
    <div><div class="yearTitle">📅 Jahreskalender ${year}</div>
      <div class="small">Alle Tage auf einen Blick – mit Wochenanker, hausfreier Sonntagen und den automatisch eingeplanten Sonderaufgaben.</div></div>
    <div class="yearNav"><button id="prevYear">‹</button><button id="thisYear">Heute</button><button id="nextYear">›</button></div>
   </div>
   <div class="calendarLegend">
    <span>🟢 = vollständig erledigt</span><span>♡ = heute</span><span>🔢 = geplante Aufgaben</span><span>So = haushaltsfrei</span>
   </div>
   <div class="monthGrid" id="monthGrid" style="margin-top:16px"></div>
   <div class="yearDetail" id="yearDetail"></div>
 </div>
 <div class="card"><b>Me-Time ❤️</b><p class="small">10–20 Minuten mehrmals pro Woche · 30–60 Minuten wöchentlich · 1–2 Stunden monatlich. Nicht streichen, nur weil eine Aufgabe offen ist.</p></div>`;

 const grid=main.querySelector("#monthGrid");
 for(let m=0;m<12;m++){
   const card=document.createElement("div");card.className="monthCard";
   let inner=`<div class="monthName">${monthNames[m]}</div><div class="weekdays">${weekdayNames.map(x=>`<span>${x}</span>`).join("")}</div><div class="monthDays">`;
   const first=new Date(year,m,1,12);
   const offset=(first.getDay()+6)%7;
   for(let i=0;i<offset;i++)inner+=`<div></div>`;
   const days=new Date(year,m+1,0).getDate();
   for(let day=1;day<=days;day++){
     const d=new Date(year,m,day,12),k=dayKey(d);
     const care=careCandidateForDate(d);
     const calendarTasks=calendarTasksForDate(d);
     const free=d.getDay()===0;
     const done=!!state.completedDays[k];
     const classes=["yearDay"];
     if(free)classes.push("free");
     if(done)classes.push("completed");
     if(k===dayKey(today))classes.push("today");
     inner+=`<button class="${classes.join(" ")}" data-date="${k}" title="${esc(themeFor(d))}">
       <span class="dayNum">${day}</span>
       <span class="dayMark">${esc(shortTheme(d))}</span>
       ${calendarTasks.length?`<span class="careMark">${calendarTasks.length}</span>`:""}
       ${done?`<span class="careMark">✓</span>`:""}
     </button>`;
   }
   inner+="</div>";
   card.innerHTML=inner;
   grid.appendChild(card);
 }
 grid.querySelectorAll(".yearDay").forEach(btn=>{
   btn.onclick=()=>{
     const [y,m,d]=btn.dataset.date.split("-").map(Number);
     showDay(new Date(y,m-1,d,12));
     document.getElementById("yearDetail").scrollIntoView({behavior:"smooth",block:"nearest"});
   };
 });
 main.querySelector("#prevYear").onclick=()=>{state.calendarYear=year-1;save();render()};
 main.querySelector("#nextYear").onclick=()=>{state.calendarYear=year+1;save();render()};
 main.querySelector("#thisYear").onclick=()=>{state.calendarYear=today.getFullYear();save();render()};
 showDay(new Date(year,today.getFullYear()===year?today.getMonth():0,today.getFullYear()===year?today.getDate():1,12));
}

const EXTRA_ROOM_TASKS = {'Eingangsbereich': ['Boden saugen', 'Boden wischen', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen', 'Spinnweben entfernen', 'Fensterbank reinigen', 'Ablageflächen ordnen'], 'Garderobe': ['Boden saugen', 'Boden wischen', 'Sockelleisten reinigen', 'Schuhe ordnen', 'Jacken ordnen', 'Taschen ordnen', 'Türklinken reinigen', 'Lichtschalter außen abwischen', 'Spiegel reinigen'], 'Flur': ['Boden saugen', 'Boden wischen', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen', 'Spinnweben entfernen', 'Bilderrahmen entstauben'], 'Büro': ['Boden saugen', 'Boden wischen', 'Schreibtisch reinigen', 'Ablageflächen reinigen', 'Regale abstauben', 'Schubladen ordnen', 'Schrankfronten reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen', 'Spinnweben entfernen'], 'Abstellraum': ['Boden saugen', 'Boden wischen', 'Regale abstauben', 'Vorräte ordnen', 'Schrankfronten reinigen', 'Schrankgriffe reinigen', 'Sockelleisten reinigen', 'Türklinken reinigen'], 'Speis': ['Boden saugen', 'Boden wischen', 'Arbeitsflächen reinigen', 'Regale abstauben', 'Vorräte kontrollieren', 'Vorräte ordnen', 'Schubladen reinigen', 'Schrankfronten reinigen', 'Türklinken reinigen'], 'Gäste-WC': ['Boden saugen', 'Boden wischen', 'Waschbecken reinigen', 'Armatur reinigen', 'Spiegel reinigen', 'Toilette reinigen', 'WC-Bürste reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen', 'Fugen kontrollieren/reinigen'], 'Kinderbad': ['Boden saugen', 'Boden wischen', 'Waschbecken reinigen', 'Armatur reinigen', 'Spiegel reinigen', 'Toilette reinigen', 'WC-Bürste reinigen', 'Dusche/Bad reinigen', 'Fugen kontrollieren/reinigen', 'Silikon kontrollieren', 'Türklinken reinigen'], 'Bad': ['Boden saugen', 'Boden wischen', 'Waschbecken reinigen', 'Armatur reinigen', 'Spiegel reinigen', 'Dusche/Bad reinigen', 'Toilette reinigen', 'WC-Bürste reinigen', 'Fugen kontrollieren/reinigen', 'Silikon kontrollieren', 'Türklinken reinigen'], 'WC': ['Boden saugen', 'Boden wischen', 'Toilette reinigen', 'WC-Bürste reinigen', 'Waschbecken reinigen', 'Armatur reinigen', 'Spiegel reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Schlafzimmer': ['Boden saugen', 'Boden wischen', 'Bettwäsche wechseln', 'Matratze pflegen', 'Sockelleisten reinigen', 'Fensterbank reinigen', 'Spinnweben entfernen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Ankleidezimmer': ['Boden saugen', 'Boden wischen', 'Kleidung ordnen', 'Schuhe ordnen', 'Schrankfronten reinigen', 'Schrankgriffe reinigen', 'Regale abstauben', 'Sockelleisten reinigen', 'Türklinken reinigen'], 'Kinderzimmer 1': ['Boden saugen', 'Boden wischen', 'Spielzeug grob ordnen', 'Bücher ordnen', 'Regale abstauben', 'Schrankfronten reinigen', 'Sockelleisten reinigen', 'Fensterbank reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Kinderzimmer 2': ['Boden saugen', 'Boden wischen', 'Spielzeug grob ordnen', 'Bücher ordnen', 'Regale abstauben', 'Schrankfronten reinigen', 'Sockelleisten reinigen', 'Fensterbank reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Waschküche': ['Boden saugen', 'Boden wischen', 'Waschmaschine außen reinigen', 'Waschmittelschublade reinigen', 'Türdichtung der Waschmaschine reinigen', 'Trockner außen reinigen', 'Flusensieb nach Herstellerangabe reinigen', 'Arbeitsflächen reinigen', 'Wäschekörbe reinigen', 'Sockelleisten reinigen', 'Vorräte/Pflegemittel ordnen'], 'Musikzimmer': ['Boden saugen', 'Boden wischen', 'Instrumente materialgerecht entstauben', 'Noten ordnen', 'Regale abstauben', 'Ablageflächen reinigen', 'Schubladen ordnen', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Trainingsraum': ['Boden saugen', 'Boden wischen', 'Trainingsgeräte abwischen', 'Matten reinigen', 'Ablageflächen reinigen', 'Regale abstauben', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Lichtschalter außen abwischen'], 'Technikraum': ['Boden saugen', 'Boden wischen', 'Zugängliche Außenflächen abstauben', 'Ablageflächen reinigen', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Spinnweben entfernen'], 'Lagerraum': ['Boden saugen', 'Boden wischen', 'Regale abstauben', 'Kartons/Behälter ordnen', 'Ablageflächen reinigen', 'Sockelleisten reinigen', 'Türklinken reinigen', 'Spinnweben entfernen'], 'Saunaraum': ['Boden saugen', 'Boden wischen', 'Saunabänke reinigen', 'Glasflächen reinigen', 'Ablageflächen reinigen', 'Sockelleisten reinigen', 'Sauna lüften', 'Sauna nach Herstellerangabe pflegen', 'Türklinken reinigen'], 'Keller allgemein': ['Boden saugen', 'Boden wischen', 'Treppenbereich reinigen', 'Sockelleisten reinigen', 'Spinnweben entfernen', 'Türklinken reinigen', 'Lichtschalter außen abwischen']};
function catalogWithExtras(){
 const rows=Array.isArray(catalogSeed)?catalogSeed.map(r=>r.slice()):[];
 const existing=new Set(rows.map(r=>r[0]));
 for(const [room,tasks] of Object.entries(EXTRA_ROOM_TASKS)){
   if(!existing.has(room)) rows.push([room,SEED_ROOMS[room]?.[1]||"Ganzes Haus",tasks]);
 }
 return rows;
}
function catalogKeyFor(text,room,area){ return "seed|"+[room,text].join("|"); }
function catalogDeleted(key){ return !!(state.catalogDeleted&&state.catalogDeleted[key]); }
function allCatalog(){
 const out=[],seen=new Set();
 state.catalogEdits=state.catalogEdits||{}; state.catalogDeleted=state.catalogDeleted||{};
 function add(text,room,area,meta={}){
   const key=meta.key||catalogKeyFor(text,room,area);
   if(!text || seen.has(key) || catalogDeleted(key))return;
   const edit=state.catalogEdits[key]||{};
   const item={text:edit.text||text,room:edit.room||room,area:edit.area||area||"",key,editable:meta.editable!==false,
     start:edit.start||meta.start||"",interval:Number(edit.interval||meta.interval||0)||0,
     window:!!meta.window,windowKey:meta.windowKey,windowSeasonalKey:meta.windowSeasonalKey,
     seasonal:!!meta.seasonal,seasonalKey:meta.seasonalKey,source:meta.source||"seed"};
   seen.add(key); out.push(item);
 }
 for(const r of catalogWithExtras()){
   const room=r[0]; let area=r[1],tasks=r[2];
   if(!Array.isArray(tasks) && Array.isArray(area)){tasks=area;area=SEED_ROOMS[room]?.[1]||"Ganzes Haus";}
   if(!Array.isArray(tasks))continue;
   for(const t of tasks)add(t,room,area||"",{key:"seed|"+room+"|"+t,editable:true,source:"seed"});
 }
 for(const [t] of ROTATIONS)add(t,"Rotationsaufgabe","Turnus",{key:"rotation|"+t,editable:false,source:"rotation"});
 for(const [,tasks] of DAILY)for(const t of tasks)add(t,"Ganzes Haus","Alltag",{key:"daily|"+t,editable:false,source:"daily"});
 for(const c of state.custom){
   const key=c.key||("custom|"+c.id);
   if(catalogDeleted(key))continue;
   add(c.text,c.room,c.area,{key,editable:true,start:c.start||c.date||"",interval:Number(c.interval||c.repeat||0)||0,source:"custom"});
 }
 for(const w of windowCatalogEntries())add(w.text,w.room,w.area,{key:"window|"+w.windowKey,editable:false,window:true,windowKey:w.windowKey,windowSeasonalKey:w.windowSeasonalKey,source:"window"});
 for(const x of SEASONAL_SPECIALS)add(x.text,x.room,x.area,{key:"seasonal|"+x.key+"|"+x.text,editable:false,seasonal:true,seasonalKey:x.key,source:"seasonal"});
 return out;
}
function definition(title,room="",area=""){
 if(/Fenster/.test(title)){
   return {
    what:"Nur den genannten Fenster-Abschnitt gründlich reinigen – innen, außen nur wenn sicher, inklusive Fensterbank; bei Bedarf Rahmen/Falz im jeweiligen Abschnitt.",
    belongs:[room||"genannter Fensterbereich"],
    not:["Keine anderen Fenster des Hauses zusätzlich","Keine Leiter-/Höhenarbeiten ohne sichere Ausstattung"],
    care:["Fensterpflege in kleine Abschnitte aufteilen; an einem Fenster-Schwerpunkt-Tag entfallen normale Hauspflege-Sonderaufgaben."]
   };
 }

 const t=title.toLowerCase();
 let what=title, belongs=[],not=[],care=[];
 if(/saugen|absaugen/.test(t)){what="Den genannten Bereich gründlich absaugen, inklusive Kanten und sichtbarer Ecken.";belongs=["gut zugängliche Flächen","Ecken und Kanten","sichtbare Krümel/Staubnester"];not=["Möbel komplett verrücken","unzugängliche Bereiche erzwingen"];care=["Bei Möbeln/Teppichen Material und Saugstufe beachten."]}
 else if(/wischen|abwischen|reinigen|sauber machen|säubern/.test(t)){what="Die genannte Oberfläche bzw. den genannten Bereich sauber und streifenarm reinigen.";belongs=["sichtbarer Staub","Krümel","normale Verschmutzungen"];not=["Material durchnässen","aggressive Mittel ohne Materialfreigabe"];care=["Passendes Tuch und materialgereinigtes Mittel verwenden."]}
 if(/türklink|türgriff|türkanten/.test(t)){what="Griff, Klinke und direkt berührte Bereiche gründlich abwischen.";belongs=["Griff","Rosette","direkte Griffzone"];not=["Türblatt komplett reinigen"];care=["Nicht in elektrische Bauteile oder empfindliche Beschläge sprühen."]}
 if(/lichtschalter/.test(t)){what="Nur die zugängliche Außenfläche des Lichtschalters abwischen.";belongs=["Schalteroberfläche","Randbereich"];not=["Schalter öffnen","Flüssigkeit hineinsprühen"];care=["Tuch nur leicht anfeuchten."]}
 if(/steckdose/.test(t)){what="Nur die Außenfläche der Steckdose vorsichtig abwischen.";belongs=["Abdeckung","sichtbarer Rand"];not=["Steckdose öffnen","Flüssigkeit in Öffnungen"];care=["Nur trocken bzw. sehr leicht feucht arbeiten."]}
 if(/toilette|wc-bürste|toilettenrand/.test(t)){what="Das genannte WC-Element gründlich hygienisch reinigen.";belongs=["Innen-/Außenflächen je nach Aufgabe","Rand und sichtbare Spritzer"];not=["andere Badflächen automatisch mitmachen"];care=["Handschuhe tragen. Reinigungsmittel niemals mit Chlor-/Säureprodukten mischen."]}
 if(/fugen|silikon/.test(t)){what="Fugen bzw. Silikon auf Verschmutzung und Auffälligkeiten prüfen und materialgerecht reinigen.";belongs=["sichtbare Ablagerungen","Schimmel-/Verfärbungsstellen beobachten"];not=["beschädigtes Silikon herausreißen"];care=["Bei Schäden oder Schimmelbefall nicht aggressiv scheuern, sondern fachgerecht beurteilen lassen."]}
 if(/kamin|asche|ruß|feuerraum|kaminrost/.test(t)){what="Den genannten Kaminbereich nur im sicheren, vollständig erkalteten Zustand reinigen.";belongs=["erkaltete Asche bzw. die ausdrücklich genannte Kaminfläche"];not=["heiße Asche anfassen","Glut oder Feuer berühren"];care=["Herstellerangaben beachten. Fachgerechte Kamin-/Schornsteinkontrollen nach den geltenden Vorgaben durchführen lassen."]}
 if(/waschmaschine/.test(t)){what="Die genannte zugängliche Außen-/Pflegefläche der Waschmaschine reinigen.";belongs=["Außenfläche","Waschmittelschublade/Dichtung, falls genannt"];not=["Gerät öffnen","technische Teile zerlegen"];care=["Pflegeprogramm und Herstellerangaben beachten."]}
 if(/trockner|flusensieb/.test(t)){what="Trockner bzw. Filter entsprechend der genannten Aufgabe reinigen.";belongs=["Außenfläche","Flusensieb nach Herstellerangabe"];not=["technische Komponenten zerlegen"];care=["Filter und Wartung exakt nach Herstellerangaben."]}
 if(/fenster/.test(t)){what="Das ausdrücklich genannte Fensterteil reinigen und anschließend auf sichtbare Verschmutzungen prüfen.";belongs=["nur der genannte Fensterbereich"];not=["unsichere Außenarbeiten"];care=["Außen nur sicher erreichbar arbeiten; Raffstores/Fenster nach Herstellerangaben."]}
 if(/matratze/.test(t)){what="Matratze nach Pflegehinweisen pflegen, wenden/absaugen nur soweit dafür vorgesehen.";belongs=["Matratzenoberfläche","zugängliche Seiten"];not=["Matratze falsch biegen oder durchnässen"];care=["Pflegeetikett beachten."]}
 if(/vorhang/.test(t)){what="Vorhang bzw. Schiene/Stange entsprechend der genannten Aufgabe entstauben oder reinigen.";belongs=["genannter Vorhangbereich"];not=["Textilien ohne Pflegeetikett waschen"];care=["Pflegeetikett und Material beachten."]}
 if(/sockelleiste/.test(t)){what="Sockelleisten entlang des genannten Bereichs von Staub und sichtbaren Verschmutzungen befreien.";belongs=["Oberkante","Vorderseite","Ecken"];not=["Wandfarbe abschrubben"];care=["Nur leicht feucht reinigen, wenn Material das zulässt."]}
 if(/spinnweb/.test(t)){what="Sichtbare Spinnweben an Decken-, Wand- und Türbereichen entfernen.";belongs=["sichtbare Spinnweben","Ecken"];not=["Wände komplett reinigen"];care=["Sanft arbeiten, besonders bei empfindlichem Stuck."]}
 if(/lampe|leuchten/.test(t)){what="Erreichbare Leuchten außen vorsichtig entstauben/reinigen.";belongs=["zugängliche Außenflächen"];not=["Leuchte zerlegen","unsicher auf Leitern arbeiten"];care=["Stromsicherheit und Herstellerhinweise beachten."]}
 if(/sauna/.test(t)){what="Saunaraum nach Nutzung bzw. im Turnus reinigen und gut lüften.";belongs=["Bänke","Boden","zugängliche Glas-/Holzflächen je nach Aufgabe"];not=["Ofen zerlegen"];care=["Holz und Ofen ausschließlich nach Herstellerangaben behandeln."]}
 if(/backofen/.test(t)){what="Backofen bzw. die ausdrücklich genannten Teile von Fett- und Speiseresten befreien.";belongs=["Innenraum","Tür/Bleche nur wenn genannt"];not=["technische Teile zerlegen"];care=["Herstellerhinweise und Materialverträglichkeit beachten."]}
 if(/geschirrspüler/.test(t)){what="Geschirrspüler im genannten Pflegeumfang reinigen und pflegen.";belongs=["Filter","Dichtung","Pflegeprogramm, wenn genannt"];not=["Maschine zerlegen"];care=["Herstellerangaben beachten."]}
 if(/kühlschrank/.test(t)){what="Kühlschrank im genannten Umfang ausräumen, reinigen und wieder ordentlich einräumen.";belongs=["genannte Fächer/Dichtungen","sichtbare Verschmutzungen"];not=["Lebensmittel unnötig wegwerfen"];care=["Lebensmittel kühl halten und nur wirklich Verdorbenes entsorgen."]}
 if(/arbeitsfläche|arbeitsplatten/.test(t)){what="Die Arbeitsfläche vollständig freiräumen, reinigen und wieder sinnvoll nutzbar machen.";belongs=["gesamte zugängliche Fläche","Randbereiche"];not=["Schränke innen, sofern nicht genannt"];care=["Materialgerechtes Reinigungsmittel."]}
 if(/esstisch|tisch/.test(t)){what="Den ausdrücklich genannten Teil des Tisches reinigen.";belongs=["Oberfläche bzw. genannter Teil","Krümel in sichtbaren Ritzen, falls genannt"];not=["Stühle oder Boden automatisch mitreinigen"];care=["Material und Beschichtung beachten."]}
 if(/schublad|regal|schrank/.test(t)){what="Den genannten Stauraum leeren bzw. ordnen und die ausdrücklich genannte Fläche reinigen.";belongs=["Innen-/Außenfläche je nach Aufgabe","sichtbarer Staub"];not=["gesamten Inhalt ungefragt aussortieren"];care=["Nur entsorgen, was wirklich weg soll."]}
 if(/kleidung|schuhe|taschen|spielzeug|bücher|noten|vorräte/.test(t)){what="Die genannten Dinge kurz ordnen, sinnvoll gruppieren und nur bei Bedarf aussortieren.";belongs=["offensichtliches Durcheinander","passender Stauraum"];not=["perfektes Neuorganisieren des ganzen Raums"];care=["Ziel ist Funktionalität, nicht Perfektion."]}
 if(/bettwäsche|handtücher|decken|teppiche|polster/.test(t)){what="Das genannte Textil nach Pflegeetikett bzw. Pflegehinweis behandeln.";belongs=["genanntes Textil","sichtbarer Staub/Verschmutzung"];not=["Pflegeetikett ignorieren"];care=["Wasch-/Reinigungstemperatur und Trocknung beachten."]}
 if(/müll|papierkorb/.test(t)){what="Den genannten Müll prüfen, bei Bedarf leeren und den Behälter sauber halten.";belongs=["Füllstand","sichtbare Verschmutzung"];not=["halbvolle Behälter zwanghaft leeren"];care=["Bei Biomüll hygienisch arbeiten."]}
 if(/stuck/.test(t)){what="Stuck vorsichtig und trocken von losem Staub befreien.";belongs=["sichtbare Staubauflage"];not=["nass schrubben","Druck auf empfindliche Profile"];care=["Bei empfindlichem/denkmalartigem Material besonders sanft."]}
 if(/böden|boden/.test(t)){what="Den genannten Bodenbereich gründlich reinigen.";belongs=["zugängliche Fläche","Ecken und sichtbare Verschmutzungen"];not=["Möbel schwer verrücken"];care=["Belagmaterial beachten."]}
 if(!belongs.length)belongs=["genau der genannte Bereich bzw. Gegenstand","sichtbare Verschmutzungen"];
 if(!not.length)not=["Aufgaben anderer Räume nicht automatisch mitmachen","keine unnötige Perfektion"];
 if(!care.length)care=["Wenn Material oder Hersteller etwas anderes vorgibt, hat diese Vorgabe Vorrang."];
 return {what,belongs,not,care,room,area};
}
const DEFINITIONS={};
for(const x of allCatalog()) if(!DEFINITIONS[x.text]) DEFINITIONS[x.text]=definition(x.text,x.room,x.area);
function allCatalog(){
 const out=[];
 for(const r of catalogSeed){
  let tasks=r[2],area=r[1];
  if(!Array.isArray(tasks)&&Array.isArray(area)){tasks=area;area=SEED_ROOMS[r[0]]?.[1]||"Ganzes Haus";}
  if(!Array.isArray(tasks))continue;
  for(const t of tasks)out.push({text:t,room:r[0],area:area||""});
 }
 for(const [t] of ROTATIONS)out.push({text:t,room:"Rotationsaufgabe",area:"Turnus"});
 for(const [,tasks] of DAILY)for(const t of tasks)out.push({text:t,room:"Ganzes Haus",area:"Alltag"});
 for(const c of state.custom)out.push({text:c.text,room:c.room,area:c.area,start:c.start||c.date||"",rec:c.rec||c.repeat||""});
 for(const w of windowCatalogEntries())out.push(w);
 for(const x of SEASONAL_SPECIALS)out.push({text:x.text,room:x.room,area:x.area,seasonal:true,seasonalKey:x.key});
 return out;
}
function openDetail(title,room="",area=""){
 const d=DEFINITIONS[title]||definition(title,room,area);
 document.getElementById("detailMeta").textContent=[room,area].filter(Boolean).join(" · ");
 document.getElementById("detailTitle").textContent=title;
 document.getElementById("detailContent").innerHTML=
 `<div class="detailBox"><b>Was mache ich?</b><div>${esc(d.what)}</div></div>
  <div class="detailBox"><b>Was gehört dazu?</b><ul>${d.belongs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="detailBox"><b>Was gehört nicht dazu?</b><ul>${d.not.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="detailBox"><b>Worauf achten?</b><ul>${d.care.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`;
 document.getElementById("detailOverlay").classList.add("open");
}
function catalogPlannedToday(x){
 const planned=plannedTasks();
 return planned.find(t=>t.text===x.text && t.room===x.room && !isPostponed(t));
}
function addCatalogToToday(x){
 const existing=catalogPlannedToday(x);
 if(existing){ toast(isDone(existing)?"Ist heute bereits erledigt ✓":"Ist heute bereits im Plan ❤️"); return; }
 state.todayExtras=Array.isArray(state.todayExtras)?state.todayExtras:[];
 const id="extra|"+dayKey()+"|"+uid();
 state.todayExtras.push({id,date:dayKey(),text:x.text,room:x.room,area:x.area,canonical:"extra|"+x.room+"|"+x.text});
 state.done[id]=false;
 save();
 toast("Heute hinzugefügt ❤️");
}
function nextWeekdayOnOrAfter(d,dow){const out=new Date(d);out.setDate(out.getDate()+((dow-out.getDay()+7)%7));return out;}
function catalogInterval(x){
 const t=(x.text||"").toLowerCase();
 if(x.window||/fenster/.test(t))return 180;
 if(/kaminholz|holz schlichten|direkt vor kamin/.test(t))return 14;
 if(/türklink|lichtschalter|steckdose|arbeitsfläche|esstisch|waschbecken|toilette|wc-bürste|boden saugen|boden wischen/.test(t))return 7;
 if(/sockelleiste|fensterbank|spinnweb|abstauben|abwischen/.test(t))return 30;
 if(/bettwäsche|handtücher/.test(t))return 14;
 if(/vorhang|teppich|polster|matratze|stuck|lampe|türblätter|türrahmen|zargen|fugen|silikon|backofen|kühlschrank|geschirrspüler|waschmaschine|trockner|sauna/.test(t))return 90;
 if(/sortieren|ordnen|aussortieren|vorräte|schubladen|regal|schrank|kabel|papierstapel/.test(t))return 90;
 return 60;
}
function nextBasementOccurrence(room, start){
 let d=new Date(start); d.setHours(12,0,0,0);
 for(let i=0;i<370;i++){
   if(d.getDay()===5 && basementRoom(d)===room)return d;
   d.setDate(d.getDate()+1);
 }
 return d;
}
function catalogNextDate(x, referenceDate=today){
 const ref=new Date(referenceDate); ref.setHours(12,0,0,0);
 if(x.area==="Alltag")return ref;
 if(x.window){
   const group=SEASONAL_SPECIALS.find(s=>s.key===x.windowSeasonalKey);
   if(group){
     const ds=(group.dates||[]).slice().sort();
     for(const date of ds){const d=new Date(date+"T12:00:00");if(d>=ref)return d;}
     if(ds.length)return new Date(ds[0]+"T12:00:00");
   }
   return ref;
 }
 if(x.seasonal){
   const dates=SEASONAL_SPECIALS.filter(s=>s.key===x.seasonalKey).flatMap(s=>s.dates||[]).sort();
   for(const ds of dates){const d=new Date(ds+"T12:00:00");if(d>=ref)return d;}
   return dates.length?new Date(dates[0]+"T12:00:00"):ref;
 }
 if(x.interval>0){
   const last=state.lastDone?.[x.room+"|"+x.text]||state.lastDone?.[x.canonical]||"";
   let d=last?new Date(last+"T12:00:00"):new Date((x.start||"")+"T12:00:00");
   if(isNaN(d)){d=new Date(ref);}
   if(last)d.setDate(d.getDate()+x.interval);
   else while(d<ref)d.setDate(d.getDate()+x.interval);
   return d;
 }
 const rot=ROTATIONS.find(r=>r[0]===x.text);
 if(rot){
   const last=state.lastDone?.["care|"+x.room+"|"+x.text]||state.lastDone?.["care|Rotationsaufgabe|"+x.text]||state.lastDone?.[x.text]||"";
   let d=last?new Date(last+"T12:00:00"):new Date(CARE_START);
   if(last)d.setDate(d.getDate()+rot[1]);
   else{const item=CARE_POOL.find(t=>t.text===x.text);d=item?careDateFor(item):d;}
   while(d<ref)d.setDate(d.getDate()+rot[1]); return d;
 }
 if(BASEMENT.includes(x.room)){
   const last=state.lastDone?.[x.room+"|"+x.text]||"";
   let start=ref;
   if(last){start=new Date(last+"T12:00:00");start.setDate(start.getDate()+1);}
   return nextBasementOccurrence(x.room,start);
 }
 const dowByRoom={Wohnzimmer:1,Essbereich:1,Küche:1,"Gäste-WC":2,Kinderbad:2,Bad:2,WC:2,Schlafzimmer:3,Ankleidezimmer:3,"Kinderzimmer 1":3,"Kinderzimmer 2":3,Saunaraum:3,Treppenhaus:3,Eingangsbereich:4,Garderobe:4,Flur:4,Büro:4,Abstellraum:4,Speis:4};
 const last=state.lastDone?.[x.room+"|"+x.text]||"";
 if(last){let d=new Date(last+"T12:00:00");d.setDate(d.getDate()+catalogInterval(x));while(d<ref)d.setDate(d.getDate()+catalogInterval(x));return d;}
 if(dowByRoom[x.room]!==undefined){
   const items=allCatalog().filter(y=>y.room===x.room&&!y.window);
   const idx=Math.max(0,items.findIndex(y=>y.text===x.text));
   let d=nextWeekdayOnOrAfter(ref,dowByRoom[x.room]);
   d.setDate(d.getDate()+Math.floor(idx/2)*7);
   while(d<ref)d.setDate(d.getDate()+7);
   return d;
 }
 if(x.start){const d=new Date(x.start+"T12:00:00");if(!isNaN(d))return d<ref?ref:d;}
 // Robuster Fallback: niemals "noch nicht festgelegt" und niemals ohne Datum.
 let d=new Date(ref); d.setDate(d.getDate()+Math.min(364,(stableHash((x.room||"")+"|"+(x.text||""))%180)+1));
 while(d.getDay()===0)d.setDate(d.getDate()+1);
 return d;
}
function formatCatalogNextDate(d){
 if(!d)return formatCatalogNextDate(today);
 return d.toLocaleDateString("de-AT",{day:"2-digit",month:"2-digit",year:"numeric"});
}

function catalogCanEdit(x){ return !!x && x.editable!==false && x.area!=="Alltag" && x.source!=="rotation" && x.source!=="daily" && !x.window && !x.seasonal; }
function closeCatalogEditor(){ const el=document.getElementById("catalogEditorOverlay"); if(el)el.remove(); }
function openCatalogEditor(x=null){
 const isEdit=!!x, old=x||{};
 const overlay=document.createElement("div"); overlay.id="catalogEditorOverlay"; overlay.className="catalogEditorOverlay";
 const rooms=Array.from(new Set([...Object.keys(SEED_ROOMS),...state.custom.map(c=>c.room).filter(Boolean)])).sort();
 const firstDue=old.start || (isEdit ? iso(catalogNextDate(old)) : dayKey(today));
 overlay.innerHTML=`<div class="catalogEditorSheet">
   <div class="sheetTop"><div><div class="small">${isEdit?"Aufgabe bearbeiten":"Neue Aufgabe"}</div><h2>${isEdit?"✏️ Aufgabe ändern":"＋ Aufgabe hinzufügen"}</h2></div><button class="close" id="catalogEditorClose">×</button></div>
   <label class="editorLabel">Aufgabe<input id="ceText" value="${esc(old.text||"")}" placeholder="z. B. Schubladen auswischen"></label>
   <label class="editorLabel">Raum<input id="ceRoom" list="catalogRoomList" value="${esc(old.room||"")}" placeholder="z. B. Lagerraum"><datalist id="catalogRoomList">${rooms.map(r=>`<option value="${esc(r)}">`).join("")}</datalist></label>
   <label class="editorLabel">Bereich / Etage<input id="ceArea" value="${esc(old.area||"")}" placeholder="z. B. Keller"></label>
   <div class="editorTwo"><label class="editorLabel">Erster / nächster Termin<input id="ceStart" type="date" value="${esc(firstDue)}"></label>
   <label class="editorLabel">Wiederholung (Tage)<input id="ceInterval" type="number" min="1" step="1" value="${old.interval||catalogInterval(old)||60}"></label></div>
   <div class="small editorHint">Das Datum ist der erste Fälligkeitstermin. Nach jeder Erledigung wird der nächste Termin automatisch um die eingestellte Anzahl Tage weitergesetzt.</div>
   <div class="editorActions"><button class="btn" id="ceCancel">Abbrechen</button><button class="btn primary" id="ceSave">${isEdit?"Änderungen speichern":"Aufgabe speichern"}</button></div>
   ${isEdit?`<button class="deleteBtn" id="ceDelete">🗑️ Aufgabe aus dem Katalog löschen</button>`:""}
 </div>`;
 document.body.appendChild(overlay);
 const close=()=>closeCatalogEditor();
 overlay.querySelector("#catalogEditorClose").onclick=close; overlay.querySelector("#ceCancel").onclick=close;
 overlay.onclick=e=>{if(e.target===overlay)close();};
 overlay.querySelector("#ceSave").onclick=()=>{
   const text=overlay.querySelector("#ceText").value.trim(), room=overlay.querySelector("#ceRoom").value.trim(), area=overlay.querySelector("#ceArea").value.trim();
   const start=overlay.querySelector("#ceStart").value, interval=Math.max(1,Number(overlay.querySelector("#ceInterval").value)||60);
   if(!text||!room||!area||!start){toast("Bitte Aufgabe, Raum, Bereich und Termin ausfüllen ❤️");return;}
   state.catalogEdits=state.catalogEdits||{};
   if(isEdit){
     state.catalogEdits[old.key]={text,room,area,start,interval};
     // If a custom task was edited, keep its own record in sync.
     if(old.source==="custom"){
       const c=state.custom.find(c=>(c.key||("custom|"+c.id))===old.key);
       if(c){c.text=text;c.room=room;c.area=area;c.start=start;c.interval=interval;}
     }
     toast("Aufgabe geändert ❤️");
   }else{
     const id="custom|"+uid(),key=id;
     state.custom.push({id,key,text,room,area,start,interval});
     state.done[id]=false;
     toast("Neue Aufgabe hinzugefügt ❤️");
   }
   save();close();render();
 };
 if(isEdit)overlay.querySelector("#ceDelete").onclick=()=>{
   if(!confirm(`„${old.text}“ wirklich aus dem Aufgabenkatalog löschen?`))return;
   state.catalogDeleted=state.catalogDeleted||{}; state.catalogDeleted[old.key]=true;
   if(old.source==="custom")state.custom=state.custom.filter(c=>(c.key||("custom|"+c.id))!==old.key);
   save();close();render();toast("Aufgabe gelöscht");
 };
}
function renderCatalog(){
 const main=document.getElementById("main");
 main.innerHTML=`<div class="card"><div class="topline"><div><h2 style="margin:0">📚 Aufgabenkatalog</h2><div class="small">Aufgaben suchen, hinzufügen, ändern oder löschen.</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" id="newCatalogTask">＋ Neue Aufgabe</button><button class="btn" id="backToday">Heute</button></div></div>
 <div style="margin-top:15px"><input class="search" id="search" placeholder="Aufgabe, Raum, Bereich suchen …" autocomplete="off"></div>
 <div id="results" style="margin-top:12px"></div></div>`;
 const input=main.querySelector("#search"),results=main.querySelector("#results");
 main.querySelector("#newCatalogTask").onclick=()=>openCatalogEditor(null);
 function draw(){
  const q=input.value.trim().toLowerCase();
  const arr=allCatalog().filter(x=>!q || [x.text,x.room,x.area].join(" ").toLowerCase().includes(q));
  results.innerHTML=`<div class="small" style="padding:5px">${arr.length} Treffer</div>`;
  arr.slice(0,100).forEach(x=>{
   const planned=catalogPlannedToday(x), editable=catalogCanEdit(x);
   const row=document.createElement("div");row.className="result";
   row.innerHTML=`<div class="resultText"><b>${esc(x.text)}</b><div class="meta">${esc(x.room)} · ${esc(x.area)}</div><div class="meta nextDue">Nächster Termin: <b>${esc(formatCatalogNextDate(catalogNextDate(x)))}</b></div></div>
     ${editable?`<button class="iconBtn" title="Aufgabe bearbeiten">✏️</button>`:""}
     ${editable?`<button class="iconBtn" title="Aufgabe löschen">🗑️</button>`:""}
     <button class="iconBtn" title="Details">ⓘ</button><button class="iconBtn">${planned?(isDone(planned)?"✓":"Heute"):"＋"}</button>`;
   const offset=editable?2:0;
   if(editable){
     row.children[1].onclick=()=>openCatalogEditor(x);
     row.children[2].onclick=()=>{if(confirm(`„${x.text}“ wirklich aus dem Aufgabenkatalog löschen?`)){state.catalogDeleted=state.catalogDeleted||{};state.catalogDeleted[x.key]=true;if(x.source==="custom")state.custom=state.custom.filter(c=>(c.key||("custom|"+c.id))!==x.key);save();render();toast("Aufgabe gelöscht");}};
   }
   row.children[1+offset].onclick=()=>openDetail(x.text,x.room,x.area);
   row.children[2+offset].onclick=()=>addCatalogToToday(x);
   if(planned){row.children[2+offset].classList.add("plannedToday");row.children[2+offset].title=isDone(planned)?"Heute bereits erledigt":"Heute bereits im Tagesplan";}
   results.appendChild(row);
  });
  if(!arr.length)results.innerHTML+=`<div class="empty">Nichts gefunden. ❤️</div>`;
 }
 input.oninput=draw;draw();
 main.querySelector("#backToday").onclick=()=>{selectedTab="today";render()};
 input.focus();
}

function sundayOptionalEnabled(){
 return !!(state.sundayOptional && state.sundayOptional[dayKey(today)]);
}
function setupSundayOptional(){
 const card=document.getElementById("sundayOptionalCard");
 const btn=document.getElementById("sundayOptionalBtn");
 if(!card||!btn)return;
 const isSunday=today.getDay()===0;
 card.style.display=isSunday?"block":"none";
 if(!isSunday)return;
 const enabled=sundayOptionalEnabled();
 btn.textContent=enabled?"✓ Sonntag genutzt":"☀️ Sonntag nutzen";
 btn.disabled=enabled;
 btn.onclick=()=>{
   state.sundayOptional=state.sundayOptional||{};
   state.sundayOptional[dayKey(today)]=true;
   save(); render(); toast("Sonntag freigeschaltet ❤️");
 };
}

function render(){
 setupSundayOptional();
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===selectedTab));
 if(selectedTab==="today")renderToday();
 else if(selectedTab==="week")renderWeek();
 else if(selectedTab==="history")renderHistory();
 else renderCatalog();
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{selectedTab=b.dataset.tab;render()});
document.getElementById("closeDetail").onclick=()=>document.getElementById("detailOverlay").classList.remove("open");
document.getElementById("detailOverlay").onclick=e=>{if(e.target.id==="detailOverlay")e.currentTarget.classList.remove("open")};
render();
