// # Write a method that takes in an integer `offset` and a string.
// # Produce a new string, where each letter is shifted by `offset`. You
// # may assume that the string contains only lowercase letters and
// # spaces.
// #
// # When shifting "z" by three letters, wrap around to the front of the
// # alphabet to produce the letter "c".
// #
// # You'll want to use String's `ord` method and Integer's `chr` method.
// # `ord` converts a letter to an ASCII number code. `chr` converts an
// # ASCII number code to a letter.
// #
// # You may look at the ASCII printable characters chart:
// #
// #     http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
// #
// # Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to
// # 'z' having code 122.
// #
// # You may also want to use the `%` modulo operation to handle wrapping
// # of "z" to the front of the alphabet.
function caesarCipher(offset, string){
    var new_string = [];
    string.split("").forEach(function(character){
        if(character.match(/[^a-zA-Z]/)){
            new_string.push(character);
        }
        else{
            var new_character = shift(offset,character);
            new_string.push(new_character);
        }
    });
    return new_string.join("");
}

function shift(offset, char){
    var char_int = char.charCodeAt(0) + offset;
    if (char == char.toUpperCase() ){
        if (char_int > 90){
            char_int = 64 + (char_int % 90);
        }       
    }
    else{
        if (char_int > 122){
            char_int = 96 + (char_int % 122);
        } 
    }
    return String.fromCharCode(char_int);
    
}
console.log(
  'caesarCipher(3, "abc") == "def": ' +
  (caesarCipher(3, 'abc') == 'def')
);
console.log(
  'caesarCipher(3, "abc xyz") == "def abc": ' +
  (caesarCipher(3, 'abc xyz') == 'def abc')
);