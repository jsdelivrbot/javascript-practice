// # Write a method that takes in a string and returns the number of
// # letters that appear more than once in the string. You may assume
// # the string contains only lowercase letters. Count the number of
// # letters that repeat, not the number of times they repeat in the
// # string.
function numRepeats(string){
    var dictionary = load_dictionary(string);
    var repeats = 0;
    for(var key in dictionary) {
        var count = dictionary[key];
        if (count > 1){
            repeats ++;
        }
    }
    return repeats;
    
}

function load_dictionary(string){
    var dictionary = {};
    string.split("").forEach(function(character){
       if (character in dictionary){
           dictionary[character] += 1;
       }
       else{
           dictionary[character] = 1;
       }
    });
    return dictionary;
}

console.log('numRepeats("abdbc") == 1: ' + (numRepeats('abdbc') == 1));
console.log('numRepeats("aaa") == 1: ' + (numRepeats('aaa') == 1));
console.log('numRepeats("abab") == 2: ' + (numRepeats('abab') == 2));
console.log('numRepeats("cadac") == 2: ' + (numRepeats('cadac') == 2));
console.log('numRepeats("abcde") == 0: ' + (numRepeats('abcde') == 0));