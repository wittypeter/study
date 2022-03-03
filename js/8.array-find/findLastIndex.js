function findLastIndex(arr, predicate, context) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (predicate.call(context, arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

console.log(findLastIndex([1, 2, 3, 4], function(item, index, arr) {
    return item < 2;
}))

