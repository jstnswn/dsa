class RandomizedSet {
    constructor() {
        this.set = [];
    }

    insert(val) {

    }

    remove(val) {

    }

    getRandom() {

    }

    hash(key) {
        let val = 0;
        key.forEach(el => {
            val += el.charCodeAt(0);
        })

        console.log(val % this.set.length)
        return val % this.set.length;
    }
};

const item = new RandomizedSet();

console.log(item.insert(1));
