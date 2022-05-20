function sumMix(x) {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        let newNum = parseInt(x[i]);
        sum += newNum;
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']));