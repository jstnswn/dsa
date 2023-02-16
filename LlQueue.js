class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }


    removeFromHead() {
        if (this.head === null) return null;

        if (this.head && this.head.next === null) {
            this.tail = null
        }
        const node = this.head;
        this.head = this.head.next;
        return node;
    }

}

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
        this.length = 0;
    }

    enqueue(value) {
        this.linkedList.addToTail(value);
        this.length++;
    }

    dequeue() {
        if (!this.length) return null
        this.length--;
        return this.linkedList.removeFromHead();
    }

    size() {
        return this.length;
    }
}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
console.log(queue.size());
console.log(queue)
queue.dequeue();
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');
console.log('head', queue.linkedList.head.next)




