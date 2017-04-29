#include <iostream>
#include <boost/range.hpp>

void two_sum(int*, int);

int main(){
    int test[8] = {2,3,4,5,6,-2,3,6};
    int size = boost::size(test);
    two_sum(test,size);
    return 0;
}

void two_sum(int* array, int length){
    bool found = false;
    for(int i = 0; i < length; i++){
        if (found == true){
            break;
        }
        for(int j = i+1; j < length; j++){
            int search_item = 0 - array[i];
            if (array[j] == search_item){
                found = true;
                std::cout << i << " , " << j << std::endl;
            }
        }
    }
    if (found == false){
        std::cout << "No numbers were found." << std::endl;
    }
}