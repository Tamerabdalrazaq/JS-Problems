function duplicateCount(text){
    let charObj = {};
    [...text].forEach(char => charObj[char.toLowerCase()]++ || (charObj[char.toLowerCase()] = 1));
    return Object.values(charObj).filter(i => i>1).length;
}

console.log(duplicateCount('abcdeaaaabc'));

