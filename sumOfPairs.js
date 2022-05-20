// function sumPairs(ints, s) {
//     let possibles = [];

//     for (let i = 0; i < ints.length; i++) {
//         for (let j = i + 1; j < ints.length; j++) {
//             if (ints[i] + ints[j] === s) {
//                 possibles.push([ints.indexOf(ints[i]), ints.lastIndexOf(ints[j])])
//             }
//         }
//     }

//     if (possibles.length < 1) {
//         return undefined;
//     }

//     while (possibles.length > 1) {
//         possibles.sort((a, b) => Math.max(...a) - Math.max(...b));
//         possibles.pop();
//     }

//     return [ints[possibles[0][0]], ints[possibles[0][1]]]
// }
function sumPairs(ints, s) {
    let possibles = [];

    for (let i = 0; i < ints.length; i++) {
        if (ints.includes(s - ints[i])) {
            if (ints.indexOf(ints[i]) !== ints.lastIndexOf(s - ints[i])) {
                possibles.push([ints.indexOf(ints[i]), ints.lastIndexOf(s - ints[i])])
            }
            if (possibles.length > 1) {
                if (Math.max(...possibles[0]) > Math.max(...possibles[1])) {
                    possibles.shift()
                }
                else {
                    possibles.pop();
                }
            }
        }
    }

    if (possibles.length < 1) {
        return undefined;
    }


    return [ints[possibles[0][0]], ints[possibles[0][1]]]

}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));