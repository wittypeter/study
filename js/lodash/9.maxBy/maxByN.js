function maxBy(arr, transformKey) {
    if (!arr || arr.length < 2) {
        return arr;
    }

    return arr.reduce((prev, cur) => {
        if (transformKey(cur) > transformKey(prev[0])) {
            return [cur];
        }

        if (transformKey(cur) === transformKey(prev[0])) {
            return [...prev, cur];
        }

        return prev;
    }, [arr[0]]);
};



var objects = [{ 'n': 1 }, { 'n': 2 }, { n: 2}];
 
console.log(maxBy(objects, function(o) { return o.n; }));
