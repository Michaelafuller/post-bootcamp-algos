function highestRank(arr) {
    let freqMap = {};
    let maxValue = 0;
    let secondMax = 0;
    let maxKey = 0;
    let secondKey = 0;

    for (let i = 0; i < arr.length; i++) {
        if (freqMap.hasOwnProperty(arr[i])) {
            freqMap[arr[i]] += 1;
        }
        else {
            freqMap[arr[i]] = 1;
        }
    }

    for (const key in freqMap) {
        if (freqMap[key] === maxValue) {
            secondMax = freqMap[key];
            secondKey = parseInt(key);
        }
        if (freqMap[key] > maxValue) {
            maxValue = freqMap[key];
            maxKey = parseInt(key);
        }
    }

    return maxValue > secondMax ? maxKey : maxKey > secondKey ? maxKey : secondKey;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))