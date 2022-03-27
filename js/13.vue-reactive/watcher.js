const Dep = require('./dep');

class Watcher {
    constructor(vm, fn) {
        this.vm = vm;
        this.fn = fn;

        this.get();
    }

    get() {
        Dep.target = this;
        this.fn();
        Dep.target = null;
    }

    update() {
        this.fn();
    }
}

module.exports = Watcher;