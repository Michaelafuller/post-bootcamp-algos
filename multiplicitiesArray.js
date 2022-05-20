function comp(array1, array2) {
    let flag = false;

    if (!array1 || !array2) {
        return flag;
    }

    if (array1.length !== array2.length) {
        return flag;
    }

    let compObj = {};

    for (let i = 0; i < array1.length; i++) {
        if (compObj.hasOwnProperty(array1[i] * array1[i])) {
            compObj[array1[i] * array1[i]] += 1;
        }
        else {
            compObj[array1[i] * array1[i]] = 1;
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (compObj.hasOwnProperty(array2[i])) {
            compObj[array2[i]] -= 1;
            if (compObj[array2[i]] < 0) {
                flag = false;
                return flag;
            }
            flag = true;
        }
        else {
            flag = false;
            return flag;
        }
    }

    return flag;
}

console.log(comp([5, 6, 1, 10, 2, 5, 10, 8, 7, 0, 8, 0, 3, 5, 0], [9, 36, 1, 1, 0, 64, 49, 4, 25, 0, 25, 100, 100, 25, 64]));