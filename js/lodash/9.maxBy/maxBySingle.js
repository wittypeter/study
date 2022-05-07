function maxBy(arr, transformKey) {
    return arr.reduce((prev, cur) => {
        return transformKey(prev) > transformKey(cur) ? prev : cur;
    });
}

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
console.log(maxBy(objects, function(o) { return o.n; }));
// => { 'n': 2 }