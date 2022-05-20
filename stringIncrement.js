function incrementString(strng) {
    let newStr = '';
    let numStr = '';

    for (let i = 0; i < strng.length; i++) {
        if (isNaN(strng[i])) {
            newStr += strng[i];
        }
        else {
            numStr += strng[i];
        }
    }

    if (numStr.length === 0) {
        numStr = 1;
    }
    if (numStr.length > 0) {
        let numArr = numStr.split('');
        if (numArr[0] == 0) {
            if (numArr[numArr.length - 1] == 9) {
                for (let i = numArr.length - 1; i > -1; i--) {
                    if (numArr[i] >= 9) {
                        numArr[i - 1] = parseInt(numArr[i - 1]) + 1;
                        numArr[i] = '0';
                    }
                }
            }
            else {
                numArr[numArr.length - 1] = parseInt(numArr[numArr.length - 1]) + 1
            }
            numStr = numArr.join('')
        }
        else {
            numStr = parseInt(numStr) + 1;
        }
    }
    return newStr + numStr;

}

console.log((incrementString("foobar000")));