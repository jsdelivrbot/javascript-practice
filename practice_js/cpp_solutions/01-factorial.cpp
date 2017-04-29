#include <iostream>
#include <cstdlib>

int factorial(int);

int main(int argc, char* argv[]){
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << "number" << std::endl;
        return 1;
    }
    int intValue = atoi(argv[1]);

    int fact = factorial(intValue);
    
    std::cout << "The factorial for " << argv[1] << " is " << fact << std::endl;
}

int factorial(int n){
    if (n == 0) {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}