
function getEasyWord(){
  var easyWords = [
  "Apples",
  "Bananas",
  "Pears"
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
