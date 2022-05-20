function sortArray(array) {
    let oddsOnly = array.filter(num => num % 2 !== 0);
    oddsOnly.sort((a, b) => b - a);
    let returnArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            returnArr.push(array[i]);
        }
        else {
            let minOdd = oddsOnly.pop()
            returnArr.push(minOdd);
        }
    }

    return returnArr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));