function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSide = arr.slice(0, i);
        let rightSide = arr.slice(i + 1);
        let leftResult = leftSide.reduce((a, b) => a + b, 0)
        let rightResult = rightSide.reduce((a, b) => a + b, 0)
        if (leftResult === rightResult) {
            return i;
        }
    }
    return -1;
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

let str = '5x2';
console.log('====================================');
console.log(Math.eval(str));
console.log('====================================');