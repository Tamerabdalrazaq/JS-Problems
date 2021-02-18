function myFilter(array, cbf){
    let filtered = [];
    for(let x = 0; x<array.length; x++){
        if(cbf(array[x], x))
            filtered.push(array[x]);
    }
    return filtered;
}

function myForEach(array, cbf){
    for(let x = 0; x<array.length; x++ )
        cbf(array[x], x);
}


function myMap(array, cbf){
    let returned;
    for(let x = 0; x<array.length; x++ )
        returned.push(cbf(array[x], x));
    return returned;
}
console.log(myForEach([1,2,3,4,5], (num, index) => console.log(index)));