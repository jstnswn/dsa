var carFleet = function (target, position, speed) {
    const speedAndPosition = position.map((pos, idx) => [pos, speed[idx]]);
    speedAndPosition.sort((a, b) => a[0] - b[0]);

    debugger
    const fleet = [];
    const stack = [speedAndPosition[0]];
    for (let i = 1; i < position.length; i++) {
        let carA = speedAndPosition[i];
        while (stack.length && ((carA[0] < stack[stack.length - 1][0] && carA[1] > stack[stack.length - 1][1]) ||
            (stack[stack.length - 1][0] < carA[0] && stack[stack.length - 1][1] > carA[1]) ||
            stack[stack.length - 1][0] === carA[0]))  {
            const carB = stack.pop();
            const meeting = findMeeting(carA, carB, target);
            if (!meeting || meeting[0] > target) {
                stack.push(carB);
                break;
            }
            carA = meeting;
        }
        stack.push(carA);
    }

    return fleet.length + stack.length;
};

function findMeeting(carA, carB, target) {
    if (carA[0] === carB[0]) return [carA[0], Math.min(carA[1], carB[1])]
    let back = carA[0] < carB[0] ? [...carA] : [...carB];
    let front = carA[0] > carB[0] ? [...carA] : [...carB];
    console.log('ONE', back, front)
    if (back[1] < front[1] || back[1] === front[1]) return null;
    debugger
    while (back[0] < front[0]) {
        if (back[0] > target || front[0] > target) return null;
        back[0] += back[1];
        front[0] += front[1];
    }


    console.log('TWO', back, front)
    // return [Math.floor((back[0] + front[0] / 2)), front[1]];
    return [Math.max(back[0], front[0]), front[1]];
    return [back[0], front[1]];
}

console.log(carFleet(12, [4, 0, 5, 3, 1, 2], [6, 10, 9, 6, 7, 2]));
