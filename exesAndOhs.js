function XO(str) {
    let compStr = str.toLowerCase();
      let compObj = {
        x: 0,
        o: 0
      };
    
    for(let i = 0; i < compStr.length; i++) {
      if(compStr[i] === 'x') {
          compObj.x += 1
      }
      if(compStr[i] === 'o') {
        compObj.o += 1
      }
    }
    
    if(compObj.x === compObj.o) {
      return true;
    }
    return false;
  }

  console.log(XO('ppkk'));