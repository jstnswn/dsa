class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.length ===  0) {
            this.front = node;
        } else {
            this.back.next = node;
        }

        this.back = node;
        this.length++;
        return this.length;
    }

    dequeue() {
        if (this.length === 0) return null;

        const node = this.front;

        if (this.length === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }

        this.length--;
        return node.value;
    }

    size() {
        return this.length;
    }
}
