'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}



/*
 * Complete the 'createLinkedList' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function createLinkedList(head) {
    const orgLength = getListLength(head);
    let newLength = 0;
    let currNewList = new SinglyLinkedListNode(head.value);
    let currNode = head;
    let prevNode = null;
    let count = 1;
    let newCount = 0;


    while (head.next) {
        const newNode = new SinglyLinkedListNode(currNode.value)
        if (count % 2 !== 0) {
            prevNode.next = currNode.next;
            currNode = prevNode.next;
            currNewList.next = newNode;
            newLength++;
        }

        count++;
        prevNode = currNode;
        currNode = currNode.next;

        if (!currNode.next && newLength !== orgLength) {
            currNode = head;
            count = 1;
        }

    }

    // console.log('list', head)
    // console.log('length', getListLength(head))

    // return head;
    return currNewList;
}

function getListLength(list) {
    let length = 1;

    let currNode = list;

    while (currNode.next) {
        length++;

        currNode = currNode.next;
    }

    return length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let head = new SinglyLinkedList();

    const headCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < headCount; i++) {
        const headItem = parseInt(readLine().trim(), 10);
        head.insertNode(headItem);
    }

    const result = createLinkedList(head.head);

    printSinglyLinkedList(result, '\n', ws);
    ws.write('\n');

    ws.end();
}
