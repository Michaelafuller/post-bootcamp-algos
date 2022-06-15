function orderedCount(text) {
    let textArray = text.split('');
    let orderedCountArray = [];

    while (textArray.length > 0) {
        let characterCount = textArray.filter(elem => elem === textArray[0]).length;
        orderedCountArray.push([textArray[0], characterCount]);
        textArray = textArray.filter(elem => elem !== textArray[0]);
    }

    return orderedCountArray;
}

console.log(orderedCount("abracadabra"))