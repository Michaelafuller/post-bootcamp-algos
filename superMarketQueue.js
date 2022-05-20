// function queueTime(customers, n) {
//     let sum = 0;
//     let tellerLanes = {};
//     let minTime = 0;
//     let maxTime = 0;

//     if (n === 1) {
//         for (let i = 0; i < customers.length; i++) {
//             sum += customers[i];
//         }
//         return sum;
//     }

//     if (n >= customers.length) {
//         sum = Math.max(...customers)
//         return sum;
//     }

//     else {
//         for (let i = 0; i < customers.length; i++) {
//             while (i < n) {
//                 tellerLanes[i] = customers[i];
//                 i++;
//             }
//             let keyArr = Object.values(tellerLanes);
//             minTime = Math.min(...keyArr);
//             maxTime = Math.max(...keyArr);
//             for (const key in tellerLanes) {
//                 if (tellerLanes[key] === minTime) {
//                     tellerLanes[key] += customers[i];
//                     customers[i] = 0;
//                 }
//             }
//         }
//         return maxTime;
//     }
// }

// console.log(queueTime([30, 20, 36, 19, 49, 6, 8, 32, 11, 44, 9, 6, 18, 50, 10, 47, 45, 27, 4, 7, 11, 46], 2));
// console.log(queueTime([1, 2, 3, 4, 5], 100));

function queueTime(customers, n) {
    if (n > customers.length) {
        return Math.max(...customers);
    }

    if (n === 1) {
        return customers.reduce((a, b) => a + b, 0);
    }

    let checkoutLanes = {};
    let currentLane = 1;
    let numOfLanes = n

    while (numOfLanes > 0) {
        checkoutLanes[numOfLanes] = customers[numOfLanes - 1];
        numOfLanes--;
    }

    let customerCopy = [...customers];

    for (let i = n; i < customerCopy.length; i++) {
        let minTime = Math.min(...Object.values(checkoutLanes));
        for (const key in checkoutLanes) {
            if (checkoutLanes[key] === minTime) {
                checkoutLanes[key] += customerCopy[i];
                customerCopy[i] = 0;
            }
        }
    }

    return Math.max(...Object.values(checkoutLanes));
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));