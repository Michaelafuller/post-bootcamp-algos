const sortThem = (words) => {
    let counter = 1;
    let unsortedWords = words.split(" ");

    for (let i = 0; i < unsortedWords.length; i++) {
        for (let j = 0; j < unsortedWords[i].length; j++) {
            if (isNaN(unsortedWords[i][j])) {
                continue;
            }
            else {
                if (parseInt(unsortedWords[i][j]) === counter) {
                    counter++;
                    break;
                }
                else {
                    let pushedWord = unsortedWords.splice(i, 1);
                    unsortedWords.push(pushedWord[0]);
                    j = -1;
                }
            }
        }
    }

    return unsortedWords;


    //     while (index < unsortedWords.length) {
    //         for (let i = 0; i < unsortedWords[index].length; i++) {
    //             if (isNaN(unsortedWords[index][i])) {
    //                 console.log('====================================');
    //                 console.log('is NaN');
    //                 console.log('====================================');
    //                 continue;
    //             }
    //             if (!isNaN(unsortedWords[index][i])) {
    //                 console.log('====================================');
    //                 console.log('you found a number!');
    //                 console.log('====================================');
    //                 if (unsortedWords[index][i] !== counter) {
    //                     let shiftWord = unsortedWords.splice(index, 1);
    //                     console.log('====================================');
    //                     console.log(shiftWord);
    //                     console.log('====================================');
    //                     unsortedWords.push(shiftWord[0]);
    //                     console.log('====================================');
    //                     console.log(unsortedWords);
    //                     console.log('====================================');
    //                 }
    //                 else if (unsortedWords[index][i] === counter) {
    //                     console.log('====================================');
    //                     console.log('counter match');
    //                     console.log('====================================');
    //                     index++;
    //                     break;
    //                 }
    //             }
    //             console.log('====================================');
    //             console.log('counter ' + counter, 'index ' + index);
    //             console.log('====================================');
    //         }
    //         counter++;

    //     }
    //     return unsortedWords;
}

console.log(sortThem("4of Fo1r pe6ople g3ood th5e the2"));