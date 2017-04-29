// # Write a method that takes in a string and an array of indices in the
// # string. Produce a new string, which contains letters from the input
// # string in the order specified by the indices of the array of indices.
function scramble(string,arr){
  new_arr = []
  arr.forEach((index) =>{
    new_arr.push(string[index]);
  });
  return new_arr.join("");
}

console.log(
  'scramble("abcd", [3, 1, 2, 0]) == "dbca": ' +
  (scramble("abcd", [3, 1, 2, 0]) == "dbca")
);
console.log(
  'scramble("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm"): ' +
  (scramble("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm")
);