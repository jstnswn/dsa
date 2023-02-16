const arr = [[1, 'ee'],[0, 'ex'], [3, 'a'], [0, 'ab']]
const arr2 = ['b', 'a', 'd', 'c']
const arr3 = ['ee', 'ex', 'a', 'ab']

// arr.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0)
//     else return a[0] - b[0]
// })

// arr.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].localeCompare(b[1]);
//     else return a[0] - b[0]
// })

arr.sort((a, b) => {
    if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
        else return 1
    }
    else return a[0] - b[0]
})


// console.log(arr)

// console.log('a' < 'B')

// 'A' === 65
// 'z' === 122

// function isDig(el) {
//     return el <= 122 && el >= 65
// }

// console.log(isDig('z'))
