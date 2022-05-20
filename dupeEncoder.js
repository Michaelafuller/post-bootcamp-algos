function duplicateEncode(word) {
    let wordStr = word.toLowerCase();
    let compObj = {};
    let newStr = '';

    for (let i = 0; i < wordStr.length; i++) {
        if (compObj.hasOwnProperty(wordStr[i])) {
            compObj[wordStr[i]]++;
        }
        else {
            compObj[wordStr[i]] = 1;
        }
    }

    console.log(compObj);

    for (let i = 0; i < wordStr.length; i++) {
        if (compObj[wordStr[i]] > 1) {

            newStr += ')';
        }
        else {
            newStr += '('
        }
    }

    return newStr;
}

console.log(duplicateEncode('recede'));