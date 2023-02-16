
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Current solution only works with forward shift.
function shiftLinkedList(head, k) {
    let length = getLength(head);
    k = k % length;
    if (k === 0) return head;

    let curr = head;
    let prevTail;
    let newTail
    let newHead;
    while (curr) {
        if (length === k + 1) newTail = curr;
        if (length === k) newHead = curr;
        if (!curr.next) prevTail = curr;
        curr = curr.next;
        length--;
    }

    newTail.next = null;
    prevTail.next = head;
    return newHead;

}

function getLength(head) {
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    return length;
}
