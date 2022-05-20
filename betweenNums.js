function getSum(a, b) {
    let betweenNums = [];
    if (a === b) {
        return a;
    }
    if (a < b) {
        betweenNums.push(b);
        while (a !== b) {
            betweenNums.push(a);
            a++
        }
    }
    if (a > b) {
        betweenNums.push(a);
        while (b !== a) {
            betweenNums.push(b);
            b++
        }
    }
    let sum = 0;
    for (let i = 0; i < betweenNums.length; i++) {
        sum += betweenNums[i]
    }
    return sum;
}

console.log(getSum(-1, 2));