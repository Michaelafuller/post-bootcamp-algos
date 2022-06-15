// function abbreviate(string) {
//     let splitStr = string.split(" ");
//     let counter = 0;
//     let returnStr = '';

//     for (let j = 0; j < splitStr.length; j++) {
//         if (splitStr[j].length <= 3) {
//             continue;
//         }
//         else {
//             for (let i = 1; i < splitStr[j].length; i++) {

//             }
//         }
//     }

//     return splitStr;
// }

// function abbreviate(string) {
//     // let splitStr = string.split(" ");
//     let counter = 0;
//     let returnStr = string[0];

//     for (let i = 1; i < string.length - 1; i++) {
//         if (string[i + 1].match(/[a-z]/i)) {
//             counter++;
//         }
//         else {
//             returnStr += counter + string[i] + string[i + 1] + string[i + 2];
//             i += 2;
//             counter = 0;
//         }
//     }

//     returnStr += counter + string[string.length - 1]

//     return returnStr;
// }


function abbreviate(string) {
    let strArr = string.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length < 4) {
            continue;
        }
        if (/,/.test(strArr[i])) {
            strArr[i] = strArr[i].slice(0, 1) + (strArr[i].length - 3) + strArr[i].slice(strArr[i].length - 2);
        }
        if (/-/.test(strArr[i])) {
            let splitStr = strArr[i].split("-");
            splitStr[0] = splitStr[0].slice(0, 1) + (splitStr[0].length - 2) + splitStr[0].slice(splitStr[0].length - 1);
            splitStr[1] = splitStr[1].slice(0, 1) + (splitStr[1].length - 2) + splitStr[1].slice(splitStr[1].length - 1);
            strArr[i] = splitStr.join("-");
        }
        else if (/,/.test(strArr[i]) === false) {
            strArr[i] = strArr[i].slice(0, 1) + (strArr[i].length - 2) + strArr[i].slice(strArr[i].length - 1)
        }
    }

    return strArr.join(" ");
}
console.log(abbreviate("You need, need not want, to complete this code-wars mission"));