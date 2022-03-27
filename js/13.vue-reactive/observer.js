const Dep = require('./dep');

class Observer {
    constructor(value) {
        // TODO: array
        this.walk(value);
    }

    walk(value) {
        const keys = Object.keys(value);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(value, keys[i]);
        }
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep();
    val = obj[key];
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            console.log('===get')
            if (Dep.target) {
                dep.depend();
            }

            return val;
        },
        set(newVal) {
            if (newVal !== val) {
                console.log('notify')
                dep.notify();
            }

            val = newVal;
        }
    })
}

module.exports = Observer;