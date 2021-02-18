function duplicateCount(text){
    let charObj = {};
    [...text].forEach(char => charObj[char.toLowerCase()]++ || (charObj[char.toLowerCase()] = 1));
    return Object.values(charObj).find(i => i>1) ? false: true;
}

console.log(duplicateCount('abc'));

