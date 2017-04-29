// # Write a method that takes in a string of lowercase letters and
// # spaces, producing a new string that capitalizes the first letter of
// # each word.
// #
// # You'll want to use the `split` and `join` methods. Also, the String
// # method `upcase`, which converts a string to all upper case will be
// # helpful.

function capitalizeWords(string){
  var upper_case_words = string.split(" ").map(function(word){
    return word[0].toUpperCase() + word.substring(1);
  });
  return upper_case_words.join(" ");
}   

