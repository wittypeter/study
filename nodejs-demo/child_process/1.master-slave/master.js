const os = require('os');
const fork = require('child_process').fork;

const len = os.cpus().length;

for (let i = 0; i < len; i++) {
    fork('./worker.js');
}