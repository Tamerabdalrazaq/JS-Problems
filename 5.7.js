function shortest(str){
    let words = str.split(' ').sort((a,b) => a.length - b.length); 
    return words[0].length;
}


console.log(shortest('a accaaaaaaaaaaaa qqaaaaaaaaaqqqqqqqq cccccccccccd acaaaccc wwwwwww'));