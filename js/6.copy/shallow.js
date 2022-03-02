// 1. Array.prototype.concat
// 2. Array.prototype.slice
// 3. 遍历

function shallowCopy(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }

    const newObj = obj instanceof Array ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }

    return obj;
}

const obj = {
    a: 1,
    b: {
        hello: 'world'
    },
    c: undefined,
    d: function test() {}
}

console.log(shallowCopy(obj));