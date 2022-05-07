function chunk(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(i / size);
        if (res[index]) {
            res[index].push(arr[i]);
        } else {
            res[index] = [arr[i]];
        }
    }

    return res;
}


console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
 
console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]