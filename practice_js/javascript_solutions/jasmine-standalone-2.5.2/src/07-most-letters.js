// # Write a method that takes a string in and returns true if the letter
// # "z" appears within three letters **after** an "a". You may assume
// # that the string contains only lowercase letters.

function findAz(string){
  const string_arr = string.split("");
  var found = false;
  string_arr.forEach(function(character,index){
    if (character == "a"){
      if (string_arr[index + 1] == "z" || string_arr[index + 2] == "z" || string_arr[index + 3] == "z"){
        found = true;
      }
    }
  });
  return found;
}

