//return the total number of smiling faces in the array
function countSmileys(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] !== ':') {
            if (arr[i][0] !== ';') {
                console.log('====================================');
                console.log(arr[i][0]);
                console.log('====================================');
                continue;
            }
        }
        if (arr[i].length > 2) {
            if (arr[i][1] !== '-') {
                if (arr[i][1] !== '~') {
                    continue;
                }
            }
            if (arr[i][2] !== ')') {
                if (arr[i][2] !== 'D') {
                    continue
                }
            }
            counter++;
            continue;
        }
        if (arr[i][1] !== ')') {
            if (arr[i][1] !== 'D') {
                continue;
            }
        }
        counter++;
    }

    return counter;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']));