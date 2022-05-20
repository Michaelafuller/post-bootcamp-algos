function findNb(m) {
    let result = 0;
    let counter = 1;

    while (result < m) {
        result += Math.pow(counter, 3);
        counter++;
    }

    if (result === m) {
        return counter - 1;
    }
    return (-1);
}

console.log(findNb(40539911473216));