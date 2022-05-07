function render(template, data) {
    const keys = Object.keys(data || {});

    const fnstr = `return \`${template}\``;

    const values = keys.map((key) => data[key]);
    const fn = new Function(...keys, fnstr);

    return fn(...values);
}

const template = 'Hello, i\'m ${ name }, ${ age } years old';

console.log(render(template, { name: 'peter', age: 28 }));