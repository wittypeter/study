function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null) {
        const xkeys = Object.keys(x);
        const ykeys = Object.keys(y);

        if (xkeys.length !== ykeys.length) {
            return false;
        }

        for (let key of xkeys) {
            if (!deepEqual(x[key], y[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}

const x = {
    a: 1,
    b: {
        test: 'c'
    },
    d: [1, 2, {}]
};

const y = x;

const z = {
    a: 1,
    b: {
        test: 'c'
    },
    d: [1, 2, {}]
};

console.log(deepEqual(x, y) === true);
console.log(deepEqual(x, z));
