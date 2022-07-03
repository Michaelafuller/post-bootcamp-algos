function upArray(arr) {
    if (arr[arr.length - 1] < 0 || arr.length < 1) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 9) {
            return null;
        }
        if (arr[i] < 0) {
            return null;
        }
    }

    let arrCopy = [...arr];

    for (let i = arrCopy.length - 1; i > - 1; i--) {
        if (i === arrCopy.length - 1) {
            arrCopy[i] += 1;
        }
        if (arrCopy[i] > 9) {
            arrCopy[i] = 0;
            arrCopy[i - 1] += 1;
        }
    }

    if (arrCopy[0] === 0) {
        arrCopy.push(1);
        arrCopy = arrCopy.reverse();
    }

    return arrCopy
}