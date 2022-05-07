function groupBy(arr, transformKey) {
    const realTransfromKey = isFunction(transformKey) ? transformKey : (x) => x[transformKey];

    return arr.reduce((prev, cur) => {
        const key = realTransfromKey(cur);
        if (prev[key]) {
            prev[key].push(cur);
        } else {
            prev[key] = [cur];
        }

        return prev;
    }, {});
}

function isFunction(fn) {
    return typeof fn === '[object Function]';
}


console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
console.log(groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }