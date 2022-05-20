function sumTriangularNumbers(n) {
    if (n < 0) {
        return 0;
    }

    let counter = 0;
    let prevNum = 0;
    let triangleNumArr = [];

    while (counter <= n) {
        triangleNumArr.push(prevNum);
        counter++;
        prevNum += counter;
    }

    console.log(triangleNumArr);

    let sum = 0;
    for (let i = 0; i < triangleNumArr.length; i++) {
        sum += triangleNumArr[i];
    }

    return sum;
}

console.log(sumTriangularNumbers(4));