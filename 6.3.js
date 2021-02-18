function organize(str1, str2){
    let charObj = {};
    [...str1, ...str2 ].forEach(char => charObj[char.toLowerCase()]++ || (charObj[char.toLowerCase()] = 1));
    console.log(Object.keys(charObj).sort());
    return ('' + Object.keys(charObj).sort().join(''));
}

console.log(organize('qabc', 'xyddefg'));