/**
 * 
 * @param {any[]} arr 
 * @param {(prev, cur, index, arr) => {}} fn 
 */
function reduce(arr, fn) {
    let prev = arguments[2];

    if (arr.length === 0 && prev === void 0) {
        throw new Error('no initial value while arr.length is 0');
    }

    if (arr.length === 1 && prev === void 0) {
        return arr[0];
    }

    let i = 0;
    if (prev === void 0) {
        prev = arr[0];
        i++;
    }

    while(i < arr.length) {
        prev = fn(prev, arr[i], i++, arr);
    }

    return prev;
}


const arr = [1, 2, 5];

const res = reduce(arr, (sum, cur, index, arr) => {
    console.log(sum, cur, index)
    return sum + cur;
});

console.log('res', res);