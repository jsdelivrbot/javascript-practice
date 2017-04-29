#include <stdio.h>
#include <string.h>

int palindrome(char string[]);
void reverse(char string[]);

int main(){
  char buffer[100];
  strcpy(buffer, "racecar");
  palindrome(buffer);

  strcpy(buffer, "abc");
  palindrome(buffer);

  strcpy(buffer, "abcba");
  palindrome(buffer);
}

int palindrome(char string[]){
  char buffer[32];
  strcpy(buffer, string);
  reverse(buffer);

  for(int i = 0; i < strlen(string); i++){
    if(string[i] != buffer[i]){
      printf("%s is not a palindrome\n", string);
      return 0;
    }
  }
  printf("%s is a palindrome\n", string);
  return 1;
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
