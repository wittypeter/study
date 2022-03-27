class Dep {
    static target = null;

    constructor() {
        this.subs = [];
    }

    depend() {
        if (Dep.target) {
            this.subs.push(Dep.target);
        }
    }

    notify() {
        const subs = this.subs.slice();
        console.log('update', subs);
        for (let i = 0; i < subs.length; i++) {
            subs[i].update();
        }
    }
}

module.exports = Dep;