function arrayDiff(a, b) {
    let index = 0;
    let aDiff = [...a];

    if (b.length > 0) {
        while (index < b.length) {
            aDiff = aDiff.filter(num => num !== b[index]);
            console.log('====================================');
            console.log(aDiff);
            console.log('====================================');
            index++;
        }
    }
    else {
        return a;
    }


    return aDiff;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));