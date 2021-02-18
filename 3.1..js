function nb_year (p0, percent, aug, p){
    let count = 0;
    while(p0<p){
        p0 = p0/100*(100+percent) + aug;
        count ++;
    }
    return count;
}


console.log(nb_year(1500000, 2.5, 10000, 2000000));