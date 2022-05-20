function maxWaterAreaContainer(arr) {
    let maxArea = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                if ((j - i) * arr[j] > maxArea) {
                    maxArea = (j - i) * arr[j];
                }
            }
        }
    }

    return maxArea;
}

console.log(maxWaterAreaContainer([45, 32, 56, 99]))
