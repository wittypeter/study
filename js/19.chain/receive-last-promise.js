function wrap(fn) {
    let index = 0;

    function queueTask() {
        let curIndex = ++index;

        return new Promise((resolve, reject) => {
            fn().then((value) => {
                if (curIndex === index) {
                    resolve(value);
                }
            }, (err) => {
                if (curIndex === index) {
                    reject(err);
                }
            })
        });
    }

    return queueTask;
}

let count = 0;
function sendRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(++count);   
        });
    })
}

let newWrap = wrap(sendRequest);
newWrap().then(console.log);
newWrap().then(console.log);
newWrap().then(console.log);