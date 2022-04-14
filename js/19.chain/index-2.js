// const chain = new Chain();
// chain.eat().sleep(5).eat().sleep(6).work();
// chain.eat()
// chain.work(); 
// eat -> wait 5s -> eat -> wait 6s -> work

class Chain {
    constructor() {
        this.promis = Promise.resolve();
    }

    addTask(fn) {
        this.promis = this.promis.then(() => {
            return fn();
        });

        return this;
    }

    eat() {
        return this.addTask(function() {
            console.log('eat');
            return Promise.resolve();
        });
    }

    sleep(wait) {
        return this.addTask(function() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(wait + 's');
                    resolve();
                }, wait * 1000);
            });
        });
    }

    work() {
        return this.addTask(function() {
            console.log('work');
            return Promise.resolve();
        });
    }
}

const chain = new Chain();
chain.eat().sleep(5).eat().sleep(6).work();
chain.eat()
chain.work(); 