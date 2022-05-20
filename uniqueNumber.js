function findUniq(arr) {
    let uniqueObj = {};

    for (let i = 0; i < arr.length; i++) {
        if (uniqueObj.hasOwnProperty(arr[i])) {
            uniqueObj[arr[i]]++;
        }
        else {
            uniqueObj[arr[i]] = 1;
        }
    }

    console.log('====================================');
    console.log(uniqueObj);
    console.log('====================================');

    for (const key in uniqueObj) {
        if (uniqueObj[key] === 1) {
            return key;
        }
    }
}

console.log(findUniq([0, 0, 0.55, 0, 0]));


function findUnique(arr) {
    arr.sort();

    if (arr[0] !== arr[1]) {
        return arr[0];
    }
    else {
        return arr[arr.length - 1]
    }
}