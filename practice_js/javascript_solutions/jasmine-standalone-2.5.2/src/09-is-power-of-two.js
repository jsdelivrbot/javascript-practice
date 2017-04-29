// # Write a method that takes in a number and returns true if it is a
// # power of 2. Otherwise, return false.
// #
// # You may want to use the `%` modulo operation. `5 % 2` returns the
// # remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// # of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.

function powerOfTwo(num){
    var power = 0;
    while (Math.pow(2,power) <= num){
        if (Math.pow(2,power) == num){
            return true;
        }
        power += 1;
    }
    return false;
}

console.log(powerOfTwo(8));
console.log(powerOfTwo(32));
console.log(powerOfTwo(20));
