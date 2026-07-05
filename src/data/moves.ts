// @ts-nocheck
var MOVES = {
  jab:{n:"1", cat:"poke", lv:0, lev:{en:"High",de:"High"}, s:"i10", b:"+1", h:"+8", p:["i10"],
    x:{en:"Your fastest move. +1 on block keeps you safe, +8 on hit gives you the turn. The base of your pressure and your i10 punisher.",
       de:"Dein schnellster Move. +1 auf Block hält dich sicher, +8 auf Hit gibt dir den Zug. Basis deines Drucks und dein i10-Punisher."}},
  f2:{n:"f+2", cat:"poke", lv:1, lev:{en:"Mid",de:"Mid"}, s:"i17", b:"-4", h:"+7", p:["Whiff setup","DES cancel"],
    x:{en:"Close-range mid. Only -4 on block — that is a whiff setup: sidestep their answer, or cancel to chainsaws with 1+2.",
       de:"Close-Range-Mid. Nur -4 auf Block — ein Whiff-Setup: ihre Antwort sidesteppen oder mit 1+2 in die Kettensägen canceln."}},
  f21:{n:"f+2,1", cat:"poke", lv:1, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i17", b:"-12", h:"+14g", p:["Heat engager"],
    x:{en:"Mid keepout and heat engager. -12 on block so use with purpose; as a mid it catches the ducking that beats uf+2.",
       de:"Mid-Keepout und Heat Engager. -12 auf Block, also gezielt setzen; als Mid fängt es das Ducken, das uf+2 schlägt."}},
  df1:{n:"df+1", cat:"poke", lv:0, lev:{en:"Mid",de:"Mid"}, s:"i13", b:"-6", h:"+5", ch:"+8", p:["Mid check"],
    x:{en:"Your reliable mid check. -6 on block, +5 on hit. The button you press when you just need a safe, fast poke.",
       de:"Dein zuverlässiger Mid-Check. -6 auf Block, +5 auf Hit. Der Button, wenn du einfach einen sicheren, schnellen Poke brauchst."}},
  df4:{n:"df+4", cat:"poke", lv:1, lev:{en:"Mid",de:"Mid"}, s:"i12", b:"-7", h:"+4", p:["Fastest mid","Step-catch"],
    x:{en:"Fastest mid (i12). +4 on hit catches sidesteps; on block it pushes out, so backdash and whiff-punish.",
       de:"Schnellstes Mid (i12). +4 auf Hit fängt Sidesteps; auf Block schiebt es weg, also backdash und whiff-punishen."}},
  uf2:{n:"uf+2", cat:"poke", lv:1, lev:{en:"High",de:"High"}, s:"i16", b:"-2", h:"+20a", p:["Homing","Heat engager","Launch"],
    x:{en:"Homing keepout high and heat engager. Only -2 on block, launches on hit, tracks steps. Beats sidewalk; loses to ducking.",
       de:"Homing-Keepout-High und Heat Engager. Nur -2 auf Block, launcht auf Hit, trackt Steps. Schlägt Sidewalk; verliert gegen Ducken."}},
  b1:{n:"b+1", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i15", b:"-5", h:"+8", p:["High crush 12~"],
    x:{en:"High-crushing mid: ducks under highs from frame 12 while hitting mid. Great vs jab pressure and Mishima electrics.",
       de:"High-crushendes Mid: duckt ab Frame 12 unter Highs und trifft trotzdem mid. Top gegen Jab-Druck und Mishima-Electrics."}},
  c32:{n:"3,2", cat:"launch", lv:1, lev:{en:"Mid,High",de:"Mid,High"}, s:"i13", b:"-2", h:"+20a", p:["Whiff punish","Homing","Heat engager"],
    x:{en:"Your main whiff-punisher: i13, long, homing, heat engager. -2 on block. Heat-dash to launch into a full combo.",
       de:"Dein Haupt-Whiff-Punisher: i13, lang, homing, Heat Engager. -2 auf Block. Per Heat-Dash in einen vollen Combo launchen."}},
  df2:{n:"df+2", cat:"launch", lv:1, lev:{en:"Mid",de:"Mid"}, s:"i16", b:"-9", h:"+32a", p:["Launcher","Whiff punish"],
    x:{en:"Whiff-punish launcher: full combo on a standing hit, only -9 on block. Does not launch crouchers except on counterhit.",
       de:"Whiff-Punish-Launcher: voller Combo bei stehendem Hit, nur -9 auf Block. Launcht Crouchende nur bei Counterhit."}},
  b44:{n:"b+4,4", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i15", b:"-37", h:"+9a", p:["Tornado","Whiff punish"],
    x:{en:"Long-range whiff-punisher into a Tornado mini-combo. -37 on block — only use on a whiff or inside a combo, never raw.",
       de:"Long-Range-Whiff-Punisher in einen Tornado-Mini-Combo. -37 auf Block — nur auf Whiff oder im Combo, nie raw."}},
  uf44:{n:"uf+4,4", cat:"launch", lv:1, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i15", b:"-13", h:"+45a", p:["Launch punisher"],
    x:{en:"Your i15 launch punisher — works standing and from crouch. This is the move you use to punish anything -15 on block.",
       de:"Dein i15-Launch-Punisher — stehend und aus der Hocke. Damit bestrafst du alles, was auf Block -15 ist."}},
  ws2:{n:"ws2", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i17", b:"-13", h:"+33a", p:["While standing","Tornado","Launch"],
    x:{en:"While-standing launcher (Tornado). Your reward for ducking a high or blocking a -17 move from crouch.",
       de:"While-Standing-Launcher (Tornado). Deine Belohnung fürs Ducken eines Highs oder Blocken eines -17-Moves aus der Hocke."}},
  d4:{n:"d+4", cat:"low", lv:1, lev:{en:"Low",de:"Low"}, s:"i17", b:"-12", h:"-1", ch:"+8g", p:["Poke"],
    x:{en:"Quick low poke. -1 on hit keeps you close for the whiff game; -12 on block. A chip low to mix with f+2.",
       de:"Schneller Low-Poke. -1 auf Hit hält dich nah fürs Whiff-Game; -12 auf Block. Ein Chip-Low zum Mischen mit f+2."}},
  d3:{n:"d+3", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i23", b:"-10", h:"+8c", ch:"+32a", p:["Long low","CH launch","\u2192 BKP"],
    x:{en:"Your long-range low, plus on hit and a full launch on counterhit (+32a). Key detail: d+3 recovers into Backup (BKP) stance first, then drops to Full Crouch \u2014 so straight after it you can go into BKP options (BKP.3 launches, BKP.1 for plus pressure) before the crouch / while-standing mixup. Slow and reactable at high level, so don't spam it.",
       de:"Dein Long-Range-Low, plus auf Hit und voller Launch bei Counterhit (+32a). Wichtig: d+3 recovered zuerst in die Backup-Stance (BKP), dann in Full Crouch \u2014 direkt danach kannst du also in BKP-Optionen (BKP.3 launcht, BKP.1 f\u00fcr Plus-Druck) gehen, vor dem Hocke-/While-Standing-Mixup. Langsam und auf hohem Level reagierbar, also nicht spammen."}},
  db4:{n:"db+4", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i20", b:"-14", h:"+2c", ch:"+12g", p:["High crush"],
    x:{en:"Damaging high-crushing low. +2 on hit. -14 on block (launch-punishable), so make it count as a hard read.",
       de:"Schadhaftes high-crushendes Low. +2 auf Hit. -14 auf Block (launchbar), also nur als harter Read."}},
  db3:{n:"db+3", cat:"low", lv:1, lev:{en:"Low",de:"Low"}, s:"i16", b:"-13", h:"-2", p:["High crush"],
    x:{en:"Faster chip low that high-crushes. Low commitment — use it to make opponents block low so your mids open up.",
       de:"Schnelleres Chip-Low, das high-crusht. Wenig Risiko — damit blockt der Gegner low, sodass deine Mids aufgehen."}},
  df112:{n:"df+1,1,2", cat:"ch", lv:2, lev:{en:"Mid,High,High",de:"Mid,High,High"}, s:"i13", b:"+6", h:"+8", p:["DES cancel","Pressure"],
    x:{en:"Counterhit string into chainsaws, +6 on block(!). Third hit can be ducked — only commit when you read a press, else stop at df+1.",
       de:"Counterhit-String in die Kettensägen, +6 auf Block(!). Dritter Hit duckbar — nur committen, wenn du einen Press liest, sonst bei df+1 stoppen."}},
  c11:{n:"1,1", cat:"ch", lv:0, lev:{en:"High,High",de:"High,High"}, s:"i10", b:"-3", h:"+5", ch:"+14d", p:["i10 punish","DES cancel"],
    x:{en:"i10 punisher and fast pressure. -3 on block. Cancel into chainsaws with 1+2 to keep your turn.",
       de:"i10-Punisher und schneller Druck. -3 auf Block. Per 1+2 in die Kettensägen canceln, um den Zug zu behalten."}},
  k4:{n:"4", cat:"ch", lv:2, lev:{en:"High",de:"High"}, s:"i13", b:"-5", h:"+14g", ch:"+38a", p:["Homing","CH launch","DES cancel"],
    x:{en:"Homing high that launches on counterhit. Enters chainsaws with 1+2. Catches steppers who duck your mids.",
       de:"Homing-High, das bei Counterhit launcht. Per 1+2 in die Kettensägen. Fängt Steppers, die deine Mids ducken."}},
  t13:{n:"1+3", cat:"throw", lv:1, lev:{en:"Throw",de:"Wurf"}, s:"i12", b:"\u2014", h:"throw", p:["Generic","Break: 1 or 2"],
    x:{en:"A generic throw \u2014 every character has 1+3 and 2+4. Since Tekken 7 the generic grabs break with **1 OR 2** (either works), so on defense you just press 1 or 2 when you see a single arm reach out.",
       de:"Ein generischer Wurf \u2014 jeder Charakter hat 1+3 und 2+4. Seit Tekken 7 brechen die generischen Grabs mit **1 ODER 2** (egal welcher), in der Defense also einfach 1 oder 2 dr\u00fccken, wenn ein einzelner Arm rausgeht."}},
  t24:{n:"2+4", cat:"throw", lv:1, lev:{en:"Throw",de:"Wurf"}, s:"i12", b:"\u2014", h:"throw", p:["Generic","Break: 1 or 2"],
    x:{en:"The other generic throw. Same rule as 1+3: it breaks with **1 or 2**. Only a grab where **both** arms reach out (a 1+2 throw) needs a 1+2 break.",
       de:"Der andere generische Wurf. Gleiche Regel wie 1+3: bricht mit **1 oder 2**. Nur ein Grab, bei dem **beide** Arme rausgehen (ein 1+2-Wurf), braucht einen 1+2-Break."}},
  tuf12:{n:"uf+1+2", cat:"throw", lv:2, lev:{en:"Throw",de:"Wurf"}, s:"i12", b:"-4", h:"throw", p:["Command throw","Break: 1+2"],
    x:{en:"Alisa's one special (command) throw \u2014 both arms reach out, so it breaks with **1+2**. This is the grab that beats opponents who mash 1 or 2 to escape your generics. Mix it with 1+3/2+4 and the break becomes a real guess.",
       de:"Alisas einziger Spezial-(Kommando-)Wurf \u2014 beide Arme gehen raus, bricht also mit **1+2**. Der Grab schl\u00e4gt Gegner, die zum Entkommen deiner Generics 1 oder 2 mashen. Misch ihn mit 1+3/2+4 und der Break wird ein echtes Rate-Spiel."}},
  des12:{n:"DES.1+2", cat:"des", lv:2, lev:{en:"High,High,High",de:"High,High,High"}, s:"i16", b:"+4", h:"+15g", p:["Homing","Jails","Plus"],
    x:{en:"Plus-on-block homing chainsaw that jails. Your main chainsaw pressure: stay +4 and threaten the lows.",
       de:"Plus-on-Block Homing-Kettensäge, die jailt. Dein Haupt-Kettensägen-Druck: bleib +4 und drohe die Lows."}},
  desf12:{n:"DES.f+1+2", cat:"des", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i23", b:"+1", h:"+33a", p:["Mid","Plus","Combo any hit"],
    x:{en:"Chainsaw drill, +1 on block, combos from any hit. Mid pressure that is hard to sidestep.",
       de:"Kettensägen-Bohrer, +1 auf Block, combot aus jedem Hit. Mid-Druck, der schwer zu sidesteppen ist."}},
  desd1:{n:"DES.d+1", cat:"des", lv:2, lev:{en:"Low",de:"Low"}, s:"i20", b:"-13", h:"+4", p:["Low"],
    x:{en:"Chainsaw low. Forces a low block to open up your plus highs. -13 on block.",
       de:"Kettensägen-Low. Erzwingt Low-Block, um deine Plus-Highs zu öffnen. -13 auf Block."}},
  desd2:{n:"DES.d+2", cat:"des", lv:2, lev:{en:"Low",de:"Low"}, s:"i22", b:"-14", h:"+0c", p:["Homing","Low"],
    x:{en:"Homing chainsaw low — catches steppers low. -14 on block, so use it as a read, not on repeat.",
       de:"Homing-Kettensägen-Low — fängt Steppers low. -14 auf Block, also als Read, nicht auf Wiederholung."}},
  des2:{n:"DES.2", cat:"des", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i20", b:"-8", h:"+37a", p:["Jab-evasive","Launch"],
    x:{en:"Jab-evasive chainsaw launcher: ducks under jabs in chainsaws and launches. Beats mashing while you pressure.",
       de:"Jab-ausweichender Kettensägen-Launcher: duckt unter Jabs in den Kettensägen und launcht. Schlägt Mashen während deines Drucks."}}
};
Object.assign(MOVES, {
  s12:{n:"1,2", cat:"ch", lv:1, lev:{en:"High,High",de:"High,High"}, s:"i10", b:"-3", h:"+8", p:["Jails"],
    x:{en:"i10 high string, +8 on hit. It jails on block (they can't duck the 2nd after blocking the 1st) \u2014 but both hits are high, so on a read they can duck the whole thing.",
       de:"i10-High-String, +8 auf Hit. Jailt auf Block (2. Hit nach geblocktem 1. nicht duckbar) \u2014 aber beide Hits sind High, auf Read also komplett duckbar."}},
  s22:{n:"2,2", cat:"launch", lv:1, lev:{en:"High,High",de:"High,High"}, s:"i12", b:"-13", h:"+15a", p:["i12 punish","Balcony break"],
    x:{en:"Your i12 block punisher, 32 damage. -13 on block, so don't throw it raw \u2014 only as a punish. Both hits are high.",
       de:"Dein i12-Block-Punisher, 32 Schaden. -13 auf Block, also nicht raw werfen \u2014 nur als Punish. Beide Hits sind High."}},
  f12:{n:"f+1+2", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i14", b:"-12", h:"+14g", p:["Balcony break","\u2192 SBT/DBT"],
    x:{en:"Fast mid that wall-splats and feeds your stances (3/4 \u2192 SBT, f+3/f+4 \u2192 DBT). -12 on block. A combo and wall tool, not a poke.",
       de:"Schnelles Mid, das an die Wand splattet und in deine Stances f\u00fchrt (3/4 \u2192 SBT, f+3/f+4 \u2192 DBT). -12 auf Block. Combo- und Wand-Tool, kein Poke."}},
  ws3:{n:"ws3", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i19", b:"+4", h:"+15", p:["While standing","Plus"],
    x:{en:"While-standing mid that is +4 on block \u2014 a rare plus button for Alisa. Use it to keep your turn right after blocking a low.",
       de:"While-Standing-Mid, +4 auf Block \u2014 ein seltener Plus-Button f\u00fcr Alisa. Damit den Zug behalten, direkt nach geblocktem Low."}},
  uf1:{n:"uf+1", cat:"launch", lv:2, lev:{en:"Mid,Mid,Mid",de:"Mid,Mid,Mid"}, s:"i19", b:"-13", h:"+68a", p:["Tornado","Combo tool"],
    x:{en:"Your Tornado move inside juggles \u2014 the bridge from the launch to the ender. -13 on block, so it's a combo piece, not a neutral poke.",
       de:"Dein Tornado-Move im Juggle \u2014 die Br\u00fccke vom Launch zum Ender. -13 auf Block, also ein Combo-Teil, kein Neutral-Poke."}},
  b3:{n:"b+3", cat:"ch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i20", b:"-8", h:"+5a", p:["Homing","Balcony break"],
    x:{en:"Homing mid that tracks both ways and wall-splats. Slower at i20, so use it to call out steps, not as a fast check.",
       de:"Homing-Mid, das beidseitig trackt und an die Wand splattet. Langsamer mit i20, also gegen Steps, nicht als schneller Check."}},
  b24:{n:"b+2,4", cat:"ch", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i18", b:"-7", h:"+12g", ch:"+36a", p:["CH launch","\u2192 DES"],
    x:{en:"Mid into high that launches on counterhit and cancels to chainsaws with 1+2. The 2nd hit is high \u2014 duckable if they read it.",
       de:"Mid in High, launcht bei Counterhit und cancelt mit 1+2 in die Kettens\u00e4gen. Der 2. Hit ist High \u2014 duckbar, wenn er ihn liest."}},
  d34:{n:"d+3+4", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i27", b:"-37", h:"+67a", p:["Homing","Instant Tornado","\u2192 DES"],
    x:{en:"Homing low that Tornados instantly on hit \u2014 a surprise combo starter. But it's -37 on block (full launch), so it's a hard read only.",
       de:"Homing-Low, das bei Treffer sofort tornadot \u2014 \u00fcberraschender Combo-Start. Aber -37 auf Block (voller Launch), also nur harter Read."}},
  df3:{n:"df+3", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i16", b:"-9", h:"+1", p:["Mid"],
    x:{en:"A longer-range mid poke. -9 on block (safe), +1 on hit. Mix it with df+1 to vary the range and timing of your mids.",
       de:"Ein Mid-Poke mit mehr Reichweite. -9 auf Block (safe), +1 auf Hit. Misch ihn mit df+1, um Reichweite und Timing deiner Mids zu variieren."}},
  ws12:{n:"ws1+2", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i20", b:"-8", h:"+21", p:["While standing","Homing"],
    x:{en:"Homing while-standing mid, only -8 on block. Hold the input to power it up. A safer crouch-exit than ws2 when you're not sure you can launch.",
       de:"Homing-While-Standing-Mid, nur -8 auf Block. Input halten zum Aufladen. Sichererer Crouch-Exit als ws2, wenn du nicht sicher launchen kannst."}},
  hs:{n:"H.2+3", cat:"des", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i20", b:"+8", h:"throw", p:["Heat smash","+8 on block"],
    x:{en:"Heat Smash. +8 on block (!) \u2014 huge pressure that burns your Heat. It's also a great damage ender for combos and can transition to your stances.",
       de:"Heat Smash. +8 auf Block (!) \u2014 riesiger Druck, der deine Heat verbraucht. Auch ein top Schaden-Ender f\u00fcr Combos und kann in deine Stances \u00fcbergehen."}},
  ra:{n:"Rage Art", cat:"launch", lv:1, lev:{en:"Mid",de:"Mid"}, s:"i20", b:"-18", h:"throw", p:["Power crush","Reversal"],
    x:{en:"Your comeback button: it armors through mids and highs from frame 8 and gives a guaranteed big hit. -18 on block, so a whiff or a block is a full punish.",
       de:"Dein Comeback-Button: armort ab Frame 8 durch Mids und Highs und gibt einen garantierten Gro\u00dftreffer. -18 auf Block, also sind Whiff oder Block ein voller Punish."}},
  pc:{n:"b+1+2", cat:"ch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i19", b:"-13", h:"+8", p:["Power crush","Absorbs mid/high"],
    x:{en:"Power crush: it absorbs one mid or high and hits back. Use it to barge through predictable pressure \u2014 but it loses to lows and throws, and it's -13 on block.",
       de:"Power Crush: absorbiert ein Mid oder High und schl\u00e4gt zur\u00fcck. Damit durch berechenbaren Druck brechen \u2014 verliert aber gegen Lows und W\u00fcrfe, und ist -13 auf Block."}}
});
Object.assign(MOVES, {
  wr2:{n:"f,f,F+2", cat:"poke", lv:2, lev:{en:"High",de:"High"}, s:"i13", b:"+5", h:"+28a", p:["Running","Launch","+ on block","\u2192 DES"],
    x:{en:"Running high and a monster keepout: +5 on block and it LAUNCHES on hit for 30 damage. Run at them from range to threaten it. It's high, so it can be ducked \u2014 but few people duck a runner in time.",
       de:"Running-High und ein Monster-Keepout: +5 auf Block und es LAUNCHT auf Hit f\u00fcr 30 Schaden. Aus der Distanz auf sie zulaufen und drohen. Es ist High, also duckbar \u2014 aber kaum jemand duckt einen Runner rechtzeitig."}},
  ws4:{n:"ws4", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i11", b:"-5", h:"+6", p:["While standing","Fast mid"],
    x:{en:"Your fastest while-standing mid (i11). -5 on block, +6 on hit. The quick, safe button the instant you stand up out of a block or crouch.",
       de:"Dein schnellstes While-Standing-Mid (i11). -5 auf Block, +6 auf Hit. Der schnelle, sichere Button direkt beim Aufstehen aus Block oder Hocke."}},
  ss4:{n:"SS.4", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i24", b:"-12", h:"+2", p:["Sidestep","High crush"],
    x:{en:"A low done out of a sidestep \u2014 it high-crushes and steps off-axis at once, so it beats a linear attack while ducking a high. Slow (i24) and -12, so use it off a read.",
       de:"Ein Low aus einem Sidestep \u2014 es high-crusht und geht gleichzeitig aus der Achse, schl\u00e4gt also einen linearen Angriff und duckt ein High. Langsam (i24) und -12, also auf Read nutzen."}},
  b4:{n:"b+4", cat:"ch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i15", b:"-13", h:"-4", ch:"+54a", p:["CH launch","Knee"],
    x:{en:"A quick mid knee that launches hard on counterhit (+54a). On normal hit or block it's minus, so it's a read tool \u2014 press it when you expect them to press and take a full combo.",
       de:"Ein schnelles Mid-Knie, das bei Counterhit hart launcht (+54a). Bei normalem Hit oder Block minus, also ein Read-Tool \u2014 dr\u00fcck es, wenn du einen Press erwartest, und hol einen vollen Combo."}}
});
var WARN = {
  wr2:{en:"High \u2014 duckable (though hard to duck a runner in time).",de:"High \u2014 duckbar (einen Runner aber schwer rechtzeitig zu ducken)."},
  ss4:{en:"-12 on block and slow (i24) \u2014 a read, not a habit.",de:"-12 auf Block und langsam (i24) \u2014 ein Read, keine Gewohnheit."},
  b4:{en:"-13 on block \u2014 only worth it as a counterhit read.",de:"-13 auf Block \u2014 nur als Counterhit-Read wert."},
  uf2:{en:"High \u2014 duckable. If ducked, you're launch-punishable.",de:"High \u2014 duckbar. Wenn geduckt, bist du launchbar."},
  k4:{en:"High \u2014 duckable on a read.",de:"High \u2014 auf Read duckbar."},
  c11:{en:"Both hits are high \u2014 duckable on prediction.",de:"Beide Hits sind High \u2014 auf Read duckbar."},
  s12:{en:"Both hits are high \u2014 duckable on prediction.",de:"Beide Hits sind High \u2014 auf Read duckbar."},
  s22:{en:"Both high & -13 on block \u2014 only use it as a punish.",de:"Beide High & -13 auf Block \u2014 nur als Punish nutzen."},
  f21:{en:"-12 on block \u2014 punishable by a fast poke, but safe from launches for almost everyone (a 12f launcher is very rare).",de:"-12 auf Block \u2014 durch einen schnellen Poke bestrafbar, aber f\u00fcr fast alle launch-safe (ein 12f-Launcher ist sehr selten)."},
  f12:{en:"-12 on block \u2014 punishable by a fast poke, but safe from launches for almost everyone.",de:"-12 auf Block \u2014 durch einen schnellen Poke bestrafbar, aber f\u00fcr fast alle launch-safe."},
  df112:{en:"Last hits are high \u2014 duckable. Only commit on a read; else stop at df+1.",de:"Letzte Hits sind High \u2014 duckbar. Nur auf Read committen; sonst bei df+1 stoppen."},
  b24:{en:"2nd hit is high \u2014 duckable on a read.",de:"2. Hit ist High \u2014 auf Read duckbar."},
  b44:{en:"-37 on block \u2014 never raw, only on a whiff or inside a combo.",de:"-37 auf Block \u2014 nie raw, nur auf Whiff oder im Combo."},
  d34:{en:"-37 on block \u2014 a hard read only.",de:"-37 auf Block \u2014 nur ein harter Read."},
  db4:{en:"-14 on block \u2014 launch-punishable only by characters with a 14f (or faster) launcher.",de:"-14 auf Block \u2014 nur von Charakteren mit 14f-(oder schneller-)Launcher launchbar."},
  d3:{en:"Slow (i23) \u2014 reactable; don't spam it vs players who react.",de:"Langsam (i23) \u2014 reaktionsbar; nicht gegen Reacter spammen."},
  ra:{en:"-18 on block \u2014 a full punish if blocked or whiffed.",de:"-18 auf Block \u2014 voller Punish, wenn geblockt oder verfehlt."},
  pc:{en:"Loses to lows & throws; -13 on block.",de:"Verliert gegen Lows & W\u00fcrfe; -13 auf Block."},
  uf44:{en:"-13 on block \u2014 it's a punish/launcher, not a poke.",de:"-13 auf Block \u2014 Punisher/Launcher, kein Poke."},
  ws2:{en:"-13 on block \u2014 a launcher, not a poke.",de:"-13 auf Block \u2014 Launcher, kein Poke."}
};
Object.assign(MOVES, {
  m12:{n:"1+2", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i19", b:"-4", h:"+15d", p:["Heat engager","Balcony break","Spike"],
    x:{en:"A single-hit mid that spikes down and, in Heat, engages for a Heat Dash launch. Only -4 on block, so it's a safe, hard-hitting poke that also opens your Heat combo.",
       de:"Ein Ein-Hit-Mid, das runterspiket und in Heat f\u00fcr einen Heat-Dash-Launch engaged. Nur -4 auf Block, also ein sicherer, harter Poke, der auch deinen Heat-Combo \u00f6ffnet."}},
  df11:{n:"df+1,1", cat:"poke", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i13", b:"+1", h:"+8", p:["Plus on block","Stop here or \u2192 df+1,1,2"],
    x:{en:"The 2-hit version of your df+1 poke: +1 on block, so you keep your turn. Stop here to stay safe and plus, or add the last hit (df+1,1,2) for pressure. The 2nd hit is high.",
       de:"Die 2-Hit-Version deines df+1-Pokes: +1 auf Block, du beh\u00e4ltst also den Zug. Hier stoppen f\u00fcr safe+plus, oder den letzten Hit anh\u00e4ngen (df+1,1,2) f\u00fcr Druck. Der 2. Hit ist High."}},
  b21:{n:"b+2,1", cat:"ch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i18", b:"-13", h:"+3c", ch:"+17a", p:["Spike","CH combo"],
    x:{en:"Two mids that spike; on counterhit the 1st hit combos into a launch. -13 on block though, so it's a read tool, not a blockstring you throw for free.",
       de:"Zwei Mids, die spiken; bei Counterhit combot der 1. Hit in einen Launch. Aber -13 auf Block, also ein Read-Tool, kein Blockstring, den du gratis wirfst."}},
  b13p:{n:"b+1+3", cat:"ch", lv:2, lev:{en:"Parry (highs)",de:"Parry (Highs)"}, s:"3~15", b:"\u2014", h:"launch", p:["High parry","Panic option"],
    x:{en:"A parry that catches ALL highs (active frames 3\u201315) and lets you follow up for a launch \u2014 a great panic button against a jab-happy opponent. But it does nothing against mids and lows, so it's a hard read.",
       de:"Ein Parry, der ALLE Highs abf\u00e4ngt (aktiv Frames 3\u201315) und danach einen Launch erlaubt \u2014 ein top Panic-Button gegen jab-freudige Gegner. Gegen Mids und Lows macht er aber nichts, also ein harter Read."}}
});
Object.assign(WARN, {
  b21:{en:"-13 on block \u2014 a counterhit read, not a free blockstring.",de:"-13 auf Block \u2014 ein Counterhit-Read, kein gratis Blockstring."},
  b13p:{en:"Only parries HIGHS \u2014 loses to mids and lows. A hard read.",de:"Parriert nur HIGHS \u2014 verliert gegen Mids und Lows. Ein harter Read."}
});
Object.assign(MOVES, {
  s122:{n:"1,2,2", cat:"ch", lv:2, lev:{en:"High,High,High",de:"High,High,High"}, s:"i10", b:"-9~+6", h:"+21a", p:["Tornado","Balcony break"]},
  s23:{n:"2,3", cat:"ch", lv:2, lev:{en:"High,Mid",de:"High,Mid"}, s:"i12", b:"-10", h:"+1", p:["Knee","CH combo"]},
  s233:{n:"2,3,3", cat:"launch", lv:2, lev:{en:"High,Mid,Mid",de:"High,Mid,Mid"}, s:"i12", b:"-11", h:"+16a", ch:"+61a", p:["Tailspin","Balcony break","Low crush"]},
  s234:{n:"2,3,4", cat:"low", lv:2, lev:{en:"High,Mid,Low",de:"High,Mid,Low"}, s:"i12", b:"-13", h:"+13d", p:["Low ender","Low crush"]},
  f23:{n:"f+2,3", cat:"ch", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i17", b:"-8", h:"+4", p:["Low crush","CH combo","\u2192 DES"]},
  f32:{n:"f+3,2", cat:"launch", lv:2, lev:{en:"High,High",de:"High,High"}, s:"i14", b:"-4", h:"+39d", p:["Balcony break","-14 punish"]},
  f41:{n:"f+4,1", cat:"ch", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i16", b:"-9", h:"+15d", p:["Balcony break","Head"]},
  df14:{n:"df+1,4", cat:"poke", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i13", b:"-11", h:"+3c", p:["Leaves them crouching","\u2192 DES"]},
  df33:{n:"df+3,3", cat:"low", lv:2, lev:{en:"Mid,Low",de:"Mid,Low"}, s:"i16", b:"-12", h:"+1", ch:"+14d", p:["Floor break","Mid-low mix"]},
  d24:{n:"d+2,4", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i24", b:"-9", h:"+28a", p:["Low crush","\u2192 DES"]},
  d412:{n:"d+4,1+2", cat:"low", lv:2, lev:{en:"Low,High",de:"Low,High"}, s:"i17", b:"+0", h:"+11a", p:["Jails","Balcony break","Head"]},
  db22:{n:"db+2,2", cat:"ch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i18", b:"-9", h:"+5", p:["\u2192 DES"]},
  b112:{n:"b+1,1+2", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i15", b:"-16", h:"+71a", p:["Tornado","Head"]},
  b23:{n:"b+2,3", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i18", b:"-15", h:"+9a", p:["Tornado","Balcony break","Low crush"]},
  b43:{n:"b+4,3", cat:"ch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i15", b:"-11", h:"+6c", ch:"+10a", p:["Spike","\u2192 DES"]},
  b34:{n:"b+3+4", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i18", b:"-17", h:"+32a", p:["Tornado","Low crush"]},
  ub2:{n:"ub+2", cat:"ch", lv:2, lev:{en:"High",de:"High"}, s:"i16", b:"-9", h:"+12c", p:["Power crush","Balcony break"]},
  u12:{n:"u+1+2", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i33", b:"-5", h:"+56a", p:["Spike","Low crush"]},
  uf32:{n:"uf+3,2", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i17", b:"-14", h:"+6c", p:["Spike","Balcony break"]},
  uf4:{n:"uf+4", cat:"launch", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i15", b:"-15", h:"-4", p:["Hopkick","Low crush"]},
  ff2:{n:"f,F+2", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i16", b:"-18", h:"+5a", p:["Running","Balcony break"]},
  ff23:{n:"f,F+2,3", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i16", b:"-13", h:"+28a", p:["Running","Balcony break"]},
  ff34:{n:"f,F+3,4", cat:"poke", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i18", b:"-10", h:"+20a", p:["Running","Jails","\u2192 DES"]},
  ff4:{n:"f,F+4", cat:"ch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i22", b:"-9~-2", h:"+9a", p:["Running","Knee","Attack throw"]},
  fff3:{n:"f,f,F+3", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i18", b:"-4", h:"+6", p:["Running","Low crush"]},
  fff34:{n:"f,f,F+3,4", cat:"launch", lv:2, lev:{en:"Mid,Mid",de:"Mid,Mid"}, s:"i18", b:"-7", h:"+31a", p:["Running","Jails"]},
  ws1:{n:"ws1", cat:"poke", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i13", b:"-12", h:"-1", p:["Elbow","While standing"]},
  ws12s:{n:"ws1,2", cat:"poke", lv:2, lev:{en:"Mid,High",de:"Mid,High"}, s:"i13", b:"-5", h:"+6", p:["While standing","\u2192 DES"]},
  fcd1:{n:"FC.d+1", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i10", b:"-5", h:"+6", p:["Full crouch","High crush","Fast low"]},
  fcd3:{n:"FC.d+3", cat:"low", lv:2, lev:{en:"Low",de:"Low"}, s:"i16", b:"-17", h:"-6", p:["Full crouch","High crush"]},
  hb:{n:"2+3", cat:"des", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i16", b:"+1", h:"+2c", p:["Heat Burst","Power crush"]}
});
Object.assign(MOVES, {
  bkp1:{n:"BKP.1", cat:"bkp", lv:2, lev:{en:"High",de:"High"}, s:"i11", b:"+4~+6", h:"+27a", p:["Tailspin","Balcony break","\u2192 SBT/DBT"],
    x:{en:"Backup's main tool: fast (i11) high, plus on block, with a strong aerial tailspin. Wall-splats. Branch to SBT with 3/4 or DBT with f+3/f+4 to keep pressure or fly out.",
       de:"Backups Haupt-Tool: schnelles (i11) High, plus auf Block, mit starkem Aerial-Tailspin. Splattet an die Wand. Weiter in SBT mit 3/4 oder DBT mit f+3/f+4 f\u00fcr Druck oder zum Wegfliegen."}},
  bkp2:{n:"BKP.2", cat:"bkp", lv:2, lev:{en:"High",de:"High"}, s:"i11", b:"-9~+13", h:"+21", p:["Tornado"],
    x:{en:"Backup's chargeable tornado high \u2014 big damage and a combo tool, but the block/hit frames swing a lot with the charge. A hard read, not a safe poke.",
       de:"Backups aufladbares Tornado-High \u2014 viel Schaden und Combo-Tool, aber Block/Hit-Frames schwanken stark mit der Ladung. Ein harter Read, kein safer Poke."}},
  bkp3:{n:"BKP.3", cat:"bkp", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i24", b:"-9", h:"+72a", p:["Balcony break","Low crush","Combo tool"],
    x:{en:"Backup's launcher: a low-crushing mid that launches for a full combo (+72 on hit). This is the payoff of the d+3 \u2192 BKP mixup \u2014 they duck expecting a low, you launch.",
       de:"Backups Launcher: ein Low-crushendes Mid, das f\u00fcr eine volle Combo launcht (+72 auf Hit). Das ist die Belohnung des d+3 \u2192 BKP-Mixups \u2014 sie ducken f\u00fcrs Low, du launchst."}},
  bkp12:{n:"BKP.1+2", cat:"bkp", lv:3, lev:{en:"High",de:"High"}, s:"i34", b:"\u2014", h:"+58", p:["Weapon"],
    x:{en:"Backup's chargeable weapon hit \u2014 very slow (i34+) with a huge reward on hit, but purely a hard-read / setup tool. Chip damage on block.",
       de:"Backups aufladbarer Waffen-Treffer \u2014 sehr langsam (i34+) mit riesiger Belohnung auf Hit, aber reines Hard-Read-/Setup-Tool. Chip-Schaden auf Block."}}
});
Object.assign(MOVES, {
  bkp4:{n:"BKP.4", cat:"bkp", lv:2, lev:{en:"Mid",de:"Mid"}, s:"i18~23", b:"-9~-4", h:"+31a", dmg:"30", p:["Tornado","Knee"],
    x:{en:"Backup's knee: a tornado launcher (i18) that low-crushes. Another strong payoff from the d+3 \u2192 BKP mixup.",
       de:"Backups Knie: ein Tornado-Launcher (i18) mit Low Crush. Ein weiterer starker Payoff aus dem d+3 \u2192 BKP-Mixup."},
    note:{en:"Tornado launcher \u00b7 low crush 17~52.",de:"Tornado-Launcher \u00b7 Low Crush 17~52."}}
});
/* ===== damage + per-hit startup + notes (TekkenDocs, patch 3.0x) ===== */
var EXTRA = {
  jab:{dmg:"5", s:"i10", note:{en:["Recovers 2f faster on hit or block"],de:["Erholt sich 2f schneller auf Hit oder Block"]}},
  c11:{dmg:"5, 18", s:"i10, i21", note:{en:["Combo from 1st hit with 4f delay","Input can be delayed 8f","Enter DES with 1+2"],de:["Combo aus 1. Hit mit 4f Delay","Eingabe bis 8f verz\u00f6gerbar","In DES mit 1+2"]}},
  s12:{dmg:"5, 10", s:"i10, i12", note:{en:["Jail from 1st attack with 4f delay"],de:["Jailt aus dem 1. Angriff mit 4f Delay"]}},
  s122:{dmg:"5, 10, 20", s:"i10, i12, i20~35", note:{en:["Tornado","Balcony Break (airborne)","Weapon","Combo from 2nd CH with 1f delay","6 chip damage on block"],de:["Tornado","Balcony Break (airborne)","Weapon","Combo aus 2. CH mit 1f Delay","6 Chip auf Block"]}},
  s22:{dmg:"10, 22", s:"i12, i18~33", note:{en:["Balcony Break","Combo from 1st hit","2nd hit available on hit or block only"],de:["Balcony Break","Combo aus 1. Hit","2. Hit nur auf Hit oder Block"]}},
  s23:{dmg:"10, 8", s:"i12, i22~23", note:{en:["Knee","Combo from 1st CH with 2f delay"],de:["Knie","Combo aus 1. CH mit 2f Delay"]}},
  s233:{dmg:"10, 8, 25", s:"i12, i22~23, i20~22", note:{en:["Strong Aerial Tailspin","Balcony Break","Combo from 2nd hit with 9f delay","Input can be delayed 12f","Move can be delayed 11f","Low crush 13~41","Floating state 42~44"],de:["Starker Aerial-Tailspin","Balcony Break","Combo aus 2. Hit mit 9f Delay","Eingabe bis 12f verz\u00f6gerbar","Move bis 11f verz\u00f6gerbar","Low Crush 13~41","Floating State 42~44"]}},
  s234:{dmg:"10, 8, 20", s:"i12, i22~23, i42~45", note:{en:["Low crush 24~39","Floating state 40~42"],de:["Low Crush 24~39","Floating State 40~42"]}},
  c32:{dmg:"10, 20", s:"i13~14, i26~27", note:{en:["Heat Engager","Heat Dash +5, +43d (+35)","Homing","Balcony Break","Weapon","Combo from 1st hit","6 chip damage on block","10 chip damage on block in Heat","Does not transition to DES when using Heat Dash"],de:["Heat Engager","Heat Dash +5, +43d (+35)","Homing","Balcony Break","Weapon","Combo aus 1. Hit","6 Chip auf Block","10 Chip auf Block in Heat","Kein DES beim Heat-Dash"]}},
  k4:{dmg:"24", s:"i13~14", note:{en:["Homing","Balcony Break","Enter DES with 1+2","Hit vs back-turned +21a (+12)"],de:["Homing","Balcony Break","In DES mit 1+2","Gegen Backturned +21a (+12)"]}},
  m12:{dmg:"22", s:"i19~20", note:{en:["Heat Engager","Heat Dash +5, +67a (+50)","Balcony Break","Spike","Head","6 chip damage on block","Hit vs back-turned +10d"],de:["Heat Engager","Heat Dash +5, +67a (+50)","Balcony Break","Spike","Head","6 Chip auf Block","Gegen Backturned +10d"]}},
  f2:{dmg:"12", s:"i17~18", note:{en:["Enter DES with 1+2"],de:["In DES mit 1+2"]}},
  f21:{dmg:"12, 20", s:"i17~18, i24~25", note:{en:["Heat Engager","Heat Dash +5, +62a (+42)","Balcony Break","Weapon","Combo from 1st hit","6 chip damage on block","10 chip damage on block in Heat","Opponent recovers crouching on hit","Does not transition to DES when using Heat Dash"],de:["Heat Engager","Heat Dash +5, +62a (+42)","Balcony Break","Weapon","Combo aus 1. Hit","6 Chip auf Block","10 Chip auf Block in Heat","Gegner steht geduckt auf (auf Hit)","Kein DES beim Heat-Dash"]}},
  f23:{dmg:"12, 8", s:"i17~18, i22", note:{en:["Balcony Break (airborne)","Combo from 1st CH with 1f delay","Move cannot be delayed","Transition to r40 DES with 1+2","Low crush 17~38","Floating state 39~41"],de:["Balcony Break (airborne)","Combo aus 1. CH mit 1f Delay","Move nicht verz\u00f6gerbar","In r40 DES mit 1+2","Low Crush 17~38","Floating State 39~41"]}},
  f32:{dmg:"10, 20", s:"i14~15, i24~26", note:{en:["Balcony Break","Weapon","Combo from 1st hit","6 chip damage on block","10 chip damage on block in Heat"],de:["Balcony Break","Weapon","Combo aus 1. Hit","6 Chip auf Block","10 Chip auf Block in Heat"]}},
  f41:{dmg:"14, 14", s:"i16, i25~26", note:{en:["Balcony Break","Head","Combo from 1st hit"],de:["Balcony Break","Head","Combo aus 1. Hit"]}},
  f12:{dmg:"25", s:"i14~15", note:{en:["Balcony Break","Enter SBT (-16 / +10g / r25) with 3_4","Enter DBT (-16 / +10g / r25) with f+3_f+4","Opponent recovers crouching"],de:["Balcony Break","In SBT (-16 / +10g / r25) mit 3_4","In DBT (-16 / +10g / r25) mit f+3_f+4","Gegner steht geduckt auf"]}},
  df1:{dmg:"10", s:"i13", note:{en:["+5c on hit against a crouching opponent"],de:["+5c auf Hit gegen geduckten Gegner"]}},
  df11:{dmg:"10, 20", s:"i13, i30~31", note:{en:["Balcony Break (airborne)","Combo from 1st CH with 2f delay","Move cannot be delayed"],de:["Balcony Break (airborne)","Combo aus 1. CH mit 2f Delay","Move nicht verz\u00f6gerbar"]}},
  df112:{dmg:"10, 20, 28", s:"i13, i30~31, i22~25", note:{en:["Weapon","Combo from 2nd hit","2 chip damage on block","8 chip damage on block in Heat"],de:["Weapon","Combo aus 2. Hit","2 Chip auf Block","8 Chip auf Block in Heat"]}},
  df14:{dmg:"10, 17", s:"i13, i26~27", note:{en:["Floor Break","Combo from 1st CH","Transition to DES with 1+2"],de:["Floor Break","Combo aus 1. CH","In DES mit 1+2"]}},
  df2:{dmg:"16", s:"i16~17", note:{en:["+7 on hit against a crouching opponent","Does not launch a crouching opponent except on CH"],de:["+7 auf Hit gegen geduckten Gegner","Launcht geduckten Gegner nur bei CH"]}},
  df3:{dmg:"14", s:"i16"},
  df33:{dmg:"14, 17", s:"i16, i23~24", note:{en:["Floor Break","Combo from 1st hit with 9f delay","Input can be delayed 16f","Move can be delayed 12f"],de:["Floor Break","Combo aus 1. Hit mit 9f Delay","Eingabe bis 16f verz\u00f6gerbar","Move bis 12f verz\u00f6gerbar"]}},
  df4:{dmg:"13", s:"i12", note:{en:["+4c on hit against a crouching opponent"],de:["+4c auf Hit gegen geduckten Gegner"]}},
  d24:{dmg:"8, 20", s:"i24~26, i18~21", note:{en:["Combo from 1st hit","Enter DES with 1+2","Low crush 21~43","Floating state 44~46"],de:["Combo aus 1. Hit","In DES mit 1+2","Low Crush 21~43","Floating State 44~46"]}},
  d3:{dmg:"17", s:"i23~32", note:{en:["FC recovery transition is -19~-10 / -1c~+8c","Low crush 9~23","Floating state 24~26"],de:["FC-Recovery-Transition ist -19~-10 / -1c~+8c","Low Crush 9~23","Floating State 24~26"]}},
  d4:{dmg:"12", s:"i17~18"},
  d412:{dmg:"12, 20", s:"i17~18, i20~21", note:{en:["Balcony Break","Head","Jail from 1st attack","Combo from 1st CH"],de:["Balcony Break","Head","Jailt aus dem 1. Angriff","Combo aus 1. CH"]}},
  d34:{dmg:"20", s:"i27~28", note:{en:["Homing","Instant Tornado","Stagger on block","Enter DES with 1+2","High crush 20~40","Floating state 5~55"],de:["Homing","Instant Tornado","Stagger auf Block","In DES mit 1+2","High Crush 20~40","Floating State 5~55"]}},
  db22:{dmg:"10, 10", s:"i18~19, i19~20", note:{en:["Combo from 1st hit with 12f delay","Input can be delayed 15f","Move can be delayed 14f","Enter DES with 1+2"],de:["Combo aus 1. Hit mit 12f Delay","Eingabe bis 15f verz\u00f6gerbar","Move bis 14f verz\u00f6gerbar","In DES mit 1+2"]}},
  db3:{dmg:"11", s:"i16", note:{en:["High crush 4~"],de:["High Crush 4~"]}},
  db4:{dmg:"17", s:"i20~21", note:{en:["High crush 6~"],de:["High Crush 6~"]}},
  b1:{dmg:"15", s:"i15~16", note:{en:["High crush 12~"],de:["High Crush 12~"]}},
  b112:{dmg:"15, 1, 30", s:"i15~16, i25~40, i26~28", note:{en:["Tornado","Head","Input can be delayed 13f","2nd hit combos into the 3rd on CH only"],de:["Tornado","Head","Eingabe bis 13f verz\u00f6gerbar","2. Hit combot nur bei CH in den 3."]}},
  b13p:{note:{en:["Parries all highs","Parry state frames 3~15","Loses to mids and lows","Follow-up (P) launches: i20, +27a on CH, Balcony Break"],de:["Parriert alle Highs","Parry-State Frames 3~15","Verliert gegen Mids und Lows","Folge-Hit (P) launcht: i20, +27a bei CH, Balcony Break"]}},
  b21:{dmg:"12, 17", s:"i18, i25~26", note:{en:["Spike","Combo from 1st hit with 7f delay","Move can be delayed 12f"],de:["Spike","Combo aus 1. Hit mit 7f Delay","Move bis 12f verz\u00f6gerbar"]}},
  b23:{dmg:"12, 22", s:"i18, i23~24", note:{en:["Tornado","Balcony Break","Combo from 1st hit with 9f delay","Move can be delayed 12f","Low crush 21~60","Floating state 61~63"],de:["Tornado","Balcony Break","Combo aus 1. Hit mit 9f Delay","Move bis 12f verz\u00f6gerbar","Low Crush 21~60","Floating State 61~63"]}},
  b24:{dmg:"12, 20", s:"i18, i16~17", note:{en:["Balcony Break","Enter DES with 1+2","Combo from 1st hit with 12f delay"],de:["Balcony Break","In DES mit 1+2","Combo aus 1. Hit mit 12f Delay"]}},
  b3:{dmg:"22", s:"i20~22", note:{en:["Homing","Balcony Break"],de:["Homing","Balcony Break"]}},
  b4:{dmg:"17", s:"i15~16", note:{en:["Knee"],de:["Knie"]}},
  b43:{dmg:"17, 20", s:"i15~16, i29~30", note:{en:["Spike","Combo from 1st hit","Enter DES with 1+2","Low crush 17~24","Floating state 25~27"],de:["Spike","Combo aus 1. Hit","In DES mit 1+2","Low Crush 17~24","Floating State 25~27"]}},
  b44:{dmg:"17, 17", s:"i15~16, i25~27", note:{en:["Tornado","Combo from 1st hit","Transition to SBT (-19 / +27a) with 3_4","Transition to DBT (-19 / +27a) with f+3_f+4","Low crush 25~62","Floating state 63~65"],de:["Tornado","Combo aus 1. Hit","In SBT (-19 / +27a) mit 3_4","In DBT (-19 / +27a) mit f+3_f+4","Low Crush 25~62","Floating State 63~65"]}},
  pc:{dmg:"25", s:"i19~20", note:{en:["Balcony Break","Weapon","7 chip damage on block (12 in Heat)","10 chip and -9 on block when absorbing a hit (12 in Heat)","Power crush 7~18"],de:["Balcony Break","Weapon","7 Chip auf Block (12 in Heat)","10 Chip und -9 auf Block beim Absorbieren (12 in Heat)","Power Crush 7~18"]}},
  b34:{dmg:"22", s:"i18~19", note:{en:["Tornado","Low crush 5~34","Floating state 35~52"],de:["Tornado","Low Crush 5~34","Floating State 35~52"]}},
  ub2:{dmg:"23", s:"i16~20", note:{en:["Balcony Break","9 chip damage on block (+0 on block when absorbing a hit)","Forces tech backroll on hit","Power crush 7~15","Floating state 20~30"],de:["Balcony Break","9 Chip auf Block (+0 auf Block beim Absorbieren)","Erzwingt Tech-Backroll auf Hit","Power Crush 7~15","Floating State 20~30"]}},
  u12:{dmg:"21", s:"i33~34", note:{en:["Spike","Low crush 7~33","Floating state 34~36"],de:["Spike","Low Crush 7~33","Floating State 34~36"]}},
  uf1:{dmg:"19, 19, 20", s:"i19~20, i25, i17", note:{en:["Tornado","Transition to SBT on hit with 3_4","Transition to DBT on hit with f+3_f+4","2nd and 3rd hit only as a combo from the 1st","Low crush 20~40","Floating state 41~43"],de:["Tornado","Auf Hit in SBT mit 3_4","Auf Hit in DBT mit f+3_f+4","2. und 3. Hit nur als Combo aus dem 1.","Low Crush 20~40","Floating State 41~43"]}},
  uf2:{dmg:"22", s:"i16~17", note:{en:["Heat Engager","Heat Dash +5, +43d (+35)","Homing","Balcony Break","Weapon","6 chip damage on block","11 chip damage on block in Heat"],de:["Heat Engager","Heat Dash +5, +43d (+35)","Homing","Balcony Break","Weapon","6 Chip auf Block","11 Chip auf Block in Heat"]}},
  uf32:{dmg:"15, 30", s:"i17~18, i17~22", note:{en:["Balcony Break","Spike","Combo from 1st hit","Available only as a combo from the 1st hit","Forces tech backroll on hit","Low crush 9~58","Floating state 59~75","High crush 76~85"],de:["Balcony Break","Spike","Combo aus 1. Hit","Nur als Combo aus dem 1. Hit","Erzwingt Tech-Backroll auf Hit","Low Crush 9~58","Floating State 59~75","High Crush 76~85"]}},
  uf4:{dmg:"8", s:"i15~16", note:{en:["Low crush 9~37","Floating state 38~40"],de:["Low Crush 9~37","Floating State 38~40"]}},
  uf44:{dmg:"8, 8", s:"i15~16, i24~26", note:{en:["Spike","Combo from 1st hit with 2f delay","Low crush 9~41","Floating state 42~44"],de:["Spike","Combo aus 1. Hit mit 2f Delay","Low Crush 9~41","Floating State 42~44"]}},
  ff2:{dmg:"18", s:"i16~17", note:{en:["Balcony Break"],de:["Balcony Break"]}},
  ff23:{dmg:"18, 25", s:"i16~17, i22~24", note:{en:["Balcony Break","Combo from 1st hit with ~7~8f delay (character-dependent)","Input can be delayed 14f","Move can be delayed 8f"],de:["Balcony Break","Combo aus 1. Hit mit ~7~8f Delay (charakterabh\u00e4ngig)","Eingabe bis 14f verz\u00f6gerbar","Move bis 8f verz\u00f6gerbar"]}},
  ff34:{dmg:"12, 15", s:"i18~19, i19~20", note:{en:["Balcony Break","Combo from 1st hit","Jail from 1st block","Enter DES with 1+2","Low crush 15~48","Floating state 49~51"],de:["Balcony Break","Combo aus 1. Hit","Jailt aus 1. Block","In DES mit 1+2","Low Crush 15~48","Floating State 49~51"]}},
  ff4:{dmg:"14, 22", s:"i22~29, i34~39", note:{en:["Balcony Break","Knee","Transition to attack throw on front hit only","+8a (-1) on back-turned hit","Just frame: input 1 during frames 16~19 for +5 damage"],de:["Balcony Break","Knie","In Attack-Throw nur bei Front-Hit","+8a (-1) bei Backturned-Hit","Just-Frame: Eingabe 1 in Frames 16~19 f\u00fcr +5 Schaden"]}},
  fff3:{dmg:"15", s:"i18~19", note:{en:["Balcony Break (airborne)","Low crush 3~30","Floating state 31~33"],de:["Balcony Break (airborne)","Low Crush 3~30","Floating State 31~33"]}},
  fff34:{dmg:"15, 20", s:"i18~19, i20~22", note:{en:["Balcony Break","Combo from 1st hit","Jail from 1st block","Low crush 3~50","Floating state 51~53"],de:["Balcony Break","Combo aus 1. Hit","Jailt aus 1. Block","Low Crush 3~50","Floating State 51~53"]}},
  wr2:{dmg:"30", s:"i13~15", note:{en:["Balcony Break","9 chip damage on block","Enter DES with 1+2","Low crush 3~27","Floating state 28~30"],de:["Balcony Break","9 Chip auf Block","In DES mit 1+2","Low Crush 3~27","Floating State 28~30"]}},
  ws1:{dmg:"12", s:"i13~14", note:{en:["Elbow"],de:["Ellbogen"]}},
  ws12s:{dmg:"12, 12", s:"i13~14, i24~25", note:{en:["Combo from 1st hit","Enter DES with 1+2"],de:["Combo aus 1. Hit","In DES mit 1+2"]}},
  ws2:{dmg:"24", s:"i17~18", note:{en:["Tornado","Transition to SBT with 3_4","Transition to DBT with f+3_f+4"],de:["Tornado","In SBT mit 3_4","In DBT mit f+3_f+4"]}},
  ws3:{dmg:"18", s:"i19~20", note:{en:["Cancel with B","Actionable after 15 frames"],de:["Cancel mit B","Handlungsf\u00e4hig nach 15 Frames"]}},
  ws4:{dmg:"15", s:"i11~12"},
  ws12:{dmg:"20", s:"i20~21", note:{en:["Homing","Hold the input to power it up"],de:["Homing","Eingabe halten zum Aufladen"]}},
  ss4:{dmg:"16", s:"i24~25", note:{en:["High crush 6~35"],de:["High Crush 6~35"]}},
  fcd1:{dmg:"5", s:"i10", note:{en:["Transition to standing with f","High crush 1~"],de:["In den Stand mit f","High Crush 1~"]}},
  fcd3:{dmg:"10", s:"i16", note:{en:["High crush 1~"],de:["High Crush 1~"]}},
  hb:{dmg:"12, 12", s:"i16", note:{en:["Heat Burst","Cancel to r45 with b,b on frame 42","2 chip damage on block","12 chip damage on hit","Only deals recoverable damage","Cannot cause a K.O.","Power crush 7~16"],de:["Heat Burst","Cancel zu r45 mit b,b auf Frame 42","2 Chip auf Block","12 Chip auf Hit","Nur erholbarer Schaden","Kann keinen K.O. verursachen","Power Crush 7~16"]}},
  hs:{dmg:"50 (28)", s:"i20~21", note:{en:["Heat Smash","Transition to DES with 1+2 (+8)","Transition to SBT with 3_4 (+10)","Transition to DBT with f+3_f+4 (+10)","8 chip damage on block"],de:["Heat Smash","In DES mit 1+2 (+8)","In SBT mit 3_4 (+10)","In DBT mit f+3_f+4 (+10)","8 Chip auf Block"]}},
  ra:{dmg:"55+", s:"i20", note:{en:["Rage Art","Removes recoverable health","Reversal Break","Damage increases with lower health (max 82)","Freezes the match timer on activation and on hit","Restores recoverable health on hit","Transition to attack throw on hit","Consumes Rage","Power crush 8~"],de:["Rage Art","Entfernt erholbares Leben","Reversal Break","Schaden steigt mit sinkendem Leben (max 82)","Friert den Timer bei Aktivierung und Hit ein","Stellt erholbares Leben auf Hit wieder her","In Attack-Throw auf Hit","Verbraucht Rage","Power Crush 8~"]}},
  bkp1:{dmg:"21", s:"i11~13", note:{en:["Strong Aerial Tailspin","Balcony Break","9 chip damage on block","Transition to SBT at +6/+29 (+3) with 3 or 4","Transition to DBT at +6/+29 (+3) with f+3 or f+4"],de:["Starker Aerial-Tailspin","Balcony Break","9 Chip auf Block","In SBT bei +6/+29 (+3) mit 3 oder 4","In DBT bei +6/+29 (+3) mit f+3 oder f+4"]}},
  bkp2:{dmg:"34", s:"i11~33", note:{en:["Tornado","6 chip damage on block"],de:["Tornado","6 Chip auf Block"]}},
  bkp3:{dmg:"30", s:"i24~27", note:{en:["Balcony Break","Low crush 15~40","Floating state 41~43"],de:["Balcony Break","Low Crush 15~40","Floating State 41~43"]}},
  bkp4:{dmg:"30", s:"i18~23", note:{en:["Tornado","Knee","Low crush 17~52","Floating state 53~55"],de:["Tornado","Knie","Low Crush 17~52","Floating State 53~55"]}},
  bkp12:{dmg:"20, 3", s:"i34~71", note:{en:["Weapon"],de:["Weapon"]}}
};
Object.keys(EXTRA).forEach(function(id){ if(MOVES[id]) Object.assign(MOVES[id], EXTRA[id]); });
Object.assign(MOVES, {
  /* ---- standing normals & strings ---- */
  high2:{n:"2", cat:"poke", lv:2, lev:"High", s:"i12", b:"-6", h:"+5", dmg:"10", p:["High"]},
  mid3:{n:"3", cat:"poke", lv:2, lev:"Mid", s:"i13~14", b:"-12", h:"-1", dmg:"10", p:["Mid"]},
  s12d2:{n:"1,2,d+2", cat:"low", lv:2, lev:"High,High,Low", s:"i10, i27~28", b:"-11", h:"+2", ch:"+33a", dmg:"5, 10, 17", p:["Low"], note:{en:["Combo from 2nd CH","Input can be delayed 8f","Move can be delayed 7f"],de:["Combo aus 2. CH","Eingabe bis 8f verz\u00f6gerbar","Move bis 7f verz\u00f6gerbar"]}},
  s12d2h:{n:"1,2,d+2*", cat:"low", lv:3, lev:"High,High,Low", s:"i10, i36~37", b:"-10", h:"+34a", dmg:"5, 10, 22", p:["Low","Launch"], note:{en:["Held/delayed version, launches on hit","Input can be delayed 8f","Move can be delayed 7f"],de:["Gehaltene/verz\u00f6gerte Version, launcht auf Hit","Eingabe bis 8f verz\u00f6gerbar","Move bis 7f verz\u00f6gerbar"]}},
  f233:{n:"f+2,3,3", cat:"ch", lv:2, lev:"Mid,High,Mid", s:"i17~18, i35~36", b:"-10", h:"+12a (-3)", dmg:"12, 8, 22", p:["Balcony break"], note:{en:["Balcony Break","Combo from 2nd hit"],de:["Balcony Break","Combo aus 2. Hit"]}},
  f3:{n:"f+3", cat:"poke", lv:2, lev:"High", s:"i14~15", b:"-14", h:"-3", dmg:"10", p:["High"]},
  f312:{n:"f+3,1+2", cat:"ch", lv:2, lev:"High,Mid", s:"i14~15, i24~25", b:"-13", h:"+8", dmg:"10, 25", p:["Balcony break","Weapon"], note:{en:["Balcony Break","Weapon","Combo from 1st hit","7 chip damage on block (12 in Heat)","Hit vs back-turned +15a (+6)"],de:["Balcony Break","Weapon","Combo aus 1. Hit","7 Chip auf Block (12 in Heat)","Gegen Backturned +15a (+6)"]}},
  f414:{n:"f+4,1,4", cat:"ch", lv:3, lev:"Mid,High,Mid", s:"i16, i27~65", b:"-12~+26g", h:"+1a", dmg:"14, 14, 24 (19)", p:["Launch"], note:{en:["Aerial combo from 2nd hit","Explosion move with travel/bounce timing"],de:["Aerial-Combo aus 2. Hit","Explosions-Move mit Travel-/Bounce-Timing"]}},
  f34t:{n:"f+3+4", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Movement / stance transition","Low crush 26~54","Floating state 55~57"],de:["Movement / Stance-\u00dcbergang","Low Crush 26~54","Floating State 55~57"]}},
  d2:{n:"d+2", cat:"ch", lv:2, lev:"Mid", s:"i24~26", b:"-14", h:"+2c", dmg:"8", p:["Floor break"], note:{en:["Floor Break"],de:["Floor Break"]}},
  d12t:{n:"d+1+2", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 DBT"], note:{en:["Transition to r30 with db or d+1+2","Transition to DBT with DES.f+3_f+4"],de:["\u00dcbergang zu r30 mit db oder d+1+2","In DBT mit DES.f+3_f+4"]}},
  db1:{n:"db+1", cat:"bkp", lv:2, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 BKP","High crush"], note:{en:["Enters Backup / crouch","Transition to FC with D (or after d+3 BKP transition)","Can perform WS moves after 24 frames","High crush 4~15"],de:["Geht in Backup / Duck","In FC mit D (oder nach d+3-BKP-\u00dcbergang)","WS-Moves ab Frame 24 m\u00f6glich","High Crush 4~15"]}},
  db2:{n:"db+2", cat:"poke", lv:2, lev:"Mid", s:"i18~19", b:"-18", h:"-5", dmg:"10", p:["Mid"]},
  b13pP:{n:"b+1+3,P", cat:"ch", lv:3, lev:"Mid", s:"i20~21", b:"\u2014", h:"-5a (-14)", ch:"+27a (-20)", dmg:"25", p:["Balcony break","High crush"], note:{en:["Follow-up hit after the b+1+3 high parry","Balcony Break","Interrupt with i2 or i19 mid extension after parry","High crush 1~39"],de:["Folge-Hit nach der b+1+3-High-Parry","Balcony Break","Mit i2 oder i19 nach der Parry unterbrechbar","High Crush 1~39"]}},
  b2:{n:"b+2", cat:"poke", lv:2, lev:"Mid", s:"i18", b:"-9", h:"+1", dmg:"12", p:["Mid"]},
  b3434:{n:"b+3+4,3+4", cat:"launch", lv:3, lev:"Mid,Mid", s:"i18~19, i56~61", b:"+5c~+10c", h:"+59a", dmg:"22, 37 (25)", p:["Spike","Launch","Low crush"], note:{en:["Spike","Aerial combo from 1st hit","Low crush 1~58","Floating state 59~61"],de:["Spike","Aerial-Combo aus 1. Hit","Low Crush 1~58","Floating State 59~61"]}},
  ub1:{n:"ub+1", cat:"ch", lv:2, lev:"Mid,Mid", s:"i19", b:"-7", h:"+8c", ch:"+33d", dmg:"9, 9", p:["Floor break","Weapon"], note:{en:["Floor Break","Weapon","2 chip damage on block"],de:["Floor Break","Weapon","2 Chip auf Block"]}},
  ub4:{n:"ub+4", cat:"poke", lv:2, lev:"Mid", s:"i18", b:"-9", h:"+7", dmg:"10", p:["Low crush"], note:{en:["Low crush 9~31","Floating state 32~34"],de:["Low Crush 9~31","Floating State 32~34"]}},
  ub41:{n:"ub+4,1", cat:"ch", lv:3, lev:"Mid,Mid", s:"i18, i25~27", b:"-21", h:"-8", dmg:"10, 12", p:["High crush"], note:{en:["Combo from 1st CH","High crush 24~"],de:["Combo aus 1. CH","High Crush 24~"]}},
  ub411:{n:"ub+4,1,1", cat:"ch", lv:3, lev:"Mid,Mid,Mid", s:"i18, i21", b:"-20", h:"-9", dmg:"10, 12, 9", p:["Elbow"], note:{en:["Elbow","Combo from 2nd hit","Combo from 1st CH"],de:["Ellbogen","Combo aus 2. Hit","Combo aus 1. CH"]}},
  ub4112:{n:"ub+4,1,1,2", cat:"ch", lv:3, lev:"Mid,Mid,Mid,High", s:"i18, i24~25", b:"-10", h:"+1", dmg:"10, 12, 9, 5", p:["Pressure"], note:{en:["Combo from 3rd hit","Combo from 1st CH"],de:["Combo aus 3. Hit","Combo aus 1. CH"]}},
  ub41121:{n:"ub+4,1,1,2,1", cat:"ch", lv:3, lev:"...,High", s:"i18, i35~36", b:"-9", h:"+7", dmg:"...,5", p:["Balcony break"], note:{en:["Balcony Break (airborne)"],de:["Balcony Break (airborne)"]}},
  ub411211:{n:"ub+4,1,1,2,1,1", cat:"ch", lv:3, lev:"...,Mid", s:"i18, i32~33", b:"-14", h:"-3", dmg:"...,3,3,3", p:["Spike","Weapon"], note:{en:["Spike","Weapon","Combo from 5th hit","1 chip damage on block (3 in Heat)"],de:["Spike","Weapon","Combo aus 5. Hit","1 Chip auf Block (3 in Heat)"]}},
  ub41121134:{n:"ub+4,1,1,2,1,1,3+4", cat:"ch", lv:3, lev:"...,Low", s:"i18, i27~28", b:"-29", h:"+15a", dmg:"...,7", p:["Launch"], note:{en:["Floating state 5~50"],de:["Floating State 5~50"]}},
  ub41121134_3:{n:"ub+4,1,1,2,1,1,3+4,3", cat:"ch", lv:3, lev:"...,Mid", s:"i18, i20~21", b:"-65", h:"-40", dmg:"...,15", p:["Low crush"], note:{en:["Combo from 7th hit","Low crush 9~"],de:["Combo aus 7. Hit","Low Crush 9~"]}},
  ub41121134_32:{n:"ub+4,1,1,2,1,1,3+4,3,2", cat:"ch", lv:3, lev:"...,Mid", s:"i18, i17~22", b:"-30", h:"-38a (-45)", dmg:"...,20", p:["Low crush"], note:{en:["Combo from 8th hit","Available only as combo from previous hit","Low crush 1~"],de:["Combo aus 8. Hit","Nur als Combo aus dem vorherigen Hit","Low Crush 1~"]}},
  ub41121134_322:{n:"ub+4,1,1,2,1,1,3+4,3,2,2", cat:"ch", lv:3, lev:"...,Mid,Mid,High,High", s:"i18, i13~16", b:"-23", h:"+3a (-15)", dmg:"...,2,2,2,20", p:["Weapon"], note:{en:["Weapon","Combo from 9th hit","Last chainsaw hit rarely connects (high hitbox), -17 if blocked","1 chip damage on block (3 in Heat)","Low crush 16~"],de:["Weapon","Combo aus 9. Hit","Letzter Kettens\u00e4gen-Hit trifft selten (hohe Hitbox), -17 bei Block","1 Chip auf Block (3 in Heat)","Low Crush 16~"]}},
  ub34:{n:"ub+3+4", cat:"launch", lv:2, lev:"Mid", s:"i37~39", b:"+2c~+4c", h:"+25a", dmg:"25", p:["Spike","Low crush"], note:{en:["Spike","Low crush 5~39"],de:["Spike","Low Crush 5~39"]}},
  ub3412:{n:"ub+3+4,1+2", cat:"launch", lv:3, lev:"Mid,Mid", s:"i37~39, i26~27", b:"-14", h:"+32a (+22)", dmg:"25, 20", p:["Head","Low crush"], note:{en:["Head","Low crush 48~67","Floating state 68~70"],de:["Head","Low Crush 48~67","Floating State 68~70"]}},
  uf3:{n:"uf+3", cat:"special", lv:3, lev:"Mid", s:"i17~18", b:"-52", h:"-25", dmg:"15", p:["\u2192 SBT","\u2192 DBT","Low crush"], note:{en:["Transition to SBT with 3_4","Transition to DBT with f+3_f+4","On whiff: low crush 9~31, floating 32~34","On hit/block: low crush 9~61, floating 62~64"],de:["In SBT mit 3_4","In DBT mit f+3_f+4","Bei Whiff: Low Crush 9~31, Floating 32~34","Bei Hit/Block: Low Crush 9~61, Floating 62~64"]}},
  uf34:{n:"uf+3+4", cat:"launch", lv:2, lev:"Mid", s:"i38~40", b:"+0~+3", h:"+9", dmg:"20", p:["Spike","Low crush"], note:{en:["Spike","Low crush 9~41"],de:["Spike","Low Crush 9~41"]}},
  univ1234:{n:"1+2+3+4", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 DES","Low crush"], note:{en:["Cannot block for 5 seconds","Counter-hit state for 5 seconds","Transition to DES with 1+2","Low crush 11~49","Floating state 50~52"],de:["Kann 5 Sekunden nicht blocken","Counter-Hit-State f\u00fcr 5 Sekunden","In DES mit 1+2","Low Crush 11~49","Floating State 50~52"]}},
  bbwall14:{n:"b,B+1+4", cat:"special", lv:3, lev:"High (unblockable)", s:"i63~84", b:"\u2014", h:"+37a (-18)", dmg:"50", p:["Balcony break","Weapon","Low crush"], note:{en:["Unblockable","Balcony Break","Weapon","Low crush 12~79","Floating state 80~82"],de:["Unblockbar","Balcony Break","Weapon","Low Crush 12~79","Floating State 80~82"]}},
  bbwall23:{n:"b,B+2+3", cat:"special", lv:3, lev:"Mid (unblockable)", s:"i75~76", b:"\u2014", h:"+44", dmg:"50", p:["Balcony break","Head"], note:{en:["Unblockable","Balcony Break","Head"],de:["Unblockbar","Balcony Break","Head"]}},
  ff344:{n:"f,F+3,4,4", cat:"launch", lv:3, lev:"Mid,High,Mid", s:"i18~19, i27~29", b:"-10", h:"+20a", dmg:"12, 15, 25", p:["Balcony break","\u2192 DES"], note:{en:["Balcony Break","Combo from 2nd hit","Enter DES with 1+2"],de:["Balcony Break","Combo aus 2. Hit","In DES mit 1+2"]}},
  ff12:{n:"f,F+1+2", cat:"ch", lv:2, lev:"Mid,Mid", s:"i17~18, i12~13", b:"-9", h:"+4", ch:"+13", dmg:"5, 10", p:["Pressure"], note:{en:["13 extra damage on counter-hit (28 total)"],de:["13 extra Schaden auf Counter-Hit (28 gesamt)"]}},
  fff12:{n:"f,f,F+1+2", cat:"special", lv:3, lev:"Mid", s:"i18~36", b:"-3", h:"-17a (-26)", dmg:"24", p:["Balcony break","Low crush"], note:{en:["Balcony Break","Punishable with toekick on hit","Low crush 5~36","Floating state 37~67"],de:["Balcony Break","Auf Hit mit Toekick bestrafbar","Low Crush 5~36","Floating State 37~67"]}},
  ws123:{n:"ws1,2,3", cat:"launch", lv:2, lev:"Mid,High,Mid", s:"i13~14, i25~26", b:"-10", h:"+33a (+23)", dmg:"12, 12, 23", p:["Launch","\u2192 DES"], note:{en:["Combo from 2nd CH with 5f delay","Input can be delayed 10f","Enter DES with 1+2"],de:["Combo aus 2. CH mit 5f Delay","Eingabe bis 10f verz\u00f6gerbar","In DES mit 1+2"]}},
  ws12a:{n:"ws1+2*", cat:"poke", lv:2, lev:"Mid", s:"i28~29", b:"-4", h:"+21", dmg:"24", p:["Homing"], note:{en:["Homing","Charged version \u2014 hold the input to power up"],de:["Homing","Geladene Version \u2014 Eingabe halten zum Aufladen"]}},
  ws12b:{n:"ws1+2**", cat:"poke", lv:3, lev:"Mid", s:"i39~40", b:"+0", h:"+33a", dmg:"28", p:["Homing","Launch"], note:{en:["Homing","Full charge \u2014 launches on hit","11 chip damage on block"],de:["Homing","Voll geladen \u2014 launcht auf Hit","11 Chip auf Block"]}},
  ss412:{n:"SS.4,1+2", cat:"low", lv:3, lev:"Low,High,High,High,Mid", s:"i24~25, i18~19", b:"-10", h:"+8", dmg:"16, 5,5,5,5", p:["Spike","Low crush","High crush"], note:{en:["Spike","Combo from 1st CH","High crush 6~35 (1st hit)","Low crush 15~34","Floating state 35~37"],de:["Spike","Combo aus 1. CH","High Crush 6~35 (1. Hit)","Low Crush 15~34","Floating State 35~37"]}},
  fcd2:{n:"FC.d+2", cat:"low", lv:2, lev:"Special low", s:"i11", b:"-4", h:"+7", dmg:"8", p:["High crush"], note:{en:["High crush 1~"],de:["High Crush 1~"]}},
  fcd4:{n:"FC.d+4", cat:"low", lv:2, lev:"Low", s:"i12", b:"-15", h:"-4", dmg:"6", p:["High crush"], note:{en:["High crush 1~"],de:["High Crush 1~"]}},
  backwall:{n:"(Back to wall).b,b,UB", cat:"special", lv:3, lev:"\u2014", s:"i8~13", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Wall-jump escape / setup","Low crush 14~57","Floating state 58~60"],de:["Wand-Absprung / Setup","Low Crush 14~57","Floating State 58~60"]}},
  bt4:{n:"BT.4", cat:"special", lv:2, lev:"Mid", s:"i16~17", b:"-3", h:"+19a (+2)", dmg:"20", p:["Balcony break","High crush"], note:{en:["Back-turned kick","Balcony Break","High crush 5~12"],de:["Backturned-Kick","Balcony Break","High Crush 5~12"]}},
  hd12:{n:"H.d+1+2", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Power crush"], note:{en:["Heat-only absorbing stance","Cancel to r30 with db","Consumes 60F of remaining Heat time","75% damage reduction when absorbing attacks","Absorbed damage is recoverable","Automatic standing guard frames 1~5","Power crush 6~30"],de:["Nur in Heat \u2014 absorbierende Stance","Cancel zu r30 mit db","Verbraucht 60F verbleibende Heat-Zeit","75% Schadensreduktion beim Absorbieren","Absorbierter Schaden ist erholbar","Automatischer Stand-Guard Frames 1~5","Power Crush 6~30"]}},
  hf14:{n:"H.f+1+4", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Heat move","Consumes 150F of remaining Heat time","Low crush 18~40","Floating state 41~43"],de:["Heat-Move","Verbraucht 150F verbleibende Heat-Zeit","Low Crush 18~40","Floating State 41~43"]}},
  hff212:{n:"H.f,F+2,1+2", cat:"special", lv:3, lev:"Mid,Mid", s:"i16~17, i22~23", b:"+3", h:"+25a (-1)", dmg:"18, 28", p:["Balcony break","Weapon","Heat"], note:{en:["Heat dash string","Balcony Break","Weapon","Combo from 1st hit","7 chip damage on block","Consumes 210F of remaining Heat time","Low crush 15~"],de:["Heat-Dash-String","Balcony Break","Weapon","Combo aus 1. Hit","7 Chip auf Block","Verbraucht 210F verbleibende Heat-Zeit","Low Crush 15~"]}},
  hfc12:{n:"hFC.1+2", cat:"special", lv:3, lev:"Low,Low", s:"i21~23, i6~8", b:"-11c", h:"+5c", dmg:"10, 16", p:["\u2192 DES","High crush"], note:{en:["Heat crouching low","Enter DES with n,1+2","Can be done from Crouch Level 1","High crush 1~55"],de:["Heat-Duck-Low","In DES mit n,1+2","Aus Crouch Level 1 m\u00f6glich","High Crush 1~55"]}},
  /* ---- Clockwork / spin (CLK) ---- */
  clk2spin3:{n:"CLK(Two spins).3", cat:"clk", lv:3, lev:"Mid", s:"i13~14", b:"+0", h:"+63a (+43)", dmg:"22", p:["Balcony break","Launch"], note:{en:["After two or more spins","Balcony Break","Effective startup is around i32~33","8 chip damage on block"],de:["Nach zwei oder mehr Spins","Balcony Break","Effektiver Startup ca. i32~33","8 Chip auf Block"]}},
  clk3:{n:"CLK.3", cat:"clk", lv:2, lev:"Mid", s:"i13~14", b:"-9", h:"+12g", dmg:"20", p:["Balcony break","Tailspin"], note:{en:["Strong Aerial Tailspin","Balcony Break","Combo from 1st hit","Powers up after 2 or more spins","Interrupt with i8 from 1st block"],de:["Starker Aerial-Tailspin","Balcony Break","Combo aus 1. Hit","St\u00e4rker nach 2 oder mehr Spins","Mit i8 aus 1. Block unterbrechbar"]}},
  clkB:{n:"CLK.B", cat:"clk", lv:2, lev:"Mid", s:"i19~20", b:"-12", h:"-1", dmg:"18", p:["Mid"], note:{en:["Cancel with B"],de:["Cancel mit B"]}},
  clkd3:{n:"CLK.d+3", cat:"clk", lv:2, lev:"Low", s:"i30~31", b:"-12", h:"+73a (+57)", dmg:"20", p:["Low","High crush","Launch"], note:{en:["Spinning low, launches on hit","8 chip damage on block","High crush 9~"],de:["Dreh-Low, launcht auf Hit","8 Chip auf Block","High Crush 9~"]}},
  /* ---- Dual Boot (DBT) ---- */
  dbt1:{n:"DBT.1", cat:"dbt", lv:2, lev:"High ×6", s:"i24~28", b:"+9", h:"+11g", dmg:"30", p:["Weapon","Jails","Low crush"], note:{en:["Chainsaw jab string","Weapon","Jail from 1st attack","3 chip damage on block (12 in Heat)","Low crush 17~34","Floating state 35~37"],de:["Kettens\u00e4gen-Jab-String","Weapon","Jailt aus dem 1. Angriff","3 Chip auf Block (12 in Heat)","Low Crush 17~34","Floating State 35~37"]}},
  dbt2:{n:"DBT.2", cat:"dbt", lv:2, lev:"Mid,Mid,High,High,High", s:"i16~18", b:"-14", h:"+32a (+14)", dmg:"25", p:["Weapon","Jails","Launch"], note:{en:["Weapon","Jail from 1st attack","2 chip damage on block (4 in Heat)","Low crush 17~66","Floating state 67~69"],de:["Weapon","Jailt aus dem 1. Angriff","2 Chip auf Block (4 in Heat)","Low Crush 17~66","Floating State 67~69"]}},
  dbt21:{n:"DBT.2,1", cat:"dbt", lv:3, lev:"...,High", s:"i16~18, i26~28", b:"-11c", h:"+14a", dmg:"25, 45", p:["Balcony break","Spike"], note:{en:["Balcony Break","Spike","-28 on whiff","13 chip damage on block (18 in Heat)","Low crush 17~100","Floating state 101~103"],de:["Balcony Break","Spike","-28 bei Whiff","13 Chip auf Block (18 in Heat)","Low Crush 17~100","Floating State 101~103"]}},
  dbt3:{n:"DBT.3", cat:"dbt", lv:2, lev:"Low", s:"i16~20", b:"-14", h:"+4c~+8c", ch:"+28a", dmg:"17", p:["Low","Low crush","High crush"], note:{en:["Frame advantage +8c~+12c on shallow hit, +32 on CH","Listed states are on hit only","Low crush 26~34","High crush 35~","Floating state 34~38"],de:["Frame-Vorteil +8c~+12c bei flachem Hit, +32 bei CH","Angegebene States nur auf Hit","Low Crush 26~34","High Crush 35~","Floating State 34~38"]}},
  dbt4:{n:"DBT.4", cat:"dbt", lv:2, lev:"Mid", s:"i17~19", b:"-27", h:"+68a", dmg:"22, 5", p:["Launch","Low crush"], note:{en:["Steel pedal","Low crush 17~62","Floating state 63~65"],de:["Steel Pedal","Low Crush 17~62","Floating State 63~65"]}},
  dbt12:{n:"DBT.1+2", cat:"dbt", lv:2, lev:"Mid,Mid,Mid,Mid", s:"i12~15", b:"+0", h:"+21a (+0)", dmg:"5,5,5,20", p:["Balcony break","Spike","Weapon","Jails"], note:{en:["Balcony Break","Spike","Weapon","Jail from 1st attack","6 chip damage on block (9 in Heat)","Low crush 17~66","Floating state 67~69"],de:["Balcony Break","Spike","Weapon","Jailt aus dem 1. Angriff","6 Chip auf Block (9 in Heat)","Low Crush 17~66","Floating State 67~69"]}},
  dbtf1:{n:"DBT.f+1", cat:"dbt", lv:3, lev:"Mid + throw", s:"i19~21", b:"-9", h:"+0d", dmg:"49", p:["Weapon","Attack throw","Low crush"], note:{en:["Weapon","Attack throw on front standing or airborne hit","14 damage +3c vs back-turned opponent","4 chip damage on block (7 in Heat)","Low crush 17~32","Floating state 33~35"],de:["Weapon","Attack-Throw bei Front-Stand- oder Airborne-Hit","14 Schaden +3c gegen Backturned","4 Chip auf Block (7 in Heat)","Low Crush 17~32","Floating State 33~35"]}},
  dbtf2:{n:"DBT.f+2", cat:"dbt", lv:2, lev:"Low", s:"i19~20", b:"-12", h:"+6c", dmg:"13", p:["Weapon","Low"], note:{en:["Weapon","3 chip damage on block (5 in Heat)"],de:["Weapon","3 Chip auf Block (5 in Heat)"]}},
  dbtf22:{n:"DBT.f+2,2", cat:"dbt", lv:3, lev:"Low,Mid", s:"i19~20, i35~37", b:"-33", h:"-6a (-13)", dmg:"13, 25 (17)", p:["Balcony break","Weapon"], note:{en:["Balcony Break","Weapon","Combo from 1st hit","7 chip damage on block (10 in Heat)","Low crush 35~67","Floating state 68~70"],de:["Balcony Break","Weapon","Combo aus 1. Hit","7 Chip auf Block (10 in Heat)","Low Crush 35~67","Floating State 68~70"]}},
  dbtf12:{n:"DBT.f+1+2", cat:"dbt", lv:2, lev:"Mid ×5", s:"i17~18", b:"+4", h:"+25a (-1)", dmg:"28", p:["Balcony break","Weapon","Low crush"], note:{en:["Balcony Break","Weapon","8 chip damage on block","Low crush 1~"],de:["Balcony Break","Weapon","8 Chip auf Block","Low Crush 1~"]}},
  /* ---- Destructive Form (DES) ---- */
  des1:{n:"DES.1", cat:"des", lv:2, lev:"Mid,Mid,High,High,High,Mid", s:"i13~18", b:"-9", h:"+17a", dmg:"35", p:["Weapon"], note:{en:["Chainsaw rush","Weapon","3 chip damage on block (7 in Heat)","Final hit available only on hit"],de:["Kettens\u00e4gen-Rush","Weapon","3 Chip auf Block (7 in Heat)","Letzter Hit nur auf Hit"]}},
  des2:{n:"DES.2", cat:"des", lv:2, lev:"Mid,Mid,Mid", s:"i20~21", b:"-8", h:"+37a (+27)", dmg:"5,5,5", p:["Weapon","Launch"], note:{en:["Weapon","Jab evasion","2 chip damage on block (8 in Heat)"],de:["Weapon","Jab-Evasion","2 Chip auf Block (8 in Heat)"]}},
  des21:{n:"DES.2,1", cat:"des", lv:3, lev:"...,High (unblockable)", s:"i20~21, i28~56", b:"\u2014", h:"+85a (+69)", dmg:"5,5,5, 20", p:["Tornado","Weapon"], note:{en:["Tornado","Weapon","Available only as a combo from 1st hit"],de:["Tornado","Weapon","Nur als Combo aus dem 1. Hit"]}},
  desBT1:{n:"DES.BT.1", cat:"des", lv:3, lev:"Mid ×6", s:"i19~22", b:"-9", h:"+25a", dmg:"4,4,4,4,4,4", p:["Weapon"], note:{en:["Back-turned chainsaw","Weapon","Combo from any hit","1 chip damage on block (11 in Heat)"],de:["Backturned-Kettens\u00e4ge","Weapon","Combo aus jedem Hit","1 Chip auf Block (11 in Heat)"]}},
  desb2:{n:"DES.b+2", cat:"des", lv:2, lev:"Mid", s:"i18~20", b:"-12", h:"+0", ch:"+18a", dmg:"17", p:["Weapon"], note:{en:["Weapon","5 chip damage on block (6 in Heat)"],de:["Weapon","5 Chip auf Block (6 in Heat)"]}},
  desb21:{n:"DES.b+2,1", cat:"des", lv:3, lev:"Mid,Mid,Low ×4", s:"i18~20, i20~21", b:"-3c", h:"+5", dmg:"17, 8,5,5,5,5", p:["Spike","Weapon"], note:{en:["Spike","Weapon","Combo from 1st hit with 17f delay","Move can be delayed 10f","Input can be delayed 23f","3 chip damage on block (7 in Heat)"],de:["Spike","Weapon","Combo aus 1. Hit mit 17f Delay","Move bis 10f verz\u00f6gerbar","Eingabe bis 23f verz\u00f6gerbar","3 Chip auf Block (7 in Heat)"]}},
  desb3:{n:"DES.b+3", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Evasive movement","Low crush 7~33","Floating state 34~36"],de:["Ausweich-Movement","Low Crush 7~33","Floating State 34~36"]}},
  desd1:{n:"DES.d+1", cat:"des", lv:2, lev:"Low ×5", s:"i20~24", b:"-13", h:"+4", dmg:"17", p:["Weapon","Low","High crush"], note:{en:["Chainsaw low","Weapon","Combo from any hit","1 chip damage on block (6 in Heat)","High crush 4~48"],de:["Kettens\u00e4gen-Low","Weapon","Combo aus jedem Hit","1 Chip auf Block (6 in Heat)","High Crush 4~48"]}},
  desd2:{n:"DES.d+2", cat:"des", lv:2, lev:"Low,Low,Low", s:"i22~23", b:"-14", h:"+0c", dmg:"3,3,17", p:["Homing","Weapon","\u2192 DBT","High crush"], note:{en:["Homing","Weapon","Combo from any hit","Transition to DBT (-22/+4) with 3_4","5 chip damage on block (7 in Heat)","High crush 22~91"],de:["Homing","Weapon","Combo aus jedem Hit","In DBT (-22/+4) mit 3_4","5 Chip auf Block (7 in Heat)","High Crush 22~91"]}},
  desd3:{n:"DES.d+3", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 DBT","Low crush"], note:{en:["DES.d+3_4 goes foreground, DES.u+3_4 goes background","Transition to r20 DBT with 3_4","Low crush 5~22","Floating state 23~25"],de:["DES.d+3_4 nach vorne, DES.u+3_4 nach hinten","In r20 DBT mit 3_4","Low Crush 5~22","Floating State 23~25"]}},
  desd31:{n:"DES.d+3,1", cat:"des", lv:3, lev:"Mid", s:"i20~21", b:"-13", h:"+14c", dmg:"25", p:["Balcony break","Weapon"], note:{en:["Balcony Break","Weapon","7 chip damage on block (12 in Heat)"],de:["Balcony Break","Weapon","7 Chip auf Block (12 in Heat)"]}},
  desf1:{n:"DES.f+1", cat:"des", lv:2, lev:"High", s:"i11~13", b:"+3", h:"+9", dmg:"21", p:["Weapon"], note:{en:["Fast chainsaw jab","Weapon","1 chip damage on block (7 in Heat)"],de:["Schneller Kettens\u00e4gen-Jab","Weapon","1 Chip auf Block (7 in Heat)"]}},
  desf2:{n:"DES.f+2", cat:"des", lv:2, lev:"Mid,Mid", s:"i15", b:"-9", h:"+0c", dmg:"9", p:["Weapon"], note:{en:["Weapon","Timestop on hit","2 chip damage on block (3 in Heat)"],de:["Weapon","Timestop auf Hit","2 Chip auf Block (3 in Heat)"]}},
  desf21:{n:"DES.f+2,1", cat:"des", lv:3, lev:"Mid,Mid,Mid,Mid", s:"i15, i23", b:"-12", h:"-3c", dmg:"9, 9", p:["Weapon"], note:{en:["Weapon","Combo from 1st hit with ~1f delay","Move cannot be delayed","Timestop on hit","2 chip damage on block (3 in Heat)","In Heat: transition to r20 DBT with 3_4"],de:["Weapon","Combo aus 1. Hit mit ~1f Delay","Move nicht verz\u00f6gerbar","Timestop auf Hit","2 Chip auf Block (3 in Heat)","In Heat: in r20 DBT mit 3_4"]}},
  desf212:{n:"DES.f+2,1,2", cat:"des", lv:3, lev:"...,Mid,Mid", s:"i15, i23~24", b:"-13", h:"+30a", dmg:"9, 9, 23", p:["Heat engager","Weapon"], note:{en:["Heat Engager","Heat Dash +5, +62a (+42)","Weapon","Combo from 1st or 2nd CH with ~3f delay","Move cannot be delayed","6 chip damage on block (7 in Heat)"],de:["Heat Engager","Heat Dash +5, +62a (+42)","Weapon","Combo aus 1. oder 2. CH mit ~3f Delay","Move nicht verz\u00f6gerbar","6 Chip auf Block (7 in Heat)"]}},
  desf3:{n:"DES.f+3", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Cancel to r33 standing block with DBT.B","Transition to Evasive Action / SS with DBT.u_d","Low crush 18~40","Floating state 41~43"],de:["Cancel zu r33 Stand-Block mit DBT.B","In Evasive Action / SS mit DBT.u_d","Low Crush 18~40","Floating State 41~43"]}},
  desf12:{n:"DES.f+1+2", cat:"des", lv:2, lev:"Mid ×8", s:"i23~27", b:"+1", h:"+33a", dmg:"29", p:["Weapon","\u2192 DBT"], note:{en:["Weapon","Combo from any hit","Transition to DBT (+4/+36a) with 3_4","5 chip damage on block (8 in Heat)"],de:["Weapon","Combo aus jedem Hit","In DBT (+4/+36a) mit 3_4","5 Chip auf Block (8 in Heat)"]}},
  desf1212:{n:"DES.f+1+2,1+2", cat:"des", lv:3, lev:"...,Mid", s:"i23~27, i20~26", b:"-53", h:"+41a", dmg:"29, 20", p:["Weapon"], note:{en:["Weapon","6 chip damage on block (10 in Heat)"],de:["Weapon","6 Chip auf Block (10 in Heat)"]}},
  desuf2:{n:"DES.uf+2", cat:"des", lv:3, lev:"High ×5", s:"i10~14", b:"\u2014", h:"+35a (+28)", dmg:"5,5,5,5,5", p:["Weapon"], note:{en:["Weapon","Only hits airborne opponents"],de:["Weapon","Trifft nur Gegner in der Luft"]}},
  desuf12:{n:"DES.uf+1+2", cat:"des", lv:3, lev:"Mid,Mid,Mid", s:"i29~31", b:"-9c", h:"+23a", dmg:"27", p:["Spike","Weapon","Low crush"], note:{en:["Spike","Weapon","2 chip damage on block (6 in Heat)","Cancel to standing with DES.1+2","Low crush 5~25","Floating state 26~28"],de:["Spike","Weapon","2 Chip auf Block (6 in Heat)","Cancel in den Stand mit DES.1+2","Low Crush 5~25","Floating State 26~28"]}},
  /* ---- Single Boot (SBT) ---- */
  sbt1:{n:"SBT.1", cat:"sbt", lv:2, lev:"Mid", s:"i13~14", b:"-15", h:"+0", dmg:"12", p:["Low crush"], note:{en:["Low crush 26~46","Floating state 47~49"],de:["Low Crush 26~46","Floating State 47~49"]}},
  sbt12:{n:"SBT.1,2", cat:"sbt", lv:2, lev:"Mid,Mid", s:"i13~14, i18~19", b:"-9", h:"+2", ch:"+7c", dmg:"12, 13", p:["Spike","Low crush"], note:{en:["Spike","Combo from 1st hit with 1f delay","Rest of the string is natural on CH","Low crush 26~64","Floating state 65~67"],de:["Spike","Combo aus 1. Hit mit 1f Delay","Rest des Strings natural auf CH","Low Crush 26~64","Floating State 65~67"]}},
  sbt121:{n:"SBT.1,2,1", cat:"sbt", lv:3, lev:"Mid,Mid,Mid", s:"i13~14, i20~21", b:"-12", h:"-20", ch:"-12", dmg:"12, 13, 7", p:["Low crush"], note:{en:["Combo from 2nd CH","Less safe on hit than on block without CH","Low crush 26~102","Floating state 103~105"],de:["Combo aus 2. CH","Auf Hit weniger safe als auf Block ohne CH","Low Crush 26~102","Floating State 103~105"]}},
  sbt12134:{n:"SBT.1,2,1,3+4", cat:"sbt", lv:3, lev:"Mid,Mid,Mid,Mid", s:"i13~14, i18", b:"-18", h:"+4a (-13)", dmg:"12, 13, 7, 33", p:["Balcony break","\u2192 DES"], note:{en:["Balcony Break","Combo from 3rd hit","Combo from 2nd CH","Transition to DES with SBT.1,2,1,3+4,1+2","Low crush 26~150","Floating state 151~153"],de:["Balcony Break","Combo aus 3. Hit","Combo aus 2. CH","In DES mit SBT.1,2,1,3+4,1+2","Low Crush 26~150","Floating State 151~153"]}},
  sbt2:{n:"SBT.2", cat:"sbt", lv:2, lev:"Mid", s:"i16~27", b:"-8", h:"+6a (-4)", dmg:"25", p:["Balcony break","Elbow","\u2192 DES","Low crush"], note:{en:["Balcony Break","Elbow","Transition to DES with SBT.1+2","Hitstop 20f on hit","Low crush 26~63","Floating state 64~66"],de:["Balcony Break","Ellbogen","In DES mit SBT.1+2","Hitstop 20f auf Hit","Low Crush 26~63","Floating State 64~66"]}},
  sbt3:{n:"SBT.3", cat:"sbt", lv:2, lev:"Low", s:"i16~20", b:"-14", h:"+4c~+8c", ch:"+28a", dmg:"17", p:["Low","Low crush","High crush"], note:{en:["Frame advantage +8c~+12c on shallow hit, +32 on CH","Listed states are on hit only","Low crush 26~34","High crush 35~","Floating state 34~38"],de:["Frame-Vorteil +8c~+12c bei flachem Hit, +32 bei CH","Angegebene States nur auf Hit","Low Crush 26~34","High Crush 35~","Floating State 34~38"]}},
  sbt4:{n:"SBT.4", cat:"sbt", lv:2, lev:"Mid", s:"i17~19", b:"-27", h:"+68a", dmg:"22, 5", p:["Launch","Low crush"], note:{en:["Steel pedal","Low crush 26~71","Floating state 72~74"],de:["Steel Pedal","Low Crush 26~71","Floating State 72~74"]}},
  sbt12b:{n:"SBT.1+2", cat:"sbt", lv:3, lev:"High (unblockable)", s:"i27~28", b:"\u2014", h:"+8", dmg:"20", p:["Balcony break","Weapon","Low crush"], note:{en:["Balcony Break","Weapon","Low crush 26~53"],de:["Balcony Break","Weapon","Low Crush 26~53"]}},
  sbtD:{n:"SBT.D", cat:"sbt", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 BKP","High crush"], note:{en:["Transition to r32 BKP with B (Backswing)","High crush 34~"],de:["In r32 BKP mit B (Backswing)","High Crush 34~"]}},
  /* ---- situational / special ---- */
  fuft12:{n:"FUFT.1+2", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Low crush"], note:{en:["Face-up feet-toward wakeup option","Floating state 1~5","Low crush 6~40","Floating state 41~43"],de:["Aufsteh-Option (Face-up, F\u00fc\u00dfe voran)","Floating State 1~5","Low Crush 6~40","Floating State 41~43"]}},
  fuft123:{n:"FUFT.1+2,3", cat:"special", lv:3, lev:"Mid", s:"i22~23", b:"-10", h:"+60a", dmg:"35", p:["Balcony break","Launch","Low crush"], note:{en:["Balcony Break","Floating state 1~5","Low crush 6~54","Floating state 55~57"],de:["Balcony Break","Floating State 1~5","Low Crush 6~54","Floating State 55~57"]}},
  otgdb12:{n:"OTG.db+1+2", cat:"special", lv:3, lev:"Low", s:"i25~27", b:"-14", h:"+4a", dmg:"25", p:["Spike","Weapon","Low"], note:{en:["Ground hit (opponent lying down)","Spike","Weapon"],de:["Bodentreffer (Gegner liegt)","Spike","Weapon"]}},
  /* ---- throws ---- */
  backthrow:{n:"Back throw", cat:"throw", lv:2, lev:"Throw", s:"\u2014", b:"\u2014", h:"+0d", dmg:"55", p:["Floor break","Throw"], note:{en:["Floor Break","Throw break: none (unbreakable)","Opponent recovery: face-down feet-away","Side switch"],de:["Floor Break","Wurf-Break: keiner (unbrechbar)","Gegner-Recovery: Face-down, F\u00fc\u00dfe weg","Seitenwechsel"]}},
  leftthrow:{n:"Left throw", cat:"throw", lv:2, lev:"Throw", s:"\u2014", b:"-3", h:"-5d", dmg:"40", p:["Throw"], note:{en:["Throw break: 1","Opponent recovery: face-down feet-away","Can side switch on hit"],de:["Wurf-Break: 1","Gegner-Recovery: Face-down, F\u00fc\u00dfe weg","Kann bei Hit die Seite wechseln"]}},
  rightthrow:{n:"Right throw", cat:"throw", lv:2, lev:"Throw", s:"\u2014", b:"-3", h:"+0d", dmg:"40", p:["Floor break","Throw"], note:{en:["Floor Break","Throw break: 2","Opponent recovery: face-up feet-away, perpendicular to Alisa"],de:["Floor Break","Wurf-Break: 2","Gegner-Recovery: Face-up, F\u00fc\u00dfe weg, quer zu Alisa"]}},
  fcdb12:{n:"FC.db+1+2", cat:"throw", lv:3, lev:"Throw", s:"i11", b:"-4", h:"-4", dmg:"45", p:["Throw"], note:{en:["Crouching command throw","Throw break: 1+2","Opponent recovery: face-up feet-away","Side switch"],de:["Geduckter Command-Throw","Wurf-Break: 1+2","Gegner-Recovery: Face-up, F\u00fc\u00dfe weg","Seitenwechsel"]}}
});
Object.assign(MOVES, {
  univ123:{n:"1+2+3", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["\u2192 DES"], note:{en:["Can transition to DES with held input 1+2"],de:["Kann mit gehaltenem 1+2 in DES \u00fcbergehen"]}},
  univ124:{n:"1+2+4", cat:"special", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Taunt"], note:{en:["Taunt / stance input"],de:["Taunt / Stance-Eingabe"]}},
  des3:{n:"DES.3", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Movement"], note:{en:["Destructive Form movement / spacing tool"],de:["Destructive-Form-Movement / Spacing-Tool"]}},
  desbb:{n:"DES.b,b", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Movement"], note:{en:["Backdash out of Destructive Form"],de:["Backdash aus der Destructive Form"]}},
  desff:{n:"DES.f,f", cat:"des", lv:3, lev:"\u2014", s:"\u2014", b:"\u2014", h:"\u2014", dmg:"\u2014", p:["Movement"], note:{en:["Dash forward in Destructive Form"],de:["Vorw\u00e4rts-Dash in der Destructive Form"]}}
});
var CATS = [
  {id:"jab", name:{en:"Jabs & fast pokes",de:"Jabs & schnelle Pokes"}},
  {id:"poke", name:{en:"Mid pokes & pressure",de:"Mid-Pokes & Druck"}},
  {id:"keepout", name:{en:"Keepout & long range",de:"Keepout & Long Range"}},
  {id:"low", name:{en:"Lows",de:"Lows"}},
  {id:"launch", name:{en:"Launchers (block-punish)",de:"Launcher (Block-Punish)"}},
  {id:"whiff", name:{en:"Whiff punishers",de:"Whiff-Punisher"}},
  {id:"ch", name:{en:"Counterhit & frame traps",de:"Counterhit & Frame-Traps"}},
  {id:"homing", name:{en:"Homing & anti-sidestep",de:"Homing & Anti-Sidestep"}},
  {id:"combo", name:{en:"Combo tools & chains",de:"Combo-Tools & Ketten"}},
  {id:"throw", name:{en:"Throws",de:"Würfe"}},
  {id:"des", name:{en:"Destructive Form (DES)",de:"Destructive Form (DES)"}},
  {id:"bkp", name:{en:"Backup stance (BKP)",de:"Backup-Stance (BKP)"}},
  {id:"sbt", name:{en:"Single Boot (SBT)",de:"Single Boot (SBT)"}},
  {id:"dbt", name:{en:"Dual Boot (DBT)",de:"Dual Boot (DBT)"}},
  {id:"clk", name:{en:"Clockwork / spin (CLK)",de:"Clockwork / Spin (CLK)"}},
  {id:"special", name:{en:"Heat, Rage & special",de:"Heat, Rage & Spezial"}}
];
var CHAINLBL = { ub4:{en:"ub+4,1,1,2,1,1,3+4,3,2,2 \u2014 10-hit combo",de:"ub+4,1,1,2,1,1,3+4,3,2,2 \u2014 10-Hit-Combo"} };
(function reCategorize(){
  var CATMAP={
    jab:["jab","c11","s12","high2"],
    poke:["df1","df4","df3","df11","df112","df14","f2","f3","f32","f41","f233","s23","mid3","db2","b1","b2","ws1","ws12s","ws3","ws4"],
    keepout:["ff2","ff34","ff344","fff3"],
    low:["d4","d3","db4","db3","d34","ss4","s234","df33","d412","fcd1","fcd3","s12d2","s12d2h","ss412","fcd2","fcd4"],
    launch:["df2","uf4","uf44","s22","s233","f12","uf1","m12","f21","f312","d24","b112","b23","b34","u12","uf32","b3434","ub34","ub3412","uf34","ws123","ws2","b44"],
    whiff:["wr2","fff34","ff23"],
    ch:["s122","f23","db22","b43","b21","b24","b4","b13p","b13pP","ub2","pc","ub1","ff4","ff12","f414","d2"],
    homing:["k4","c32","b3","uf2","ws12","ws12a","ws12b"],
    combo:["ub4","ub41","ub411","ub4112","ub41121","ub411211","ub41121134","ub41121134_3","ub41121134_32","ub41121134_322"],
    special:["f34t","d12t","uf3","univ1234","bbwall14","bbwall23","fff12","backwall","bt4","hd12","hf14","hff212","hfc12","fuft12","fuft123","otgdb12","univ123","univ124","hb","hs","ra"]
  };
  Object.keys(CATMAP).forEach(function(c){ CATMAP[c].forEach(function(id){ if(MOVES[id]) MOVES[id].cat=c; }); });
  CATMAP.combo.forEach(function(id){ if(MOVES[id]) MOVES[id].chain="ub4"; });
  var LONG=["wr2","ff2","ff23","ff34","ff344","ff4","ff12","fff3","fff34","fff12","b3","bbwall14","bbwall23","backwall"];
  var SHORT=["jab","c11","s12","high2","s122","s12d2","s12d2h","s23","s233","s234","mid3","df1","df11","df112","df14","df2","df3","df4","df33","d2","d24","d3","d4","d34","d412","db1","db2","db22","db3","db4","ws1","ws12s","ws123","ws2","ws3","ws4","ws12","ws12a","ws12b","ss4","ss412","fcd1","fcd2","fcd3","fcd4","t13","t24","tuf12","backthrow","leftthrow","rightthrow","fcdb12"];
  Object.keys(MOVES).forEach(function(id){ MOVES[id].rng = /^(des|bkp|sbt|dbt|clk)/.test(id) ? "s" : "m"; });
  LONG.forEach(function(id){ if(MOVES[id]) MOVES[id].rng="l"; });
  SHORT.forEach(function(id){ if(MOVES[id]) MOVES[id].rng="s"; });
})();
(function patchData(){
  function P(id,o){ if(MOVES[id]) Object.assign(MOVES[id], o); }
  /* throws \u2014 character-relevant descriptions */
  P("t13",{dmg:"35", note:{en:["Generic throw \u2014 same animation on either side","Break with 1 or 2","Homing \u2014 catches sidesteps","Opponent lands face-down, feet toward you","Sides switch on break"],de:["Generischer Wurf \u2014 gleiche Animation auf beiden Seiten","Brechbar mit 1 oder 2","Homing \u2014 f\u00e4ngt Sidesteps","Gegner landet mit dem Gesicht nach unten, F\u00fc\u00dfe zu dir","Seitenwechsel beim Break"]}});
  P("t24",{dmg:"35", note:{en:["Generic throw \u2014 same animation on either side","Break with 1 or 2","Homing \u2014 catches sidesteps","Floor Break","Opponent lands face-down, feet toward you","Sides switch","Transition to DES with 1+2"],de:["Generischer Wurf \u2014 gleiche Animation auf beiden Seiten","Brechbar mit 1 oder 2","Homing \u2014 f\u00e4ngt Sidesteps","Floor Break","Gegner landet mit dem Gesicht nach unten, F\u00fc\u00dfe zu dir","Seitenwechsel","In DES mit 1+2"]}});
  P("tuf12",{dmg:"40", note:{en:["Command throw \u2014 unique animation","Break with 1+2 only","Opponent lands face-up, feet toward you","+3 on hit"],de:["Command-Throw \u2014 eigene Animation","Nur mit 1+2 brechbar","Gegner landet mit dem Gesicht nach oben, F\u00fc\u00dfe zu dir","+3 auf Hit"]}});
  /* DES.1+2 \u2014 was missing damage & notes */
  P("des12",{dmg:"7,7,20", note:{en:["Homing","Balcony Break","Weapon","Jails","6 chip damage on block (12 in Heat)"],de:["Homing","Balcony Break","Weapon","Jailt","6 Chip auf Block (12 in Heat)"]}});
  /* b+1+3 is the parry itself \u2014 no damage on its own */
  P("b13p",{dmg:"\u2014"});
  /* DES.uf+2 \u2014 special high, only hits airborne */
  P("desuf2",{lev:{en:"High \u00d75 (airborne only)",de:"High \u00d75 (nur gegen Luft)"}});
  /* transitions / movement / stance \u2014 replace \u2014 with a meaningful label */
  P("f34t",{lev:{en:"Transition",de:"Transition"}});
  P("d12t",{lev:{en:"Transition",de:"Transition"}});
  P("db1",{lev:{en:"Stance entry",de:"Stance-Einstieg"}});
  P("univ1234",{lev:{en:"Self-buff",de:"Self-Buff"}});
  P("backwall",{lev:{en:"Wall option",de:"Wand-Option"}});
  P("hd12",{lev:{en:"Heat stance",de:"Heat-Stance"}});
  P("hf14",{lev:{en:"Heat move",de:"Heat-Move"}});
  P("desb3",{lev:{en:"Movement",de:"Movement"}});
  P("desd3",{lev:{en:"Movement",de:"Movement"}});
  P("desf3",{lev:{en:"Movement",de:"Movement"}});
  P("sbtD",{lev:{en:"Stance",de:"Stance"}});
  P("fuft12",{lev:{en:"Wakeup",de:"Aufsteh-Option"}});
  P("univ123",{lev:{en:"Stance transition",de:"Stance-\u00dcbergang"}});
  P("univ124",{lev:{en:"Taunt",de:"Taunt"}});
  P("des3",{lev:{en:"Movement",de:"Movement"}});
  P("desbb",{lev:{en:"Movement",de:"Movement"}});
  P("desff",{lev:{en:"Movement",de:"Movement"}});
  /* bare pokes \u2014 short character-relevant notes */
  P("d4",{note:{en:["Quick i17 low poke","Safe-ish at \u221212 \u2014 good for chip and stealing turns"],de:["Schneller i17-Low-Poke","Bei \u221212 grenzwertig \u2014 gut f\u00fcr Chip und Turn-Stealing"]}});
  P("df3",{note:{en:["i16 mid poke, \u22129 on block","Leads into df+3,3 for a low mix"],de:["i16-Mid-Poke, \u22129 auf Block","Leitet in df+3,3 f\u00fcr einen Low-Mix"]}});
  P("ws4",{note:{en:["Your fastest while-standing move (i11)","Solid mid check after blocking a low"],de:["Dein schnellster While-Standing-Move (i11)","Solider Mid-Check nach geblocktem Low"]}});
  P("high2",{note:{en:["Standard i12 high","Starts the 2,3 and 2,2 strings"],de:["Standard-i12-High","Startet die 2,3- und 2,2-Strings"]}});
  P("mid3",{note:{en:["i13 mid, slightly minus","Starts the 3,2 Heat Engager"],de:["i13-Mid, leicht minus","Startet den 3,2-Heat-Engager"]}});
  P("f3",{note:{en:["i14 high, \u221214 on block","Starts f+3,2 and f+3,1+2"],de:["i14-High, \u221214 auf Block","Startet f+3,2 und f+3,1+2"]}});
  P("db2",{note:{en:["i18 mid, unsafe at \u221218","Mainly a starter for db+2,2"],de:["i18-Mid, unsafe bei \u221218","Vor allem Starter f\u00fcr db+2,2"]}});
  P("b2",{note:{en:["i18 mid, \u22129 on block","Starts b+2,1 / b+2,3 / b+2,4"],de:["i18-Mid, \u22129 auf Block","Startet b+2,1 / b+2,3 / b+2,4"]}});
  /* string duckability \u2014 the info that actually helps defense */
  P("df11",{note:{en:["2nd hit is HIGH \u2014 duckable after df+1","+1 on block, so it is a frame trap, not a guaranteed blockstring","Combo from 1st counter-hit","Balcony Break when it catches an airborne opponent","Move cannot be delayed"],de:["2. Hit ist HIGH \u2014 nach df+1 duckbar","+1 auf Block \u2014 also Frame-Trap, kein garantierter Blockstring","Combo aus dem 1. Counter-Hit","Balcony Break bei Airborne-Treffer","Move nicht verz\u00f6gerbar"]}});
  P("df112",{lev:{en:"Mid, High, High",de:"Mid, High, High"}, note:{en:["2nd and 3rd hits are HIGH \u2014 a ducking opponent ducks them and can launch you","+6 on block, but only if they block instead of ducking","Best as a frame trap or once you have conditioned them to block","Weapon","Cancel into DES with 1+2","2 chip damage on block (8 in Heat)"],de:["2. und 3. Hit sind HIGH \u2014 ein duckender Gegner weicht aus und kann launchen","+6 auf Block \u2014 aber nur wenn geblockt statt geduckt wird","Am besten als Frame-Trap oder wenn du sie aufs Blocken konditioniert hast","Weapon","In DES mit 1+2 canceln","2 Chip auf Block (8 in Heat)"]}});
  P("c11",{note:{en:["Both hits are HIGH \u2014 duckable","Combo from 1st hit with 4f delay","Input can be delayed 8f","Enter DES with 1+2"],de:["Beide Hits sind HIGH \u2014 duckbar","Combo aus 1. Hit mit 4f Delay","Eingabe bis 8f verz\u00f6gerbar","In DES mit 1+2"]}});
  P("s12",{note:{en:["Both hits are HIGH \u2014 duckable","Jails from the 1st hit with a 4f delay","Use 1,2,d+2 instead to catch duckers with a low"],de:["Beide Hits sind HIGH \u2014 duckbar","Jailt aus dem 1. Hit mit 4f Delay","Nutze stattdessen 1,2,d+2, um Ducker mit einem Low zu fangen"]}});
  P("s122",{note:{en:["All three hits are HIGH \u2014 fully duckable","Tornado \u2014 use it as a read / frame trap, not a raw blockstring","Balcony Break when it hits airborne","Weapon","Combo from 2nd counter-hit with 1f delay","6 chip damage on block"],de:["Alle drei Hits sind HIGH \u2014 komplett duckbar","Tornado \u2014 als Read / Frame-Trap nutzen, nicht als reinen Blockstring","Balcony Break bei Airborne-Treffer","Weapon","Combo aus 2. Counter-Hit mit 1f Delay","6 Chip auf Block"]}});
  /* KEY MOVES \u2014 Alisa's essentials that stay relevant from beginner to GoD */
  var KEYS={
    df1:{en:"Your best mid poke \u2014 fast, +5 on hit, safe.",de:"Dein bester Mid-Poke \u2014 schnell, +5 auf Hit, safe."},
    df2:{en:"Standard i16 launcher & whiff punisher.",de:"Standard-i16-Launcher & Whiff-Punisher."},
    df3:{en:"Mid that leads into the df+3,3 low mix.",de:"Mid, der in den df+3,3-Low-Mix f\u00fchrt."},
    df4:{en:"Fast i12 mid poke to check buttons.",de:"Schneller i12-Mid-Poke zum Buttons-Checken."},
    d2:{en:"Floor-break mid, huge on counter-hit.",de:"Floor-Break-Mid, riesig auf Counter-Hit."},
    b1:{en:"Long-range mid poke / keepout.",de:"Mid-Poke mit Reichweite / Keepout."},
    b3:{en:"Homing mid \u2014 shuts down sidesteps.",de:"Homing-Mid \u2014 stoppt Sidesteps."},
    k4:{en:"i13 homing kick, +21 vs back-turned.",de:"i13-Homing-Kick, +21 gegen Backturned."},
    c32:{en:"Homing Heat Engager off the 3 poke.",de:"Homing-Heat-Engager aus dem 3-Poke."},
    ws2:{en:"Your main while-standing launcher.",de:"Dein Haupt-While-Standing-Launcher."},
    wr2:{en:"Dash/whiff-punish launcher with big range.",de:"Dash-/Whiff-Punish-Launcher mit viel Reichweite."},
    s233:{en:"Tailspin launcher & combo staple.",de:"Tailspin-Launcher & Combo-Baustein."},
    uf4:{en:"Hopkick \u2014 i15 launcher, low-crushes.",de:"Hopkick \u2014 i15-Launcher, low-crusht."},
    d3:{en:"Key low that recovers into Backup.",de:"Wichtiger Low, der in Backup l\u00e4uft."},
    db4:{en:"Range low that high-crushes.",de:"Reichweiten-Low, der high-crusht."},
    m12:{en:"Heat Engager launcher (1+2).",de:"Heat-Engager-Launcher (1+2)."},
    f21:{en:"Heat Engager off f+2.",de:"Heat-Engager aus f+2."},
    b23:{en:"Tornado launcher from b+2.",de:"Tornado-Launcher aus b+2."},
    b44:{en:"Tornado launcher into the boots.",de:"Tornado-Launcher in die Boots."},
    d34:{en:"Homing instant-Tornado low.",de:"Homing-Instant-Tornado-Low."},
    ws4:{en:"Fastest while-standing check (i11).",de:"Schnellster While-Standing-Check (i11)."},
    pc:{en:"Power crush to blow through pressure.",de:"Power Crush, um durch Druck zu brechen."}
  };
  Object.keys(KEYS).forEach(function(id){ if(MOVES[id]){ MOVES[id].key=1; MOVES[id].keytip=KEYS[id]; } });
})();
export { MOVES, WARN, CATS, CHAINLBL };
