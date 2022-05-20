function evaporator(content, evap_per_day, threshold){
    let days = 0;
    let evapPercent = (evap_per_day / 100);
    let minThreshold = (threshold / 100) * content
    while(content > minThreshold) {
        content -= evapPercent * content;
      days++;
    }
    return days;8
  }

  console.log(evaporator(10, 10, 10));