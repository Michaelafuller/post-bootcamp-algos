function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let flag = true;

    if (enteredCode !== correctCode) {
        flag = false;
        return flag;
    }

    let currentArr = currentDate.split(' ');
    let expireArr = expirationDate.split(' ');

    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthObj = {};

    for (let i = 0; i < monthArr.length; i++) {
        monthObj[monthArr[i]] = i + 1;
    }
    if (monthObj[currentArr[0]] > monthObj[expireArr[0]]) {
        flag = false;
        return flag;
    }
    if (monthObj[currentArr[0]] === monthObj[expireArr[0]]) {
        if (parseInt(currentArr[1]) > parseInt(expireArr[1])) {
            flag = false;
            return flag;
        }
    }
    if (parseInt(currentArr[2]) > parseInt(expireArr[2])) {
        flag = false;
        return flag;
    }
    return flag;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));