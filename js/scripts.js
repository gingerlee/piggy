var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
// var pigPhrase = function(sentence) {
//   var pigArray = sentence.replace(/[^a-z0-9 ]+ig, "").toLowerCase().split(" ");
//   var newArray = pigArray.map(pigWord);
//   sentence = newArray.join(" ");
//   return sentence
// }



var pigWord = function(word) {
  for (var i = 0; i < vowels.length; i++) {
    debugger
    if (vowels[i] === word[0]){
      var newWord = word + "way";
    } else if ((vowels[i] !== word[0]) && (word[1] === "q") && (word[2] === "u")) {
      var newWord = word.substr(3) + word.substr(0,3) + "ay";
    } else if ((word[0] === "q") && (word[1] === "u")) {
      var newWord = word.substr(2) + word.substr(0,2) + "ay";
    } else if ((vowels[i] !== word[0]) && (vowels[i] !== word[1]) && (vowels[i] !==  word[2])) {
      var newWord = word.substr(3) + word.substr(0,3) + "ay";
    } else if ((vowels[i] !== word[0]) && (vowels[i] !== word[1])) {
      var newWord = word.substr(2) + word.substr(0,2) + "ay";
    } else if (vowels[i] !== word[0]) {
      var newWord = word.substr(1) + word.substr(0,1) + "ay";
    }
    return newWord;
  };
};
$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var word = $("input#piggies").val();
    var newWord = pigWord(word);
    $(".result").show();
    $("#pigWord").text(newWord);
  });
});




// var isAlpha = function(char) {
//   if ((char >= "A") && (char <= "z"){
//     return true
//   }
// }
