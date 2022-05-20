// function longestConsec(strarr, k) {
//     if (k > strarr.length || strarr.length === 0 || k <= 0) {
//         return "";
//     }

//     let consecStrArr = [];
//     let sortedArr = strarr.sort((a, b) => a.length - b.length);
//     let longestStr = ''

//     while (consecStrArr.length < k) {
//         sortedArr = sortedArr.filter(index => index !== longestStr)
//         longestStr = sortedArr[sortedArr.length - 1];
//         consecStrArr.push(longestStr);

//     }

//     consecStrArr = strarr.filter(string => consecStrArr.includes(string));
//     return consecStrArr.join("")

// }

/**
 * function longestConsec(strarr, k) {
    if (k > strarr.length || strarr.length === 0 || k <= 0) {
        return "";
    }

    let returnArr = [];
    let longestStr = strarr[0];
    let mutateArr = strarr;

    while (k > 0) {

        for (let i = 0; i < mutateArr.length; i++) {
            if (mutateArr[i].length > longestStr.length) {
                longestStr = mutateArr[i]
            }
        }
        returnArr.push(longestStr);
        mutateArr = mutateArr.filter(str => str !== longestStr);
        longestStr = '';
        k--;
    }

    returnArr = strarr.filter(string => returnArr.includes(string));

    return returnArr.join("");

}

 */

function longestConsec(strarr, k) {
    let longestStr = '';
    let longestStrArr = [];

    while (longestStrArr.length < k) {
        strarr = strarr.filter(string => string !== longestStr);

        for (let i = 0; i < strarr.length; i++) {
            if (strarr[i].length > longestStr.length) {
                longestStr = strarr[i];
                longestStrArr.push(longestStr);
            }
        }
    }

    8
    return longestStrArr;
}



var foo = 0;
var output = 'Output: ';
switch (foo) {
    case 0:
        output += 'So ';
    case 1:
        output += 'What ';
        output += 'Is ';
    case 2:
        output += 'Your ';
    case 3:
        output += 'Name';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 5!');
}

