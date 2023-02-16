function minStart(arr) {
    let needed = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i];
        if (curr < 0) {
            needed += (curr * -1);
        } else {
            needed -= curr;
        }
        if (needed < 0) needed = 1;
    }

    return needed;
}

[-6, 5, -2]
