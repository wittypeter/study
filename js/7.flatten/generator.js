function* flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            yield *flatten(arr[i]);
        } else {
            yield arr[i];
        }
    }
}

const src = [1, 2, [3, 4, [5, 6]], 7];

const res = [...flatten(src)];
console.log(res);