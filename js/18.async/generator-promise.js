const fs = require('fs');
const path = require('path');

const readFile = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        })
    });
}

function *gen() {
    let pathname = path.resolve(__dirname, './trunkify.js');
    const r1 = yield readFile(pathname);
    console.log(r1);
    const r2 = yield readFile(pathname);
    console.log(r2)
};

// const it = gen();

// it.next().value.then((res) => {
//     it.next(res).value.then((data) => {
//         it.next(data);
//     })
// });

function run(fn) {
    const g = fn();

    function next(data) {
        return new Promise((resolve, reject) => {
            const res = g.next(data);
            if (res.done) {
                return resolve();
            }

            res.value.then(next);
        });
    }

    next();
}

run(gen);