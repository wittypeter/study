// person('xxx')   -> 'hi i am xxx'
// sleep(x)  -> 等待 xxx s
// eat(food) -> 吃xxx
// sleepFirst(x) -> 插入到hi i am xxx之前 , 等待 x


class QueueTask {
    constructor(name) {
        if (!(this instanceof QueueTask)) {
            return new QueueTask(name);
        }

        this.name = name;
        this.queue = [];

        const fn = () => {
            console.log(name);
            this.exec();
        }

        this.queue.push(fn);
        setTimeout(() => {
            this.exec();
        }, 0);
    }

    sleep(wait) {
        const fn = () => {
            setTimeout(() => {
                console.log('等待' + wait + 's');
                this.exec();
            }, wait * 1000);
        }

        this.queue.push(fn);
        return this;
    }

    sleepFirst(wait) {
        const fn = () => {
            setTimeout(() => {
                console.log('首先---等待' + wait + 's')
                this.exec();
            }, wait * 1000);
        }

        this.queue.unshift(fn);
        return this;
    }

    eat(food) {
        const fn = () => {
            setTimeout(() => {
                console.log('eat' + food);
                this.exec();
            }, 0);
        }

        this.queue.push(fn);
        return this;
    }

    exec() {
        const fn = this.queue.shift();
        fn && fn();
    }
}

var person = function(name) {
    return new QueueTask(name);
};

person('peter').eat('早餐').sleep(5).eat('晚餐');
person('peter').sleepFirst(10).eat('早餐').sleep(5).eat('晚餐');