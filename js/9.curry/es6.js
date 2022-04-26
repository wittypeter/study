function curry(fn, ...args) {
    return args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args);
}


function fn(a, b, c) {
    return a + b + c;
}

console.log(curry(fn)(1, 2, 3));
console.log(curry(fn)(1)(2, 3));
console.log(curry(fn)(1, 2)(3));