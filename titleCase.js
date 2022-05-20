function titleCase(title, minorWords) {
  let minWordObj = {};

  if (minorWords) {
    let minWordArr = minorWords.toLowerCase().split(" ");
    for (let i = 0; i < minWordArr.length; i++) {
      minWordObj[minWordArr[i]] = true;
    }
  }

  let returnTitle = title.toLowerCase().split(' ');

  for (let i = 0; i < returnTitle.length; i++) {
    if (!minWordObj.hasOwnProperty(returnTitle[i])) {
      returnTitle[i] = returnTitle[i].charAt(0).toUpperCase() + returnTitle[i].slice(1);
    }
  }

  returnTitle[0] = returnTitle[0].charAt(0).toUpperCase() + returnTitle[0].slice(1);

  return returnTitle.join(" ");
}


console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));