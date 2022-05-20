function race(v1, v2, g) {
    let counter = 0;
    let v1Speed = (v1 / 3600);
    let v2Speed = (v2 / 3600);
    let v2Distance = 0;
    let hour = 0;
    let min = 0;
    let sec = 0;
    let time = [];

    while (v2Distance < g) {
        g += v1Speed;
        v2Distance += v2Speed;
        counter++;
    }

    hour = Math.floor(Math.floor(counter) / 3600);
    min = Math.floor(Math.floor(counter) / 60) % 60;
    sec = Math.floor(Math.floor(counter - 1)) % 60;

    time.push(hour, min, sec);
    return time;
}

console.log(race(720, 850, 70));