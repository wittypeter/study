require('./apply');

Function.prototype.bind2 = function(context) {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    return function() {
        var nextArgs = [];
        for (var i = 0; i < arguments.length; i++) {
            nextArgs.push(arguments[i]);
        }

        nextArgs = nextArgs.concat(args);

        const res = this.apply2(context, nextArgs);

        return res;
    }
}


function testBind() {
    var res = this.value;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

var obj = {
    value: 1
}

console.log(testBind.bind(obj)() === 1);
console.log(testBind.bind(obj)(1) === 2);
console.log(testBind.bind(obj)(1, 2) === 4);
console.log(testBind.bind(obj)(1, 2, 3) === 7);

console.log(testBind.bind(obj)() === 1);
console.log(testBind.bind(obj, 1)(1) === 3);
console.log(testBind.bind(obj, 1, 2)(1, 2) === 7);
console.log(testBind.bind(obj, 1, 2, 3)(1, 2, 3) === 13);


