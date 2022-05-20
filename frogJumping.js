function solution(a) {
    if (a.length < 1) {
        return -1;
    }

    let currentIdx = 0;
    let counter = 0;
    let inRange = true;

    while (inRange) {
        let prevIdx = currentIdx;
        currentIdx += a[currentIdx]
        if (a[prevIdx] + a[currentIdx] === 0) {
            return -1
        }
        counter++;
        if (a[currentIdx] === undefined) {
            inRange = false;
        }
    }
    return counter;
}

console.log(solution([1, -1]));