function all(promises) {
    return new Promise((resolve, reject) => {
        const res = [];
        if (!promises.length) {
            resolve(res);
            return;
        }

        let index = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((value) => {
                res[i] = value;
                index++;

                if (index === promises.length) {
                    resolve(res);
                }
            }, reject);
        }
    });
}


const pros = [Promise.resolve(1), 1, Promise.reject(2)];

all(pros).then(console.log, console.error);