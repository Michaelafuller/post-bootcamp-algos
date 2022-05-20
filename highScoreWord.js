function high(x) {
    let pointVal = 1;
    let scoreObj = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let maxVal = 0;
    let currentVal = 0;
    let currentScore = '';
    let highScore = '';

    for (let i = 0; i < alphabet.length; i++) {
        scoreObj[alphabet[i]] = pointVal;
        pointVal++;
    }

    let wordArr = x.split(" ");

    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j++) {
            currentVal += scoreObj[wordArr[i][j]];
            currentScore += wordArr[i][j];
        }
        if (currentVal > maxVal) {
            maxVal = currentVal;
            highScore = currentScore
        }
        currentVal = 0;
        currentScore = '';
    }
    return highScore;
}

console.log(high('what time are we climbing up the volcano'));