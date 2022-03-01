function throttle(fn, wait) {
    var time = 0;

    return function() {
        const now = Date.now();
        if (now - time < wait) {
            return;
        }

        time = now;
        fn.apply(this, arguments);
    }
}

function test(a, b) {
    console.log(a, b);
} 

const throttleTest = throttle(test, 500);

throttleTest(1, 2);
throttleTest(1, 2);
throttleTest(1, 2);
throttleTest(1, 2);

setTimeout(() => {
    throttleTest(1, 2)
}, 100);

setTimeout(() => {
    throttleTest(1, 2)
}, 200);

setTimeout(() => {
    throttleTest(1, 2)
}, 800);