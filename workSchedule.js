function findSchedules(workHours, dayHours, pattern) {
    const array = pattern.split('');
    const qIdxs = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '?') qIdxs.push(i);
        else sum += Number(array[i]);
    }

    const diff = workHours = sum;
    const template = pattern.map(el => {
        if (el === '?') return 0;
        else return Nubmer(el);
    })

    const pertubations = getCombos(template, qIdxs, diff, dayHours);


    return pertubations;
}

function getCombos(diff, endLength, dayHours, startIdx = 0, pertubation = [], pertubations = []) {
    // Not sure exactly what to do here.
    // Something like, start at the last ?, fill up hours incrementally until the dayHours limit is hit,
    // then do the same for the next ?
    // do some sort of recursion to repeat the process but on the next ?.
}
