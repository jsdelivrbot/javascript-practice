//chain two functions together, the first creates a sequence of numbers, and the second reduces the array to a sum
function sumNums(number){
   return Array.from({length: number}, (el, index) => index + 1).reduce((sum,num) => {return sum = sum + num},0);
}


console.log(sumNums(5) == 15);
console.log(sumNums(4) == 10);
console.log(sumNums(3) == 6);
console.log(sumNums(8) == 36);
