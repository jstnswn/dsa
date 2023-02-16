






function overlappingMeetings(meetings) {
    const currMeetings = [];
    let maxMeetings = 0;
    for (let meeting of meetings) {
        while (currMeetings.length && currMeetings[currMeetings.length - 1][1] <= meeting[0]) {
            currMeetings.pop();
        }
        currMeetings.push(meeting);

        maxMeetings = Math.max(maxMeetings, currMeetings.length);
    }
    return maxMeetings
}

const input = [[0, 30], [5, 10], [15, 20], [20, 30], [25, 28]];
console.log(overlappingMeetings(input));
