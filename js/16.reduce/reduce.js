Array.prototype.reduce2 = function(fn) {
    let prev = arguments[1];

    if (!this.length && prev === undefined) {
        throw new Error('no initial value when length is 0')
    }

    if (this.length === 1 && prev === undefined) {
        return this[0];
    }

    let i = 0;
    if (prev === undefined) {
        prev = this[0];
        i++;
    }

    while(i < this.length) {
        prev = fn(prev, this[i], i++, this);
    }

    return prev;
};




const arr = [1, 2, 5];

const res = arr.reduce2((sum, cur, index, arr) => {
    console.log('--', sum, cur, index, arr);
    return sum + cur;
});

console.log('res', res);