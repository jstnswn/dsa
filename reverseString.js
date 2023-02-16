function reverseWordsInString(string) {
    const wordStack = string.split(' ').filter(word => word !== '');
    const spaceStack = [];
    let spaceCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') spaceCount++;
        if (string[i] !== ' ' && spaceCount > 0) {
            spaceStack.push(spaceCount);
            spaceCount = 0;
        }
    }

    debugger
    const resArray = [];
    while (wordStack.length) {
        resArray.push(wordStack.pop());
        const numOfSpaces = spaceStack.pop();
        for (let i = 0; i < numOfSpaces; i++) {
            resArray.push(' ');
        }
    }

    // "this      string     has a     lot of   whitespace"
    // "whitespace   of lot     a has     string      this"

    console.log(resArray)
    return resArray.join('');
}

const string = "this      string     has a     lot of   whitespace";
console.log(reverseWordsInString(string));
