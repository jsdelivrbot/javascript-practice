#include <stdio.h>
#include <string.h>

int most_letters(char s[]);

int main(){
  char buffer[100];
  strcpy(buffer, "abcz");
  most_letters(buffer);

  strcpy(buffer, "zbca");
  most_letters(buffer);

  strcpy(buffer, "z");
  most_letters(buffer);

  strcpy(buffer, "abz");
  most_letters(buffer);
}

int most_letters(char s[]){
  for(int i = 0;  i < strlen(s); i++){
    if(s[i] == 'a'){
      if (s[i+1] == 'z' || s[i+2] == 'z' || s[i+3] == 'z'){
        printf("%s passes the a-z test\n", s);
        return 1;
      }
    }
  }
  printf("%s does not pass the a-z test\n", s);
  return 0;
}
