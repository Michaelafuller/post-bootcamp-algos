function abbreviate(string) {
    let splitStr = string.split(" ");
    let counter = 0;
    let returnStr = '';

    for (let j = 0; j < splitStr.length; j++) {
        if (splitStr[j].length <= 3) {
            continue;
        }
        else {
            for (let i = 1; i < splitStr[j].length; i++) {

            }
        }
    }

    return splitStr;
}

console.log(abbreviate("You need, need not want, to complete this code-wars mission"));