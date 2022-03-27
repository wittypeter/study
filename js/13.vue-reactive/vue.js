const Observer = require('./observer');
const Watcher = require('./watcher');

class Vue {
    constructor(options) {
        if (options && typeof options.data === 'function') {
            this._data = options.data();
        } else {
            this._data = {};
        }

        console.log('vm, data', this._data);
        new Observer(this._data);
    }

    mount() {
        new Watcher(this, () => {
            console.log('vm, udpate')
            this._data.message;
        })
    }
}

module.exports = Vue;