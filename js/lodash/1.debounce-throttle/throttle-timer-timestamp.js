function throttle(fn, wait, options) {
    options = { leading: true, trailing: true, ...options };

    let timer;
    let previous = 0;

    return function() {
        const now = Date.now();
        if (!previous && !options.leading) {
            previous = now;
        }

        const args = Array.prototype.slice.apply(arguments);

        const remain = wait - (now - previous);

        if (remain <= 0 || remain > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            previous = now;
            fn.apply(this, args);
        } else if (!timer && options.trailing) {
            timer = setTimeout(() => {
                previous = options.leading ? Date.now() : 0;
                timer = null;

                fn.apply(this, args);
            }, remain);
        }
    }
}

function test(a, b) {
    console.log(a, b);
}

let throttleTest = throttle(test, 500);

console.log('started ---- 1')
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

setTimeout(() => {
    throttleTest = throttle(test, 500, { leading: false });

    console.log('started ---- 2')
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
}, 2000);




setTimeout(() => {
    throttleTest = throttle(test, 500, { trailing: false });

    console.log('started ---- 3')
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
}, 5000);
