function fourNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const quads = [];
    for (let outerLeftIdx = 0; outerLeftIdx < array.length - 3; outerLeftIdx++) {
        for (let outerRightIdx = array.length - 1; outerRightIdx >= 3; outerRightIdx--) {
            let innerLeftIdx = outerLeftIdx + 1;
            let innerRightIdx = outerRightIdx - 1;
            while (innerLeftIdx < innerRightIdx) {

                const num1 = array[outerLeftIdx];
                const num2 = array[innerLeftIdx];
                const num3 = array[innerRightIdx];
                const num4 = array[outerRightIdx];

                const sum = num1 + num2 + num3 + num4;
                if (sum === targetSum) quads.push([num1, num2, num3, num4]);
                if (sum < targetSum) innerLeftIdx++;
                else innerRightIdx--;
            }
        }
    }
    return quads
}



console.log(fourNumberSum([7, 6, 4, -1, 1, 2, 7, 10 , 3 , 131341, 2, 16, 1, 15, 2, 22, -12], 16));
