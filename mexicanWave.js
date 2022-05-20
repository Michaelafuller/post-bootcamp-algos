function wave(str) {
    let index = 0;
    let waveArray = [];
    let splitStr = str.split("");

    for (let i = 0; i < splitStr.length; i++) {
        let waveStr = "";
        if (splitStr[i] === " ") {
            index++;
            continue;
        }
        for (let j = 0; j < splitStr.length; j++) {
            if (j === index) {
                waveStr += splitStr[j].toUpperCase();
            } else {
                waveStr += splitStr[j];
            }
        }
        index++;
        waveArray.push(waveStr);
    }
    return waveArray;
}

console.log(wave("two words"));

//   while(waveArray.length < str.length) {
//     let waveStr = '';
//     for(let i = 0; i < str.length; i++) {
//       if(i === index) {
//         waveStr += str[i].toUpperCase();
//       }
//       else {
//         waveStr += str[i]
//       }
//     }
//     waveArray.push(waveStr);
//     index++;
//   }

//   return waveArray;
// }
