function rowSumOddNumbers(n) {
    let sumArr = [];
    let leftCount = n * n;
    let rightCount = n * n;

    if (n === 1) {
        return 1;
    }

    if (n % 2 === 0) {
        while (sumArr.length < n) {
            leftCount--;
            rightCount++;
            if (leftCount % 2 !== 0) {
                sumArr.push(leftCount);
            }
            if (rightCount % 2 !== 0) {
                sumArr.push(rightCount);
            }
        }
    }

    else {
        while (sumArr.length < n - 1) {
            leftCount -= 2;
            rightCount += 2;
            sumArr.push(leftCount);
            sumArr.push(rightCount);
        }
    }

    if (n % 2 !== 0) {
        sumArr.push(n * n);
    }

    return sumArr.reduce((a, b) => a + b, 0);
}

console.log(rowSumOddNumbers(323));