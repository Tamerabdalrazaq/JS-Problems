function Mumbling(str){
    let chars = str.split('');
    let returned = '';
    for(let x = 0; x< str.length; x++){
        returned += chars[x].toUpperCase() + chars[x].repeat(x) + '-'; 
    }
    return returned;
}


console.log(Mumbling('abcde'));