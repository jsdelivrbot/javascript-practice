function longestWord(sentence){
    return sentence.split(" ").reduce((largest,current) => {return current.length > largest.length ? current : largest;},"");
}
console.log(longestWord("these are bananas") === "bananas");
console.log(longestWord("It's time for some straight talk") === "straight");
console.log(longestWord("these are ba") === "these");