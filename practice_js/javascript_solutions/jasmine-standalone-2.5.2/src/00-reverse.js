function reverse(string){
    var reverse = []
    string.split("").map(ele => reverse.unshift(ele));
    return reverse.join("");
}