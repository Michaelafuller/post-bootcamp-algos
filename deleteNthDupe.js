function deleteNth(arr, n) {
    let compObj = {};
    let returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        console.log('====================================');
        console.log(compObj);
        console.log('====================================');
        if (compObj.hasOwnProperty(arr[i]) && compObj[arr[i]] !== n) {
            compObj[arr[i]]++;
            returnArr.push(arr[i]);
        }
        if (!compObj.hasOwnProperty(arr[i])) {
            compObj[arr[i]] = 1;
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));