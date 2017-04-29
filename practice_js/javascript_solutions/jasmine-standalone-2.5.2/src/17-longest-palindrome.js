// // # Write a method that takes in a string of lowercase letters (no
// # uppercase letters, no repeats). Consider the *substrings* of the
// # string: consecutive sequences of letters contained inside the string.
// # Find the longest such string of letters that is a palindrome.
// #
// # Note that the entire string may itself be a palindrome.

function longestPalindrome(string){
    var letters = string.split("")
    var pal = ""
    for(var idx1 = 0; idx1 < letters.length ;idx1++){
      for(var idx2 = idx1 + 1; idx2 < letters.length; idx2++){
        if (palindrome(letters.substring(idx1,idx2)) && letters[idx1,idx2].length > pal.length){
          pal = letters[idx1,idx2];
        }
      }
    }
    return palindrome;
}
 
function palindrome(string){
  if (string === string.split("").reverse().join("")){
    return true;
  }
  else{
    return false;
  }
}