function mazeRunner(maze, directions) {
    let innerIndex;
    let outerIndex;

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                innerIndex = i;
                outerIndex = j;
            }
        }
    }

    for (let i = 0; i < directions.length; i++) {
        if (directions[i] === 'N') {
            innerIndex--;
        }
        else if (directions[i] === 'S') {
            innerIndex++;
        }
        else if (directions[i] === 'E') {
            outerIndex++;
        }
        else if (directions[i] === 'W') {
            outerIndex--;
        }

        if (innerIndex >= maze.length) {
            return 'Dead'
        }

        if (outerIndex >= maze[innerIndex].length) {
            return 'Dead'
        }

        switch (maze[innerIndex][outerIndex]) {
            case 1: return 'Dead';
            case 3: return 'Finish';
            case undefined: return 'Dead';
            default: break;
        }
    }

    return 'Lost'
}

var maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]))