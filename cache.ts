class CacheInterface {
  maxItems: number;
  cache: CustomCache;
  db: dbInterface;
  cacheCount: number;

  constructor(maxItems: number) {
    this.maxItems = maxItems;
    this.cache = {};
    this.cacheCount = 0;
    this.db = new dbInterface();
  }

  get(key: string) {
    if (key in this.cache) return this.cache[key];

    return this.db.get(key);
  }

  set(key: string, value: string) {
    if (this.cacheCount >= this.maxItems) return;

    if (this.has(key)) {
      this.cache[key].update(value);
    } else {
      this.cache[key] = new CacheItem();
      this.cacheCount++;
    }

    this.db.insert(key, value);
  }

  delete(key: string) {
    delete this.cache[key];
    this.cacheCount--;
  }

  has(key: string) {
    return key in this.cache;
  }
}

class CacheItem {
  createdAt: number;
  updatedAt: number;
  value: string;
  exp: number;

  constructor(exp?: number) {
    this.createdAt = new Date().getMilliseconds();
  }

  update(value: string) {
    this.value = value;
    this.updatedAt = new Date().getMilliseconds();
  }
}

interface CustomCache {
  [index: string]: CacheItem;
}

class dbInterface {
  get(key: string) {
    return `fetched ${key} from database`;
  }

  insert(key: string, value: string) {
    return `inserted ${value} to key ${key} in db`;
  }
}
