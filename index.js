function isPalindrome(word) {
  var re = /[^A-Za-z0-9]/g;
  word = word.toLowerCase().replace(re, '');
  var len = word.length;
  for (var i = 0; i < len/2; i++) {
    if (word[i] !== word[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }

/* 
Add your pseudocode here
*/

/*
Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function fetchPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
   .then(response => response.json())
   .then(function(allpokemon){
   allpokemon.results.forEach(function(pokemon){
     fetchPokemonData(pokemon); 
   })
  })
 }


