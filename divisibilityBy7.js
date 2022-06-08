function seven(m) {
    let currentValue = m;
    let counter = 0;

    while (currentValue.toString().length > 2) {
        let remainder = currentValue % 10;
        currentValue = Math.floor(currentValue / 10);
        currentValue -= 2 * remainder;
        counter++;
    }

    return [currentValue, counter];
}

console.log(seven(1021))