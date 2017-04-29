// # Write a method that takes a string and returns the number of vowels
// # in the string. You may assume that all the letters are lower cased.
// # You can treat "y" as a consonant.
function countVowels(string){
    const count = string.split("").filter(letter => 'aeiou'.includes(letter)).length;
    return count;
}