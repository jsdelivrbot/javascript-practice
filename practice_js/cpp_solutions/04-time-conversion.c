#include <stdio.h>
void time_conversion(int minutes);
int main(){
    
    time_conversion(150);
    
    time_conversion(360);
    
    time_conversion(15);
    

}

void time_conversion(int minutes){
    
    int hours = minutes / 60;
    int mins = minutes % 60;
    
    printf("It is %.2d:%.2d \n",hours,mins);
}