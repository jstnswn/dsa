
// function insertSort(arr) {
//     let pointer = 0;

//     while (pointer < arr.length) {
//         let tempEl = arr[pointer];
//         let insertPoint = 0;
//         arr.splice(pointer, 1);

//         for (let i = 0; i < pointer; i++) {
//             insertPoint = i;
//             const sortedNum = arr[i];

//             if (tempEl < sortedNum) {
//                 break;
//             }
//         }

//         arr.splice(insertPoint, 0, tempEl);
//         pointer++;
//     }
//     return arr;
// }

const insertSort = (arr) => {
    let divider = 1;

    while (divider < arr.length) {
        debugger
        const currNum = arr[divider];

        for (let i = 0; i < divider; i++) {
            if (currNum < arr[i]) {
                arr.splice(divider, 1);
                arr.splice(i, 0, currNum);
                break;
            }
        }

        divider++;
    }

    return arr;
}

console.log(insertSort([8, 5, 2, 9, 5, 6, 3]));
