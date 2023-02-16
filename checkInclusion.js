var checkInclusion = function (s1, s2) {
    const hash = s1.split('').reduce((acc, el) => {
        acc[el] = el in acc ? acc[el] + 1 : 1;
        return acc;
    }, {});

    debugger;
    let left = 0;
    let hashCopy = { ...hash };
    for (let right = 0; right < s2.length; right++) {
        const el = s2[right];
        if (!(el in hashCopy)) {
            hashCopy = { ...hash };
            left = right + 1;
        } else {
            hashCopy[el]--;
            while (hashCopy[el] < 0) {
                hashCopy[s2[left]]++;
                left++;
            }
        }
        if (right - left + 1 === s1.length) return true;
    }
    return false;
};

console.log(checkInclusion("adc", "daacaadaa"));
