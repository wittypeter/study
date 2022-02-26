// es3

Function.prototype.call2 = function(context) {
    context = context || window;
    context.fn = this;

    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }

    var res = eval('context.fn(' + args + ')');

    delete context.fn

    return res;
}

var obj = {
    value: 3
}

function testCall(fir, sec) {
    return this.value + fir + sec;
}


const res = testCall.call2(obj, 1, 5);

console.log(res);
