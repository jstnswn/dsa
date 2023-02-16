

// function counts1(teamA, teamB) {
//     // console.time('test1')
//     const sortedA = teamA.sort((a, b) => a - b);
//     const result = [];
//     const cache = {};


//     for (let scoresB of teamB) {
//         if (cache[scoresB]) {
//             result.push(cache[scoresB]);
//             continue;
//         }
//         let currCount = 0;
//         for (let scoresA of sortedA) {
//             if (scoresA <= scoresB) {
//                 currCount++;
//             } else {
//                 break;
//             }
//         }
//         result.push(currCount);
//         cache[scoresB] = currCount;
//     }

//     console.timeEnd('test1')
//     return result;
// };




//  // teamA [1,2,3,3,3]
//  // teamB [2,2,4]
// function counts2(teamA, teamB) {
//     // console.time("test2")
//     teamB = teamB.map((el, i) => [el, i]);
//     const sortedA = teamA.sort((a, b) => a - b);
//     const sortedB = teamB.sort((a, b) => a[0] - b[0]);
//     const result = new Array(teamB.length).fill(0);
//     let pointerA = 0;

//     for (let i = 0; i < sortedB.length; i++) {
//         // const scoresBItems = sortedB[i];
//         const scoresB = sortedB[i][0];

//         while (pointerA < sortedA.length) {
//             const scoresA = sortedA[pointerA];
//             if (scoresA <= scoresB) {
//                 for (let j = i; j < sortedB.length; j++) {
//                     result[sortedB[j][1]]++;
//                 }
//                 pointerA++;
//             } else {
//                 break;
//             }
//         }
//     }

//     // console.timeEnd('test2')
//     return result;
// }

// for (let scoresA of sortedA) {
//     if (scoresA <= scoresB) {
//         for (let j = i; j < sortedB.length; j++) {
//             result[j]++;
//         }
//     } else {
//         break;
//     }
// }

function counts(teamA, teamB) {
    const result = [];
    teamA.sort((a,b) => a-b);

    for (let score of teamB) {
        let min = 0;
        let max = teamA.length - 1;
        while (min <= max) {
            let mid = Math.floor((min+max) / 2);
            if (teamA[mid] > score) max = mid - 1;
            else min = mid + 1;
        }
        result.push(min);
    }
    return result;
}



console.log(counts([1, 2, 2, 3, 5, 6, 1, 2, 90, 878, 56], [9, 2, 4, 8, 595, 1, 23, 381, 8]));
// console.log(counts([1,2,3], [2,4]))
// console.log(counts2([1, 2, 2, 3, 5, 6, 1, 2, 90, 878, 56], [9, 2, 4, 8, 595, 1, 23, 381, 8]));
