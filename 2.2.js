function binaryToInt(arr){
    return arr.reverse().reduce((sum, val, index) => sum + val*(2**index) ,0);
}