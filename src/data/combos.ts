// @ts-nocheck
var COMBOS = [
  {name:{en:"Core BnB",de:"Kern-BnB"}, from:"df+2 / uf+4,4 / b+3+4 / ws2", seq:["df+1,1","f+2,1","uf+1","f+3","DBT f+1"], tIdx:2,
    note:{en:"Your main combo from most launchers. uf+1 is the Tornado; after it, f+3 transitions to DBT, then DBT f+1 is the damage ender.",
      de:"Dein Haupt-Combo aus den meisten Launchern. uf+1 ist der Tornado; danach geht f+3 in DBT über, dann ist DBT f+1 der Schaden-Ender."}},
  {name:{en:"Simple / online",de:"Einfach / Online"}, from:"any launcher", seq:["df+1","f+2,1","uf+1","f+3"], tIdx:2,
    note:{en:"Fewer inputs, very consistent \u2014 use it online where you drop combos. Lower damage, but it almost never fails.",
      de:"Weniger Inputs, sehr konstant \u2014 nutz es online, wo du Combos dropst. Weniger Schaden, aber fällt fast nie."}},
  {name:{en:"Whiff-punish staple",de:"Whiff-Punish-Staple"}, from:"df+2 / launchers", seq:["df+2","dash","1,2,2","dash","2,3,3","dash","f,3,f,1"], tIdx:2,
    note:{en:"Your bread-and-butter off df+2. 1,2,2 is the Tornado (S!). Current-patch reference route \u2014 exact filler timing varies by launch height, confirm in the lab.",
      de:"Dein Brot-und-Butter aus df+2. 1,2,2 ist der Tornado (S!). Aktuelle-Patch-Referenzroute \u2014 exaktes Filler-Timing h\u00e4ngt von der Launch-H\u00f6he ab, im Lab best\u00e4tigen."}},
  {name:{en:"WS punish (high damage)",de:"WS-Punish (hoher Schaden)"}, from:"ws1,2,3 (after a blocked low)", seq:["ws1,2,3","uf+1","dash","f+4,1,4"], tIdx:1,
    note:{en:"~92 dmg \u2014 one of your highest non-Heat routes. After blocking a low you often stand straight into ws1,2,3. uf+1 is the Tornado.",
      de:"~92 Schaden \u2014 eine deiner h\u00f6chsten Nicht-Heat-Routen. Nach geblocktem Low stehst du oft direkt in ws1,2,3. uf+1 ist der Tornado."}},
  {name:{en:"Instant low launch",de:"Sofort-Low-Launch"}, from:"d+3+4 (instant Tornado)", seq:["d+3+4","dash","f+2,1","uf+1","f+3"], tIdx:0,
    note:{en:"d+3+4 is a homing low that tornados instantly on hit \u2014 a surprise launch starter. Dash in, then run the juggle.",
      de:"d+3+4 ist ein Homing-Low, das bei Treffer sofort tornadot \u2014 ein Überraschungs-Launch. Dash rein, dann den Juggle."}},
  {name:{en:"Wall finish",de:"Wand-Finish"}, from:"after carrying to the wall", seq:["wall splat (f+1+2)","dash","f+2,1"], tIdx:-1,
    note:{en:"At the wall, splat with f+1+2, dash in and add a quick filler. In Heat, the Heat Smash H.2+3 is your highest-damage wall ender. Exact routes depend on launch height and distance \u2014 confirm the current version in the lab.",
      de:"An der Wand mit f+1+2 splatten, reindashen und einen kurzen Filler anh\u00e4ngen. In Heat ist der Heat Smash H.2+3 dein schadensst\u00e4rkster Wand-Ender. Genaue Routen h\u00e4ngen von Launch-H\u00f6he und Distanz ab \u2014 die aktuelle Version im Lab best\u00e4tigen."}}
];
export { COMBOS };
