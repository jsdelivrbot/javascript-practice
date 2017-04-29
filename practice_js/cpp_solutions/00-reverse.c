#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void reverse(char string[]);

int main(){
    char buffer[32];

    strcpy(buffer, "testing");
    reverse(buffer);
    printf("%s\n", buffer);
}

void reverse(char s[]){
    int length = strlen(s);
    int c, i, j;
    
    for(i = 0, j = length - 1; i < j; i++ , j--){
        c = s[i];
        s[i] = s[j];
        s[j] = c;
    }
}