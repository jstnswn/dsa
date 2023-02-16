const returnFalse = () => false;
const returnTrue = () => true;

const recurse = () => {
    returnFalse();

    return true;
}

console.log(recurse())
