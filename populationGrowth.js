function nbYear(p0, percent, aug, p) {
    let currentPopulation = p0;
    let counter = 0;
    let perCentInc = percent / 100;

    while (currentPopulation < p) {
        currentPopulation += Math.floor(perCentInc * currentPopulation) + aug;
        console.log('====================================');
        console.log(currentPopulation);
        console.log('====================================');
        counter++;
    }

    return counter;
}

console.log(nbYear(1000, 2, 50, 1214));