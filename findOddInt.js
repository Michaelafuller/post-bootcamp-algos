function findOdd(arr) {
    let compTable = {};
    let returnKey = 0;

    for (let i = 0; i < arr.length; i++) {
        if (compTable.hasOwnProperty(arr[i])) {
            compTable[arr[i]]++;
        }
        else {
            compTable[arr[i]] = 1;
        }
    }

    for (const key in compTable) {
        if (compTable[key] % 2 !== 0) {
            returnKey = key;
        }
    }

    return returnKey;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));