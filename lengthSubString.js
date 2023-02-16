// var lengthOfLongestSubstring = function (s) {
//     let left = 0;
//     let right = 1;
//     let length = 1;
//     let max = s.length ? 1 : 0;
//     const table = {
//         [s[left]]: 1,
//         // [s[right]]: 1
//     };


//     while (right < s.length) {
//         const currEl = s[right];

//         // check end
//         if (right === s.length - 1) {
//             if (!table[currEl]) length++;
//             max = Math.max(length, max);
//             break;
//         }

//         if (left === right) {
//             table[currEl] = 1
//             length = 1;
//             right++;
//             continue;
//         }
//         debugger
//         if (table[currEl]) {
//             // reset vars
//             max = Math.max(length, max);
//             length--;

//             // move left index
//             delete table[s[left]];
//             left++;
//         } else {
//             table[currEl] = 1;
//             right++;
//             length++;
//         }
//     }

//     return max;
// };

// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 1) return 1;
//     if (!s.length) return 0;

//     let left = 0;
//     let right = 0;
//     let strLibrary = {};
//     let max = 0;

//     while (right < s.length) {
//         debugger
//         // Initialize
//         // console.log(left, right,max)
//         if (left === right) {
//             strLibrary = {};
//             strLibrary[s[left]] = true;
//             right++;
//             max = Math.max(max, right - left);
//             continue;
//         }

//         const curr = s[right];

//         if (strLibrary[curr] === undefined) {
//             right++;
//             strLibrary[curr] = true;
//             max = Math.max(max, right - left);
//         } else {

//             while (s[left] !== curr) {
//                 delete strLibrary[s[left]];
//                 left++;
//             }
//             if (s[left] === curr) {
//                 delete strLibrary[s[left]];
//                 left++;
//             }
//         }

//     }

//     return max

// };

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let left = 0;
    const set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwa12waka3a"));
