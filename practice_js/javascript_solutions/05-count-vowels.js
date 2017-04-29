function countVowels(string){
  return string.split("").filter(letter => "aeiou".includes(letter)).length;
}

console.log(countVowels("This sentence has 7 vowels") === 7);
console.log(countVowels("abc") === 1);
console.log(countVowels("") === 0);