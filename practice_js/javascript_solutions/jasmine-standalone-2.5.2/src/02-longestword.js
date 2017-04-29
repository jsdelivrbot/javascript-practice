function longestWord(string){
    return string.split(" ").reduce((largest,current) => {return current.length > largest.length ? current : largest;},"");
}