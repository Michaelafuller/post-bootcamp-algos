function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(dadYearsOld / 2 === sonYearsOld) {
      return 0;
    }
    if(dadYearsOld >= 50) {
      let counter = 0;
      let dadCurrentAge = dadYearsOld;
      let sonCurrentAge = sonYearsOld;
      while(dadCurrentAge / 2 !== sonCurrentAge) {
        counter ++;
        dadCurrentAge--;
        sonCurrentAge--;
      }
      return counter;
    }
    if(dadYearsOld <= 50) {
        let counter = 0;
        let dadCurrentAge = dadYearsOld;
        let sonCurrentAge = sonYearsOld;
        while(dadCurrentAge / sonCurrentAge !== 2) {
            counter ++;
            dadCurrentAge++;
            sonCurrentAge++;
          }
      return counter;
    }
  }

  console.log(twiceAsOld(55, 30));