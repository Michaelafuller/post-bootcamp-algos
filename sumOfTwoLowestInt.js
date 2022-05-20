function sumTwoSmallestNumbers(numbers) {
    const orderedArr = numbers.sort((a,b) => a - b);
    let smallest = orderedArr[0];
    let secondSmallest = orderedArr[1];
    let sum = 0;
    
    sum =  smallest + secondSmallest;
    return sum;
  }

  console.log(sumTwoSmallestNumbers([19, 5, 43, 4, 77]));