function trim(str){
    return [...str].slice(1,str.length).join('');
}


console.log(trim('abc'));