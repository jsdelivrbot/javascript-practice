#include <stdio.h>
#include <stdlib.h>

long sum_nums(long num);

int main(){
    printf("The sum_nums of 5 is %ld \n", sum_nums(5));
    printf("The sum_nums of 10 is %ld \n", sum_nums(10));
    return 0;
}

long sum_nums(long num){
    if (num == 1){
        return 1;
    }
    else{
        return num + sum_nums(num-1);
    }
}