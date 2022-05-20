function diamond(n) {
    if (n < 1 || n % 2 === 0) {
        return null;
    }

    let diamNum = n;
    let diamStr = '';

    while (diamNum > 0) {
        if (diamNum < n) {
            let counter = (n - diamNum) / 2;
            while (counter > 0) {
                diamStr += ' ';
                counter--;
            }
        }
        for (let i = 1; i <= diamNum; i++) {
            diamStr += '*'
        }
        diamStr += '\n';
        diamNum -= 2;
    }

    let leftSide = 1;
    let leftStr = '';
    diamNum = n;

    while (leftSide <= diamNum - 2) {
        let counter = (diamNum - leftSide) / 2;

        while (counter > 0) {
            leftStr += ' ';
            counter--;
        }
        for (let i = 1; i <= leftSide; i++) {
            leftStr += '*';
        }
        leftStr += '\n';
        leftSide += 2;
    }

    return leftStr += diamStr;
}


console.log(diamond(5));