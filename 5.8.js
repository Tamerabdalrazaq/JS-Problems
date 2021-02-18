function shortest(words){
    words.sort((a,b) => b.length - a.length); 
    return words[0];
}


console.log(shortest(['abc','abcd','abbbbbbbbbbbbbbbbbbbbbbbb','aqqqq','']));