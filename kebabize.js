function kebabize(str) {
    let strArr = [];
    let tempStr = '';

    for (let i = 0; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) {
            continue;
        }
        if (str[i] === str[i].toUpperCase()) {
            if (tempStr.length > 0) {
                strArr.push(tempStr);
            }
            tempStr = '';
            tempStr += str[i].toLowerCase();
        }
        else {
            tempStr += str[i]
        }
    }

    strArr.push(tempStr);

    return strArr.join("-")
}