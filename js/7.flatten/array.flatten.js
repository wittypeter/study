// test
const arr = [1, [2, [3]]];

console.log(arr.flat(), arr);



function flat(arr, depth = 1) {
    if (depth === 0) {
        return arr;
    }

    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
    }, []);
}

console.log(flat(arr), arr);