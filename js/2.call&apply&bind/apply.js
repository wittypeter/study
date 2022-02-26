Function.prototype.apply2 = function(context, arr) {
    context = context || window;

    context.fn = this;

    var res;
    if (!arr) {
        res = context.fn();
    } else {
        var args = [];
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }

        var str = 'context.fn(' + args + ')';

        res = eval(str);
    }

    delete context.fn;

    return res;
}

const obj = {
    value: 3
}

function testApply(test1, test2) {
    return this.value + (test1 || 0) + (test2 || 0);
}

console.log(testApply.apply2(obj));
console.log(testApply.apply2(obj, [1]));
console.log(testApply.apply2(obj, [1, 2]));
console.log(testApply.apply2(obj, [1, 2, 3]));