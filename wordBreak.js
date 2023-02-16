var wordBreak = function (s, wordDict) {
    const wordHash = wordDict.reduce((acc, word) => {
        acc[word] = [];
        return acc;
    }, {});

    for (let word of wordDict) {
        let wp = 0;
        for (let lp = 0; lp < s.length; lp++) {
            if (word[wp] === s[lp]) {
                wp++;
            } else wp = 0;
            if (wp === word.length) {
                const strIndx = lp - word.length + 1;
                for (let i = strIndx; i <= lp; i++) {
                    wordHash[word].push(i);
                }
            }
        }
    }

    const values = Object.values(wordHash);
    const set = new Set();

    for (let array of values) {
        for (let index of array) {
            set.add(index);
        }
    }

    return set.size === s.length;
};



console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
