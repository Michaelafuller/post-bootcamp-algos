function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let compObject = {};
    let compString = string.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        compObject[alphabet[i]] = 1;
    }

    for (let i = 0; i < compString.length; i++) {
        if (compObject.hasOwnProperty(compString[i])) {
            delete compObject[compString[i]];
        }
    }

    if (Object.keys(compObject).length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));