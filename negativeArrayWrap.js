const array = [1,2,3,4,5];
const index = -0;

const wrapped = (index % array.length + array.length) % array.length;

console.log(array[wrapped]);
