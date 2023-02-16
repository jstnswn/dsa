class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let curr = this.root;

        for (let letter of word) {
            if (curr.children[letter] === undefined) {
                curr.children[letter] = new TrieNode()
            }
            curr = curr.children[letter];
        }

        curr.endOfWord = true;
    }

    search(word) {
        let curr = this.root;

        for (let letter of word) {
            if (curr.children[letter] === undefined) return false;
            curr = curr.children[letter];
        }

        return curr.endOfWord;
    }

    // wildSearch
    wildSearch(word) {
        // add recursion wrap later.
        function dfs(index, root) {
            // start with this.curr
            let curr = root;

            // add = index later
            for (let i = 0 /* = index*/; i < word.length; i++) {
                const letter = word[i];

                if (letter === '.') {
                    // pause here, code rest of else and come back
                    // ex ".ab" could be a lot of things, so we need to visit multipe paths.
                    for (let child of Object.values(curr.children)) {
                       if (dfs(index + 1, child)) return true; // +1 because we're searching for char after dot.
                    }
                    // if we don't find what we're looking for, return false
                    return false;
                } else {
                    if (curr.children[letter] === undefined) return false;
                    curr = curr.children[letter];
                }
            }

            return curr.endOfWord;
        }

        return dfs(0, this.root);
    }

    startsWith(prefix) {
        let curr = this.root;

        for (let letter of prefix) {
            if (curr.children[letter] === undefined) return false;
            curr = curr.children[letter];
        }

        return true;
    }
}
