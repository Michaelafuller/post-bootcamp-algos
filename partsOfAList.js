function partlist(arr) {
    let returnArr = [];
    let tempArr = [];
    let tempStr = '';

    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);

    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i + 1] !== undefined) {
    //         tempStr += arr[i + 1] + ' ';
    //     }
    //     console.log('====================================');
    //     console.log(tempStr);
    //     console.log('====================================');
    //     // tempArr.push(arr[i]);
    // }
    // returnArr.push(tempArr);

    // return returnArr;
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']));