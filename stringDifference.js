function solution(S) {
    let letterBlocks = {};
    let tempStr = '';

    for (let i = 0; i < S.length; i++) {
        tempStr += S[i];
        if (S[i] === S[i + 1]) {
            continue;
        }
        if (letterBlocks.hasOwnProperty(tempStr)) {
            tempStr += i;
            letterBlocks[tempStr] = tempStr.length - 1;
            tempStr = '';
        }
        else {
            letterBlocks[tempStr] = tempStr.length;
            tempStr = '';
        }
    }

    let count = 0;
    let values = Object.values(letterBlocks);
    let maxValue = Math.max(...values);

    for (const key in letterBlocks) {
        count += maxValue - letterBlocks[key];
    }

    return count;
}

console.log(solution('babaa'));