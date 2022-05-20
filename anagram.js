var isAnagram = function (test, original) {
    let testStr = test.toLowerCase();
    let originalStr = original.toLowerCase();
    let compObj = {};
    let isAnagram = false;

    for (let i = 0; i < testStr.length; i++) {
        if (compObj.hasOwnProperty(testStr[i])) {
            compObj[testStr[i]]++;
        }
        else {
            compObj[testStr[i]] = 1;
        }
    }

    for (let i = 0; i < originalStr.length; i++) {
        if (compObj.hasOwnProperty(originalStr[i])) {
            compObj[originalStr[i]]--;
        }
        else {
            compObj[originalStr[i]] = 1;
        }
    }

    for (const key in compObj) {
        if (compObj[key] === 0) {
            delete compObj[key];
        }
    }

    if (Object.keys(compObj).length > 0) {
        return false;
    }
    return true;
};

console.log(isAnagram('ound', 'round'));
