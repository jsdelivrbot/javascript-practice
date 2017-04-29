#include <iostream>
#include <cstdlib>

int sumNums(int value);

int main(int argc, char* argv[]){
    if (argc != 2){
        std::cerr << "Usage: " << argv[0] << "number" << std::endl;
        return 1;
    }
    int intValue = atoi(argv[1]);
    
    int sum = sumNums(intValue);
    
    std::cout << "The sum of " << intValue << " through 1 is " << sum << "\n" << std::endl;
    return 0;
}

int sumNums(int value){
    
    if (value == 1){
        return 1;
    }
    else{
        return value + sumNums(value - 1);
    }
    
}