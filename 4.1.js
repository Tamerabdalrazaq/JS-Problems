function fibonacci(n){
    let duo = [0,1]
    for(let x = 2; x<=n; x++){
        let temp = duo[1];
        duo[1] = temp + duo[0];
        duo[0] = temp;
        console.log(duo)
    }
    return duo[1];
}


console.log(fibonacci(100));