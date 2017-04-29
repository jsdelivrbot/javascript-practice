// # Write a method that takes an array of numbers. If a pair of numbers
// # in the array sums to zero, return the positions of those two numbers.
// # If no pair of numbers sums to zero, return `nil`.

function twoSum(array){
    var hash = makeObject(array);
    var hashKeys = Object.keys(hash);
    var found = [];
    hashKeys.forEach(function(key){
        var search_item = 0 - parseInt(key)
        if(hash.hasOwnProperty(search_item) && found.length == 0){
            found.push(array.indexOf(parseInt(key)));
            found.push(array.indexOf(search_item));
        }
    });
    return found;
}

function makeObject(arr){
    var hash = {};
    arr.forEach(function(element){
        if (hash[element]){
            hash[element] += 1;
        }else{
            hash[element] = 1;
        }
    });
    return hash;
}

