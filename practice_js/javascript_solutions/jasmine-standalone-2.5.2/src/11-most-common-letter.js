// # Write a method that takes in a string. Your method should return the
// # most common letter in the array, and a count of how many times it
// # appears. The function should not count spaces or punctuation.

function mostCommonLetter(string){
    var max_val = 0;
    var max = [];
    const hash = makeObject(string.split(""));
    for (var property in hash){
        var value = hash[property];
        if (value > max_val && property.match(/[a-z]/)){
            max_val = value;
            max = [property,value];
        }
    }
    
    
    return max;
}

function makeObject(array){
    var hash = {};
    array.forEach(function(element){
        if (hash.hasOwnProperty(element.toLowerCase())){
            hash[element.toLowerCase()] += 1;
        }
        else{
            hash[element.toLowerCase()] = 1;
        }
    });
    return hash;
}

