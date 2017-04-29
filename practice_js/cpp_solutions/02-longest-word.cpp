#include <iostream>
#include <string>
#include <cstring>
// returns longest word in sentence

void longestWord(char* sentence);

int main(){
    char buffer[200];
    strcpy(buffer, "a test sentence.");
    longestWord(buffer);
    strcpy(buffer, "bananass in pajamas are walking down the stairs.");
    longestWord(buffer);
    strcpy(buffer, "another test sentence with tremendous words.");
    longestWord(buffer);
    return 0;
}

void longestWord(char* sentence){
    char* long_word;
    const char s[2] = " ";
    char *token;
    
     /* get the first token */
    token = strtok(sentence, s);
   
    /* walk through other tokens */
    while( token != NULL ) 
    {
      if(strlen(token) > strlen(long_word)){
          long_word = token;
      }
    
      token = strtok(NULL, s);
    }
    std::cout << "The longest word in " << sentence << " is " << long_word << std::endl;
}
