function sumDigPow(lowNum, highNum) {
    let sumDigArr = [];
    let currentNum = lowNum;

    while (currentNum <= highNum) {
        let numStr = currentNum.toString();
        let sum = 0;
        for (let i = 0; i < numStr.length; i++) {
            sum += Math.pow(parseInt(numStr[i]), i + 1);
        }
        if (sum === currentNum) {
            sumDigArr.push(currentNum);
        }
        currentNum++;
    }
    return sumDigArr;
}

console.log(sumDigPow(10, 100));