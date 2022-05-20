function points(game) {
    let currentGame = 0;
    let totalPoints = 0;
    for(let i = 0; i < game.length; i++) {
        currentGame = game[i].split(':')
        if(currentGame[0] > currentGame[1]) {
            totalPoints += 3;
        }
        else if(currentGame[0] === currentGame[1]) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}

console.log(points(['1:0', '3:2', '2:2']));