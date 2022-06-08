function solve(arr) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let indexArr = [];

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase() === alphabet[j]) {
                counter++;
            }
        }
        indexArr.push(counter);
    }

    return indexArr;
};

console.log(solve(["abode", "ABc", "xyzD"]))