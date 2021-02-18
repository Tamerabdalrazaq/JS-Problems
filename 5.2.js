function repeat(str,n){
    let returned = '';
    for(let x = 1; x<=n; x++){
        returned+=str;
    }
    return returned;
}


console.log(repeat('abc',5));