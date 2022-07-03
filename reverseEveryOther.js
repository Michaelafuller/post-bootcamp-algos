function reverse(str = "") {
    if (str.length < 1) {
        return str;
    }

    let strArray = str.split(" ");

    for (let i = 0; i < strArray.length; i++) {
        if (i % 2 !== 0) {
            strArray[i] = reverseString(strArray[i]);
        }
    }

    return strArray.join(" ");
}

function reverseString(str) {
    let reversedStr = "";

    for (let i = str.length - 1; i > -1; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}