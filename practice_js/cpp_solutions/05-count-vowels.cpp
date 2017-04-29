#include <iostream>
#include <string.h>

void countVowels(char* string);

int main(){
    char buffer[100];
    strcpy(buffer,"This sentence has 7 vowels.");
    countVowels(buffer);
    strcpy(buffer,"abc");
    countVowels(buffer);
    strcpy(buffer,"");
    countVowels(buffer);
}

void countVowels(char* string){
    int vowelCount = 0;
    for(int i = 0; i < strlen(string); i++){
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            vowelCount += 1;
        }
    }
    
    std::cout << "There are " << vowelCount << " vowels in the input " << string << std::endl;
}