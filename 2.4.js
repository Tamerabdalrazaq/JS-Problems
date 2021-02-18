function findUnique (arr){
    let index = arr.findIndex((int, index) => {
        if(index >= arr.length - 2)   
           return (int != arr[index-1] && int != arr[index-2]);
        else
           return (int != arr[index+1] && int != arr[index+2]);
       });
    return arr[index];
}