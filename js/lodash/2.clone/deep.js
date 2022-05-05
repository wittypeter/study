// 1. JSON.parse(JSON.stringify())
// 2. 遍历

function _deepClone(obj, set) {
    // undefined & null
    if (obj == null) {
        return obj;
    }

    // 基本类型原样返回
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        return obj;
    }

    const newVal = obj instanceof Array ? [] : {};

    set.add(obj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (set.has(obj[key])) {
                newVal[key] = obj[key];
            } else {
                newVal[key] = _deepClone(obj[key], set);
            }
        }
    }

    return newVal;
}

function deepClone(obj) {
    const map = new WeakSet();
    return _deepClone(obj, map);
}

const obj = {
    a: 1,
    b: {
        hello: 'world'
    },
    c: undefined,
    d: null,
    f: function test() {}
}

obj.self = obj;

console.log(deepClone(obj));