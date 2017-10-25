var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

var pigWord = function(word) {
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === word[0]){
      return word + "way"
    } else if (vowels[i] !== word[0]){
      var splitWord = word.split("");
      var firstLetter = splitWord.shift();
      var ewWord = splitWord.join("") + firstLetter + "ay";
      return ewWord
    }
  };

$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var word = $("input#piggies").val();
    var newWord = pigWord(word);
    console.log(newWord);
    debugger
  });
});





// for (var i = 0; i = [0]; i++) {
//   for (var y = 0; y < vowels.length; y++) {
//     if (word[i] === vowels[y]) {
//       newWord.push["way"]
//       var result = newWord.join()


// var isAlpha = function(char) {
//   if ((char >= "A") && (char <= "z"){
//     return true
//   }
// }
