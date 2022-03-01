function debounce(fn, wait) {
    let handler;

    return function() {
        if (handler) {
            clearTimeout(handler)
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

const debounceTest = debounce(test, 500);

var a = 1;
var b = 2;

debounceTest(a, b);
debounceTest(a, b);
debounceTest(a, b);

setTimeout(() => {
    debounceTest(a, b)
}, 100);

