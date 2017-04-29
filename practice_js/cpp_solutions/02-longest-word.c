#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char * longest_word(char string[]);

int main(){
    char string[100];
    
    strcpy(string, "this is a testing sentence");
    char * long_word = longest_word(string);
    printf("the longest word in %s is %s\n", string, long_word);
    
    strcpy(string, "howaboutthisword in a testing sentence");
    long_word = longest_word(string);
    printf("the longest word in %s is %s\n", string, long_word);
    
}

char * longest_word(char string[]){
    int longest = 0;
    char * long_word;
    const char s[2] = " ";
    char *token;
    
     /* get the first token */
    token = strtok(string, s);
   
    /* walk through other tokens */
    while( token != NULL ) 
    {
      if(strlen(token) > longest){
          long_word = token;
      }
    
      token = strtok(NULL, s);
    }
   
    return long_word;
}