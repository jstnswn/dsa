class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let class1 = new LinkedList(9);
let class2 = class1

const obj = {'a': 1};
const obj2 = obj;

console.log(class1 === class2)
console.log(obj === obj2)
