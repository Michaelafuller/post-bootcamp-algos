function stockList(listOfArt, listOfCat) {
    let resultArr = [];
    let categoryValPair = {};

    for (let i = 0; i < listOfCat.length; i++) {
        if (categoryValPair.hasOwnProperty(listOfCat[i])) {
            continue;
        }
        else {
            categoryValPair[listOfCat[i]] = 0;
        }
    }

    for (let i = 0; i < listOfArt.length; i++) {
        if (categoryValPair.hasOwnProperty(listOfArt[i][0])) {
            let totalValue = listOfArt[i].split(" ")[1]
            categoryValPair[listOfArt[i][0]] += parseInt(totalValue);
        }
    }

    for (const key in categoryValPair) {
        let strToPush = `(${key} : ${categoryValPair[key]})`;
        resultArr.push(strToPush);
    }

    return resultArr.join(" - ")
}

console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]));