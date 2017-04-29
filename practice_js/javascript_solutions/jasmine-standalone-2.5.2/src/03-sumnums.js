function sumNums(int){
    if (int == 0){
        return 0;
    }
    else{
        return int + sumNums(int - 1);
    }
}