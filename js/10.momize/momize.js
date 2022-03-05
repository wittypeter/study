function momize(fn, hasher) {
    const momized = function(key) {
        key = hasher ? hasher.apply(null, arguments) : key;
        if (momized.cache[key]) {
            return momized.cache[key];
        }

        momized.cache[key] = fn.apply(this, arguments);

        return momized.cache[key];
    }

    momized.cache = {};
    return momized;
}

let i = 0;
function fib(n) {
    i++;
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = momize(fib);

console.log(fib(10), i);