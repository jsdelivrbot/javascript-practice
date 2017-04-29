#include <iostream>
#include <string>
#include <cstring>

void palindrome(char*, char*);
void reverseString(char*, int);

int main(){
    char buffer[100];
    char reversebuffer[100];
    strcpy(buffer, "abcba");
    strcpy(reversebuffer, "abcba");
    reverseString(reversebuffer, strlen(reversebuffer));
    palindrome(buffer, reversebuffer);
    //
    strcpy(buffer, "abc");
    strcpy(reversebuffer, "abc");
    reverseString(reversebuffer, strlen(reversebuffer));
    palindrome(buffer, reversebuffer);
}

void palindrome(char* word, char* rev_word){
    std::string word_s = word, rev_s = rev_word;
    bool equal = (word_s == rev_s);
    if (equal){
        std::cout << word <<" is a palindrome" << std::endl;
    }
    else{
        std::cout << word <<" is not a palindrome" << std::endl;
    }
}


void reverseString(char* string, int length){
    
    for(int i = 0; i < length/2; i++){
        std::swap(string[i], string[length - i - 1]);
    }
}