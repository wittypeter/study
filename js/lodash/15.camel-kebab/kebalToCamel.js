function kebabToCamel(str) {
    const res = str.replace(/\-([a-zA-Z])/g, (match, p) => {
        return p.toUpperCase();
    });

    return res;
}

const str = 'camel-case';
const single = 'camel';

console.log(kebabToCamel(str) === 'camelCase');
console.log(kebabToCamel(single) === 'camel');