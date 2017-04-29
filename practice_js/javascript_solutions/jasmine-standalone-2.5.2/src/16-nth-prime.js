// # Write a method that returns the `n`th prime number. Recall that only
// # numbers greater than 1 can be prime.


function nthPrime(n){
    if (n == 1){
        return 2;
    }
    
    var increment = 3;
    var prime_count = 1;
    while(prime_count < n){
        if (isPrime(increment)){
            prime_count += 1;
        }
        increment += 1;
    }
    return increment - 1;
}

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
