function toWeirdCase(str){
    let chars = [...str];
    for(let x = 0; x<chars.length; x++)
        chars[x] = x%2 ? chars[x].toLowerCase():chars[x].toUpperCase(); 
    return chars.join('');
}


console.log(toWeirdCase('Weird string case'));