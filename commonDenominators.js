function convertFrac(lst) {
    let commonDenomList = [];

    for (let i = 0; i < lst.length - 1; i++) {
        for (let j = i + 1; j < lst.length; j++) {
            commonDenomList.push(lst[i][1] * lst[j][1]);
        }
    }

    for (let i = 0; i < lst.length; i++) {
        commonDenomList = commonDenomList.filter(elem => elem % lst[i][1] === 0)
    }

    let commonDenom = Math.min(...commonDenomList);
    let denomStr = '';

    for (let i = 0; i < lst.length; i++) {
        let newFraction = (commonDenom / lst[i][1]) * lst[i][0];
        denomStr += `(${newFraction},${commonDenom})`;
    }

    return denomStr;
}

console.log(convertFrac([[69, 130], [87, 1310], [3, 4]]))