const obj = {};
const randArr = [4, 1, 0, 2, 9, 2, 8, 10]

for (let num of randArr) {
    if (obj[num] === undefined) obj[num] = 'The Truth';
}

console.log(obj)
