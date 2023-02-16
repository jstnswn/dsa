function getMergedIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let currMerge = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const currLink = intervals[i];
        if (currMerge[1] >= currLink[0]) {
            currMerge[0] = Math.min(currMerge[0], currLink[0]);
            currMerge[1] = Math.max(currMerge[1], currLink[1]);
        } else {
            merged.push(currMerge);
            currMerge = currLink;
        }
        if (i === intervals.length - 1) merged.push(currMerge);
    }

    return merged;
}
