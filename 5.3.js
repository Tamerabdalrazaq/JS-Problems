function toCamelCase(str){
    let key = [...str].find(k => (k === '-' || k === '_'));
    let chars = str.split(key);
    for(let x = 1; x<chars.length; x++)
        chars[x] = chars[x].charAt(0).toUpperCase() + chars[x].slice(1);
    return chars.join('');
}


console.log(toCamelCase('The_Stealth_Warrior'));