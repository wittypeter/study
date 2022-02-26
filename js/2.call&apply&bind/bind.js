Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBind = function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fBind ? this : context, args.concat(bindArgs));
    }

    function Fnop() {}

    Fnop.prototype = this.prototype;

    fBind.prototype = new Fnop();

    return fBind;
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

console.log(testBind.bind2(obj)() === 1);
console.log(testBind.bind2(obj)(1) === 2);
console.log(testBind.bind2(obj)(1, 2) === 4);
console.log(testBind.bind2(obj)(1, 2, 3) === 7);

console.log(testBind.bind2(obj)() === 1);
console.log(testBind.bind2(obj, 1)(1) === 3);
console.log(testBind.bind2(obj, 1, 2)(1, 2) === 7);
console.log(testBind.bind2(obj, 1, 2, 3)(1, 2, 3) === 13);


