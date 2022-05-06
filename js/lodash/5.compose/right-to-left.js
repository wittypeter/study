function compose(fns) {
    return fns.reduce((f, g) => {
        return function(...args) {
            return f(g(...args));
        }
    });
}


function func1() {
    console.log('func1: ', arguments);
    return Array.prototype.slice.call(arguments);
}

function func2() {
    console.log('func2: ', arguments);
    return Array.prototype.slice.call(arguments);
}

function func3() {
    console.log('func3: ', arguments);
    return Array.prototype.slice.call(arguments);
}

function func4() {
    console.log('func4: ', arguments);
    return Array.prototype.slice.call(arguments);
}


const fn = compose([func1, func2, func3, func4]);

console.log(fn(1, 2, 3));