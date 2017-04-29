function reverse(string){
    var new_string = [];
    string.split("").forEach(function(char){
       new_string.unshift(char);
    });
    return new_string.join("");
}

console.log(reverse("sdrawkcab"));
console.log(reverse("abc"));
console.log(reverse("a"));
console.log(reverse(""));