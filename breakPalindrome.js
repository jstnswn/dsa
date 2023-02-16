function breakPalindrome(palindromeStr) {
    // find second lowest value
    const sorted = palindromeStr.split('').sort();
    const uniqueOnly = sorted.filter((value, index, self) => self.indexOf(value) === index);
    if (uniqueOnly.length <= 1) return 'IMPOSSIBLE';
    let uniqueIdx = 0;
    const isOdd = palindromeStr % 2 === 1;
    const midIdx = Math.floor(palindromeStr.length / 2);
    let result;

    let swapped = false;


    for (let i = 0; i < palindromeStr.length; i++) {
        const curr = palindromeStr[i];
        const swapVal = uniqueOnly[uniqueIdx];
        if (curr !== swapVal && !(isOdd && i === midIdx)) {

            if (curr.charCodeAt(0) < swapVal.charCodeAt(0)) continue;
            result = palindromeStr.slice(0, i) + swapVal + palindromeStr.slice(i + 1);

            swapped = true;
            break;
        }

        const endOfLoop = i === palindromeStr.length - 1;
        if (endOfLoop && !swapped && uniqueIdx < uniqueOnly.length) {
            uniqueIdx++;
            i = 0;
        }
    }

    const newUnique = result.split('').filter((value, index, self) => self.indexOf(value) === index);

    if (!result || newUnique.length === 1) return 'IMPOSSIBLE';
    else return result;

}

// fbf
