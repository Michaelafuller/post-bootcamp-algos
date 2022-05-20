function repeatStr (n, s) {
    let message = '';
    while(n>0) {
        message+=s;
        n--;
    }
    return message;
  }

  console.log(repeatStr(5, 'Hello'));