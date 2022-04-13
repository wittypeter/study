function sum() {
    const args = Array.prototype.slice.call(arguments);

    function add() {
        for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return add;
    }

    add.valueOf = function() {
        return args.reduce((prev, cur) => prev + cur, 0);
    }

    return add;
}

console.log(sum(1)(2, 3) == 6);
console.log(sum(1)(2)(3) == 6);
