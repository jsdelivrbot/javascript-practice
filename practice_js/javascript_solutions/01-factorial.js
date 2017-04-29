function factorial(number){
   var sum = 1;
   for(var i = 2; i <= number; i++){
       sum *= i;
   }
   return sum;
}

console.log(factorial(5));