function render(template, data) {
    data = data || {};

    const res = template.replace(/\${(.*?)}/g, (match, p) => {
        return data[p.trim()];
    });

    return res;
}

const template = 'Hello, i\'m ${ name }, ${ age } years old';

console.log(render(template, { name: 'peter', age: 28 }));