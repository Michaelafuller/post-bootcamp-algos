function encode(string) {
    let encoder = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5,
    }
    let encodedStr = '';

    for (let i = 0; i < string.length; i++) {
        if (encoder.hasOwnProperty(string[i])) {
            encodedStr += encoder[string[i]];
        }
        else {
            encodedStr += string[i]
        }
    }
    return encodedStr;
}

function decode(string) {
    let decoder = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u',
    }
    let decodedStr = '';

    for (let i = 0; i < string.length; i++) {
        if (decoder.hasOwnProperty(string[i])) {
            decodedStr += decoder[string[i]];
        }
        else {
            decodedStr += string[i];
        }
    }
    return decodedStr;
}