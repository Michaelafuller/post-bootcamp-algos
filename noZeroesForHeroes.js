function noBoringZeros(n) {
    let num = n;

    while (num % 10 === 0) {
        num = num / 10
    }
    return num;
}

console.log(noBoringZeros(-1050));