function revrot(str, sz) {
    if (sz <= 0 || !sz || sz > str.length) {
        return '';
    }
    let strArr = str.match(new RegExp(`.{${sz}}`, 'g'))

    for (let i = 0; i < strArr.length; i++) {
        let sum = 0;
        let tempStr = '';
        for (let j = 0; j < strArr[i].length; j++) {
            tempStr = strArr[i][j] + tempStr;
            sum += Math.pow(parseInt(strArr[i][j]), 3)
        }
        if (sum % 2 === 0) {
            strArr[i] = tempStr;
        }
        else {
            strArr[i] = strArr[i].split('');
            let firstItem = strArr[i].shift();
            strArr[i].push(firstItem);
            strArr[i] = strArr[i].join('');
        }
    }

    return strArr.join('')
}

console.log(revrot("123456987654", 6))