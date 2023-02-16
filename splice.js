const arr = [1,2,3,4,5];

const idxsToRemove = [1, 2];

for (let i = idxsToRemove.length - 1; i > -1; i--) {
    arr.splice(idxsToRemove[i], 1);
}



