function smash (words) {
    let returnMsg = '';
    for(let i = 0; i < words.length; i++) {
        if(i < words.length - 1) {
            returnMsg = returnMsg + words[i] + ' '
        }
        else {
            returnMsg += words[i];
        }
    }
     return returnMsg;
  };

  console.log(smash(['hello', 'world', 'this', 'is', 'great']));