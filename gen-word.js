
function getEasyWord(){
  var easyWords = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = easyWords[Math.floor(Math.random()*easyWords.length)];
  return randomItem;
}
