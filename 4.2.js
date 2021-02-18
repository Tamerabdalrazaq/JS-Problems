function fibonacci(sign, n){
    let trio = [...sign];
    if(n<3){
        return trio.slice(0,n)
    }
    for(let x = 3; x<n; x++){
        trio.push(trio[x-1] + trio[x-2] + trio[x-3]);
    }
    return trio;
}


console.log(fibonacci([1,1,1],5));