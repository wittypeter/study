const chunkify = require('./trunkify.js');
const fs = require('fs');
const path = require('path');

const readFile = chunkify(fs.readFile);

function *gen() {
    let pathname = path.resolve(__dirname, './trunkify.js');
    const r1 = yield readFile(pathname);
    console.log(r1);
    const r2 = yield readFile(pathname);
    console.log(r2)
};

function run(fn) {
    const gen = fn();

    function next(err, data) {
        if (err) {
            throw err;
        }

        const res = gen.next(data);
        if (res.done) {
            return;
        }

        res.value(next);
    }

    next();
}

run(gen);