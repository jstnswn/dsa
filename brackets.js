function balancedBrackets(string) {
    const openBrackets = ['(', '[', '{'];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const bracketStack = [];

    for (let bracket of string) {
        if (openBrackets.includes(bracket)) bracketStack.push(bracket);
        else if (bracketMap[bracket]) {
            const recentOpen = bracketStack.pop();
            if (bracketMap[bracket] !== recentOpen) return false;
        }
    }

    return bracketStack.length === 0;
}

console.log(balancedBrackets("([])(){}(())()()"));
