#include <stdio.h>
#include <string.h>

void count_vowels(char string[]);
int check_vowel(char c);

int main(){

    char buffer[100];
    strcpy(buffer, "This sentence has nine vowels.");
    count_vowels(buffer);

    strcpy(buffer, "a");
    count_vowels(buffer);

    strcpy(buffer, "xzz");
    count_vowels(buffer);

}

void count_vowels(char *string){
    int count = 0;


    for(int i = 0; i < strlen(string); i++){
        if (check_vowel(string[i])){
            count += 1;
        }
    }
    printf("%s has %d vowels.\n", string, count);
}

int check_vowel(char c){
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y'){
        return 1;
    }
    else{
        return 0;
    }

}
