// # Write a method that takes an array of numbers in. Your method should
// # return the third greatest number in the array. You may assume that
// # the array has at least three numbers in it.

function thirdGreatest(array){
    var first = Number.NEGATIVE_INFINITY;
    var second = Number.NEGATIVE_INFINITY;
    var third = Number.NEGATIVE_INFINITY;
    
    array.forEach(function(element){
        if (element >= first){
            third = second;
            second = first;
            first = element;
        }
        else if(element >= second){
            third = second;
            second = element;
        }
        else if( element > third){
            third = element;
        }
    });
    return third;
}

console.log(thirdGreatest([5,4,3,2,1]));
console.log(thirdGreatest([1,2,3,4,5,6,7]));
console.log(thirdGreatest([55, 87, 33, 202]));
console.log(thirdGreatest([55, 87]));
