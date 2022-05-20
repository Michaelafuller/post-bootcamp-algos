function sumDigits(number) {
    let numberStr = Math.abs(number).toString();
    let sum = 0;
    console.log('====================================');
    console.log(numberStr);
    console.log('====================================');
    
    for(let i = 0; i < numberStr.length; i++) {
      sum += parseInt(numberStr[i]);
    }
    return sum;
  }

  console.log(sumDigits(99));