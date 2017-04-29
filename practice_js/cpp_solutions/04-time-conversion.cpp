#include <iostream>
#include <cstdlib>
#include <stdio.h>


void convertTime(int minutes);

int main(int argc, char* argv[]){
    if (argc != 2){
        std::cerr << "Usage: " << argv[0] << " integer(# of minutes) " << std::endl;
    }
    
    int intValue = atoi(argv[1]);
    convertTime(intValue);
    return 0;
}

void convertTime(int minutes){
    int hrs = minutes/60;
    int mins = minutes%60;
    
    printf("The time conversion for %d is %d:%02d.\n",minutes,hrs,mins);  
}