const mostFrequentChar = (s) => {
    const storage = new Array(26).fill([0, null]);
    for (let el of s) {
        debugger
        const key = el.charCodeAt(0) - 'a'.charCodeAt(0);
        // console.log(el)
        // console.log(storage)
        // console.log(storage[key % storage.length][0])
        storage[key % storage.length][0]++;
        storage[key % storage.length][1] = el;
    }
    console.log(storage)
    let max = 0;
    let result;
    for (let item of storage) {
        const [count, letter] = item;
        if (count > max) {
            max = count;
            result = letter;
        }
    }
    return result;
};

console.log(mostFrequentChar('bookeeper')); // -> 'e')
