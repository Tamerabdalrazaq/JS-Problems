function summation (n){
    let sum = 0;
    for(let x = 1; x<=n; x++)
        sum += x;
    return sum;
}

console.log(summation(10));