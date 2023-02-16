class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize || 1;
        this.currSize = 0;
        this.cache = {};
        this.LL = new LL();
    }

    insertKeyValuePair(key, value) {
        if (!(key in this.cache)) {
            if (this.currSize === this.maxSize) {
                this.removeLeastRecent();
            } else {
                this.currSize++;
            }
            this.cache[key] = new Node(key, value);
        } else {
            this.replaceKey(key, value);
        }
        this.LL.setHead(this.cache[key]);
    }

    getValueFromKey(key) {
        if (!(key in this.cache)) return null;
        // update LRU whenever used
        this.updateMostRecent(this.cache[key]);
        // must key into value since it is a property of LL node;
        return this.cache[key].value;
    }

    updateMostRecent(node) {
        this.LL.setHead(node);
    }

    replaceKey(key, value) {
        if (!(key in this.cache)) {
            throw new Error('The provided key is not in the cache!');
        }
        // Updates both the cache and the node on the LL reference
        this.cache[key].value = value;
    }

    removeLeastRecent() {
        const key = this.LL.tail.key;
        this.LL.removeTail();
        delete this.cache[key];
    }

    getMostRecentKey() {
        return this.LL.head.key;
    }
}


class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === node) return;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else if (this.head === this.tail) {
            this.tail.prev = node;
            this.head = node;
            this.head.next = this.tail;
        } else {
            if (this.tail === node) this.removeTail();
            node.removeBindings(); // in case it was already present in LL;
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    removeTail() {
        if (this.tail === null) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return
        }
        this.tail = this.tail.prev;
        this.tail.next = null;

    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    removeBindings() {
        if (this.prev !== null) {
            this.prev.next = this.next;
        }
        if (this.next !== null) {
            this.next.prev = this.prev;
        }
        this.next = null;
        this.prev = null;
    }
}
