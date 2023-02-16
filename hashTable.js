class Node {
    constructor(key, value) {
        this.value = value;
        this.next = null;
        this.key = key;
    }
}

class LinkedList {
    constructor(value) {
        this.head = value ? new Node(value) : null;
    }

    add(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr) {
                if (!curr.next) {
                    curr.next = node;
                    break;
                }
                curr = curr.next;
            }
        }
    }
}

class HashTable {
    constructor(arraySize) {
        this.table = new Array(arraySize);
    }

    hash(key) {
        const hashVals = [];
        for (let letter of key) {
            hashVals.push(letter.charCodeAt(0));
        }

        const hashSums = hashVals.reduce((sum, num) => sum + num)
        return hashSums % this.table.length;
    }

    setItem(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            const linkedList = new LinkedList();
            this.table[index] = linkedList;
        }

        this.table[index].add(key, value)
    }

    getItem(key) {
        const index = this.hash(key);
        let curr = this.table[index].head;
        console.log('curr', curr)
        while (curr) {
            if (curr.key === key) return curr.value;
            curr = curr.next
        }
        if (!curr) return 'Item not found';
    }
}

const hash = new HashTable(10);

// console.log(hash.hash('abc')) hash.setItem('abc', 1)
hash.setItem('abc', 2)
hash.setItem('adb', 3)
hash.setItem('abd', 7)
// console.log(hash.table[5])
console.log(hash.getItem('abd'));
