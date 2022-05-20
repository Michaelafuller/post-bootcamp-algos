function meeting(s) {
    let strArr = s.split(";");
    let nameArr = [];
    let returnStr = '';

    for (let i = 0; i < strArr.length; i++) {
        let splitName = strArr[i].split(":");
        nameArr.push(splitName);
    }

    for (let i = 0; i < nameArr.length; i++) {
        [nameArr[i][0], nameArr[i][1]] = [nameArr[i][1], nameArr[i][0]];
        nameArr[i] = nameArr[i].join(", ");
        nameArr[i] = nameArr[i].toUpperCase();
    }

    nameArr.sort();

    for (let i = 0; i < nameArr.length; i++) {
        returnStr += "(" + nameArr[i] + ")"
    }

    return returnStr;
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));