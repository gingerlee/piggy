var splitWord = word.split("");
var vowels = ["a", "A" "e", "E", "i", "I", "o", "O", "u", "U"];
var newWord = [];
var way = "way";


var pigWord = function(word) {
  for (var i = 0; i = [0]; i++) {
    for (var y = 0; y < vowels.length; y++) {
      if (word[i] === vowels[y]) {
      return word + way;
      }
    }
  }
};


var isAlpha = function(char) {
  if ((char >= "A") && (char <= "z"){
    return true
  }
}
