#include <iostream>
#include <string>
#include <cstring>

void reverseString(char*, int);

int main(){
    char buffer[100];
    strcpy(buffer, "sdrawkcab");
    reverseString(buffer, strlen(buffer));
    std::cout << buffer << "\n";
}

void reverseString(char* string, int length){
    
    for(int i = 0; i < length/2; i++){
        std::swap(string[i], string[length - i - 1]);
    }
}