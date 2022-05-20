function encrypt(text, n) {
    if (n === undefined || n < 1) {
        return null;
    }

    let leftSide = '';
    let rightSide = '';
    let newStr = text;
    let counter = n;

    while (counter > 0) {
        console.log(newStr);
        for (let i = 0; i < newStr.length; i++) {
            if (i % 2 === 0) {
                rightSide += newStr[i];
            }
            else {
                leftSide += newStr[i];
            }
        }
        counter--;
        newStr = leftSide + rightSide;
        leftSide = '';
        rightSide = '';
    }
    return newStr;
}

function decrypt(text, n) {
    if (n === undefined || n < 1) {
        return null;
    }

    let leftSide = '';
    let newStr = text;
    let counter = n;
    let middle = Math.floor(text.length / 2);
    console.log('====================================');
    console.log(middle);
    console.log('====================================');

    while (counter > 0) {
        if (text.length % 2 === 0) {
            for (let i = 0; i < middle; i++) {
                leftSide += newStr[middle + i] + newStr[i];
            }
        }
        else {
            for (let i = 0; i <= middle; i++) {
                if (i === middle) {
                    leftSide += newStr[middle + i];
                }
                else {
                    leftSide += newStr[middle + i] + newStr[i];
                }
            }
        }
        counter--;
        newStr = leftSide;
        leftSide = '';
    }
    return newStr;
}

console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));