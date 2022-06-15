function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let currentSavings = 0;
    let monthCount = 0;
    let percentageLoss = percentLossByMonth / 100

    while ((currentSavings + startPriceOld) - startPriceNew < 0) {
        currentSavings += savingperMonth;
        monthCount++;
        if (monthCount > 0 && monthCount % 2 === 0) {
            percentageLoss += .005
        }
        startPriceOld -= percentageLoss * startPriceOld;
        startPriceNew -= percentageLoss * startPriceNew;
    }

    let remainingMoney = Math.round((currentSavings + startPriceOld) - startPriceNew)

    return [monthCount, remainingMoney]
}