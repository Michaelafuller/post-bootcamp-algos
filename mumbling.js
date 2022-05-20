function accum(s) {
    let returnStr = '';
    let string = s.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (j > i) {
                returnStr += string[i].toUpperCase();
            }
            else {
                returnStr += string[i];
            }
        }
        if (i !== string.length - 1) {
            returnStr += '-'
        }
    }
    return returnStr;
}

console.log(accum('HbideVbxncC'));