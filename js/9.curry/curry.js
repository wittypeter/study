function _curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}


function curry(fn, length) {
    length = length || fn.length;

    return function() {
        if (arguments.length < length) {
            return curry(_curry.apply(this, [fn].concat(Array.prototype.slice.call(arguments))), length - arguments.length);
        } else {
            return fn.apply(this, arguments)
        }
    }
}

function fn(a, b, c) {
    return a + b + c;
}

console.log(curry(fn)(1, 2, 3));
console.log(curry(fn)(1)(2, 3));
console.log(curry(fn)(1, 2)(3));