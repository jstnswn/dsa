
// O(n * w)
function getGroupedAnagrams(words) {

    const wordMap = {};
    for (let word of words) {
        const key = new Array(26).fill(0);
        for (let letter of word) {
            const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
            key[index]++;
        }
        if (!(key in wordMap)) wordMap[key] = [];
        wordMap[key].push(word);
    }

    return Object.values(wordMap).length;
}


// O(n * n log(n))
function group(words) {
    const map = {};

    for (let word of words) {
        const key = word.split('').sort();
        if (!(key in map)) map[key] = [];
        map[key].push(word);
    }
    // console.log(map)
    return Object.values(map);
}

console.log(getGroupedAnagrams(['pat', 'tap', 'apt', 'bat']));
