function stringIdexOf(string) {
    console.time('string')
    const result = [];

    for (el of string) {
        result.push(string.indexOf(el));
    }

    console.timeEnd('string')
    return result;
}


function arrayIdexOf(string) {
    console.time('array')
    const result = [];
    const arred = string.split('');

    for (el of arred) {
        result.push(arred.indexOf(el));
    }

    console.timeEnd('array')
    return result;
}

const string = 'daflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lk';
const string2x = 'daflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lkdaflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lk';
const string4x = 'daflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lkdaflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lkdaflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lkdaflkadjflkajdsflkdajfkl;ajsdlkfjasdklfjsadklfjsadlkfkldsfkladsfjlkdsajflkdsajfkldsajflkdasjfdaslkjfadlkjfdas;lk';
const stringx100 = string.repeat(100)
const stringx10000 = string.repeat(10000)
const stringx1000000 = string.repeat(1000000)

stringIdexOf(string);
arrayIdexOf(string);
console.log('doubled length string:')
stringIdexOf(string2x);
arrayIdexOf(string2x);
console.log('quadrupled length string:')
stringIdexOf(string4x);
arrayIdexOf(string4x);
console.log('100x length string:')
stringIdexOf(stringx100);
arrayIdexOf(stringx100);
console.log('10000x length string:')
stringIdexOf(stringx10000);
arrayIdexOf(stringx10000);
console.log('1000000x length string:')
stringIdexOf(stringx1000000);
arrayIdexOf(stringx1000000);
