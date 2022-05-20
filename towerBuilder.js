function towerBuilder(nFloors) {
    let counter = (nFloors * 2) - 1;
    let astrix = '';
    let spaces = '';
    let returnArr = [];
    let floor = nFloors;

    for (let i = 0; i < counter; i++) {
        astrix += "*";
    }

    while (floor > 0) {
        let currentFloor = '';
        currentFloor += spaces + astrix + spaces;
        returnArr.push(currentFloor);
        floor--;
        spaces += " ";
        astrix = astrix.slice(0, astrix.length - 2);
    }
    return returnArr.reverse();
}

console.log(towerBuilder(3));