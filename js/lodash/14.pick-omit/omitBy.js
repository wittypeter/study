function omitBy(obj, by) {
    const res = {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !by(obj[key])) {
            res[key] = obj[key];
        }
    }

    return res;
}


var object = { 'a': 1, 'b': '2', 'c': 3 };

function isNumber(a) {
    return typeof a === 'number';
}
 
console.log(omitBy(object, isNumber));
// => { 'a': 1, 'c': 3 }