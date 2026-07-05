// @ts-nocheck
var LEG = [
  ["u",{en:"up / jump",de:"hoch / Sprung"}],
  ["d",{en:"down / crouch",de:"runter / Hocke"}],
  ["f",{en:"forward",de:"vor"}],
  ["b",{en:"back",de:"zur\u00fcck"}],
  ["uf",{en:"up-forward = u + f",de:"vor-hoch = u + f"}],
  ["ub",{en:"up-back = u + b",de:"zur\u00fcck-hoch = u + b"}],
  ["df",{en:"down-forward = d + f",de:"vor-unten = d + f"}],
  ["db",{en:"down-back = d + b",de:"zur\u00fcck-unten = d + b"}],
  ["1",{en:"left punch",de:"linke Faust"}],
  ["2",{en:"right punch",de:"rechte Faust"}],
  ["3",{en:"left kick",de:"linker Tritt"}],
  ["4",{en:"right kick",de:"rechter Tritt"}],
  ["+",{en:"together, e.g. 1+2",de:"gleichzeitig, z.B. 1+2"}],
  [",",{en:"then, e.g. 1,2",de:"dann, z.B. 1,2"}],
  [">",{en:"cancel into, e.g. df+2 > combo",de:"canceln in, z.B. df+2 > Combo"}]
];
var LEGP = [
  ["WS",{en:"while standing (rising from crouch)",de:"beim Aufstehen aus der Hocke"}],
  ["WR",{en:"while running (f,f,F)",de:"beim Laufen (f,f,F)"}],
  ["FC",{en:"full crouch (fully ducking)",de:"Full Crouch (ganz geduckt)"}],
  ["SSL / SSR",{en:"sidestep left / right",de:"Sidestep links / rechts"}],
  ["BT",{en:"back turned",de:"R\u00fccken zum Gegner"}],
  ["CH",{en:"counterhit",de:"Counterhit"}],
  ["n",{en:"neutral (no direction)",de:"neutral (keine Richtung)"}],
  ["DES",{en:"chainsaw stance",de:"Kettens\u00e4gen-Stance"}],
  ["SBT / DBT",{en:"spin / boot stances",de:"Spin- / Boot-Stances"}],
  ["BKP",{en:"Backup stance \u2014 after d+3, or db+1",de:"Backup-Stance \u2014 nach d+3, oder db+1"}]
];
var LEGF = [
  ["i10",{en:"startup \u2014 first active frame is frame 10 (the move's speed)",de:"Startup \u2014 erster aktiver Frame ist Frame 10 (die Speed)"}],
  ["+N",{en:"YOUR turn \u2014 you recover N frames before them",de:"DEIN Zug \u2014 du erholst dich N Frames vor ihm"}],
  ["\u2212N",{en:"THEIR turn \u2014 they recover N frames before you",de:"SEIN Zug \u2014 er erholt sich N Frames vor dir"}],
  ["oB / oH",{en:"on Block / on Hit \u2014 the two columns you read",de:"on Block / on Hit \u2014 die zwei Spalten, die du liest"}]
];
var LEGS = [
  ["a",{en:"airborne \u2014 you launched them, combo time",de:"airborne \u2014 du hast gelauncht, Combo-Zeit"}],
  ["c",{en:"crouching \u2014 they recover ducking",de:"crouching \u2014 er erholt sich geduckt"}],
  ["d",{en:"down \u2014 knocked down, you get a knockdown / oki",de:"down \u2014 am Boden, du bekommst Knockdown / Oki"}],
  ["g",{en:"guard/grounded recovery (often forced crouch, e.g. at the wall)",de:"Guard-/Boden-Recovery (oft Zwangshocke, z.B. an der Wand)"}],
  ["(+N)",{en:"in brackets = when they can tech-roll \u2014 not your real advantage",de:"in Klammern = wann er techen kann \u2014 nicht dein echter Vorteil"}]
];
export { LEG, LEGP, LEGF, LEGS };
