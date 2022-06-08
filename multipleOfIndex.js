function multipleOfIndex(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}
console.log(multipleOfIndex([0, 2, 27, -60, 57, 99, -28, 28, -15, 7, -16, -63, 32, 82, -64, -57]))
console.log(0 % 0)