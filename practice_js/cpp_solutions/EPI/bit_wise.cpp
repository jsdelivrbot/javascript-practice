#include <iostream>
#include <cstdlib>
#include <bitset>

short numOfBits(unsigned int);
std::string convertToBinary(int);

int main(int argc, char* argv[]){
    
    if (argc != 2){
        std::cout <<  "Usage: " << argv[0] << "number" << std::endl;
        return 1;
    }
    else{
        int num = atoi(argv[1]);
        short numBits = numOfBits(num);
        std::string bin = convertToBinary(num);
        std::cout << "The number of bits in " << num << " is " << numBits << ". The binary representation of it is " << bin << std::endl;
    }
    
}

short numOfBits(unsigned int x){
    short num_of_bits = 0;
    while(x){
        num_of_bits += x & 1;
        x >>= 1;
    }
    return num_of_bits;
}

std::string convertToBinary(int number){
    std::string binary = std::bitset<8>(number).to_string(); //to binary
    return binary;
}