// Anagrams are two words with exactly the same letters. Order does not matter. Define a method that, given two strings, returns a boolean indicating whether they are anagrams.

function anagram(str1,str2){
    if (str1.length != str2.length){
        return false;
    }else{
        if(str1.split("").sort().join("") === str2.split("").sort().join("")){
            return true;
        }else{
            return false;
        }
    }
    
}