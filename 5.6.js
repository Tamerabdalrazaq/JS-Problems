function maskify(str){
    let mask = '';
    for(let x =0; x<str.length; x++)
        mask += (x>=str.length -4 ? str.charAt(x): '#'); 
    return mask;
}


console.log(maskify('aaaaa'));