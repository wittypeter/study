function camelToKebal(str) {
    const res = str.replace(/([A-Z])/g, (match, p) => {
        return `-${p.toLowerCase()}`;
    });

    if (res.startsWith('-')) {
        return res.slice(1);
    }

    return res;
}


const str = 'camelCase';
const sss = 'CamelCase';
const single = 'camel';

console.log(camelToKebal(str) === 'camel-case');
console.log(camelToKebal(sss) === 'camel-case');
console.log(camelToKebal(single) === 'camel');