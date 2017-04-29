//the parity of a binary number is 1 if the number of 1's in the binary representation of the number is odd, it is 0 if not
#include <iostream>
#include <cstdlib>

short parity(int);

int main(int argc, char* argv[]){
    if(argc != 2){
        std::cout << "Usage: " << argv[0] << "some integer" << std::endl;
    }
    else{
        int intValue = atoi(argv[1]);
        short par = parity(intValue);
        std::cout << "The parity of " << intValue << " is " << par << std::endl;
        return 0;
    }
}

short parity(int x){
    short result = 0;
    while(x){
        result ^= (x & 1); //XOR assignment, result is only 1 if x is not 1!
        x >>= 1; // decrement x by 1
    }
    return result;
}