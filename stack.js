class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        const node = this.top;

        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.next;
        }

        this.length--;
        return node.value;
    }

    size() {
        return this.length;
    }

}

const stack = new Stack();
stack.push('A');
console.log(stack.pop());
stack.push('B');

stack.push('C');
console.log(stack);
