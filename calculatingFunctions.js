function zero(operation) {
    let a = 0;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function one(operation) {
    let a = 1;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function two(operation) {
    let a = 2;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function three(operation) {
    let a = 3;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function four(operation) {
    let a = 4;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    } if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function five(operation) {
    let a = 5;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0];
    } if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function six(operation) {
    let a = 6;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function seven(operation) {
    let a = 7;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    } if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function eight(operation) {
    let a = 8;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    } if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes("+")) {
        return a + operation[0];
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}
function nine(operation) {
    let a = 9;
    if (operation === undefined) {
        return a;
    }
    if (operation.includes('*')) {
        return a * operation[0]
    }
    if (operation.includes('/')) {
        return Math.floor(a / operation[0]);
    }
    if (operation.includes('+')) {
        return a + operation[0]
    }
    if (operation.includes('-')) {
        return a - operation[0];
    }
}

function plus(a) {
    return [a, '+']
}
function minus(a) {
    return [a, '-'];
}
function times(a) {
    return [a, '*']
}
function dividedBy(a) {
    return [a, '/']
}