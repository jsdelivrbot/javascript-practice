// # Write a method that takes in two numbers. Return the greatest
// # integer that evenly divides both numbers. You may wish to use the
// # `%` modulo operation.
// #
function greatestCommonFactor(num1,num2){
    var larger = 0;
    var smaller = 0;
    if(num1 > num2){
        larger = num1;
        smaller = num2;
    }
    else if(num2 > larger){
        larger = num2;
        smaller = num1;
    }
    else{//they are the same number
        return num1;
    }
    var divisor = smaller;
    while(true){
        if(larger % divisor == 0 && smaller % divisor ==0){
            return divisor;
        }
        divisor --;
    }
    
}
console.log(
  'greatestCommonFactor(3, 9) == 3: ' +
  (greatestCommonFactor(3, 9) == 3)
);
console.log(
  'greatestCommonFactor(16, 24) == 8: ' +
  (greatestCommonFactor(16, 24) == 8)
);
console.log(
  'greatestCommonFactor(3, 5) == 1: ' +
  (greatestCommonFactor(3, 5) == 1)
);

