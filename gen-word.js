
function getEasyWord(){
  var easyWords = [
  "wide",
  "goods",
  "tufts",
    "same",
    "cove",
    "mask",
    "gift",
    "mess",
    "drill",
    "post",
    "logs",
    "upon",
    "feet",
    "sprung",
    "plates",
    "bread",
    "loud",
    "beak",
    "foam",
    "oil",
    "also",
    "spikes",
    "smug",
    "shelter",
    "frankly",
    "found",
    "bonnet",
    "camera",
    "single",
    "Texas",
    "alas",
    "embers",
    "slumped",
    "circus",
    "imagined",
    "part",
    "nook",
    "cold",
    "much",
    "thing",
    "hike",
    "very",
    "left",
    "meet",
    "bent",
    "hat",
    "idea",
    "must",
    "zoomed",
    "matching",
    "clock",
    "flapped",
    "cog",
    "clutch",
    "gushed",
    "floor",
    "speech",
    "rapids",
    "creak",
    "knot",
    "gloves",
    "rodeo",
    "wrenches",
    "polish",
    "mumble",
    "barrels",
    "paddles",
    "blurted",
    "aware",
    "reveal",
    "mink",
    "jelly",
    "lane",
    "deer",
    "try",
    "car",
    "last",
    "rush",
    "lid",
    "mice",
    "swim",
    "singing",
    "turning",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa",
    "aaa"
];

var randomItem = easyWords[Math.floor(Math.random()*easyWords.length)];
  document.getElementById("word").innerText = randomItem;
}

function getMediumWord(){
  var mediumWords = [
  "Art",
  "Schol",
  "Medium"
];

var randomItem = mediumWords[Math.floor(Math.random()*mediumWords.length)];
  document.getElementById("word").innerText = randomItem;
}

function getHardWord(){
  var hardWords = [
  "Hard",
  "School",
  "Gymnastics"
];

var randomItem = hardWords[Math.floor(Math.random()*hardWords.length)];
  document.getElementById("word").innerText = randomItem;
}
