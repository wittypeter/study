function once(fn) {
    let called = false;
    let value;

    return function() {
        if (called) {
            return value;
        }
        called = true;

        value = fn.apply(this, Array.prototype.slice.call(arguments));
        return value;
    }
}

function test(x) {
    return x;
}

const fn = once(test);

console.log(fn(3), fn(4), fn(5));