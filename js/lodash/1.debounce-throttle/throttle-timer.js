function throttle(fn, wait) {
    let handler;

    return function() {
        if (handler) {
            return;
        }

        handler = setTimeout(() => {
            handler = null;
            fn.apply(this, arguments);
        }, wait);
    }
}


function test(a, b) {
    console.log(a, b);
}

const throttleTest = throttle(test, 500);

console.log('started')
throttleTest(1, 2);
throttleTest(1, 2);
throttleTest(1, 2);
throttleTest(1, 2);

setTimeout(() => {
    throttleTest(1, 2);
}, 100);
setTimeout(() => {
    throttleTest(1, 2);
}, 300);
setTimeout(() => {
    throttleTest(1, 2);
}, 800);