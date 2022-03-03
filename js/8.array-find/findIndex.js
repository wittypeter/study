function findIndex(arr, predicate, context) {
    for (var i = 0; i < arr.length; i++) {
        if (predicate.call(context, arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex([1, 2, 3, 4], function(item, index, arr) {
    return item > 2;
}))
