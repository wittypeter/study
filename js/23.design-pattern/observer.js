class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        if (!this.observers.find(ob => ob === observer)) {
            this.observers.push(observer);
        }

        return () => {
            this.unsubscribe(observer);
        }
    }

    unsubscribe(observer) {
        if (this.observers.length) {
            this.observers.splice(this.observers.findIndex(ob => ob === observer), 1);
        }
    }

    notify(data) {
        const observers = this.observers.slice();

        for (let i = 0; i < observers.length; i++) {
            observers[i].update(data);
        }
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} observer: ${data}`);
    }
}

const ob1 = new Observer('peter');
const ob2 = new Observer('seven');

const sub = new Subject();

sub.subscribe(ob1);
sub.subscribe(ob2);

sub.notify('hello');