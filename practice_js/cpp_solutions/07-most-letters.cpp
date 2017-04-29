#include <iostream>
#include <cstring>
#include <string>

void search_az(char*);

int main(){
    char buffer[100];
    strcpy(buffer,"abcz");
    search_az(buffer);
    strcpy(buffer,"za");
    search_az(buffer);
    strcpy(buffer,"z");
    search_az(buffer);
    strcpy(buffer,"az");
    search_az(buffer);
    strcpy(buffer,"antelope");
    search_az(buffer);
    return 0;
}

void search_az(char* string){
    std::string cplusstring = string;
    bool found = false;
    
    for(int i = 0; i < strlen(string); i++){
        if (string[i] == 'a'){
            std::string slice = cplusstring.substr(i+1,i + 4);
            for(int j = 0; j < 4; j++){
                if (slice[j] == 'z'){
                    found = true;
                    break;
                }
            }
        }
    }
    if(found){
        std::cout << "A 'z' was found within three letters of an 'a' in " << cplusstring << std::endl;
    }else{
        std::cout << "A 'z' was not found within three letters of an 'a' in " << cplusstring << std::endl;
    }
}