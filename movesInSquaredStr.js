const vertMirror = (strng) => {
    let strArray = strng.split('\n');
    strArray = strArray.map(subStr => [...subStr].reverse().join(''));
    return strArray.join('\n');
}

const horMirror = (strng) => {
    let strArray = strng.split('\n');
    strArray = strArray.reverse();
    return strArray.join('\n')
}

function oper(fct, s) {
    if (fct === vertMirror) {
        return vertMirror(s);
    }

    if (fct === horMirror) {
        return horMirror(s);
    }
}

console.log(oper(horMirror, 'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw'))