function HQ9(code) {
    if (code === 'H') {
        return 'Hello World!';
    };

    if (code === 'Q') {
        return code;
    };

    if (code === '9') {
        let lyrics = [];

        for (let i = 99; i > -1; i--) {
            let firstLine;
            let secondLine;
            if (i === 0) {
                firstLine = `No more bottles of beer on the wall, no more bottles of beer.`;
                secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
            }
            if (i === 1) {
                firstLine = `${i} bottle of beer on the wall, ${i} bottle of beer.`;
                secondLine = `Take one down and pass it around, no more bottles of beer on the wall.`;
            }
            if (i === 2) {
                firstLine = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
                secondLine = `Take one down and pass it around, ${i - 1} bottle of beer on the wall.`;
            }
            else if (i > 2) {
                firstLine = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
                secondLine = `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`;
            }
            lyrics.push(firstLine, secondLine);
        }

        return lyrics.join('\n');
    }
}

console.log(HQ9('9'))