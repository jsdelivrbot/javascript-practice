// # Write a method that takes in an integer (greater than one) and
// # returns true if it is prime; otherwise return false.
// #
// # You may want to use the `%` modulo operation. `5 % 2` returns the
// # remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// # of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
// # More generally, if `m` and `n` are integers, `m % n == 0` if and only
// # if `n` divides `m` evenly.

function isPrime(int){
   var divisor = 2;
   while (divisor < int/2 + 1){
       if( int % divisor == 0){
           return false;
       }
   divisor += 1;
   }
   return true; // if no divisors are found
}

//export {isPrime};
