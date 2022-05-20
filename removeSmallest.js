function removeSmallest(numbers) {
    let numArr = [...numbers];
    let minNum = numArr[numArr.length - 1];

    for (let i = numArr.length - 1; i >= 0; i--) {
        if (numArr[i] < minNum) {
            minNum = numArr[i];
        }
    }
    let index = numArr.indexOf(minNum);
    numArr.splice(index, 1);
    return numArr;
}

console.log(removeSmallest([2, 2, 1, 2, 1]));