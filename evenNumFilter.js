function getEvenNumbers(numbersArray){
    return numbersArray.filter(even => {
      if(even % 2 === 0) {
        return even;
      }
      if (even === 0) {
        return even;
      }
    })
  }

  console.log(getEvenNumbers([31,60,35,56,96,81,55,5,12,64,89,87,34,34,32,26,79,71,63,96,1,55,8,34,81,20,96,82,0,18,87,75,26,91,76]));