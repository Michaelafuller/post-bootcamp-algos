function nbDig(n, d) {
    let parseArr = [];
    let count = 0;

    for(let i = 0; i <= n; i++) {
        let squaredNum = i * i;
        parseArr.push(squaredNum.toString());
    }

    for(let j = 0; j < parseArr.length; j++) {
        for(let k = 0; k < parseArr[j].length; k++) {
            if(parseArr[j][k] == d) {
                count++;
            }
        }
    }
    return count;
}

  console.log(nbDig(25, 1));