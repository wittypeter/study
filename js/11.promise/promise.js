const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function isFunction(fn) {
    return typeof fn === 'function';
}

class MyPromise {
    constructor(fn) {
        this._state = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledQueue = [];
        this.onRejectedQueue = [];

        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (this._state === PENDING) {
            this._state = value;

            switch(this._state) {
                case FULFILLED: {
                    const queue = this.onFulfilledQueue.slice();
                    queue.forEach((cb) => {
                        cb(this.value);
                    })
                    break
                }
                case REJECTED: {
                    const queue = this.onRejectedQueue.slice();
                    queue.forEach((cb) => {
                        cb(this.reason);
                    })
                    break;
                }
            }
        }
    }

    resolve(value) {
        if (this.state === PENDING) {
            this.value = value;
            this.state = FULFILLED;
        }
    }

    reject(reason) {
        if (this.state === PENDING) {
            this.reason = reason;
            this.state = REJECTED;
        }
    }

    then(onFulfill, onReject) {
        const realOnFulfilled = isFunction(onFulfill) ? onFulfill : (value) => value;
        const realOnReject = isFunction(onReject) ? onReject : (reason) => { throw reason };

        const promise2 = new MyPromise((resolve, reject) => {
            const microTaskFulfill = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnFulfilled(this.value);
                        this.resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            };

            const microTaskReject = () => {
                queueMicrotask(() => {
                    try {
                        debugger
                        const x = realOnReject(this.reason);
                        this.resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            };

            switch(this.state) {
                case PENDING: {
                    this.onFulfilledQueue.push(microTaskFulfill);
                    this.onRejectedQueue.push(microTaskReject);
                    break;
                }
                case FULFILLED: {
                    microTaskFulfill();
                    break;
                }
                case REJECTED: {
                    microTaskReject();
                    break;
                }
            }
        });

        return promise2;
    }

    catch(onReject) {
        return this.then(null, onReject);
    }

    finally(fn) {
        this.then(fn, fn);
    }

    resolvePromise(promise2, x, resolve, reject) {
        if (promise2 === x) {
            return reject(new TypeError('the promise2 and x are the same'));
        }

        if (x instanceof MyPromise) {
            queueMicrotask(() => {
                x.then((y) => {
                    this.resolvePromise(promise2, y, resolve, reject);
                }, reject);
            })
        } else if (typeof x === 'object' || isFunction(x)) {
            if (x === null) {
                return resolve(x);
            }

            let then = null;
            try {
                then = x.then;
            } catch(e) {
                return reject(e);
            }

            if (isFunction(then)) {
                let called = false;
                try {
                    then.call(x, (y) => {
                        if (called) {
                            return;
                        }
                        called = true;

                        this.resolvePromise(promise2, y, resolve, reject);
                    }, (reason) => {
                        if (called) {
                            return;
                        }
                        called = true;

                        reject(reason);
                    });
                } catch (e) {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(e);
                }
            } else {
                return resolve(then);
            }
        } else {
            resolve(x);
        }
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }

        return new MyPromise((resolve) => {
            resolve(value);
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        })
    }

    static race(tasks) {
        return new MyPromise((resolve, reject) => {
            const realTasks = tasks.map(task => MyPromise.resolve(task));
            if (realTasks.length === 0) {
                return resolve();
            }

            for (let i = 0; i < realTasks.length; i++) {
                realTasks.then(resolve, reject);
            }
        })
    }

    /**
     * 
     * @param {any[]} tasks 
     */
    static all(tasks) {
        const realTasks = tasks.map(task => MyPromise.resolve(task));
        return new MyPromise((resolve, reject) => {
            if (!realTasks.length) {
                return resolve();
            }

            const res = [];
            let len = 0;
            for (let i = 0; i < realTasks.length; i++) {
                realTasks[i].then((value) => {
                    res[i] = value;
                    len++;

                    if (len === realTasks.length) {
                        resolve(res);
                    }
                }, (reason) => {
                    reject(reason);
                })
            }
        })
    }
}

console.log('starting')

const p = new MyPromise((resolve, reject) => {
    console.log('my promise contructor fn');
    setTimeout(() => {
        resolve('hello 3 seconds');
    }, 3 * 1000);
}).then((msg) => {
    console.log('then: ', msg);
    return MyPromise.reject(msg);
}).then((value) => console.log('succ value: ', value), (reason) => {
    console.log('then, error: ', reason);
}).then((succ) => {
    console.log('then succ: ', succ);
}).catch(console.log).finally((res) => {
    console.log('finally', res);
});

console.log('finished')

MyPromise.all([MyPromise.resolve(3), MyPromise.resolve(2)]).then((value) => {
    console.log('succ', value)
}, (reason) => {
    console.log('failed', reason);
})


MyPromise.all([MyPromise.resolve(3), MyPromise.reject(2)]).then((value) => {
    console.log('succ', value)
}, (reason) => {
    console.log('failed', reason);
})