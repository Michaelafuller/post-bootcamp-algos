function persistence(num) {
    let numStr = num.toString();
    let result = 1;
    let counter = 0;

    while (numStr.length > 1) {
        for (let i = 0; i < numStr.length; i++) {
            result *= parseInt(numStr[i]);
        }
        numStr = result.toString();
        result = 1;
        counter++;
    }

    return counter;
}

console.log(persistence(999));