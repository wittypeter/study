const class2type = {};

'Undefined Null Boolean Number String Object Array RegExp Error Function Date'.split(' ').map((item) => {
    class2type[`[object ${item}]`] = item.toLowerCase();
})

function type(obj) {
    if (obj == null) {
        return obj + '';
    }

    return typeof obj === 'object' || typeof obj === 'function' 
        ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}

[undefined, null, true, 1, '', {}, [], /test/, new Error(''), Math.random, new Date()].map((item) => {
    console.log(type(item));
})
