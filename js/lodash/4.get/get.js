function get(obj, path, defaultValue) {
    // a[3].b -> a.3.b
    // a["test"].b -> a.test.b
    // a['test'].b -> a.test.b
    const paths = path.replace(/\[(\w+)\]/g, '.$1').replace(/\['(\w+)'\]/g, '.$1').replace(/\["(\w+)"\]/g, '.$1').split('.');

    let result = obj;
    for (let i = 0; i < paths.length; i++) {
        result = result[paths[i]];

        if (!result) {
            break;
        }
    }

    return result === undefined ? defaultValue : result;
}

const z = {
    a: 1,
    b: {
        test: {
            c: 'hello'
        }
    },
    d: [1, 2, {}]
};

console.log(get(z, 'b["test"].c', 2) === 'hello');
console.log(get(z, `b['test'].c`, 2) === 'hello');
console.log(get(z, `d[1]`) === 2);
console.log(get(z, `d[2].m`, 'noValue') === 'noValue');
