function abbrv(str){
    let words = str.split(' ');
    return words[0].charAt(0).toUpperCase() + '.' + words[1].charAt(0).toUpperCase();
}


console.log(abbrv('tamer abd'));