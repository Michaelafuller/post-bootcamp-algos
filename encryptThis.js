var encryptThis = function (text) {
    let textArr = text.split(" ");
    let returnArr = [];

    for (let i = 0; i < textArr.length; i++) {
        let newStr = '';

        newStr += textArr[i].charCodeAt(0);
        if (textArr[i].length > 1) {
            newStr += textArr[i][textArr[i].length - 1];
            newStr += textArr[i].substr(2, textArr[i].length - 3);
            if (textArr[i].length > 2) {
                newStr += textArr[i][1];
            }
        }

        returnArr.push(newStr);
    }

    return returnArr.join(" ");
}

console.log(encryptThis("A wise old owl lived in an oak"));