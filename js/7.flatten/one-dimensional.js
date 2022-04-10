function flatten(arr) {
    const res = [];

    return Array.prototype.concat.apply(res, arr);
}

console.log(flatten([1, 2, 3]))
console.log(flatten([1, 2, [3, 4, 5]]))
console.log(flatten([1, [2, 20], [3, 4, 5]]))
console.log(flatten([[1, 10], [2, 20], [3, 4, 5]]))
console.log(flatten([[1, 10], [2, 20], [3, 4, [5, 50]]]))
console.log(flatten([[1, 10], [2, 20], [[3, 30], 4, [5, 50]]]))
console.log(flatten([[1, 10], [2, 20], [[3, 30], [4, 40], [5, 50]]]))