// class ArrayHelper extends Array {

//     square() {
//         return this.map((elem) => elem * elem)
//     };

//     cube() {
//         return this.map(elem => Math.pow(elem, 3))
//     };

//     sum() {
//         return this.reduce((a, b) => a + b, 0)
//     };

//     average() {
//         return this.sum() / this.length
//     };

//     even() {
//         return this.filter(elem => elem % 2 === 0)
//     };

//     odd() {
//         return this.filter(elem => elem % 2 !== 0)
//     };
// }

// let numbers = new ArrayHelper(1, 2, 3, 4, 5)
// console.log(numbers.square())

// console.log(Numbers.square())

const numbers = [1, 2, 3, 4, 5]

Array.prototype.square = function () {
    return this.map(elem => elem * elem)
}

Array.prototype.cube = function () {
    return this.map(elem => Math.pow(elem, 3))
}

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0)
}

Array.prototype.average = function () {
    return this.sum() / this.length
}

Array.prototype.even = function () {
    return this.filter(elem => elem % 2 === 0)
}

Array.prototype.odd = function () {
    return this.filter(elem => elem % 2 !== 0)
}

console.log(numbers.square())
