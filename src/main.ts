// @ts-nocheck
// TODO(types): Remove this incrementally as the app is typed.
import "./styles.css";
import {
  MOVES,
  WARN,
  CATS,
  CHAINLBL,
  MU,
  OPP as RAW_OPP,
  FD,
  LEG,
  LEGP,
  LEGF,
  LEGS,
  COMBOS,
  PUNISH,
  PUNISH_REVIEW,
  STANCES,
  KNOWLEDGE_CHECKS,
  FRAME_TRAPS,
} from "./data";
"use strict";
var OPP = RAW_OPP;
var SECTIONS = [
  {id:"start", num:"00", lv:0, title:{en:"Start here",de:"Los geht's"}, blocks:[
    {t:"lead", x:{en:"A guide for every rank. Use the controls at the top to set your **language** and your **level** — at lower levels the guide hides the advanced sections so you are not overwhelmed.",
      de:"Ein Guide für jeden Rang. Stell oben deine **Sprache** und dein **Level** ein — auf niedrigen Stufen blendet der Guide die fortgeschrittenen Sektionen aus, damit du nicht überfordert wirst."}},
    {t:"call", v:"key", h:{en:"Three things that make this guide work",de:"Drei Dinge, die diesen Guide ausmachen"}, x:{en:"**(1)** Every move has *exact* frames — startup, on block, on hit — and you click it to read the details. **(2)** The **Input Trainer** lets you bind your own keys and see live what you press. **(3)** Tap the **star** on any move to pin it to your **My Setups** list at the top of the move list.",
      de:"**(1)** Jeder Move hat *exakte* Frames — Startup, on Block, on Hit — und du klickst ihn für Details. **(2)** Der **Input-Trainer** lässt dich eigene Tasten zuordnen und live sehen, was du drückst. **(3)** Tipp den **Stern** an einem Move, um ihn oben in der Movelist unter **Meine Setups** zu pinnen."}},
    {t:"call", v:"note", h:{en:"Alisa in one line",de:"Alisa in einem Satz"}, x:{en:"Low damage, elite movement. You win by making the opponent **whiff** and punishing it — not with huge combos. So defense and consistency win you rounds.",
      de:"Wenig Schaden, elitäres Movement. Du gewinnst, indem der Gegner **whifft** und du es bestrafst — nicht mit Riesen-Combos. Also gewinnen Defense und Konsistenz die Runden."}},
    {t:"call", v:"key", h:{en:"Where she is strong",de:"Wo sie stark ist"}, x:{en:"**(1) Movement & space control** — she has no just-frame inputs, so all your execution goes into dashes and steps. **(2) A safe poking game** — her core buttons risk little and keep the round in your hands. **(3) Chainsaw pressure** — Destructive Form cracks patient blockers with plus frames and chip damage. **(4) Real panic tools** — power crush, hopkick and Heat Smash cover the moments you're being run over. **(5) She rewards fundamentals** — the core loop (03) carries you from day one to the highest ranks.",
      de:"**(1) Movement & Raumkontrolle** — sie hat keine Just-Frame-Inputs, also geht deine ganze Execution in Dashes und Steps. **(2) Sicheres Poking** — ihre Kern-Buttons riskieren wenig und halten die Runde in deiner Hand. **(3) Kettensägen-Druck** — Destructive Form knackt geduldige Blocker mit Plus-Frames und Chip-Schaden. **(4) Echte Panik-Tools** — Power Crush, Hopkick und Heat Smash decken die Momente, in denen du überrannt wirst. **(5) Sie belohnt Fundamentals** — der Kern-Kreislauf (03) trägt dich von Tag eins bis in die höchsten Ränge."}},
    {t:"call", v:"warn", h:{en:"Where she is weak — plan around it",de:"Wo sie schwach ist — plane damit"}, x:{en:"**(1) Below-average damage per touch** — you must win more exchanges than your opponent, so consistency beats style. **(2) Okizeme is not her win condition** — she has wake-up coverage (Close range, 06), but you win rounds with spacing, pokes, movement and chainsaw pressure, not with knockdown loops. **(3) Comebacks are hard** — from a big life deficit she must force the pace, and a forced Alisa is a readable Alisa. The comeback is discipline, not one button. **(4) Panic moves and raw stance entries are loans** — every blocked one hands the opponent a launch or a free turn. Spend them on reads, not on fear.",
      de:"**(1) Unterdurchschnittlicher Schaden pro Treffer** — du musst mehr Exchanges gewinnen als dein Gegner, also schlägt Konsistenz den Stil. **(2) Okizeme ist nicht ihre Win-Condition** — sie hat Optionen am Boden (Close Range, 06), aber Runden gewinnst du mit Spacing, Pokes, Movement und Kettensägen-Druck, nicht mit Knockdown-Loops. **(3) Comebacks sind schwer** — bei großem Lebensrückstand muss sie das Tempo erzwingen, und eine gezwungene Alisa ist eine lesbare Alisa. Das Comeback ist Disziplin, kein einzelner Button. **(4) Panik-Moves und rohe Stance-Entries sind Kredite** — jeder geblockte schenkt dem Gegner einen Launch oder den Zug. Setz sie auf Reads ein, nicht aus Angst."}},
    {t:"call", v:"note", h:{en:"How to read the badges",de:"So liest du die Badges"}, x:{en:"Badges matter: this guide targets **Tekken 8 Ver. 3.01.01**. Normal advice comes from our canonical local content. {{minus:⚠ needs lab check}} means the idea is useful, but not treated as confirmed for this patch yet. A grey *last reviewed* date shows when a card was last checked against our data.",
      de:"Badges sind wichtig: Dieser Guide zielt auf **Tekken 8 Ver. 3.01.01**. Normale Tipps kommen aus unseren kanonischen lokalen Daten. {{minus:⚠ muss gelabt werden}} heißt: Die Idee ist nützlich, aber für diesen Patch noch nicht als bestätigt behandelt. Ein graues *zuletzt geprüft*-Datum zeigt, wann eine Karte zuletzt gegen unsere Daten geprüft wurde."}}
  ]},
  {id:"basics", num:"01", lv:0, title:{en:"Tekken basics",de:"Tekken-Basics"}, blocks:[
    {t:"lead", x:{en:"The foundation everything builds on. Skip it if you already read frames fluently.",
      de:"Die Grundlage für alles. Überspring es, wenn du Frames schon flüssig liest."}},
    {t:"h3", x:{en:"Highs, mids and lows",de:"Highs, Mids und Lows"}},
    {t:"p", x:{en:"Every attack is **high**, **mid** or **low**. Standing block stops highs and mids. Crouch block stops lows and mids. The catch: a mid cannot be blocked crouching, and a high whiffs over a croucher. That tension — *stand or crouch?* — is the whole mix-up.",
      de:"Jeder Angriff ist **High**, **Mid** oder **Low**. Stehend blockt Highs und Mids. Geduckt blockt Lows und Mids. Der Haken: ein Mid kannst du nicht geduckt blocken, und ein High whifft über einen Duckenden. Diese Spannung — *stehen oder ducken?* — ist der ganze Mixup."}},
    {t:"h3", x:{en:"On hit vs on block (+ / \u2212)",de:"On Hit vs On Block (+ / \u2212)"}},
    {t:"p", x:{en:"After a move connects, one player acts first. **Plus** means you recover first (your turn). **Minus** means they do. A jab is usually {{plus:+8 on hit}} / {{plus:+1 on block}}; a launcher might be {{minus:-15 on block}}. This single idea decides who attacks and who defends. A small letter after a number (like `+8g` or `+5c`) just marks a specific state — focus on the number first.",
      de:"Nachdem ein Move trifft, darf einer zuerst handeln. **Plus** = du bist zuerst dran (dein Zug). **Minus** = der Gegner. Ein Jab ist meist {{plus:+8 on Hit}} / {{plus:+1 on Block}}; ein Launcher vielleicht {{minus:-15 on Block}}. Diese eine Idee entscheidet, wer angreift und wer verteidigt. Ein kleiner Buchstabe nach der Zahl (`+8g`, `+5c`) markiert nur einen Zustand — achte zuerst auf die Zahl."}},
    {t:"call", v:"key", h:{en:"The one habit that fixes panic",de:"Die eine Gewohnheit gegen Panik"}, x:{en:"Under pressure and unsure whose turn it is? **Block one more hit instead of mashing.** Most strings are negative after block, so waiting hands you the turn back. Mashing into the unknown is exactly what gets you launched.",
      de:"Unter Druck und unsicher, wer dran ist? **Blocke einen Hit mehr, statt zu mashen.** Die meisten Strings sind nach Block negativ, also gibt dir Warten den Zug zurück. Mashen ins Ungewisse ist genau das, was dich launcht."}},
    {t:"h3", x:{en:"Startup (iX)",de:"Startup (iX)"}},
    {t:"p", x:{en:"`i10` means the first active frame is on frame 10 — the move's speed. When the opponent is {{minus:-12}} on block, any move starting in 12 frames or fewer is *guaranteed*. That's all punishing is: matching your move's speed to their disadvantage.",
      de:"`i10` heißt, der erste aktive Frame ist auf Frame 10 — die Speed. Ist der Gegner {{minus:-12}} auf Block, ist jeder Move mit 12 Frames Startup oder weniger *garantiert*. Mehr ist Punishing nicht: deine Speed an seinen Nachteil anpassen."}}
  ]},
  {id:"inputs", num:"02", lv:0, title:{en:"Inputs & trainer",de:"Inputs & Trainer"}, blocks:[
    {t:"lead", x:{en:"Bind your own keys below, then arm the trainer and press them. The on-screen pad lights up live and your inputs appear underneath — exactly as Tekken reads them, with `+` for simultaneous buttons.",
      de:"Ordne unten deine eigenen Tasten zu, aktiviere den Trainer und drück sie. Das Pad leuchtet live, und deine Eingaben erscheinen darunter — genau wie Tekken sie liest, mit `+` für gleichzeitige Buttons."}},
    {t:"trainer"},
    {t:"h3", x:{en:"Reading notation",de:"Notation lesen"}},
    {t:"p", x:{en:"Directions are letters; attack buttons are numbers. Combine directions by holding two at once (`df` = down and forward together), and combine buttons with `+` (`1+2` = press both at the same time). This reference covers the situation tags and the little frame-suffix letters too.",
      de:"Richtungen sind Buchstaben; Attack-Buttons sind Zahlen. Richtungen kombinierst du, indem du zwei gleichzeitig hältst (`df` = unten und vorne zusammen), Buttons mit `+` (`1+2` = beide gleichzeitig). Diese Referenz erklärt auch die Situations-Tags und die kleinen Frame-Suffix-Buchstaben."}},
    {t:"notation"},
    {t:"p", x:{en:"**Example:** `df+1,1 > DES.1+2` reads as \u2014 do df+1, then 1 (that's the string df+1,1), then cancel into the chainsaw move 1+2. And a move listed as `i13 / -6 / +5` means: 13-frame startup, -6 on block (their turn after), +5 on hit (your turn after).",
      de:"**Beispiel:** `df+1,1 > DES.1+2` liest sich so \u2014 mach df+1, dann 1 (das ist der String df+1,1), dann cancle in den Kettens\u00e4gen-Move 1+2. Und ein Move mit `i13 / -6 / +5` bedeutet: 13 Frames Startup, -6 auf Block (danach sein Zug), +5 auf Hit (danach dein Zug)."}},
    {t:"h3", x:{en:"Korean backdash (KBD)",de:"Korean Backdash (KBD)"}},
    {t:"p", x:{en:"The movement that lets you whiff-punish and beat runaway players. The input is `b, db, n, b` looped. On keyboard it runs through SOCD cleaning: holding two opposite directions reads as neutral, which gives you the free back-input back.",
      de:"Das Movement, mit dem du whiff-punishst und Runaway-Spieler schlägst. Der Input ist `b, db, n, b` geloopt. Auf Keyboard läuft es über SOCD-Cleaning: zwei gegensätzliche Richtungen lesen als Neutral, was dir den freien Back-Input zurückgibt."}},
    {t:"call", v:"note", h:{en:"The easy method",de:"Die Easy-Methode"}, x:{en:"Hold **back**, then tap **down** then **forward** rhythmically. Turn on the input display (practise it in the trainer above) and aim for two clean back-inputs per rep. Drill until 10 loops in a row feel smooth. Bonus: Alisa has **no just-frame inputs**, so all your execution goes into movement — a real online advantage.",
      de:"Halte **back**, dann tippe rhythmisch **down**, dann **forward**. Mach das Input-Display an (im Trainer oben übbar) und ziel auf zwei saubere Back-Inputs pro Wiederholung. Trainiere, bis 10 Loops am Stück sitzen. Bonus: Alisa hat **keine Just-Frame-Inputs**, also geht deine ganze Execution ins Movement — ein echter Online-Vorteil."}}
  ]},
  {id:"loop", num:"03", lv:0, title:{en:"The core loop",de:"Der Kern-Kreislauf"}, blocks:[
    {t:"lead", x:{en:"Tekken has two distances: **mid range** (you control space) and **close range** (you control time). Alisa's whole game is rock-paper-scissors between three behaviours.",
      de:"Tekken hat zwei Distanzen: **Mid Range** (du kontrollierst den Raum) und **Close Range** (du kontrollierst die Zeit). Alisas ganzes Spiel ist Schere-Stein-Papier zwischen drei Verhaltensweisen."}},
    {t:"loop"},
    {t:"call", v:"key", h:{en:"\u201cAm I too readable?\u201d",de:"\u201eBin ich zu leserlich?\u201c"}, x:{en:"Readability is solved once you spot **which part of the loop the opponent is on**. Many players only know one link (they always attack). Find it and keep doing what works. Against players who know the whole loop, the fun is predicting when they switch gears.",
      de:"Leserlichkeit ist gelöst, sobald du erkennst, **auf welchem Glied des Kreislaufs der Gegner steht**. Viele kennen nur ein Glied (sie greifen immer an). Spür es auf und mach weiter, was funktioniert. Gegen Spieler, die den ganzen Kreislauf kennen, liegt der Spaß darin, zu antizipieren, wann sie den Gang wechseln."}}
  ]},
  {id:"movelist", num:"04", lv:0, title:{en:"Move list & frames",de:"Movelist & Frames"}, blocks:[
    {t:"lead", x:{en:"Alisa's key moves with exact frame data. Tap any card for startup, block, hit, properties and how to use it. Star the ones you want to drill — they collect under My Setups.",
      de:"Alisas wichtigste Moves mit exakten Frame-Daten. Tipp eine Karte für Startup, Block, Hit, Eigenschaften und Einsatz. Stern die, die du üben willst — sie sammeln sich unter Meine Setups."}},
    {t:"favpanel"},
    {t:"movelist"},
    {t:"call", v:"warn", h:{en:"Frames are patch-sensitive",de:"Frames sind patch-sensibel"}, x:{en:"These values are from TekkenDocs on the current live patch, Season 3 (Ver. 3.01.01). Tekken changes every patch — the in-game frame display is always the live source of truth. The gameplan (poke / movement / whiff-punish) holds regardless.",
      de:"Diese Werte stammen von TekkenDocs, aktueller Live-Patch Season 3 (Ver. 3.01.01). Tekken ändert sich mit jedem Patch — das In-Game-Frame-Display ist immer die aktuelle Wahrheit. Der Gameplan (Poke / Movement / Whiff-Punish) bleibt unabhängig davon gültig."}}
  ]},
  {id:"mid", num:"05", lv:1, title:{en:"Mid range",de:"Mid Range"}, blocks:[
    {t:"lead", x:{en:"Hold the distance where most moves whiff. Only enter on **your** terms. Three jobs: keep them out, approach when they freeze, and whiff-punish when they poke.",
      de:"Halte die Distanz, auf der die meisten Moves whiffen. Geh nur zu **deinen** Bedingungen rein. Drei Aufgaben: draußen halten, approachen wenn er einfriert, whiff-punishen wenn er pokt."}},
    {t:"h3", x:{en:"Keep them out",de:"Draußen halten"}},
    {t:"p", x:{en:"Throw a long move preemptively whenever they might approach. [[uf2]] is your homing high that tracks steps; [[f21]] is the mid that catches ducking. Together they cover both answers.",
      de:"Wirf präventiv einen langen Move, wann immer er reinkommen könnte. [[uf2]] ist dein Homing-High, das Steps trackt; [[f21]] ist das Mid, das Ducken fängt. Zusammen decken sie beide Antworten ab."}},
    {t:"h3", x:{en:"Whiff-punish \u2014 the heart of Alisa",de:"Whiff-Punish \u2014 das Herzstück"}},
    {t:"p", x:{en:"When they poke and miss, dash in then out to bait the whiff, then punish. Use [[c32]] as your fast default, [[df2]] when the whiff is big enough for a launch, and [[b44]] for far whiffs. [[uf2]] is homing, so it also catches a step.",
      de:"Wenn er pokt und verfehlt, dash rein und raus, um den Whiff zu baiten, dann bestraf. Nutz [[c32]] als schnelles Default, [[df2]] wenn der Whiff für einen Launch reicht, und [[b44]] für weite Whiffs. [[uf2]] ist homing, fängt also auch einen Step."}},
    {t:"h3", x:{en:"Approach",de:"Approach"}},
    {t:"p", x:{en:"When your keepout makes them freeze, go in. Alisa has no brutal approach — the cleanest is simply to dash up into a close-range button like [[df4]], [[f2]] or a [[jab]]. Vary the timing so you're not readable.",
      de:"Wenn dein Keepout ihn einfrieren lässt, geh rein. Alisa hat keinen brachialen Approach — am saubersten einfach Dash-up in einen Close-Range-Button wie [[df4]], [[f2]] oder [[jab]]. Variier das Timing, damit du nicht lesbar bist."}}
  ]},
  {id:"close", num:"06", lv:1, title:{en:"Close range",de:"Close Range"}, blocks:[
    {t:"lead", x:{en:"Here **time** matters: every contact leaves fixed frames. Unlike classic mix-up characters, Alisa thrives at **small minus** — the opponent wants to press, and you sidestep or backdash it and whiff-punish.",
      de:"Hier zählt die **Zeit**: jeder Kontakt hinterlässt feste Frames. Anders als klassische Mixup-Charaktere lebt Alisa vom **kleinen Minus** — der Gegner will drücken, und du steppst oder backdashst es und whiff-punishst."}},
    {t:"call", v:"key", h:{en:"Alisa's secret",de:"Alisas Geheimnis"}, x:{en:"Most characters chase **plus on block**. Alisa does the opposite: **whiff setups from minus**. When it's your turn, let them block [[f2]] (only -4) — trade your plus for small minus, sidestep their answer, and launch the whiff with [[c32]] or [[df2]]. The point is to bait a reaction.",
      de:"Die meisten Charaktere jagen **Plus on Block**. Alisa macht das Gegenteil: **Whiff-Setups aus Minus**. Wenn du dran bist, lass ihn [[f2]] blocken (nur -4) — tausch dein Plus gegen kleines Minus, sidestep seine Antwort und launch den Whiff mit [[c32]] oder [[df2]]. Ziel ist, eine Reaktion zu baiten."}},
    {t:"h3", x:{en:"Taming the masher",de:"Den Masher zähmen"}},
    {t:"p", x:{en:"Jabs and crouch jabs beat your offence on speed. Most players have a habitual **panic button** — watch for it. Against a predicted press, [[df112]] counterhits into chainsaws. Against pure ducking and blocking, use your throw mix: generic [[t13]]/[[t24]] (they break 1 or 2) vs your command grab [[tuf12]] (breaks 1+2). To stop a power crush, just block and launch it.",
      de:"Jabs und Crouch-Jabs schlagen deine Offense auf Speed. Die meisten haben einen festen **Panik-Button** — beobachte ihn. Gegen einen erwarteten Press counterhittet [[df112]] in die Kettensägen. Gegen reines Ducken und Blocken dein Wurf-Mix: generisch [[t13]]/[[t24]] (brechen 1 oder 2) vs dein Kommando-Grab [[tuf12]] (bricht 1+2). Gegen Power Crush einfach blocken und launchen."}},
    {t:"call", v:"note", h:{en:"Drill: recognise whiffs",de:"Übung: Whiffs erkennen"}, x:{en:"Practice → dummy on random block, set a retaliation. Attack with [[df4]]: on block, backdash and whiff-punish with [[c11]]; on hit, take your turn. **Never press without seeing a whiff** — \u201cwish-punishing\u201d loses if they only dashed in. This one drill improves your whole Tekken the most.",
      de:"Practice → Dummy auf Random Block, Vergeltung einstellen. Greif mit [[df4]] an: auf Block backdash und whiff-punish mit [[c11]]; auf Hit nimm deinen Zug. **Drück nie ohne sichtbaren Whiff** — \u201eWish-Punishing\u201c verliert, wenn er nur reingedasht ist. Diese eine Übung verbessert dein ganzes Tekken am meisten."}},
    {t:"call", v:"note", h:{en:"ws2 fishing & okizeme",de:"ws2-Fishing & Okizeme"}, x:{en:"Get to **while-standing** (crouch-cancel, [[db1]], or full-crouch after [[d3]]) and threaten [[ws2]] (i17 Tornado launcher) or the quick [[ws4]] \u2014 it forces respect, then you re-enter chainsaws. On **okizeme** after a knockdown ([[d412]], [[uf32]], combo enders), cover their wake-up: homing [[c32]] / [[k4]] beat wake-up steps, [[b3]] covers backroll, and a boot low ([[sbt3]]) beats a slow getup \u2014 or just block their wake-up kick and launch with [[df2]].",
      de:"Komm ins **While-Standing** (Crouch-Cancel, [[db1]] oder Full-Crouch nach [[d3]]) und drohe [[ws2]] (i17-Tornado-Launcher) oder das schnelle [[ws4]] \u2014 das erzwingt Respekt, dann gehst du zur\u00fcck in die Kettens\u00e4gen. Beim **Okizeme** nach Knockdown ([[d412]], [[uf32]], Combo-Ender) deck seinen Aufsteher ab: Homing [[c32]] / [[k4]] schlagen Wake-up-Steps, [[b3]] deckt Backroll, ein Boot-Low ([[sbt3]]) schl\u00e4gt langsames Aufstehen \u2014 oder blocke seinen Wake-up-Kick und launch mit [[df2]]."}}
  ]},
  {id:"heat", num:"07", lv:1, title:{en:"Heat System",de:"Heat-System"}, blocks:[
    {t:"lead", x:{en:"Once per round you can enter **Heat**. For Alisa it is not a damage steroid — it is a **converter**: the pokes she lands anyway suddenly pay out pressure, chip and full combos.",
      de:"Einmal pro Runde kannst du in **Heat** gehen. Für Alisa ist das kein Schadens-Steroid — es ist ein **Konverter**: die Pokes, die sie sowieso landet, zahlen plötzlich Druck, Chip und volle Combos aus."}},
    {t:"h3", x:{en:"The engagers",de:"Die Engager"}},
    {t:"p", x:{en:"Her Heat Engagers are buttons you already throw in neutral: [[f21]] (the mid keepout), [[uf2]] (the homing keepout high) and [[c32]] (the whiff-punisher). Land any of them and Heat is active — you never have to go fishing for it.",
      de:"Ihre Heat Engager sind Buttons, die du sowieso im Neutral wirfst: [[f21]] (das Mid-Keepout), [[uf2]] (das Homing-Keepout-High) und [[c32]] (der Whiff-Punisher). Trifft einer davon, ist Heat aktiv — du musst ihm nie hinterherjagen."}},
    {t:"h3", x:{en:"Heat Dash — the conversion",de:"Heat Dash — die Konvertierung"}},
    {t:"p", x:{en:"In Heat, a landed engager can be **heat-dashed**: tap f,f as it hits and a plain poke turns into a launch or a big knockdown — [[c32]] heat-dash goes into a full combo. Your blocked pressure also chips harder while Heat runs. That is the deal: spend the bar to convert small touches into real damage.",
      de:"In Heat kannst du einen getroffenen Engager **heat-dashen**: tipp f,f im Treffer, und aus einem simplen Poke wird ein Launch oder ein dicker Knockdown — [[c32]] geht per Heat-Dash in einen vollen Combo. Dein geblockter Druck chippt während Heat außerdem härter. Das ist der Deal: Gib die Leiste aus, um kleine Treffer in echten Schaden zu verwandeln."}},
    {t:"h3", x:{en:"Heat-only tools",de:"Nur-in-Heat-Tools"}},
    {t:"p", x:{en:"Heat also unlocks options that don't exist outside it: [[hd12]] is an absorbing power-crush stance (soaked damage is recoverable), [[hf14]] is a low-crushing flight, and [[hff212]] is a heat-dash string that is even plus on block and combos from the first hit. All of them burn Heat time — treat them as accents, not as a new gameplan.",
      de:"Heat schaltet außerdem Optionen frei, die es sonst nicht gibt: [[hd12]] ist eine absorbierende Power-Crush-Stance (gefressener Schaden ist erholbar), [[hf14]] ein Low-crushender Flug, und [[hff212]] ein Heat-Dash-String, der sogar plus auf Block ist und aus dem ersten Hit combot. Alle verbrennen Heat-Zeit — nutz sie als Akzente, nicht als neuen Gameplan."}},
    {t:"call", v:"key", h:{en:"Heat Smash — spend it like money",de:"Heat Smash — gib ihn aus wie Geld"}, x:{en:"[[hs]] is {{plus:+8 on block}}, a big combo ender, and afterwards you can flow straight into your stances (1+2 → DES, 3 or 4 → SBT, f+3 or f+4 → DBT). That flexibility is exactly why you should **not** autopilot it the second Heat starts — decide what this round's Heat is for: chip pressure, a combo ender, or the emergency exit.",
      de:"[[hs]] ist {{plus:+8 auf Block}}, ein dicker Combo-Ender, und danach fließt du direkt in deine Stances (1+2 → DES, 3 oder 4 → SBT, f+3 oder f+4 → DBT). Genau wegen dieser Flexibilität solltest du ihn **nicht** auf Autopilot rauswerfen, sobald Heat startet — entscheide, wofür die Heat dieser Runde da ist: Chip-Druck, Combo-Ender oder der Notausgang."}},
    {t:"call", v:"warn", h:{en:"Heat is not a comeback button",de:"Heat ist kein Comeback-Button"}, x:{en:"Behind on life and getting read? Heat changes nothing about that — a predictable Alisa in Heat is still predictable. Fix the pattern first (see **Reading the opponent**), then let Heat convert the touches you earn.",
      de:"Im Lebensrückstand und gelesen? Daran ändert Heat nichts — eine berechenbare Alisa in Heat bleibt berechenbar. Repariere zuerst das Muster (siehe **Den Gegner lesen**), dann lässt du Heat die verdienten Treffer konvertieren."}}
  ]},
  {id:"chainsaw", num:"08", lv:2, title:{en:"Stances & Chainsaws",de:"Stances & Kettensägen"}, blocks:[
    {t:"lead", x:{en:"The chainsaws (DES) are your **turtle-cracker**. Normal stance dismantles aggressive players; Destructive Form cracks a patient defender by seeking **constant plus** for a flurry of mix-ups, with chip damage on top.",
      de:"Die Kettensägen (DES) sind dein **Turtle-Cracker**. Normal-Stance zerlegt aggressive Gegner; Destructive Form knackt geduldige Verteidiger, indem sie **konstantes Plus** für eine Mixup-Flut sucht, plus Chip-Schaden."}},
    {t:"h3", x:{en:"Getting in",de:"Reingehen"}},
    {t:"p", x:{en:"You don't pick the chainsaws from neutral \u2014 you **cancel into them** by holding **1+2** at the end of certain moves. Reliable ones: [[c11]], [[f2]], [[k4]], [[b24]] and [[d34]] all transition with a held 1+2, and after [[df112]] on block you're already +6 to start your pressure.",
      de:"Du wählst die Kettensägen nicht aus dem Neutralen \u2014 du **cancelst hinein**, indem du am Ende bestimmter Moves **1+2** hältst. Zuverlässig: [[c11]], [[f2]], [[k4]], [[b24]] und [[d34]] gehen alle mit gehaltenem 1+2 über, und nach [[df112]] auf Block bist du schon +6, um deinen Druck zu starten."}},
    {t:"h3", x:{en:"The chainsaw mix-up",de:"Der Kettensägen-Mixup"}},
    {t:"p", x:{en:"Threaten the plus highs against duckers and the lows against blockers. [[des12]] is +4 on block and jails (your main pressure). [[desd1]] and [[desd2]] are the lows. If they mash, [[des2]] ducks under jabs and launches. To leave safely, exit with `DES.1+2` cancel or `d+1+2`.",
      de:"Drohe die Plus-Highs gegen Ducker und die Lows gegen Blocker. [[des12]] ist +4 auf Block und jailt (dein Hauptdruck). [[desd1]] und [[desd2]] sind die Lows. Mashen sie, duckt [[des2]] unter Jabs und launcht. Sicher raus per `DES.1+2`-Cancel oder `d+1+2`."}},
    {t:"h3", x:{en:"The four stances",de:"Die vier Stances"}},
    {t:"p", x:{en:"DES is only one of four. The boots (SBT / DBT) and the Backup backswing each have their own job — one reference card per stance, every move tappable for exact frames.",
      de:"DES ist nur eine von vier. Die Boots (SBT / DBT) und der Backup-Backswing haben je einen eigenen Job — eine Referenzkarte pro Stance, jeder Move für exakte Frames antippbar."}},
    {t:"stances"}
  ]},
  {id:"reading", num:"09", lv:1, title:{en:"Reading the opponent",de:"Den Gegner lesen"}, blocks:[
    {t:"lead", x:{en:"At higher ranks wins come from **adaptation**, not new combos. The skill is noticing what someone repeats and exploiting it before they change.",
      de:"In höheren Rängen kommen Siege aus **Anpassung**, nicht aus neuen Combos. Der Skill ist zu merken, was jemand wiederholt, und es auszunutzen, bevor er wechselt."}},
    {t:"h3", x:{en:"Spot the pattern",de:"Das Muster erkennen"}},
    {t:"p", x:{en:"Ask one question per situation: **what did they do last time I was here?** After a blocked string — always jab? always duck? always backdash? People are creatures of habit under pressure. Punish the habit, and only re-read when they stop.",
      de:"Stell pro Situation eine Frage: **was hat er letztes Mal hier gemacht?** Nach geblocktem String — immer Jab? Immer Duck? Immer Backdash? Menschen sind unter Druck Gewohnheitstiere. Bestraf die Gewohnheit und lies erst neu, wenn er aufhört."}},
    {t:"h3", x:{en:"Condition, then punish",de:"Konditionieren, dann bestrafen"}},
    {t:"p", x:{en:"Show them something twice so they react the third time. Block low twice and they start ducking — now hit a mid. Whiff-punish their poke twice and they stop pressing — now you approach freely. You're training their reactions on purpose.",
      de:"Zeig ihm etwas zweimal, damit er beim dritten Mal reagiert. Block zweimal low und er duckt — jetzt ein Mid. Whiff-punish zweimal seinen Poke und er hört auf — jetzt approachst du frei. Du trainierst seine Reaktionen absichtlich."}},
    {t:"call", v:"note", h:{en:"Use the replay tool",de:"Nutz das Replay-Tool"}, x:{en:"After a loss, open the replay. **My Replay & Tips** shows the optimal punish for moves you blocked wrong, and lets you take over for 10 seconds to test alternatives. One reviewed loss teaches more than ten more ranked games.",
      de:"Nach einer Niederlage das Replay öffnen. **My Replay & Tips** zeigt den optimalen Punish für falsch geblockte Moves und lässt dich 10 Sekunden übernehmen, um Alternativen zu testen. Eine analysierte Niederlage lehrt mehr als zehn weitere Ranked-Games."}}
  ]},
  {id:"matchups", num:"10", lv:1, title:{en:"Matchups",de:"Matchups"}, blocks:[
    {t:"lead", x:{en:"Pick a character below to study that matchup. Each one is built the same way: **what hurts**, **what to duck & step**, **how to punish**, and **Alisa's plan** \u2014 with every move tappable for frames. For anyone not yet listed, apply the same four questions and read the per-character anti-strats on TekkenDocs. Frames are current-patch (Season 3). Frame data: TekkenDocs / Wavu Wiki.",
      de:"W\u00e4hl unten einen Charakter, um das Matchup zu lernen. Jedes ist gleich aufgebaut: **Was tut weh**, **Was ducken & steppen**, **Wie bestrafen** und **Alisas Plan** \u2014 jeder Move ist f\u00fcr Frames antippbar. F\u00fcr noch nicht Gelistete dieselben vier Fragen anwenden und die Anti-Strats pro Charakter auf TekkenDocs lesen. Frames sind aktueller Patch (Season 3). Frame-Daten: TekkenDocs / Wavu Wiki."}},
    {t:"h3", x:{en:"Choose a character",de:"Charakter w\u00e4hlen"}},
    {t:"matchups"},
    {t:"h3", x:{en:"Universal answers",de:"Universelle Antworten"}},
    {t:"p", x:{en:"They **backdash** → [[uf2]] (homing) or dash-up [[df4]]. They **jab-press** → [[c11]] or [[df4]]. They **throw** → break it (generic grabs break with 1 or 2, both-arms grabs with 1+2). They do a launching **low / snake-edge** → block on reaction, then [[uf44]]. They run a **pressure string** → fuzzy-guard, or duck/sidestep the part you've labbed, then punish.",
      de:"Er **backdasht** → [[uf2]] (homing) oder Dash-up [[df4]]. Er **jab-presst** → [[c11]] oder [[df4]]. Er **wirft** → brechen (generische Grabs mit 1 oder 2, Beide-Arme-Grabs mit 1+2). Er macht ein launchendes **Low / Snake-Edge** → on Reaction blocken, dann [[uf44]]. Er fährt einen **Druck-String** → Fuzzy-Guard, oder den gelabbten Teil ducken/sidesteppen, dann bestrafen."}},
    {t:"call", v:"note", h:{en:"Lab three things per character",de:"Labbe drei Dinge pro Charakter"}, x:{en:"For each opponent you keep losing to: **(1)** their 2-3 most annoying moves and your punish, **(2)** which of their strings you can duck or step, **(3)** their main low so you can react. That's 90% of the matchup for a fraction of the work. TekkenDocs has per-character \u201canti strats\u201d pages.",
      de:"Für jeden Gegner, gegen den du verlierst: **(1)** seine 2-3 nervigsten Moves und dein Punish, **(2)** welche Strings du ducken/steppen kannst, **(3)** sein Haupt-Low, damit du reagierst. Das sind 90% des Matchups für einen Bruchteil der Arbeit. TekkenDocs hat \u201eAnti-Strats\u201c-Seiten pro Charakter."}}
  ]},
  {id:"defense", num:"11", lv:1, title:{en:"Defense & anti-panic",de:"Defense & Anti-Panik"}, blocks:[
    {t:"lead", x:{en:"Panic-mashing and not blocking lows is a **habit problem**, not a skill problem. You need a **default action** to fall back on when you don't have a specific read.",
      de:"Panik-Mashen und Lows nicht blocken ist ein **Gewohnheitsproblem**, kein Skill-Problem. Du brauchst eine **Default-Aktion**, auf die du zurückfällst, wenn du nichts Genaues liest."}},
    {t:"h3", x:{en:"Blocking lows without guessing",de:"Lows blocken, ohne zu raten"}},
    {t:"p", x:{en:"Most **launching** lows (snake edges, hellsweeps) are **reactable** — you often have 20+ frames. React to the animation, not the fear. Stand, block, then launch with [[uf44]] or [[df2]]. Small chip-lows you can just take — they barely hurt and you get your turn back.",
      de:"Die meisten **launchenden** Lows (Snake Edges, Hellsweeps) sind **reaktionsbar** — oft hast du 20+ Frames. Reagier auf die Animation, nicht auf die Angst. Stehen, blocken, dann launchen mit [[uf44]] oder [[df2]]. Kleine Chip-Lows darfst du fressen — sie tun kaum weh und du bekommst deinen Zug zurück."}},
    {t:"h3", x:{en:"Fuzzy guard",de:"Fuzzy Guard"}},
    {t:"p", x:{en:"Block mid → duck briefly → block mid again. This catches many \u201cmid-then-low\u201d sequences. Note: pure fuzzy loses to *delayable* strings — those you lab and learn specifically.",
      de:"Block Mid → kurz ducken → wieder Mid. Das fängt viele \u201eMid-dann-Low\u201c-Sequenzen ab. Achtung: reines Fuzzy verliert gegen *delaybare* Strings — die labbst und lernst du gezielt."}},
    {t:"h3", x:{en:"Your own duckable strings",de:"Deine eigenen duckbaren Strings"}},
    {t:"p", x:{en:"A God-rank opponent fuzzy-guards, so know which of *your* strings they can duck and launch: [[c11]] (1,1), [[s12]] (1,2) and [[s122]] (1,2,2) are **all high**; [[c32]] (the 2), [[df11]] / [[df112]] (the follow-ups), [[b24]] (the 4) and [[ws123]] (the 2 in ws1,2) each end in a **high**. Mix in the low / mid enders \u2014 [[s12d2]] (1,2,d+2) and [[f233]] (f+2,3,3) \u2014 so ducking loses. And keep raw [[f3]] ({{minus:-14}}) and b+1,1+2 ({{minus:-16}}) out of your blockstrings \u2014 a ducker launches them.",
      de:"Ein God-Rang-Gegner fuzzy-guardet, also wisse, welche *deiner* Strings er ducken und launchen kann: [[c11]] (1,1), [[s12]] (1,2) und [[s122]] (1,2,2) sind **komplett High**; [[c32]] (die 2), [[df11]] / [[df112]] (die Folge-Hits), [[b24]] (die 4) und [[ws123]] (die 2 in ws1,2) enden je in einem **High**. Misch die Low-/Mid-Ender rein \u2014 [[s12d2]] (1,2,d+2) und [[f233]] (f+2,3,3) \u2014 damit Ducken verliert. Und lass rohes [[f3]] ({{minus:-14}}) und b+1,1+2 ({{minus:-16}}) aus deinen Blockstrings \u2014 ein Ducker launcht sie."}},
    {t:"h3", x:{en:"Your panic buttons — a plan, not a prayer",de:"Deine Panik-Buttons — Plan statt Gebet"}},
    {t:"p", x:{en:"[[pc]] is tempting because it **absorbs one mid or high** and barges through predictable pressure — but it loses to lows and throws and is {{minus:-13}} on block. Press it on a read of a mid/high string, never against low-heavy offence. [[ub2]] is the quicker power crush and only {{minus:-9}} on block — but it's a **high**, so anyone who ducks launches you for free. [[uf44]] is the classic hopkick answer: it hops over lows and launches, at {{minus:-13}} on block — an answer to predicted lows, not a reply to mids.",
      de:"[[pc]] ist verlockend, weil es **ein Mid oder High absorbiert** und durch berechenbaren Druck bricht — aber es verliert gegen Lows und Würfe und ist {{minus:-13}} auf Block. Drück es auf einen Read eines Mid/High-Strings, nie gegen Low-lastige Offense. [[ub2]] ist der schnellere Power Crush und nur {{minus:-9}} auf Block — aber ein **High**: Wer duckt, launcht dich gratis. [[uf44]] ist die klassische Hopkick-Antwort: Es springt über Lows und launcht, bei {{minus:-13}} auf Block — eine Antwort auf erwartete Lows, keine Antwort auf Mids."}},
    {t:"p", x:{en:"[[b34]] is the jackpot button: it crushes lows and launches into Tornado — and at {{minus:-17}} a block means **you** get launched. Treat it as a once-a-set surprise, not a habit. [[hs]] in Heat is the premium exit: {{plus:+8 on block}} and a round-swing — but it burns your whole Heat, so it has to buy something. The rule for all of them: **one panic read per situation.** If two panic buttons get blocked in a row, you're not defending anymore — you're feeding launch points. Back to blocking one more hit.",
      de:"[[b34]] ist der Jackpot-Button: Es crusht Lows und launcht in Tornado — und bei {{minus:-17}} heißt Block, dass **du** gelauncht wirst. Behandle es als Überraschung einmal pro Set, nicht als Gewohnheit. [[hs]] in Heat ist der Premium-Ausgang: {{plus:+8 auf Block}} und ein Runden-Swing — aber er verbrennt deine ganze Heat, also muss er etwas kaufen. Die Regel für alle: **ein Panik-Read pro Situation.** Werden zwei Panik-Buttons in Folge geblockt, verteidigst du nicht mehr — du fütterst Launch-Punkte. Zurück zu: einen Hit mehr blocken."}},
    {t:"h3", x:{en:"Knowledge checks",de:"Knowledge Checks"}},
    {t:"p", x:{en:"These are the Alisa strings people should learn to beat — you should know them too: they are the holes in your own offence, and the checklist for the mirror.",
      de:"Das sind die Alisa-Strings, die Gegner lernen sollten — du musst sie selbst auch kennen: Sie sind die Löcher in deiner eigenen Offense und die Checkliste fürs Mirror-Match."}},
    {t:"kchecks"},
    {t:"call", v:"warn", h:{en:"Tilt & the panic spiral",de:"Tilt & die Panik-Spirale"}, x:{en:"Lost two rounds in a row to panic-lows? Play **one round as pure block, no offence**. It breaks the spiral. Breathe between rounds. And stop after a tilt session — tired + tilted means you're training *bad* habits. Rest is part of practice.",
      de:"Zwei Runden in Folge durch Panik-Lows verloren? Spiel **eine Runde nur Block, keine Offense**. Das bricht die Spirale. Atme zwischen Runden. Und hör nach einer Tilt-Session auf — müde + tilted heißt, du trainierst *schlechte* Gewohnheiten. Pause ist Teil des Trainings."}}
  ]},
  {id:"punishers", num:"12", lv:1, title:{en:"Punishers",de:"Punisher"}, blocks:[
    {t:"lead", x:{en:"When you block a punishable move there's **no mind-game** — take your guaranteed damage. Match your move's startup to their disadvantage. These are your go-to punishes by speed.",
      de:"Beim Blocken eines bestrafbaren Moves gibt es **keinen Mindgame** — nimm deinen garantierten Schaden. Pass deine Startup-Speed an seinen Nachteil an. Das sind deine Go-to-Punishes nach Speed."}},
    {t:"punishtable"},
    {t:"p", x:{en:"**Beginners:** learn just three — [[c11]] for -10, [[c32]] for -13 (it's a heat engager; heat-dash to launch), and [[uf44]] for -15 (a full launch). After blocking a low you usually stand into a while-standing punish: [[ws2]] launches at -17.",
      de:"**Anfänger:** lern nur drei — [[c11]] für -10, [[c32]] für -13 (Heat Engager; per Heat-Dash launchen) und [[uf44]] für -15 (voller Launch). Nach geblocktem Low stehst du meist in einen While-Standing-Punish: [[ws2]] launcht bei -17."}},
    {t:"p", x:{en:"**The other side \u2014 how risky are YOUR minus moves?** Launchers are almost always **15f** (every character has one, usually a hopkick); **some** characters have **14f**, a **few** have **13f**, and almost none have **12f**. So a move that's **-15 or worse** gets launched by anyone; **-14** only by the 14f crowd; **-13** by rare characters; and **-12 or safer** is usually just a small poke punish. That's why a -12 poke is fine to throw out, but -15 is not.",
      de:"**Die andere Seite \u2014 wie riskant sind DEINE Minus-Moves?** Launcher sind fast immer **15f** (jeder Charakter hat einen, meist ein Hopkick); **einige** haben **14f**, **wenige** **13f**, und fast keiner **12f**. Ein Move mit **-15 oder schlechter** wird also von jedem gelauncht; **-14** nur von der 14f-Fraktion; **-13** von seltenen Charakteren; und **-12 oder safer** ist meist nur ein kleiner Poke-Punish. Deshalb ist ein -12-Poke okay zum Rauswerfen, -15 aber nicht."}}
  ]},
  {id:"combos", num:"13", lv:1, title:{en:"Combos",de:"Combos"}, blocks:[
    {t:"lead", x:{en:"One principle covers almost all your launchers: **launcher → fillers → Tornado → ender**. Alisa's Tornado move in juggles is `uf+1`. Learn one route until it lands in matches, then branch out.",
      de:"Ein Prinzip deckt fast alle Launcher ab: **Launcher → Filler → Tornado → Ender**. Alisas Tornado-Move im Juggle ist `uf+1`. Lern eine Route, bis sie im Match sitzt, dann verzweige."}},
    {t:"combos"},
    {t:"call", v:"warn", h:{en:"Combo note",de:"Combo-Hinweis"}, x:{en:"Combos are the most patch-sensitive thing in the game and the timing differs by launch height. Treat these as a **starting framework** and confirm the exact current version in the lab or a recent Alisa combo video. Online, use the simplest route — you'll drop fewer.",
      de:"Combos sind das patch-sensibelste im Spiel, und das Timing hängt von der Launch-Höhe ab. Nimm das als **Ausgangsgerüst** und bestätige die exakte aktuelle Version im Lab oder einem aktuellen Alisa-Combo-Video. Online die einfachste Route — du dropst weniger."}}
  ]},
  {id:"routine", num:"14", lv:0, title:{en:"Practice routine",de:"Trainings-Routine"}, blocks:[
    {t:"lead", x:{en:"Practice mode is boring when it's **aimless**. Train by **isolation → integration**, one focus per session. Give every drill a clear goal and a success condition.",
      de:"Practice Mode langweilt, weil er **ziellos** ist. Trainier nach **Isolation → Integration**, ein Fokus pro Session. Gib jeder Übung ein klares Ziel und ein Erfolgskriterium."}},
    {t:"routine"},
    {t:"call", v:"key", h:{en:"Replay review beats more ranked",de:"Replay-Review schlägt mehr Ranked"}, x:{en:"Once a week, do one session of **only replay review** of your last 3 losses. One question: **which single habit did the opponent repeatedly exploit?** Worth more than ten more ranked games.",
      de:"Einmal pro Woche eine Session **nur Replay-Review** deiner letzten 3 Niederlagen. Eine Frage: **welche eine Gewohnheit hat der Gegner wiederholt ausgenutzt?** Mehr wert als zehn weitere Ranked-Games."}}
  ]},
  {id:"mindset", num:"15", lv:0, title:{en:"Mindset & climbing",de:"Mindset & Aufstieg"}, blocks:[
    {t:"lead", x:{en:"The path is the same at every rank: the plateau is **normal**, and the climb is mostly adaptation, not new combos.",
      de:"Der Weg ist in jedem Rang gleich: das Plateau ist **normal**, und der Aufstieg ist meist Anpassung, nicht neue Combos."}},
    {t:"p", x:{en:"Focus on what **you** control (your defensive decision), not lag, tier lists or the opponent. **Losing = data**: each loss hands you one concrete weakness. Play opponents slightly *better* than you — that speeds adaptation more than grinding ranked. And expect rank drops after patches; it's temporary.",
      de:"Fokussier auf das, was **du** steuerst (deine Defense-Entscheidung), nicht Lag, Tier-Listen oder den Gegner. **Verlieren = Daten**: jede Niederlage gibt dir eine konkrete Schwäche. Spiel gegen leicht *bessere* Gegner — das beschleunigt Anpassung mehr als Ranked-Grinden. Und rechne nach Patches mit Rang-Drops; das ist temporär."}},
    {t:"call", v:"key", h:{en:"The progression, simply",de:"Die Progression, einfach"}, x:{en:"**Beginner:** block low, finish one combo. **Intermediate:** whiff-punish on reaction and stop mashing. **Advanced:** read habits, condition opponents, and learn matchups three things at a time. Same loop, deeper each time.",
      de:"**Beginner:** low blocken, einen Combo können. **Fortgeschritten:** on Reaction whiff-punishen und Mashen lassen. **Profi:** Gewohnheiten lesen, konditionieren und Matchups in Dreierschritten lernen. Gleicher Loop, jedes Mal tiefer."}}
  ]}
];
var T = {
  c_lang:{en:"Language",de:"Sprache"}, c_level:{en:"Level",de:"Level"},
  nav_h:{en:"Sections",de:"Sektionen"},
  hero_eyebrow:{en:"Complete Alisa Guide",de:"Kompletter Alisa-Guide"},
  hero_sub:{en:"Bosconovitch \u00b7 Beginner to Tekken God",de:"Bosconovitch \u00b7 Beginner bis Tekken God"},
  hero_thesis:{en:"Alisa doesn't win with damage. She wins with <b>whiffs</b> \u2014 she forces the opponent to swing at air and punishes it.",
    de:"Alisa gewinnt nicht durch Schaden. Sie gewinnt durch <b>Whiffs</b> \u2014 sie zwingt den Gegner, ins Leere zu schlagen, und bestraft es."},
  hero_note:{en:"Every move below has exact frames you can click into. Set your <b>level</b> and <b>language</b> above \u2014 the guide adapts to you.",
    de:"Jeder Move unten hat exakte Frames, die du anklicken kannst. Stell oben dein <b>Level</b> und deine <b>Sprache</b> ein \u2014 der Guide passt sich an."},
  foot_h:{en:"Sources & notes",de:"Quellen & Hinweise"},
  foot_1:{en:"Built on our own <b>canonical local content</b>, targeting Tekken 8 Season 3 (<b>Ver. 3.01.01</b>). Frame data is cross-checked against <a href=\"https://tekkendocs.com\" target=\"_blank\" rel=\"noopener noreferrer\">TekkenDocs</a> and <a href=\"https://wavu.wiki\" target=\"_blank\" rel=\"noopener noreferrer\">Wavu Wiki</a>; the gameplan structure is inspired by <a href=\"https://gajimaru.guide\" target=\"_blank\" rel=\"noopener noreferrer\">gajimaru.guide</a>, expanded with basics, opponent-reading, defense, matchups, a punisher reference, a combo framework, and a live input trainer.",
    de:"Basiert auf unseren eigenen <b>kanonischen lokalen Daten</b>, Ziel ist Tekken 8 Season 3 (<b>Ver. 3.01.01</b>). Frame-Daten werden mit <a href=\"https://tekkendocs.com\" target=\"_blank\" rel=\"noopener noreferrer\">TekkenDocs</a> und <a href=\"https://wavu.wiki\" target=\"_blank\" rel=\"noopener noreferrer\">Wavu Wiki</a> abgeglichen; die Gameplan-Struktur ist inspiriert von <a href=\"https://gajimaru.guide\" target=\"_blank\" rel=\"noopener noreferrer\">gajimaru.guide</a>, erweitert um Basics, Gegner-Lesen, Defense, Matchups, eine Punisher-Referenz, ein Combo-Gerüst und einen Live-Input-Trainer."},
  foot_2:{en:"External references are patch-specific: anything drawn from them that we have not re-verified for 3.01.01 is marked with a <b>manual-review</b> / <b>needs lab check</b> badge and kept out of the canonical advice. Tekken changes every patch \u2014 verify frames and especially combos in the lab; the in-game frame display is the live source of truth. For move animations, search the notation on Wavu Wiki or TekkenDocs.",
    de:"Externe Referenzen sind patch-spezifisch: Was daraus stammt und von uns nicht für 3.01.01 neu verifiziert wurde, ist mit einem <b>manuelle Prüfung</b>- / <b>muss gelabt werden</b>-Badge markiert und bleibt aus den kanonischen Tipps heraus. Tekken ändert sich mit jedem Patch \u2014 verifiziere Frames und besonders Combos im Lab; das In-Game-Frame-Display ist die aktuelle Wahrheit. Für Move-Animationen die Notation auf Wavu Wiki oder TekkenDocs suchen."},
  loop_k:{en:"Keepout",de:"Keepout"}, loop_kd:{en:"You throw long pokes \u2192 they don't dare come in \u2192 they <b>wait</b>.",de:"Du wirfst lange Pokes raus \u2192 er traut sich nicht rein \u2192 er <b>wartet</b>."},
  loop_a:{en:"Approach",de:"Approach"}, loop_ad:{en:"If they wait, <b>you</b> go in and take the round on \u2192 they want to push you back.",de:"Wartet er, gehst <b>du</b> rein und übernimmst \u2192 er will dich rausdrängen."},
  loop_w:{en:"Whiff punish",de:"Whiff Punish"}, loop_wd:{en:"If they keepout, you dash out, let it whiff and <b>punish</b> \u2192 they wait again.",de:"Drückt er Keepout, dasht du raus, lässt es whiffen und <b>bestrafst</b> \u2192 er wartet wieder."},
  loop_back:{en:"\u21ba and the loop starts over",de:"\u21ba und der Kreislauf beginnt von vorn"},
  fav_h:{en:"My setups",de:"Meine Setups"}, fav_empty:{en:"Tap the \u2605 on any move below to pin it here for quick reference.",de:"Tipp den \u2605 an einem Move unten, um ihn hier zur schnellen Referenz zu pinnen."},
  sheet_startup:{en:"Startup",de:"Startup"}, sheet_block:{en:"On block",de:"On Block"}, sheet_hit:{en:"On hit",de:"On Hit"}, sheet_ch:{en:"Counterhit",de:"Counterhit"},
  sheet_foot:{en:"Move clip: okizeme.gg",de:"Move-Clip: okizeme.gg"},
  fav_save:{en:"Save setup",de:"Setup speichern"}, fav_saved:{en:"Saved",de:"Gespeichert"},
  tbl_dis:{en:"They are",de:"Gegner ist"}, tbl_use:{en:"You use",de:"Du nutzt"}, tbl_why:{en:"Why",de:"Warum"},
  mu_hurt:{en:"What hurts",de:"Was tut weh"}, mu_duck:{en:"Duck between strings",de:"Zwischen Strings ducken"}, mu_step:{en:"Sidestep",de:"Steppen"}, mu_launch:{en:"Launch-punishable",de:"Launch-Punishable"}, mu_punish:{en:"Punish",de:"Bestrafen"}, mu_plan:{en:"Alisa's plan",de:"Alisas Plan"},
  tr_dir:{en:"Movement",de:"Bewegung"}, tr_btn:{en:"Buttons",de:"Buttons"},
  tr_now:{en:"press keys to see your input",de:"Tasten drücken für deinen Input"},
  tr_arm:{en:"Activate",de:"Aktivieren"}, tr_disarm:{en:"Stop",de:"Stopp"}, tr_clear:{en:"Clear",de:"Verlauf löschen"}, tr_reset:{en:"Reset keys",de:"Tasten zurücksetzen"},
  tr_hint:{en:"Click <b>Activate</b>, then press your keys \u2014 the pad lights up and your inputs build below (neutral shows as <b>n</b>). Click a pad key to <b>rebind</b> it. Under <b>Combo buttons</b>, tap <b>+</b> to build your own multi-button key: pick 2+ attacks, Create, then click the new tile to assign a key (\u2715 deletes it). Drill your KBD here \u2014 a rhythmic back-dash earns a \u2713 counter.",de:"Klick <b>Aktivieren</b>, dann drück deine Tasten \u2014 das Pad leuchtet und dein Input baut sich unten auf (Neutral erscheint als <b>n</b>). Klick eine Pad-Taste zum <b>Neu-Binden</b>. Unter <b>Combo-Buttons</b> tipp <b>+</b>, um eine eigene Mehrfach-Taste zu bauen: 2+ Attacks wählen, Erstellen, dann die neue Kachel anklicken für eine Taste (\u2715 löscht). Üb hier deinen KBD \u2014 ein rhythmischer Backdash gibt einen \u2713-Zähler."},
  tr_press:{en:"press a key\u2026",de:"Taste drücken\u2026"},
  r1t:{en:"5 min",de:"5 Min"}, r1:{en:"<b>Movement warmup.</b> <span>KBD loop + sidestep with input display on. Goal: 10 clean KBD in a row.</span>",de:"<b>Movement-Warmup.</b> <span>KBD-Loop + Sidestep mit Input-Display. Ziel: 10 saubere KBD am Stück.</span>"},
  r2t:{en:"10 min",de:"10 Min"}, r2:{en:"<b>Combo reps.</b> <span>Only your one BnB, 20 clean reps from both sides. No more combos.</span>",de:"<b>Combo-Reps.</b> <span>Nur deine eine BnB, 20 saubere Wdh. von beiden Seiten. Nicht mehr Combos.</span>"},
  r3t:{en:"5 min",de:"5 Min"}, r3:{en:"<b>Punish drill.</b> <span>Dummy does -15 \u2192 uf+4,4. Then -10 \u2192 1,1.</span>",de:"<b>Punish-Drill.</b> <span>Dummy macht -15 \u2192 uf+4,4. Dann -10 \u2192 1,1.</span>"},
  r4t:{en:"5 min",de:"5 Min"}, r4:{en:"<b>Defense drill.</b> <span>Record a mid + a low mix-up \u2192 fuzzy / block it.</span>",de:"<b>Defense-Drill.</b> <span>Mix aus Mid + Low aufnehmen \u2192 fuzzy / blocken.</span>"},
  r5t:{en:"20 min",de:"20 Min"}, r5:{en:"<b>Ranked with ONE focus.</b> <span>e.g. \u201cthis session I block one hit too many rather than mash.\u201d Judge only that.</span>",de:"<b>Ranked mit EINEM Fokus.</b> <span>z.B. \u201ediese Session blocke ich einen Hit zu viel statt zu mashen\u201c. Bewerte nur das.</span>"},
  lvl_all:{en:"All",de:"Alle"}, lvl_b:{en:"Beginner",de:"Beginner"}, lvl_i:{en:"Intermediate",de:"Fortgeschritten"}, lvl_a:{en:"Advanced",de:"Profi"}
};
function oppNorm(mv){ var s=String(mv).replace(/\*/g,""); s=s.replace(/^WR(?=[0-9])/,"f,f,F+"); s=s.replace(/^(qcb|qcf|hcb|hcf)(?=[0-9])/i,function(m){return m.toLowerCase()+"+";}); var m=s.match(/^(df|db|uf|ub|ff|bb|d|u|f|b)([0-9].*)$/); return m ? m[1]+"+"+m[2] : s; }
(function(){ var n={}; for(var k in OPP){ var p=k.split("|"); n[p[0]+"|"+oppNorm(p.slice(1).join("|"))]=OPP[k]; } OPP=n; })();
(function(){for(var c in FD){var m=FD[c];for(var k in m){if(k.indexOf("*")>=0){var nk=k.replace(/\*/g,"");if(!(nk in m))m[nk]=m[k];}}}})();
/* ===== state ===== */
var DEFAULT_BINDS = {u:"KeyW", d:"KeyS", b:"KeyA", f:"KeyD", "1":"KeyU", "2":"KeyI", "3":"KeyJ", "4":"KeyK"};
var state = {lang:"en", level:"all", favs:{}, binds:null, combos:[], sort:"cat", muChar:null};
function load(){ try{ var s=JSON.parse(localStorage.getItem("alisaG3")||"{}"); if(s.lang)state.lang=s.lang; if(s.level)state.level=s.level; if(s.favs)state.favs=s.favs; if(s.binds)state.binds=s.binds; if(s.combos)state.combos=s.combos; if(s.sort)state.sort=s.sort; }catch(e){} if(!state.binds){ state.binds=Object.assign({},DEFAULT_BINDS); } var ok={u:1,d:1,b:1,f:1,"1":1,"2":1,"3":1,"4":1}; Object.keys(state.binds).forEach(function(k){ if(!ok[k]) delete state.binds[k]; }); if(!Array.isArray(state.combos)) state.combos=[]; }
function save(){ try{ localStorage.setItem("alisaG3", JSON.stringify({lang:state.lang,level:state.level,favs:state.favs,binds:state.binds,combos:state.combos,sort:state.sort})); }catch(e){} }
function L(o){ if(o==null) return ""; if(typeof o!=="object") return o; return (o[state.lang]!=null) ? o[state.lang] : (o.en!=null?o.en:""); }
function tk(k){ return L(T[k]); }

/* ===== helpers ===== */
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];}); }
function frameClass(v){
  if(v==null) return "neutral";
  var s=String(v);
  if(/launch|throw/i.test(s)) return "good";
  if(s.charAt(0)==="+") return "good";
  if(s.charAt(0)==="-") return "bad";
  return "neutral";
}
function noteChip(raw){ return '<span class="cmd">'+esc(raw)+'</span>'; }
function moveChip(id){ var m=MOVES[id]; if(!m) return noteChip(id); return '<span class="cmd link" data-open="'+id+'">'+esc(m.n)+'</span>'; }
var NID=null;
function noteId(){ if(NID) return NID; NID={}; Object.keys(MOVES).forEach(function(id){ NID[MOVES[id].n.replace(/\s+/g,'').toLowerCase()]=id; }); return NID; }
function cmdChip(raw){ var k=String(raw).replace(/\s+/g,'').toLowerCase(); var id=noteId()[k]; return id?'<span class="cmd link" data-open="'+id+'">'+esc(raw)+'</span>':'<span class="cmd">'+esc(raw)+'</span>'; }
function fmt(s){
  s = esc(s);
  s = s.replace(/\[\[([a-z0-9]+)\]\]/gi, function(m,id){ return moveChip(id); });
  s = s.replace(/\{\{plus:(.+?)\}\}/g, '<span class="tag plus">$1</span>');
  s = s.replace(/\{\{minus:(.+?)\}\}/g, '<span class="tag minus">$1</span>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/`(.+?)`/g, '<span class="cmd">$1</span>');
  return s;
}
/* Review-badge language (Phase 7) — one wording for every lab-review /
   last-reviewed marker across punishers, combos, stances, matchups and
   knowledge checks. Existing tag classes only; no new gameplay claims. */
var RV={
  lab:{en:"needs lab check",de:"muss gelabt werden"},
  reviewed:{en:"last reviewed",de:"zuletzt geprüft"},
  manual:{en:"manual-review",de:"manuelle Prüfung"},
  source:{en:"Source",de:"Quelle"}
};
function labBadge(){ return '<span class="tag minus">⚠ '+esc(L(RV.lab))+'</span>'; }
function reviewedBadge(date){ return '<span class="tag prop">'+esc(L(RV.reviewed))+' '+esc(date)+'</span>'; }
/* One rendering path for external provenance links (Phase 9). manual-review links
   get the Phase 7 manual-review badge; never presented as canonical confirmation. */
function sourceLinkHtml(list){
  return (list||[]).map(function(s){
    var a='<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+'</a>';
    if(s.reviewStatus==="manual-review") a+=' <span class="tag minus">⚠ '+esc(L(RV.manual))+'</span>';
    if(s.lastChecked) a+=' '+reviewedBadge(s.lastChecked);
    return a;
  }).join(' · ');
}
var LVORD = {all:9, a:2, i:1, b:0};
function lvVisible(lv){ return state.level==="all" ? true : lv <= LVORD[state.level]; }
function lvClass(lv){ return lv===0?"b":lv===1?"i":"a"; }
function lvText(lv){ return lv===0?tk("lvl_b"):lv===1?tk("lvl_i"):tk("lvl_a"); }
/* ===== icons ===== */
var IC = {
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>',
  bars1:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="14" width="4" height="6" rx="1"/></svg>',
  bars2:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="10" y="9" width="4" height="11" rx="1"/></svg>',
  bars3:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="14" width="4" height="6" rx="1"/><rect x="9" y="9" width="4" height="11" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>'
};

/* ===== small render helpers ===== */
function fmtNoLink(s){
  s = esc(s);
  s = s.replace(/\[\[([a-z0-9]+)\]\]/gi, function(m,id){ var mv=MOVES[id]; return '<span class="cmd">'+esc(mv?mv.n:id)+'</span>'; });
  s = s.replace(/\{\{plus:(.+?)\}\}/g, '<span class="tag plus">$1</span>');
  s = s.replace(/\{\{minus:(.+?)\}\}/g, '<span class="tag minus">$1</span>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/`(.+?)`/g, '<span class="cmd">$1</span>');
  return s;
}
function keyLabel(code){
  if(!code) return "?";
  if(code.indexOf("Key")===0) return code.slice(3);
  if(code.indexOf("Digit")===0) return code.slice(5);
  if(code.indexOf("Numpad")===0) return "N"+code.slice(6);
  var map={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"\u2423",ShiftLeft:"LSh",ShiftRight:"RSh",ControlLeft:"LCt",ControlRight:"RCt",Enter:"\u23ce",Backquote:"\u0060",Comma:",",Period:".",Slash:"/",Semicolon:";",Quote:"'",BracketLeft:"[",BracketRight:"]",Minus:"-",Equal:"=",Tab:"\u21e5"};
  return map[code]||code;
}
function fchip(label,val,cls){ return '<span class="fchip"><span class="fl">'+esc(label)+'</span><span class="fv '+cls+'">'+esc(val)+'</span></span>'; }

/* ===== movelist + favorites ===== */
var PROPTXT = {
  "Homing":{en:"homing, beats sidesteps",de:"homing, schl\u00e4gt Sidesteps"},
  "Balcony break":{en:"wall-splats",de:"splattet an die Wand"},
  "Balcony break (airborne)":{en:"wall-splats airborne",de:"splattet airborne an die Wand"},
  "Tornado":{en:"Tornado combo tool",de:"Tornado-Combo-Tool"},
  "Instant Tornado":{en:"instant Tornado on hit",de:"sofortiger Tornado auf Hit"},
  "Heat engager":{en:"Heat Engager",de:"Heat Engager"},
  "Heat smash":{en:"Heat Smash",de:"Heat Smash"},
  "Heat Burst":{en:"activates Heat",de:"aktiviert Heat"},
  "Power crush":{en:"power crush, absorbs a hit",de:"Power Crush, absorbiert einen Treffer"},
  "Absorbs mid/high":{en:"absorbs a mid or high",de:"absorbiert ein Mid oder High"},
  "Spike":{en:"spikes them down",de:"spiket sie zu Boden"},
  "Knee":{en:"knee",de:"Knie"},
  "Elbow":{en:"elbow",de:"Ellbogen"},
  "Low crush":{en:"crushes lows",de:"crusht Lows"},
  "High crush":{en:"ducks under highs",de:"duckt unter Highs"},
  "While standing":{en:"while-standing, as you rise",de:"While Standing, beim Aufstehen"},
  "Running":{en:"running move, needs a dash",de:"Running-Move, braucht Dash"},
  "Full crouch":{en:"from full crouch",de:"aus der vollen Hocke"},
  "Jails":{en:"jails on block",de:"jailt auf Block"},
  "Plus":{en:"plus on block",de:"plus auf Block"},
  "Plus on block":{en:"plus on block",de:"plus auf Block"},
  "+ on block":{en:"plus on block",de:"plus auf Block"},
  "CH combo":{en:"combos on counterhit",de:"combot bei Counterhit"},
  "CH launch":{en:"launches on counterhit",de:"launcht bei Counterhit"},
  "Fast low":{en:"fast low",de:"schnelles Low"},
  "Fast mid":{en:"fast mid",de:"schnelles Mid"},
  "Sidestep":{en:"done out of a sidestep",de:"aus einem Sidestep"},
  "Tailspin":{en:"tailspin",de:"Tailspin"},
  "Attack throw":{en:"attack throw on hit",de:"Attack-Throw auf Hit"},
  "Floor break":{en:"breaks the floor",de:"bricht den Boden"},
  "Hopkick":{en:"hopkick launcher",de:"Hopkick-Launcher"},
  "Leaves them crouching":{en:"leaves them crouching",de:"l\u00e4sst sie geduckt"},
  "Mid-low mix":{en:"mid/low mixup",de:"Mid/Low-Mixup"},
  "Low ender":{en:"low combo ender",de:"Low-Combo-Ender"},
  "i12 punish":{en:"i12 punisher",de:"i12-Punisher"},
  "-14 punish":{en:"i14 punisher",de:"i14-Punisher"},
  "Combo tool":{en:"combo tool",de:"Combo-Tool"},
  "Command throw":{en:"command throw",de:"Kommando-Wurf"},
  "Generic":{en:"generic throw",de:"generischer Wurf"},
  "High parry":{en:"parries all highs",de:"parriert alle Highs"},
  "Panic option":{en:"panic button",de:"Panic-Button"},
  "Reversal":{en:"reversal",de:"Reversal"},
  "\u2192 DES":{en:"cancels into chainsaws",de:"cancelt in die Kettens\u00e4gen"},
  "\u2192 SBT/DBT":{en:"feeds your stances",de:"f\u00fchrt in deine Stances"},
  "\u2192 BKP":{en:"recovers in Backup stance",de:"recovered in die Backup-Stance"},
  "Weapon":{en:"weapon hit, chip on block",de:"Waffen-Treffer, Chip auf Block"},
  "Long low":{en:"long-range low",de:"Long-Range-Low"},
  "Stop here or \u2192 df+1,1,2":{en:"stop here, or continue to df+1,1,2",de:"hier stoppen, oder weiter zu df+1,1,2"},
  "Break: 1 or 2":{en:"breaks with 1 or 2",de:"bricht mit 1 oder 2"},
  "Break: 1+2":{en:"breaks with 1+2",de:"bricht mit 1+2"}
};
function propDesc(m){
  var en=[], de=[];
  (m.p||[]).forEach(function(t){ var x=PROPTXT[t]; if(x){ if(x.en) en.push(x.en); if(x.de) de.push(x.de);} });
  function fin(arr,fb){ if(!arr.length) return fb; var s=arr.join(", "); return s.charAt(0).toUpperCase()+s.slice(1)+"."; }
  return {en:fin(en, m.b+" on block, "+m.h+" on hit."), de:fin(de, m.b+" auf Block, "+m.h+" auf Hit.")};
}
function moveDesc(m){ return m.x ? fmtNoLink(L(m.x)) : esc(L(propDesc(m))); }
function pNums(str){ var s=String(str); if(s==="\u2014"||s==="throw") return []; return (s.match(/-?\d+/g)||[]).map(Number); }
function startupNum(m){ var n=pNums(m.s); return n.length?n[0]:999; }
function blockNum(m){ var n=pNums(m.b); return n.length?Math.min.apply(null,n):99; }
function hitNum(m){ var n=pNums(m.h); return n.length?Math.max.apply(null,n):-99; }
function sortBar(){
  var opts=[["essentials",{en:"\u2605 Essentials",de:"\u2605 Essentials"}],["cat",{en:"Category",de:"Kategorie"}],["range",{en:"Range",de:"Range"}],["startup",{en:"Startup",de:"Startup"}],["block",{en:"On block",de:"Auf Block"}],["hit",{en:"On hit",de:"Auf Hit"}],["counterhit",{en:"Counterhit",de:"Counterhit"}]];
  var cur=state.sort||"cat";
  var btns=opts.map(function(o){ return '<button class="sortbtn'+(cur===o[0]?' on':'')+'" data-sort="'+o[0]+'">'+esc(L(o[1]))+'</button>'; }).join('');
  var caps={
    essentials:{en:"Alisa's core moves \u2014 the ones worth learning first and that stay relevant all the way to God of Destruction. Start here.",de:"Alisas Kern-Moves \u2014 die, die man zuerst lernt und die bis God of Destruction wichtig bleiben. Hier anfangen."},
    range:{en:"Grouped by distance \u2014 short, mid and long range, so you can pick the right tool for the spacing you are at.",de:"Nach Distanz gruppiert \u2014 Short, Mid und Long Range, damit du f\u00fcr jeden Abstand das richtige Tool w\u00e4hlst."},
    startup:{en:"Grouped by startup speed \u2014 scan i10, i11, i12\u2026 to see what you can punish with.",de:"Nach Startup-Speed gruppiert \u2014 scanne i10, i11, i12\u2026 um zu sehen, womit du bestrafen kannst."},
    block:{en:"Grouped by safety \u2014 plus, safe, poke-punishable, and launch-punishable.",de:"Nach Sicherheit gruppiert \u2014 Plus, safe, Poke-bestrafbar und launchbar."},
    hit:{en:"Grouped by what you get on a clean hit \u2014 launchers, knockdowns, and plus frames.",de:"Nach Hit-Ertrag gruppiert \u2014 Launcher, Knockdowns und Plus-Frames."},
    counterhit:{en:"Only moves that reward a counterhit \u2014 great for interrupting and whiff-punishing. Shows the CH value.",de:"Nur Moves, die bei Counterhit belohnen \u2014 top zum Unterbrechen und Whiff-Punishen. Zeigt den CH-Wert."}
  };
  var cap=cur==="cat"?'':'<div class="sortcap">'+esc(L(caps[cur]))+'</div>';
  return '<div class="sortbar"><span class="sortlbl">'+esc(L({en:"Sort",de:"Sortieren"}))+'</span>'+btns+'</div>'+cap;
}
function moveCard(id, chMode){
  var m=MOVES[id]; if(!m) return "";
  var on = state.favs[id]?" on":"";
  var fr = fchip("i", m.s, "neutral") + fchip("blk", m.b, frameClass(m.b)) + fchip("hit", m.h, frameClass(m.h));
  if(chMode && m.ch){ fr += fchip("CH", m.ch, frameClass(m.ch)); }
  return '<button class="movecard'+(m.key?' key':'')+'" data-open="'+id+'">'
    +'<div class="mc-top"><span class="mc-cmdwrap"><span class="mc-cmd">'+esc(m.n)+'</span>'+(m.key?'<span class="mc-key">\u2605 KEY</span>':'')+'</span><span class="mc-star'+on+'" data-fav="'+id+'">\u2605</span></div>'
    +'<div class="mc-frames">'+fr+'</div>'
    +'<div class="mc-desc"><b style="color:var(--ink)">'+esc(L(m.lev))+'</b> \u00b7 '+moveDesc(m)+'</div>'
    +(m.key&&m.keytip?'<div class="mc-keytip">'+esc(L(m.keytip))+'</div>':'')
    +(WARN[id]?'<div class="mc-warn">\u26A0 '+esc(L(WARN[id]))+'</div>':'')
    +'</button>';
}
function grpStartup(m){
  if((m.p||[]).indexOf("High parry")>=0) return {k:900, lbl:{en:"Parry",de:"Parry"}};
  var n=startupNum(m); return {k:n, lbl:{en:"i"+n,de:"i"+n}};
}
function grpBlock(m){
  var n=pNums(m.b);
  if(!n.length) return {k:5, lbl:{en:"Throws & parries \u2014 not blockable",de:"W\u00fcrfe & Parries \u2014 nicht blockbar"}};
  var v=Math.min.apply(null,n);
  if(v>0) return {k:0, lbl:{en:"Plus on block \u2014 your turn",de:"Plus auf Block \u2014 dein Zug"}};
  if(v>=-9) return {k:1, lbl:{en:"Safe (\u22121 to \u22129)",de:"Safe (\u22121 bis \u22129)"}};
  if(v>=-14) return {k:2, lbl:{en:"Poke-punishable (\u221210 to \u221214) \u2014 rarely launched",de:"Poke-bestrafbar (\u221210 bis \u221214) \u2014 selten Launch"}};
  return {k:3, lbl:{en:"Launch-punishable (\u221215 or worse)",de:"Launchbar (\u221215 oder schlechter)"}};
}
function grpHit(m){
  var s=String(m.h);
  if(/a/.test(s)) return {k:0, lbl:{en:"Launches / juggle on hit",de:"Launcht / Juggle auf Hit"}};
  if(/d/.test(s)||/throw/i.test(s)) return {k:1, lbl:{en:"Knockdown or grab \u2192 oki",de:"Knockdown oder Wurf \u2192 Oki"}};
  var n=pNums(s); var v=n.length?Math.max.apply(null,n):-99;
  if(v>=5) return {k:2, lbl:{en:"Big plus on hit (+5 or more)",de:"Gro\u00dfes Plus auf Hit (+5 oder mehr)"}};
  if(v>=1) return {k:3, lbl:{en:"Slight plus on hit (+1 to +4)",de:"Leichtes Plus auf Hit (+1 bis +4)"}};
  return {k:4, lbl:{en:"Even or minus on hit",de:"Neutral oder Minus auf Hit"}};
}
function grpCH(m){
  var s=String(m.ch);
  if(/a/.test(s)) return {k:0, lbl:{en:"Launches on counterhit",de:"Launcht bei Counterhit"}};
  if(/d/.test(s)) return {k:1, lbl:{en:"Knockdown on counterhit",de:"Knockdown bei Counterhit"}};
  return {k:2, lbl:{en:"Plus on counterhit",de:"Plus bei Counterhit"}};
}
function grpRange(m){
  var r=m.rng||"m";
  if(r==="s") return {k:0, lbl:{en:"Short range \u2014 up close & in your face",de:"Short Range \u2014 Nahdistanz"}};
  if(r==="m") return {k:1, lbl:{en:"Mid range \u2014 your normal spacing",de:"Mid Range \u2014 dein normaler Abstand"}};
  return {k:2, lbl:{en:"Long range \u2014 approach & whiff-punish",de:"Long Range \u2014 Approach & Whiff-Punish"}};
}
function renderGrouped(ids, keyfn, chMode){
  var buckets={}, order=[];
  ids.forEach(function(id){ var g=keyfn(MOVES[id]); if(!buckets[g.k]){buckets[g.k]={lbl:g.lbl, ids:[]}; order.push(g.k);} buckets[g.k].ids.push(id); });
  order.sort(function(a,b){return a-b;});
  return order.map(function(k){ var b=buckets[k]; return '<div class="catlabel">'+esc(L(b.lbl))+'</div><div class="movegrid">'+b.ids.map(function(id){return moveCard(id, chMode);}).join('')+'</div>'; }).join('');
}
var MLQ="";
function normLoose(s){ return String(s).toLowerCase().replace(/[\s,.\u00b7]/g,''); }
function moveMatches(m,q){
  var raw=q.toLowerCase().trim();
  var hasPlus=raw.indexOf('+')>=0;
  var nq=normLoose(q);
  var cmd=normLoose(m.n);
  if(hasPlus){
    if(nq && cmd.indexOf(nq)>=0) return true;
  } else {
    var nqp=nq.replace(/\+/g,''), cmdp=cmd.replace(/\+/g,'');
    if(nqp && cmdp.indexOf(nqp)>=0) return true;
  }
  if(raw.length>=2){
    var hay=(L(m.lev)+' '+(m.p||[]).join(' ')+' '+(m.x?L(m.x):'')+' '+(m.note?L(m.note).join(' '):'')).toLowerCase();
    if(hay.indexOf(raw)>=0) return true;
  }
  return false;
}
function movelistBody(){
  var h='';
  var sort=state.sort||"cat";
  if(sort==="essentials"){
    CATS.forEach(function(c){
      var ids=Object.keys(MOVES).filter(function(id){return MOVES[id].cat===c.id && MOVES[id].key;});
      if(!ids.length) return;
      h += '<div class="catlabel">'+L(c.name)+'</div><div class="movegrid">'+ids.map(function(id){return moveCard(id);}).join('')+'</div>';
    });
    return h;
  }
  if(sort==="cat"){
    CATS.forEach(function(c){
      var ids=Object.keys(MOVES).filter(function(id){return MOVES[id].cat===c.id;});
      if(!ids.length) return;
      h += '<div class="catlabel">'+L(c.name)+'</div>';
      var normal=ids.filter(function(id){return !MOVES[id].chain;});
      var chains={};
      ids.filter(function(id){return MOVES[id].chain;}).forEach(function(id){ var k=MOVES[id].chain; (chains[k]=chains[k]||[]).push(id); });
      if(normal.length) h += '<div class="movegrid">'+normal.map(function(id){return moveCard(id);}).join('')+'</div>';
      Object.keys(chains).forEach(function(ck){
        var lbl=CHAINLBL[ck]||{en:ck,de:ck};
        h += '<details class="chain"><summary class="chain-sum">'+esc(L(lbl))+' <span class="chain-n">'+chains[ck].length+' Hits</span></summary><div class="movegrid">'+chains[ck].map(function(id){return moveCard(id);}).join('')+'</div></details>';
      });
    });
    return h;
  }
  if(sort==="counterhit"){
    var cids=Object.keys(MOVES).filter(function(id){return MOVES[id].ch;});
    cids.sort(function(a,b){ var d=hitNum({h:MOVES[b].ch})-hitNum({h:MOVES[a].ch}); return d!==0?d:(MOVES[a].n<MOVES[b].n?-1:1); });
    return renderGrouped(cids, grpCH, true);
  }
  var ids=Object.keys(MOVES);
  var keyfn = sort==="startup"?grpStartup : sort==="block"?grpBlock : sort==="range"?grpRange : grpHit;
  ids.sort(function(a,b){ var ga=keyfn(MOVES[a]).k, gb=keyfn(MOVES[b]).k; if(ga!==gb) return ga-gb; return MOVES[a].n<MOVES[b].n?-1:1; });
  return renderGrouped(ids, keyfn, false);
}
function runMovelistSearch(q){
  var el=document.getElementById('mlResults'); if(!el) return;
  q=(q||'').trim();
  if(!q){ el.innerHTML=movelistBody(); return; }
  var matches=Object.keys(MOVES).filter(function(id){ return moveMatches(MOVES[id], q); });
  matches.sort(function(a,b){ var d=startupNum(MOVES[a])-startupNum(MOVES[b]); return d!==0?d:(MOVES[a].n<MOVES[b].n?-1:1); });
  if(!matches.length){ el.innerHTML='<div class="ml-empty">'+esc(L({en:"No moves found for ",de:"Keine Moves gefunden f\u00fcr "}))+'\u201c'+esc(q)+'\u201d</div>'; return; }
  el.innerHTML='<div class="ml-count">'+matches.length+' '+esc(L({en:(matches.length===1?"result":"results"),de:"Treffer"}))+'</div><div class="movegrid">'+matches.map(function(id){return moveCard(id);}).join('')+'</div>';
}
function setupMovelistSearch(){
  var inp=document.getElementById('mlSearch'); if(!inp) return;
  inp.value=MLQ;
  inp.addEventListener('input', function(){ MLQ=inp.value; runMovelistSearch(MLQ); });
  var clr=document.getElementById('mlClear');
  if(clr) clr.addEventListener('click', function(){ MLQ=""; inp.value=""; runMovelistSearch(""); inp.focus(); });
  if(MLQ) runMovelistSearch(MLQ);
}
function renderMovelist(){
  var ph=L({en:"Search moves \u2014 e.g. df1, 1+2, hopkick, tornado",de:"Moves suchen \u2014 z.B. df1, 1+2, Hopkick, Tornado"});
  return '<div class="ml-searchwrap"><input id="mlSearch" class="ml-search" type="text" placeholder="'+esc(ph)+'" autocomplete="off" autocapitalize="off" spellcheck="false"><button id="mlClear" class="ml-clear" title="clear">\u2715</button></div>'
    + sortBar()
    + '<div id="mlResults">'+movelistBody()+'</div>';
}
function renderFavPanel(){
  var ids=Object.keys(state.favs).filter(function(id){return MOVES[id];});
  var inner;
  if(!ids.length){ inner='<div class="fp-empty">'+tk("fav_empty")+'</div>'; }
  else { inner='<div class="fav-items">'+ids.map(function(id){var m=MOVES[id];return '<span class="fav-chip" data-open="'+id+'">'+esc(m.n)+' <span class="fx" data-fav="'+id+'">\u2715</span></span>';}).join('')+'</div>'; }
  return '<div class="favpanel" id="favpanel"><div class="fp-h">\u2605 '+tk("fav_h")+'</div>'+inner+'</div>';
}
function updateFavPanel(){ var el=document.getElementById('favpanel'); if(el){ var d=document.createElement('div'); d.innerHTML=renderFavPanel(); el.replaceWith(d.firstChild); } }
function toggleFav(id){
  if(state.favs[id]) delete state.favs[id]; else state.favs[id]=1; save();
  document.querySelectorAll('[data-fav="'+id+'"]').forEach(function(s){ s.classList.toggle('on', !!state.favs[id]); });
  var sf=document.getElementById('sheetFav');
  if(sf && sf.getAttribute('data-fav')===id){ var lbl=sf.querySelector('.sf-lbl'); if(lbl) lbl.textContent = state.favs[id]?tk("fav_saved"):tk("fav_save"); }
  updateFavPanel();
}

/* ===== move detail sheet ===== */
function okiCmd(m){ var special={"Rage Art":"R.df+1+2"}; return special[m.n] || String(m.n); }
function vidUrl(m){ return 'https://okizeme.b-cdn.net/alisa/'+encodeURI(okiCmd(m))+'.mp4'; }
function okiPageUrl(m){ return 'https://okizeme.gg/database/alisa/'+encodeURI(okiCmd(m)); }
function tdSlug(m){ var special={"Rage Art":"R.df12"}; if(special[m.n]) return special[m.n]; return String(m.n).replace(/[+\s]/g,''); }
function tdUrl(m){ return 'https://tekkendocs.com/t8/alisa/'+tdSlug(m); }
function oppTdSlug(mv){ return String(mv).replace(/[+\s]/g,''); }
function fmtMU(s, char){
  s = esc(s);
  s = s.replace(/\[\[([a-z0-9]+)\]\]/gi, function(m,id){ var mv=MOVES[id]; return mv?'<span class="cmd link mine" data-open="'+id+'">'+esc(mv.n)+'</span>':'<span class="cmd">'+id+'</span>'; });
  s = s.replace(/\{\{plus:(.+?)\}\}/g, '<span class="tag plus">$1</span>');
  s = s.replace(/\{\{minus:(.+?)\}\}/g, '<span class="tag minus">$1</span>');
  s = s.replace(/`(.+?)`/g, function(m,mv){ var d=oppNorm(mv); return '<span class="cmd opp" data-opp="'+char+'|'+d+'">'+d+'</span>'; });
  s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return s;
}
function oppVal(v){ return (v==null || v==="") ? "\u2014" : v; }
function hitLevelText(lv){ if(!lv) return "\u2014"; var m={h:"High",m:"Mid",l:"Low",M:"Mid",L:"Low","!":"Unblockable",t:"Throw",sp:"Special"}; return String(lv).split(",").map(function(x){x=x.trim(); return m[x]||x;}).join(", "); }
function openOppSheet(char, mv){
  var cs=muSlug(char);
  var vid='https://okizeme.b-cdn.net/'+cs+'/'+encodeURI(mv)+'.mp4';
  var td='https://tekkendocs.com/t8/'+cs+'/'+oppTdSlug(mv);
  var oki='https://okizeme.gg/database/'+cs+'/'+encodeURI(mv);
  var media='<div class="sh-media"><video class="sh-video" src="'+vid+'" autoplay loop muted playsinline disablepictureinpicture preload="metadata" oncontextmenu="return false" onclick="if(this.paused){this.currentTime=0;this.play();}else{this.pause();}" onerror="var w=this.parentElement; if(w){w.style.display=\'none\';}"></video></div>';
  var o=OPP[char+"|"+mv];
  var fd=(FD[char]||{})[mv];
  var data=null, tags=null, notes=null;
  if(o){ data={lv:o.lv,s:o.s,dmg:o.dmg,b:o.b,h:o.h,ch:o.ch}; notes=o.note; }
  else if(fd){ data={lv:fd[0],s:fd[1],dmg:fd[2],b:fd[3],h:fd[4],ch:fd[5]}; tags=fd[6]||null; }
  var lev = data ? hitLevelText(data.lv) : L({en:"opponent move",de:"Gegner-Move"});
  var punish=null;
  if(data){
    var bn=(function(x){var m=String(x||"").match(/-?\d+/);return m?parseInt(m[0]):null;})(data.b);
    var isLow=/^[lL]/.test(String(data.lv||"").trim());
    if(bn!==null && bn<=-10){
      if(isLow){ if(bn<=-15) punish={id:"ws2",label:"ws2",tail:L({en:" \u2192 launch",de:" \u2192 Launch"})}; else punish={id:null,label:L({en:"block \u2192 while-standing punish",de:"blocken \u2192 While-Standing-Punish"}),tail:""}; }
      else if(bn<=-16) punish={id:"df2",label:"df+2",tail:L({en:" \u2192 launch",de:" \u2192 Launch"})};
      else if(bn<=-15) punish={id:"uf44",label:"uf+4,4",tail:L({en:" \u2192 launch",de:" \u2192 Launch"})};
      else if(bn<=-13) punish={id:"c32",label:"3,2",tail:" (i13)"};
      else punish={id:null,label:L({en:"1,1 jab",de:"1,1-Jab"})+" (i10\u2013i12)",tail:""};
    } else if(bn!==null && bn>=1){ punish={id:null,label:L({en:"+"+bn+" \u2014 their turn, block & wait",de:"+"+bn+" \u2014 ihr Zug, blocken & warten"}),tail:"",safe:true}; }
  }
  var body='';
  if(data){
    var stats='<div class="sh-stats">'
      +'<div class="sh-stat"><div class="sl">'+tk("sheet_startup")+'</div><div class="sv neutral">'+esc(oppVal(data.s))+'</div></div>'
      +'<div class="sh-stat"><div class="sl">'+tk("sheet_block")+'</div><div class="sv '+frameClass(data.b)+'">'+esc(oppVal(data.b))+'</div></div>'
      +'<div class="sh-stat"><div class="sl">'+tk("sheet_hit")+'</div><div class="sv '+frameClass(data.h)+'">'+esc(oppVal(data.h))+'</div></div></div>';
    var extra='<div class="sh-stats" style="grid-template-columns:repeat(2,1fr); margin-top:8px">'
      +'<div class="sh-stat"><div class="sl">'+esc(L({en:"Damage",de:"Schaden"}))+'</div><div class="sv neutral">'+esc(oppVal(data.dmg))+'</div></div>'
      +'<div class="sh-stat"><div class="sl">'+tk("sheet_ch")+'</div><div class="sv '+frameClass(data.ch)+'">'+esc(oppVal(data.ch))+'</div></div></div>';
    var notesHtml='';
    if(notes){ var narr=L(notes); if(narr && narr.length){ notesHtml='<div class="sh-notes"><div class="sh-notes-h">'+esc(L({en:"Notes",de:"Notes"}))+'</div><ul class="sh-notes-list">'+narr.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div>'; } }
    var punishHtml='';
    if(punish){
      var pv = punish.id ? '<span class="cmd link mine" data-open="'+punish.id+'">'+esc(punish.label)+'</span>' : '<span class="pv-txt">'+esc(punish.label)+'</span>';
      punishHtml='<div class="sh-punish'+(punish.safe?' safe':'')+'"><span class="sh-punish-l">'+esc(L({en:"Punish",de:"Bestrafen"}))+'</span><span class="sh-punish-v">'+pv+esc(punish.tail||"")+'</span></div>';
    }
    body=media+stats+extra+punishHtml+notesHtml;
  } else {
    body=media+'<div class="sh-desc">'+esc(L({en:"Frame data for this move isn't in the database \u2014 open the live current-patch data and clip below.",de:"Frame-Daten f\u00fcr diesen Move sind nicht in der Datenbank \u2014 \u00f6ffne unten die aktuellen Live-Daten und den Clip."}))+'</div>';
  }
  var tagChips=(tags||[]).map(function(t){return '<span class="tag prop oppt">'+esc(t)+'</span>';}).join('');
  var html='<div class="sh-head"><div class="sh-top"><div><div class="sh-cmd">'+esc(mv)+'</div><div class="sh-lev"><span class="opp-char">'+esc(char)+'</span> \u00b7 '+esc(lev)+'</div></div><button class="sh-close" id="shClose">\u2715</button></div>'
    +'<div class="sh-tags"><span class="tag prop oppt">'+esc(char)+'</span>'+tagChips+'</div></div>'
    +'<div class="sh-body">'+body
    +'<div class="sh-foot"><span class="sh-data"><span>'+esc(L({en:"Clip: ",de:"Clip: "}))+'<a href="'+oki+'" target="_blank" rel="noopener noreferrer">okizeme.gg</a></span><span>'+esc(L({en:"Full data: ",de:"Volle Daten: "}))+'<a href="'+td+'" target="_blank" rel="noopener noreferrer">tekkendocs.com</a></span></span></div></div>';
  document.getElementById('sheet').innerHTML=html;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('shClose').addEventListener('click', closeSheet);
}
function openSheet(id){
  var m=MOVES[id]; if(!m) return;
  var tags='<div class="sh-tags">'+(m.p||[]).map(function(t){return '<span class="tag prop">'+esc(t)+'</span>';}).join('')+'</div>';
  var stats='<div class="sh-stats">'
    +'<div class="sh-stat"><div class="sl">'+tk("sheet_startup")+'</div><div class="sv neutral">'+esc(m.s)+'</div></div>'
    +'<div class="sh-stat"><div class="sl">'+tk("sheet_block")+'</div><div class="sv '+frameClass(m.b)+'">'+esc(m.b)+'</div></div>'
    +'<div class="sh-stat"><div class="sl">'+tk("sheet_hit")+'</div><div class="sv '+frameClass(m.h)+'">'+esc(m.h)+'</div></div></div>';
  var extra=[];
  if(m.dmg) extra.push('<div class="sh-stat"><div class="sl">'+esc(L({en:"Damage",de:"Schaden"}))+'</div><div class="sv neutral">'+esc(m.dmg)+'</div></div>');
  if(m.ch) extra.push('<div class="sh-stat"><div class="sl">'+tk("sheet_ch")+'</div><div class="sv '+frameClass(m.ch)+'">'+esc(m.ch)+'</div></div>');
  var ch = extra.length ? '<div class="sh-stats" style="grid-template-columns:repeat('+extra.length+',1fr); margin-top:8px">'+extra.join('')+'</div>' : '';
  var notes='';
  if(m.note){ var narr=L(m.note); if(narr && narr.length){ notes='<div class="sh-notes"><div class="sh-notes-h">'+esc(L({en:"Notes",de:"Notes"}))+'</div><ul class="sh-notes-list">'+narr.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div>'; } }
  var on=state.favs[id]?' on':'';
  var media='<div class="sh-media"><video class="sh-video" src="'+vidUrl(m)+'" autoplay loop muted playsinline disablepictureinpicture preload="metadata" oncontextmenu="return false" onclick="if(this.paused){this.currentTime=0;this.play();}else{this.pause();}" onerror="var w=this.parentElement; if(w){w.style.display=\'none\';}"></video></div>';
  var html='<div class="sh-head"><div class="sh-top"><div><div class="sh-cmd">'+esc(m.n)+'</div><div class="sh-lev">'+esc(L(m.lev))+'</div></div><button class="sh-close" id="shClose">\u2715</button></div>'
    +tags+'</div>'+'<div class="sh-body">'+media+stats+ch
    +'<div class="sh-desc">'+moveDesc(m)+'</div>'
    +notes
    +(WARN[id]?'<div class="sh-warn">\u26A0 '+esc(L(WARN[id]))+'</div>':'')
    +'<div class="sh-foot"><span class="sh-data"><span>'+esc(L({en:"Move clip & data: ",de:"Move-Clip & Daten: "}))+'<a href="'+okiPageUrl(m)+'" target="_blank" rel="noopener noreferrer">okizeme.gg</a></span><span>'+esc(L({en:"Move data: ",de:"Move-Daten: "}))+'<a href="'+tdUrl(m)+'" target="_blank" rel="noopener noreferrer">tekkendocs.com</a></span></span><span class="sh-fav'+on+'" id="sheetFav" data-fav="'+id+'"><span class="st">\u2605</span><span class="sf-lbl">'+(state.favs[id]?tk("fav_saved"):tk("fav_save"))+'</span></span></div></div>';
  document.getElementById('sheet').innerHTML=html;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('shClose').addEventListener('click', closeSheet);
  document.getElementById('sheetFav').addEventListener('click', function(){ toggleFav(id); });
}
function closeSheet(){ document.getElementById('overlay').classList.remove('open'); }

/* ===== block renderers ===== */
function renderLoop(){
  return '<div class="loop">'
    +'<div class="loopnode"><div class="ln-t">'+tk("loop_k")+'</div><div class="ln-d">'+tk("loop_kd")+'</div></div>'
    +'<div class="larrow">\u2192</div>'
    +'<div class="loopnode"><div class="ln-t">'+tk("loop_a")+'</div><div class="ln-d">'+tk("loop_ad")+'</div></div>'
    +'<div class="larrow">\u2192</div>'
    +'<div class="loopnode"><div class="ln-t">'+tk("loop_w")+'</div><div class="ln-d">'+tk("loop_wd")+'</div></div>'
    +'</div><div class="loopback">'+tk("loop_back")+'</div>';
}
function renderLegend(){
  return '<div class="legend">'+LEG.map(function(p){ return '<div class="legpair"><span class="lp-key">'+esc(p[0])+'</span><span class="lp-eq">=</span> '+esc(L(p[1]))+'</div>'; }).join('')+'</div>';
}
function renderNotation(){
  function grp(title,arr){ return '<h4>'+esc(title)+'</h4><div class="legend">'+arr.map(function(p){ return '<div class="legpair"><span class="lp-key">'+esc(p[0])+'</span><span class="lp-eq">=</span> '+esc(L(p[1]))+'</div>'; }).join('')+'</div>'; }
  return grp(L({en:"Directions & buttons",de:"Richtungen & Buttons"}),LEG)
       + grp(L({en:"Situations & stances",de:"Situationen & Stances"}),LEGP)
       + grp(L({en:"Reading the frame numbers",de:"Die Frame-Zahlen lesen"}),LEGF)
       + grp(L({en:"The little suffix letters",de:"Die kleinen Suffix-Buchstaben"}),LEGS);
}
function renderPunish(){
  var H=[{en:"On block",de:"On Block"},{en:"Punish",de:"Punish"},{en:"Note",de:"Hinweis"}];
  var GROUPS=[
    ["standing",{en:"Standing — after you block",de:"Stehend — nachdem du blockst"},H[0]],
    ["crouching",{en:"Crouching — after a blocked low",de:"Geduckt — nach geblocktem Low"},H[0]],
    ["whiff",{en:"Whiff punish — they missed",de:"Whiff Punish — er hat verfehlt"},{en:"Speed",de:"Speed"}]
  ];
  var html=GROUPS.map(function(g){
    var rows=PUNISH.filter(function(r){ return r.kind===g[0]; });
    if(!rows.length) return "";
    var body=rows.map(function(r){
      var col1=(g[0]==="whiff") ? '<span class="cmd">'+esc(r.startup||"—")+'</span>' : '<span class="tag minus">'+esc(r.dis)+'</span>';
      var use=cmdChip(r.use)+(r.alt?' <span class="tag prop">alt</span>':'');
      var note=esc(L(r.why));
      if(r.followUps&&r.followUps.length){ note+=r.followUps.map(function(f){ return '<div>→ '+esc(L(f))+'</div>'; }).join(''); }
      return '<tr><td>'+col1+'</td><td>'+use+'</td><td>'+note+'</td></tr>';
    }).join('');
    return '<div class="catlabel">'+esc(L(g[1]))+'</div><div class="table-scroll"><table><thead><tr><th>'+esc(L(g[2]))+'</th><th>'+L(H[1])+'</th><th>'+L(H[2])+'</th></tr></thead><tbody>'+body+'</tbody></table></div>';
  }).join('');
  if(PUNISH_REVIEW && PUNISH_REVIEW.length){
    var items=PUNISH_REVIEW.map(function(r){
      var src=(r.sourceLinks&&r.sourceLinks.length)?' · '+esc(L(RV.source))+': '+sourceLinkHtml(r.sourceLinks):'';
      return '<li>'+cmdChip(r.use)+' <span class="tag minus">'+esc(r.dis)+'</span>'+(r.startup?' <span class="cmd">'+esc(r.startup)+'</span>':'')+' — '+esc(L(r.why))+src+'</li>';
    }).join('');
    html+='<div class="call warn"><div class="ch">'+labBadge()+' '+esc(L({en:"Candidates from TekkenDocs (v3.00) — not treated as confirmed for Ver. 3.01.01",de:"Kandidaten aus TekkenDocs (v3.00) — für Ver. 3.01.01 nicht als bestätigt behandelt"}))+'</div><ul class="sh-notes-list">'+items+'</ul></div>';
  }
  return html;
}
function comboCard(c){
  var seq=c.seq.map(function(step,i){
    var chip=cmdChip(step);
    var tor=(i===c.tIdx)?' <span class="tag plus">T!</span>':'';
    var arrow=(i<c.seq.length-1)?' <span class="co-arrow">\u2192</span> ':'';
    return chip+tor+arrow;
  }).join('');
  var chips='';
  if(c.difficulty) chips+=' <span class="tag prop" title="difficulty">'+"\u2605\u2605\u2605".slice(0,c.difficulty)+'</span>';
  if(c.damage) chips+=' <span class="tag plus">~'+c.damage+' dmg</span>';
  if(c.reviewStatus==="needsLabReview") chips+=' '+labBadge();
  return '<div class="combo-card"><div class="co-h"><span class="co-name">'+esc(L(c.name))+chips+'</span><span class="co-from">'+esc(c.from)+'</span></div><div class="co-seq">'+seq+'</div><div class="co-note">'+fmt(L(c.note))+'</div></div>';
}
function renderCombos(){
  var ORDER=[
    ["staple",{en:"Staples",de:"Staples"}],
    ["beginner",{en:"Beginner",de:"Einsteiger"}],
    ["ender",{en:"Enders",de:"Ender"}],
    ["wall",{en:"Wall",de:"Wand"}],
    ["small",{en:"Small & guaranteed",de:"Klein & garantiert"}],
    [null,{en:"More",de:"Mehr"}]
  ];
  return ORDER.map(function(o){
    var cs=COMBOS.filter(function(c){ return o[0]===null ? !c.category : c.category===o[0]; });
    if(!cs.length) return "";
    return '<div class="catlabel">'+esc(L(o[1]))+'</div>'+cs.map(comboCard).join('');
  }).join('');
}
function renderRoutine(){
  var rows=[["r1t","r1"],["r2t","r2"],["r3t","r3"],["r4t","r4"],["r5t","r5"]];
  return '<div class="routine">'+rows.map(function(r){return '<div class="rstep"><span class="rt">'+tk(r[0])+'</span><div class="rd">'+tk(r[1])+'</div></div>';}).join('')+'</div>';
}
function stanceRefLine(list){
  return (list||[]).map(function(o){
    var t=o.role||o.note;
    return moveChip(o.move)+(t?' ('+esc(L(t))+')':'');
  }).join(', ');
}
function renderStances(){
  var LBL={purpose:{en:"Purpose",de:"Zweck"},entries:{en:"Ways in",de:"Wege rein"},key:{en:"Key options",de:"Kern-Optionen"},risky:{en:"Risky",de:"Riskant"},counter:{en:"How they beat it",de:"So schlägt man es"},drill:{en:"Drill",de:"Übung"},lab:RV.lab};
  return STANCES.map(function(s){
    var rows=[];
    rows.push([LBL.purpose, esc(L(s.purpose))]);
    if(s.commonEntries&&s.commonEntries.length) rows.push([LBL.entries, stanceRefLine(s.commonEntries)]);
    rows.push([LBL.key, stanceRefLine(s.keyOptions)]);
    if(s.riskyOptions&&s.riskyOptions.length) rows.push([LBL.risky, stanceRefLine(s.riskyOptions)]);
    rows.push([LBL.counter, esc(L(s.counterplay))]);
    if(s.trainingDrills&&s.trainingDrills.length) rows.push([LBL.drill, s.trainingDrills.slice(0,2).map(function(d){return esc(L(d));}).join(' · ')]);
    if(s.manualReview&&s.manualReview.length) rows.push([LBL.lab, s.manualReview.map(function(d){return '⚠ '+esc(L(d));}).join(' ')]);
    var html=rows.map(function(r){ return '<div class="mu-line"><span class="mu-lbl">'+esc(L(r[0]))+'</span><span class="mu-txt">'+r[1]+'</span></div>'; }).join('');
    return '<div class="murow"><div class="mu-head"><span class="mu-c">'+esc(L(s.label))+'</span><span class="mu-tag">'+esc(L(s.short))+'</span></div>'+html+'</div>';
  }).join('');
}
function kcheckRow(item, chips){
  var txt=chips+' — ';
  if(item.explanation) txt+=fmt(L(item.explanation))+' ';
  txt+=fmt(L(item.answer));
  if(item.risk) txt+=' · '+fmt(L(item.risk));
  if(item.drill) txt+=' · '+fmt(L(item.drill));
  if(item.reviewStatus==="needsLabReview"){
    txt=labBadge()+' '+txt+(item.sourceNote?' <em>('+esc(L(item.sourceNote))+')</em>':'');
  }
  if(item.sourceLinks&&item.sourceLinks.length) txt+=' · '+esc(L(RV.source))+': '+sourceLinkHtml(item.sourceLinks);
  return '<div class="mu-line"><span class="mu-lbl">'+esc(L(item.title))+'</span><span class="mu-txt">'+txt+'</span></div>';
}
function renderKChecks(){
  var html='<div class="murow">'+KNOWLEDGE_CHECKS.map(function(k){
    return kcheckRow(k, k.moves.map(moveChip).join(', '));
  }).join('')+'</div>';
  if(FRAME_TRAPS.length){
    html+='<div class="catlabel">'+esc(L({en:"Frame traps",de:"Frame Traps"}))+'</div>'
      +'<div class="murow">'+FRAME_TRAPS.map(function(t){
        return kcheckRow(t, t.sequence.map(function(s){ return moveChip(s.move); }).join(' → '));
      }).join('')+'</div>';
  }
  return html;
}
function muSlug(c){ return String(c).toLowerCase().replace(/\s+/g,"-"); }
// Local character portraits (data/Image/Characters/<Character>.png), bundled + hashed by Vite.
// Keyed by the exact `character` field (spaces preserved), matching each matchup row.
var CHAR_IMG = import.meta.glob("../data/Image/Characters-web/*.jpg", { eager: true, query: "?url", import: "default" });
var MU_IMG = {}; for (var _ik in CHAR_IMG){ MU_IMG[_ik.substring(_ik.lastIndexOf("/")+1).replace(/\.[a-z0-9]+$/i,"")] = CHAR_IMG[_ik]; }
function muDerive(c){
  var fd=FD[c]||{};
  function num(s){var m=String(s||"").match(/-?\d+/);return m?parseInt(m[0]):null;}
  function fsn(s){var m=String(s||"").match(/(\d+)/);return m?parseInt(m[0]):99;}
  var rows=Object.keys(fd).map(function(k){var a=fd[k];return {cmd:k,lv:(a[0]||"").trim(),s:a[1],b:a[3],tg:a[6]||[]};});
  var clean=rows.filter(function(x){return x.lv && !/[t!]/.test(x.lv) && x.cmd.indexOf("~")<0 && x.cmd.indexOf("*")<0;});
  var duck=[];
  clean.forEach(function(x){ if(x.cmd.indexOf(",")<0) return; var lv=x.lv.split(",").map(function(s){return s.trim();}); if(lv.length<2) return; var pos=[],hasMid=false; for(var i=0;i<lv.length;i++){ if(lv[i]==="m"||lv[i]==="M") hasMid=true; if(lv[i]==="h" && i>0) pos.push(i+1); } if(pos.length) duck.push({cmd:x.cmd,pos:pos,hasMid:hasMid,s:x.s}); });
  duck.sort(function(a,b){ if(a.hasMid!==b.hasMid) return a.hasMid?-1:1; return fsn(a.s)-fsn(b.s); }); duck=duck.slice(0,6);
  var homing=clean.filter(function(x){return x.tg.indexOf("Homing")>=0;}).sort(function(a,b){return fsn(a.s)-fsn(b.s);}).slice(0,6).map(function(x){return x.cmd;});
  var launch=clean.filter(function(x){var n=num(x.b);var commas=(x.cmd.match(/,/g)||[]).length;return n!==null&&n<=-15&&n>=-30&&!/^[lL]/.test(x.lv)&&commas<=2&&x.cmd.length<=12;}).sort(function(a,b){return num(a.b)-num(b.b);}).slice(0,6);
  return {duck:duck,homing:homing,launch:launch,df2:fd["df+2"]};
}
function mkDuck(d){
  if(!d.duck.length) return L({en:"No mid-into-high strings \u2014 their highs are standalone, duck on read, then while-standing launch with [[ws2]].",de:"Keine Mid-in-High-Strings \u2014 ihre Highs stehen allein, auf Read ducken, dann mit [[ws2]] while-standing launchen."});
  var head=L({en:"Block the earlier hits, duck the marked high: ",de:"Die fr\u00fcheren Hits blocken, den markierten High ducken: "});
  var pay=L({en:" \u2192 then while-standing launch with [[ws2]] (i17) if you have the frames, else a faster ws move.",de:" \u2192 dann mit [[ws2]] (i17) while-standing launchen, wenn die Frames reichen \u2014 sonst ein schnellerer ws-Move."});
  return head+d.duck.map(function(x){ return "`"+x.cmd+"` ("+L({en:"hit ",de:"Hit "})+x.pos.join(",")+")"; }).join(", ")+"."+pay;
}
function mkStep(d){
  var lin=L({en:" Everything non-homing is linear \u2014 sidestep their commits and whiffs, then whiff-punish with [[df2]].",de:" Alles Nicht-Homing ist linear \u2014 ihre Commits und Whiffs sidesteppen, dann mit [[df2]] whiff-punishen."});
  if(!d.homing.length) return L({en:"No homing moves here \u2014 sidestep their linear commits and whiff-punish with [[df2]].",de:"Keine Homing-Moves \u2014 ihre linearen Commits sidesteppen und mit [[df2]] whiff-punishen."});
  return L({en:"Homing (tracks steps \u2014 don't step): ",de:"Homing (trackt Steps \u2014 nicht steppen): "})+d.homing.map(function(c){return "`"+c+"`";}).join(", ")+"."+lin;
}
function mkLaunch(d){
  var safe="";
  if(d.df2){ var mm=(""+d.df2[3]).match(/-?\d+/); if(mm && parseInt(mm[0])>-13) safe=L({en:" Their `df+2` ("+d.df2[3]+") is safe \u2014 don't chase it.",de:" Ihr `df+2` ("+d.df2[3]+") ist safe \u2014 nicht hinterherjagen."}); }
  if(!d.launch.length) return L({en:"Little is launch-punishable \u2014 punish \u221210 to \u221213 with jabs and [[c32]].",de:"Wenig Launchbares \u2014 \u221210 bis \u221213 mit Jabs und [[c32]] bestrafen."})+safe;
  return L({en:"On block \u2192 [[uf44]] at \u221215, [[df2]] from \u221216: ",de:"Auf Block \u2192 [[uf44]] bei \u221215, [[df2]] ab \u221216: "})+d.launch.map(function(x){return "`"+x.cmd+"` ("+x.b+")";}).join(", ")+"."+safe;
}
function muV2List(arr, char){ return arr.map(function(t){ return fmtMU(L(t), char); }).join('<br>'); }
function renderMuCard(m){
  var d=muDerive(m.c);
  var rows=[["hurt", tk("mu_hurt"), fmtMU(L(m.hurt),m.c)]];
  // Authored dossier text (previously dormant): rendered for every matchup.
  if(m.duck) rows.push(["duck", L({en:"What to duck",de:"Was du ducken sollst"}), fmtMU(L(m.duck),m.c)]);
  if(m.punish) rows.push(["punish", L({en:"What to punish",de:"Was du bestrafen sollst"}), fmtMU(L(m.punish),m.c)]);
  rows.push(["plan", tk("mu_plan"), fmtMU(L(m.plan),m.c)]);
  // Optional v2 blocks (only when authored).
  if(m.opponentGameplan) rows.push(["plan", L({en:"Their gameplan",de:"Sein Gameplan"}), fmtMU(L(m.opponentGameplan),m.c)]);
  var V2=[["keyThreats",{en:"Key threats",de:"Kern-Gefahren"}],["knowledgeChecks",{en:"Knowledge checks",de:"Knowledge-Checks"}],["antiKnowledgeChecks",{en:"Anti-knowledge checks",de:"Anti-Knowledge-Checks"}],["stanceInteraction",{en:"Stance interaction",de:"Stance-Interaktion"}],["heatThreats",{en:"Heat threats",de:"Heat-Gefahren"}],["rageThreats",{en:"Rage threats",de:"Rage-Gefahren"}],["alisaAnswers",{en:"Alisa's answers",de:"Alisas Antworten"}],["interruptWindows",{en:"Interrupt windows",de:"Interrupt-Fenster"}],["drills",{en:"Drills",de:"Übungen"}]];
  V2.forEach(function(f){ var v=m[f[0]]; if(v&&v.length) rows.push(["plan", L(f[1]), muV2List(v,m.c)]); });
  if(m.punishThese&&m.punishThese.length){
    rows.push(["punish", L({en:"Punish these",de:"Diese bestrafen"}), m.punishThese.map(function(p){
      var h=p.move?moveChip(p.move):(p.notation?'<span class="cmd opp" data-opp="'+esc(m.c)+'|'+esc(oppNorm(p.notation))+'">'+esc(p.notation)+'</span>':'');
      if(p.onBlock) h+=' <span class="tag minus">'+esc(p.onBlock)+'</span>';
      if(p["with"]) h+=' → '+cmdChip(p["with"]);
      h+=' — '+fmtMU(L(p.note),m.c);
      if(p.reviewStatus==="needsLabReview") h=labBadge()+' '+h;
      return h;
    }).join('<br>')]);
  }
  if(m.duckTargets&&m.duckTargets.length){
    rows.push(["duck", L({en:"Duck these",de:"Diese ducken"}), m.duckTargets.map(function(t){
      var h='<span class="cmd opp" data-opp="'+esc(m.c)+'|'+esc(oppNorm(t.string))+'">'+esc(t.string)+'</span>';
      if(t.hit) h+=' ('+esc(t.hit)+')';
      if(t.punish) h+=' → '+cmdChip(t.punish);
      h+=' — '+fmtMU(L(t.note),m.c);
      if(t.reviewStatus==="needsLabReview") h=labBadge()+' '+h;
      return h;
    }).join('<br>')]);
  }
  if(m.stepDirection){
    var sd='<b>'+esc(m.stepDirection.direction)+'</b> — '+fmtMU(L(m.stepDirection.note),m.c);
    if(m.stepDirection.reviewStatus==="needsLabReview") sd=labBadge()+' '+sd;
    rows.push(["step", L({en:"Step direction",de:"Step-Richtung"}), sd]);
  }
  // FD-derived baseline (muDerive) — kept for every matchup, clearly labelled.
  rows.push(["plan", L({en:"Auto-derived basics",de:"Automatisch abgeleitete Basics"}), '<em>'+esc(L({en:"generated from current frame data",de:"aus aktuellen Frame-Daten generiert"}))+'</em>']);
  rows.push(["duck", tk("mu_duck"), fmtMU(mkDuck(d),m.c)]);
  rows.push(["step", tk("mu_step"), fmtMU(mkStep(d),m.c)]);
  rows.push(["launch", tk("mu_launch"), fmtMU(mkLaunch(d),m.c)]);
  if(m.sourceLinks&&m.sourceLinks.length){
    rows.push(["plan", L({en:"Sources",de:"Quellen"}), sourceLinkHtml(m.sourceLinks)]);
  }
  var html=rows.map(function(r){ return r[2]?'<div class="mu-line mu-'+r[0]+'"><span class="mu-lbl">'+esc(r[1])+'</span><span class="mu-txt">'+r[2]+'</span></div>':''; }).join("");
  var badge=m.lastReviewed?' '+reviewedBadge(m.lastReviewed):'';
  return '<div class="murow"><div class="mu-head"><span class="mu-c">'+esc(m.c)+'</span>'+badge+(m.tag?'<span class="mu-tag">'+fmtMU(L(m.tag),m.c)+'</span>':'')+'</div>'+html+'</div>';
}
var DLC_S1=["Eddy","Lidia","Heihachi","Clive"];
var DLC_S2=["Anna","Fahkumram","Armor King","Miary Zo"];
var DLC_S3=["Kunimitsu"];
function muPickCard(c, cur){ var sel=(c===cur)?" sel":""; var img=MU_IMG[c]||("https://tekkendocs.com/t8/avatars/"+muSlug(c)+"-brand-512.png"); return '<button class="mu-pick'+sel+'" data-mu="'+esc(c)+'"><span class="mu-pick-img"><img src="'+img+'" alt="'+esc(c)+'" loading="lazy" onerror="this.style.display=\'none\'; this.parentElement.classList.add(\'noimg\'); this.parentElement.setAttribute(\'data-i\',\''+esc(c.charAt(0))+'\');"></span><span class="mu-pick-name">'+esc(c)+'</span></button>'; }
function renderMatchups(){
  var leg='<div class="mu-legend"><span><i class="lg-mine"></i>'+esc(L({en:"Alisa's moves \u2014 tap for frames",de:"Alisas Moves \u2014 tippen f\u00fcr Frames"}))+'</span><span><i class="lg-opp"></i>'+esc(L({en:"opponent's moves \u2014 tap for frames, clip & data",de:"Gegner-Moves \u2014 tippen f\u00fcr Frames, Clip & Daten"}))+'</span></div>';
  var have={}; MU.forEach(function(m){have[m.c]=true;});
  var dlc=DLC_S1.concat(DLC_S2,DLC_S3);
  var base=MU.map(function(m){return m.c;}).filter(function(c){return dlc.indexOf(c)<0;}).sort();
  var groups=[{l:{en:"Base roster",de:"Standard"},chars:base},{l:{en:"Season 1",de:"Season 1"},chars:DLC_S1},{l:{en:"Season 2",de:"Season 2"},chars:DLC_S2},{l:{en:"Season 3",de:"Season 3"},chars:DLC_S3}];
  var cur = state.muChar || base[0];
  var order=DLC_S1.concat(DLC_S2,DLC_S3);
  var ordered=base.concat(order).filter(function(c){return have[c];});
  var picker='<div class="mu-picker mu-modal-grid">'+ordered.map(function(c){return muPickCard(c,cur);}).join("")+'</div>';
  var selM = MU.filter(function(m){return m.c===cur;})[0] || MU[0];
  var curImg=MU_IMG[cur]||("https://tekkendocs.com/t8/avatars/"+muSlug(cur)+"-brand-512.png");
  var trigger='<button class="mu-choose" id="mu-choose" aria-haspopup="dialog">'
    +'<span class="mu-choose-fig"><span class="mu-choose-img">'
    +'<img src="'+curImg+'" alt="" loading="lazy" onerror="this.style.display=\'none\'; this.parentElement.classList.add(\'noimg\'); this.parentElement.setAttribute(\'data-i\',\''+esc(cur.charAt(0))+'\');">'
    +'<span class="mu-choose-cta">'+esc(L({en:"⇄ Change",de:"⇄ Wechseln"}))+'</span>'
    +'</span><span class="mu-choose-name">'+esc(cur)+'</span></span></button>';
  var modal='<div class="overlay" id="mu-modal" role="dialog" aria-modal="true" aria-label="'+esc(L({en:"Choose matchup",de:"Matchup wählen"}))+'">'
    +'<div class="sheet mu-sheet">'
    +'<div class="sh-top"><div>'
    +'<div class="mu-sheet-title">'+esc(L({en:"Choose matchup",de:"Matchup wählen"}))+'</div>'
    +'<div class="sh-lev">'+esc(L({en:"41 characters · type to filter · Enter picks first · Esc closes",de:"41 Charaktere · tippen zum Filtern · Enter wählt den ersten · Esc schließt"}))+'</div>'
    +'</div><button class="sh-close" id="mu-modal-close" aria-label="'+esc(L({en:"Close",de:"Schließen"}))+'">✕</button></div>'
    +'<div class="ml-searchwrap" style="margin:12px 0 0"><input class="ml-search" id="mu-modal-search" type="search" placeholder="'+esc(L({en:"Type a character…",de:"Charakter tippen…"}))+'" autocomplete="off"></div>'
    +picker
    +'</div></div>';
  return trigger+leg+'<div class="mu">'+(selM?renderMuCard(selM):"")+'</div>'+modal;
}
function openMuModal(){ var m=document.getElementById('mu-modal'); if(!m) return; m.classList.add('open'); document.body.style.overflow='hidden'; var s=document.getElementById('mu-modal-search'); if(s){ s.value=''; filterMuModal(); } if(s && !(window.matchMedia && window.matchMedia('(max-width:560px)').matches)){ setTimeout(function(){ s.focus(); },60); } }
function closeMuModal(){ var m=document.getElementById('mu-modal'); if(!m) return; m.classList.remove('open'); document.body.style.overflow=''; var t=document.getElementById('mu-choose'); if(t) t.focus(); }
function filterMuModal(){ var m=document.getElementById('mu-modal'); if(!m) return; var s=document.getElementById('mu-modal-search'); var q=(s?s.value:'').trim().toLowerCase(); m.querySelectorAll('.mu-pick').forEach(function(b){ b.hidden = b.getAttribute('data-mu').toLowerCase().indexOf(q)===-1; }); }
function muModalKeys(e){ var m=document.getElementById('mu-modal'); if(!m||!m.classList.contains('open')) return; if(e.key==='Escape'){ closeMuModal(); return; } if(e.key==='Enter' && e.target && e.target.id==='mu-modal-search'){ var first=m.querySelector('.mu-pick:not([hidden])'); if(first){ e.preventDefault(); first.click(); } return; } if(e.key==='Tab'){ var sheet=m.querySelector('.sheet'); if(!sheet) return; var f=sheet.querySelectorAll('button:not([hidden]), input'); if(!f.length) return; var first=f[0], last=f[f.length-1]; if(e.shiftKey && document.activeElement===first){ last.focus(); e.preventDefault(); } else if(!e.shiftKey && document.activeElement===last){ first.focus(); e.preventDefault(); } } }
function trKeyHtml(input,label,combo){ var code=state.binds[input]; var kl=code?keyLabel(code):'\u2014'; return '<div class="tkey'+(combo?' combo':'')+'" data-input="'+input+'"><span class="tk-note">'+label+'</span><span class="tk-key">'+kl+'</span></div>'; }
function comboTile(c){ return '<div class="tkey combo" data-combo="'+c.id+'"><span class="cb-del" data-del="'+c.id+'">\u2715</span><span class="tk-note">'+esc(c.btns.join('+'))+'</span><span class="tk-key">'+(c.code?keyLabel(c.code):'\u2014')+'</span></div>'; }
function builderHtml(){
  return '<div class="cb-lbl">'+esc(L({en:"New combo button \u2014 pick 2+ attacks, then Create:",de:"Neuer Combo-Button \u2014 2+ Attacks w\u00e4hlen, dann Erstellen:"}))+'</div>'
    +'<div class="cb-pick">'+["1","2","3","4"].map(function(b){return '<button class="cb-tog" data-pick="'+b+'">'+b+'</button>';}).join('')+'</div>'
    +'<div class="cb-actions"><button class="cb-make" data-make="1">'+esc(L({en:"Create",de:"Erstellen"}))+'</button><button class="cb-cancel" data-cancel="1">'+esc(L({en:"Cancel",de:"Abbrechen"}))+'</button></div>'
    +'<div class="cb-note">'+esc(L({en:"After Create, click the new tile to assign a key.",de:"Nach Erstellen die neue Kachel anklicken, um eine Taste zuzuweisen."}))+'</div>';
}
function renderTrainer(){
  return '<div class="trainer" id="trainer">'
    +'<div class="tr-row">'
    +'<div class="tr-col"><span class="tr-cap">'+tk("tr_dir")+'</span><div class="cross">'
    +'<div class="tkey empty"></div>'+trKeyHtml("u","\u2191")+'<div class="tkey empty"></div>'
    +trKeyHtml("b","\u2190")+trKeyHtml("d","\u2193")+trKeyHtml("f","\u2192")+'</div></div>'
    +'<div class="tr-col"><span class="tr-cap">'+tk("tr_btn")+'</span><div class="btnpad">'
    +trKeyHtml("1","1")+trKeyHtml("2","2")+trKeyHtml("3","3")+trKeyHtml("4","4")+'</div></div>'
    +'<div class="tr-col"><span class="tr-cap">'+esc(L({en:"Combo buttons",de:"Combo-Buttons"}))+'</span><div class="combopad" id="comboPad">'
    + state.combos.map(comboTile).join('')
    + '<div class="tkey addtile" data-add="1"><span class="tk-note">+</span><span class="tk-key">'+esc(L({en:"add",de:"neu"}))+'</span></div>'
    + '</div><div class="cbuild" id="comboBuilder" hidden>'+builderHtml()+'</div></div>'
    +'</div>'
    +'<div class="tr-live"><div class="tr-now" id="trNow"><span class="ph">'+tk("tr_now")+'</span></div>'
    +'<div class="tr-histwrap"><div class="tr-hist" id="trHist"></div></div>'
    +'<div class="tr-kbd" id="trKbd"></div></div>'
    +'<div class="tr-actions"><button class="tbtn" id="trArm">'+tk("tr_arm")+'</button><button class="tbtn" id="trClear">'+tk("tr_clear")+'</button><button class="tbtn" id="trReset">'+tk("tr_reset")+'</button></div>'
    +'<div class="tr-hint">'+tk("tr_hint")+'</div>'
    +'</div>';
}
function callIcon(v){ return v==="key"?"\u25C6":v==="warn"?"\u26A0":"\u25B8"; }
function renderBlock(b){
  switch(b.t){
    case "lead": return '<p class="lead">'+fmt(L(b.x))+'</p>';
    case "h3": return '<h3>'+fmt(L(b.x))+'</h3>';
    case "p": return '<p>'+fmt(L(b.x))+'</p>';
    case "call": return '<div class="call '+b.v+'"><div class="ch">'+callIcon(b.v)+' '+esc(L(b.h))+'</div><p>'+fmt(L(b.x))+'</p></div>';
    case "loop": return renderLoop();
    case "legend": return renderLegend();
    case "notation": return renderNotation();
    case "trainer": return renderTrainer();
    case "favpanel": return renderFavPanel();
    case "movelist": return renderMovelist();
    case "punishtable": return renderPunish();
    case "combos": return renderCombos();
    case "routine": return renderRoutine();
    case "matchups": return renderMatchups();
    case "stances": return renderStances();
    case "kchecks": return renderKChecks();
    default: return "";
  }
}

/* ===== controls + nav ===== */
function pill(grp,val,label,on){ return '<button class="pill'+(on?' on':'')+'" data-grp="'+grp+'" data-val="'+val+'">'+label+'</button>'; }
function buildControls(){
  var lg=document.getElementById('langGroup');
  lg.innerHTML='<span class="clabel">'+tk("c_lang")+'</span>'+pill('lang','en',IC.globe+'EN',state.lang==='en')+pill('lang','de','DE',state.lang==='de');
  var lv=document.getElementById('levelGroup');
  lv.innerHTML='<span class="clabel">'+tk("c_level")+'</span>'+pill('level','all',tk("lvl_all"),state.level==='all')+pill('level','b',IC.bars1+tk("lvl_b"),state.level==='b')+pill('level','i',IC.bars2+tk("lvl_i"),state.level==='i')+pill('level','a',IC.bars3+tk("lvl_a"),state.level==='a');
  document.querySelectorAll('.pill').forEach(function(p){ p.addEventListener('click',function(){ state[p.getAttribute('data-grp')]=p.getAttribute('data-val'); render(); }); });
}
function wireSidebar(){
  document.querySelectorAll('.sidelink').forEach(function(a){ a.addEventListener('click',function(e){ e.preventDefault(); document.body.classList.remove('nav-open'); var el=document.getElementById(a.getAttribute('data-sec')); if(el){ var y=el.getBoundingClientRect().top+window.pageYOffset-80; window.scrollTo({top:y,behavior:'smooth'}); } }); });
}
var sectObserver=null;
function observeSections(){
  var links={}; document.querySelectorAll('.sidelink').forEach(function(a){ links[a.getAttribute('data-sec')]=a; });
  if(sectObserver) sectObserver.disconnect();
  if(!('IntersectionObserver' in window)) return;
  sectObserver=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ Object.keys(links).forEach(function(k){links[k].classList.remove('active');}); var a=links[e.target.id]; if(a){ a.classList.add('active'); a.scrollIntoView({block:'nearest',inline:'nearest'}); } } }); }, {rootMargin:'-45% 0px -50% 0px'});
  SECTIONS.forEach(function(s){ var el=document.getElementById(s.id); if(el) sectObserver.observe(el); });
}
function render(){
  document.documentElement.lang=state.lang;
  document.querySelectorAll('[data-i]').forEach(function(el){ var k=el.getAttribute('data-i'); if(T[k]) el.innerHTML=L(T[k]); });
  buildControls();
  var nav='', body='';
  SECTIONS.forEach(function(sec){
    if(!lvVisible(sec.lv)) return;
    nav += '<a class="sidelink" data-sec="'+sec.id+'"><span class="snum">'+sec.num+'</span><span class="stxt">'+esc(L(sec.title))+'</span></a>';
    var badge='<span class="lvbadge '+lvClass(sec.lv)+'">'+lvText(sec.lv)+'</span>';
    body += '<section class="module" id="'+sec.id+'"><div class="mhead"><span class="mnum">'+sec.num+'</span><h2>'+esc(L(sec.title))+'</h2>'+badge+'</div>'+sec.blocks.map(renderBlock).join('')+'</section>';
  });
  document.getElementById('sidenav').innerHTML=nav;
  document.getElementById('content').innerHTML=body;
  wireSidebar();
  observeSections();
  setupTrainer();
  setupMovelistSearch();
}

/* ===== input trainer: live key detection + custom binding ===== */
var BTNS=["1","2","3","4"], DIRS=["u","d","b","f"];
var TR={armed:false, keys:{}, btn:{}, dir:{}, hist:[], binding:null,
        lastDir:null, dirTimer:null, btnBuf:{}, btnTimer:null, btnDir:"",
        kbdChain:0, kbdAt:0, kbdTimer:null};

function resolveCode(code){
  for(var k in state.binds){ if(state.binds[k] && state.binds[k]===code) return {type:'k',id:k}; }
  for(var i=0;i<state.combos.length;i++){ if(state.combos[i].code===code) return {type:'c',id:state.combos[i].id,btns:state.combos[i].btns}; }
  return null;
}
function computeDir(){
  var H=TR.dir;
  var v=(H.u&&H.d)?0:(H.u?1:(H.d?-1:0));
  var h=(H.b&&H.f)?0:(H.f?1:(H.b?-1:0));
  if(v===1)  return h===1?"uf":h===-1?"ub":"u";
  if(v===-1) return h===1?"df":h===-1?"db":"d";
  return h===1?"f":h===-1?"b":"";
}
function heldBtns(){ return BTNS.filter(function(b){return TR.btn[b];}); }
function updateNow(){
  var n=document.getElementById('trNow'); if(!n) return;
  if(!TR.armed){ n.innerHTML='<span class="ph">'+tk('tr_now')+'</span>'; return; }
  var dir=computeDir(), bs=heldBtns();
  if(!dir && !bs.length){ n.innerHTML='<span class="ntl">n</span>'; return; }
  n.textContent = bs.length ? ((dir?dir+'+':'')+bs.join('+')) : dir;
}
function litUpdate(){
  document.querySelectorAll('#trainer .tkey[data-input]').forEach(function(k){
    var inp=k.getAttribute('data-input');
    k.classList.toggle('lit', !!TR.dir[inp]||!!TR.btn[inp]);
  });
  document.querySelectorAll('#trainer .tkey[data-combo]').forEach(function(k){
    k.classList.toggle('lit', !!TR.keys['c:'+k.getAttribute('data-combo')]);
  });
}
function repaintHist(){
  var h=document.getElementById('trHist'); if(!h) return;
  h.innerHTML=TR.hist.map(function(o){return '<span class="htok'+(o.d?' dir':'')+'">'+esc(o.t)+'</span>';}).join('');
}
function histDir(tok){ TR.hist.push({t:tok,d:true}); if(TR.hist.length>16) TR.hist.shift(); repaintHist(); }
function histBtn(tok,dir){
  var last=TR.hist[TR.hist.length-1], dtok=dir||"n";
  if(last && last.d && last.t===dtok){ last.t=tok; last.d=false; }
  else { TR.hist.push({t:tok,d:false}); if(TR.hist.length>16) TR.hist.shift(); }
  repaintHist();
}
function onDirChange(){ clearTimeout(TR.dirTimer); TR.dirTimer=setTimeout(commitDir,30); updateNow(); litUpdate(); }
function commitDir(){
  var d=computeDir();
  var heldCount=(TR.dir.u?1:0)+(TR.dir.d?1:0)+(TR.dir.b?1:0)+(TR.dir.f?1:0);
  var tok;
  if(d){ tok=d; }
  else if(heldCount>=2){ tok="n"; }   /* true neutral: opposing dirs held (b+f, u+d) */
  else { TR.lastDir=""; return; }      /* just released to center -> show nothing */
  if(tok===TR.lastDir) return;
  TR.lastDir=tok; histDir(tok); kbdCheck(tok);
}
function kbdCheck(tok){
  var now=Date.now();
  if(tok==="b"){
    if(now-TR.kbdAt<500) TR.kbdChain++; else TR.kbdChain=1;
    TR.kbdAt=now; showKbd();
    clearTimeout(TR.kbdTimer); TR.kbdTimer=setTimeout(function(){ TR.kbdChain=0; showKbd(); },1200);
  }
}
function showKbd(){
  var el=document.getElementById('trKbd'); if(!el) return;
  if(TR.kbdChain>=2){ el.className='tr-kbd ok'; el.textContent='\u2713 '+L({en:"clean backdash rhythm",de:"sauberer Backdash-Rhythmus"})+' \u00d7'+TR.kbdChain; }
  else { el.className='tr-kbd'; el.textContent=''; }
}
function onBtnDown(parts){
  if(!Object.keys(TR.btnBuf).length) TR.btnDir=computeDir();
  parts.forEach(function(p){ TR.btnBuf[p]=true; });
  clearTimeout(TR.btnTimer); TR.btnTimer=setTimeout(commitBtn,45);
}
function commitBtn(){
  var b=Object.keys(TR.btnBuf).sort(); if(!b.length) return;
  var tok=(TR.btnDir?TR.btnDir+'+':'')+b.join('+');
  TR.btnBuf={}; histBtn(tok,TR.btnDir);
}
function onKeyDown(e){
  if(TR.binding){
    var tb=TR.binding; TR.binding=null;
    for(var k in state.binds){ if(state.binds[k]===e.code) state.binds[k]=null; }
    state.combos.forEach(function(c){ if(c.code===e.code) c.code=null; });
    if(tb.type==='k'){ state.binds[tb.id]=e.code; }
    else { for(var i=0;i<state.combos.length;i++){ if(state.combos[i].id===tb.id){ state.combos[i].code=e.code; break; } } }
    save(); e.preventDefault(); render(); return;
  }
  if(!TR.armed) return;
  var r=resolveCode(e.code); if(!r) return;
  e.preventDefault();
  if(r.type==='k'){
    if(TR.keys[r.id]) return; TR.keys[r.id]=true;
    if(r.id==="1"||r.id==="2"||r.id==="3"||r.id==="4"){ TR.btn[r.id]=true; onBtnDown([r.id]); litUpdate(); updateNow(); }
    else { TR.dir[r.id]=true; onDirChange(); }
  } else {
    var kk='c:'+r.id; if(TR.keys[kk]) return; TR.keys[kk]=true;
    r.btns.forEach(function(p){ TR.btn[p]=true; });
    onBtnDown(r.btns); litUpdate(); updateNow();
  }
}
function onKeyUp(e){
  if(!TR.armed) return;
  var r=resolveCode(e.code); if(!r) return;
  e.preventDefault();
  if(r.type==='k'){
    delete TR.keys[r.id];
    if(r.id==="1"||r.id==="2"||r.id==="3"||r.id==="4"){ delete TR.btn[r.id]; litUpdate(); updateNow(); }
    else { delete TR.dir[r.id]; onDirChange(); }
  } else {
    delete TR.keys['c:'+r.id];
    r.btns.forEach(function(p){ delete TR.btn[p]; });
    litUpdate(); updateNow();
  }
}
function clearBindingHL(){
  document.querySelectorAll('#trainer .tkey.binding').forEach(function(x){
    x.classList.remove('binding');
    var xc=x.querySelector('.tk-key'); if(!xc) return;
    if(x.hasAttribute('data-input')){ var xi=x.getAttribute('data-input'); xc.textContent=state.binds[xi]?keyLabel(state.binds[xi]):'\u2014'; }
    else if(x.hasAttribute('data-combo')){ var id=x.getAttribute('data-combo'), c=null; for(var i=0;i<state.combos.length;i++){ if(state.combos[i].id===id){c=state.combos[i];break;} } xc.textContent=(c&&c.code)?keyLabel(c.code):'\u2014'; }
  });
}
function setupTrainer(){
  var arm=document.getElementById('trArm'); if(!arm) return;
  clearTimeout(TR.btnTimer); clearTimeout(TR.dirTimer); clearTimeout(TR.kbdTimer);
  TR.btnBuf={}; TR.btn={}; TR.dir={}; TR.keys={}; TR.lastDir=null; TR.kbdChain=0; TR.binding=null;
  if(TR.armed){ arm.classList.add('armed'); arm.textContent=tk('tr_disarm'); }
  else { arm.classList.remove('armed'); arm.textContent=tk('tr_arm'); }
  repaintHist(); updateNow(); litUpdate(); showKbd();
  arm.onclick=function(){
    TR.armed=!TR.armed;
    if(TR.armed){ arm.classList.add('armed'); arm.textContent=tk('tr_disarm'); }
    else { arm.classList.remove('armed'); arm.textContent=tk('tr_arm'); TR.btn={}; TR.dir={}; TR.keys={}; TR.lastDir=null; TR.kbdChain=0; showKbd(); }
    litUpdate(); updateNow();
  };
  var clr=document.getElementById('trClear'); if(clr) clr.onclick=function(){ TR.hist=[]; TR.lastDir=null; repaintHist(); };
  var rst=document.getElementById('trReset'); if(rst) rst.onclick=function(){ state.binds=Object.assign({},DEFAULT_BINDS); state.combos=[]; save(); render(); };
  document.querySelectorAll('#trainer .tkey[data-input]').forEach(function(k){
    k.onclick=function(){ clearBindingHL(); TR.binding={type:'k',id:k.getAttribute('data-input')}; k.classList.add('binding'); var lab=k.querySelector('.tk-key'); if(lab) lab.textContent=tk('tr_press'); };
  });
  document.querySelectorAll('#trainer .tkey[data-combo]').forEach(function(k){
    k.onclick=function(){ clearBindingHL(); TR.binding={type:'c',id:k.getAttribute('data-combo')}; k.classList.add('binding'); var lab=k.querySelector('.tk-key'); if(lab) lab.textContent=tk('tr_press'); };
  });
  document.querySelectorAll('#trainer [data-del]').forEach(function(x){
    x.onclick=function(e){ e.stopPropagation(); var id=x.getAttribute('data-del'); state.combos=state.combos.filter(function(c){return c.id!==id;}); save(); render(); };
  });
  var add=document.querySelector('#trainer [data-add]');
  if(add) add.onclick=function(){ var b=document.getElementById('comboBuilder'); if(b) b.hidden=!b.hidden; };
  document.querySelectorAll('#trainer .cb-tog').forEach(function(btn){ btn.onclick=function(){ btn.classList.toggle('on'); }; });
  var mk=document.querySelector('#trainer [data-make]');
  if(mk) mk.onclick=function(){
    var picked=[]; document.querySelectorAll('#trainer .cb-tog.on').forEach(function(x){ picked.push(x.getAttribute('data-pick')); });
    if(picked.length<2) return;
    picked.sort();
    state.combos.push({id:'c'+Date.now().toString(36)+Math.floor(Math.random()*999).toString(36), btns:picked, code:null});
    save(); render();
  };
  var cn=document.querySelector('#trainer [data-cancel]');
  if(cn) cn.onclick=function(){ var b=document.getElementById('comboBuilder'); if(b) b.hidden=true; document.querySelectorAll('#trainer .cb-tog.on').forEach(function(x){ x.classList.remove('on'); }); };
}

/* ===== global wiring: clicks, sheet close, progress ===== */
function onDocClick(e){
  if(e.target.closest('#sheet')) return;
  if(e.target.closest('#mu-choose')){ openMuModal(); return; }
  if(e.target.closest('#mu-modal-close')){ closeMuModal(); return; }
  if(e.target.id==='mu-modal'){ closeMuModal(); return; }
  var srt=e.target.closest('[data-sort]');
  if(srt){ state.sort=srt.getAttribute('data-sort'); save(); render(); return; }
  var fav=e.target.closest('[data-fav]');
  if(fav){ toggleFav(fav.getAttribute('data-fav')); return; }
  var opp=e.target.closest('[data-opp]');
  if(opp){ var parts=opp.getAttribute('data-opp').split('|'); openOppSheet(parts[0], parts.slice(1).join('|')); return; }
  var mup=e.target.closest('[data-mu]');
  if(mup){ state.muChar=mup.getAttribute('data-mu'); document.body.style.overflow=''; save(); render(); var lg=document.querySelector('#matchups .mu-legend'); if(lg){ var y=lg.getBoundingClientRect().top+window.scrollY-78; window.scrollTo({top:y,behavior:'smooth'}); } return; }
  var open=e.target.closest('[data-open]');
  if(open) openSheet(open.getAttribute('data-open'));
}
function updateProgress(){
  var h=document.documentElement;
  var sc=h.scrollTop||document.body.scrollTop;
  var max=h.scrollHeight-h.clientHeight;
  var el=document.getElementById('progress'); if(el) el.style.width=(max>0?(sc/max*100):0)+'%';
}

/* ===== init ===== */
load();
render();
(function(){ var nt=document.getElementById('navToggle'), nb=document.getElementById('navBackdrop'); if(nt) nt.addEventListener('click', function(){ var o=document.body.classList.toggle('nav-open'); nt.setAttribute('aria-expanded', o?'true':'false'); }); if(nb) nb.addEventListener('click', function(){ document.body.classList.remove('nav-open'); if(nt) nt.setAttribute('aria-expanded','false'); }); })();
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeSheet(); document.body.classList.remove('nav-open'); } });
document.addEventListener('click', onDocClick);
document.addEventListener('input', function(e){ if(e.target && e.target.id==='mu-modal-search') filterMuModal(); });
document.addEventListener('keydown', muModalKeys);
(function(){ var ov=document.getElementById('overlay'); if(ov) ov.addEventListener('click', function(e){ if(e.target===ov) closeSheet(); }); })();
window.addEventListener('scroll', updateProgress, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();
