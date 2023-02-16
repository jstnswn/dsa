var isPalindrome = function (s) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const flat = [];
    for (let letter of s) {
        if (letters.includes(letter.toLowerCase())) {
            flat.push(letter.toLowerCase())
        }
    }

    console.log(flat)
    if (flat.length <= 1) return true;


    const isOdd = flat.length % 2 === 1;
    const mid = Math.floor(flat.length / 2);
    let left = mid - 1;
    let right = isOdd ? mid + 1 : mid;

    while (left >= 0 && right < flat.length) {
        if (flat[left] !== flat[right]) return false;
        left--;
        right++;
    }

    return true;
};

console.log(isPalindrome('0P'));
