#include <stdio.h>
#include <stdlib.h>

long factorial(long num);

int main(){
    printf("The factorial of 5 is %ld \n", factorial(5));
    printf("The factorial of 3628800 is %ld \n", factorial(10));
    return 0;
}

long factorial(long num){
    if(num == 1){
        return 1;
    }
    else{
        return num * factorial(num - 1);
    }
}