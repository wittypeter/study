const MAX_COUNT = 10;

/**
 * @typedef {() => Promise} Handler
 * @param {Handler[]} handlers 
 * @param {*} max 
 */
function sendMaxRequest(handlers, max, callback) {
    if (typeof max !== 'number' || max <= 0 || max > MAX_COUNT) {
        max = MAX_COUNT;
    }

    const promises = [];
    let index = 0;

    function exec() {
        let pro = handlers[index++]();
        promises.push(pro);

        if (index >= handlers.length) {
            Promise.all(promises).then(callback)
            return;
        }

        pro.then(() => {
            promises.splice(promises.findIndex((promise) => promise === pro), 1);

            if (index < handlers.length) {
                exec();
            }
        });
    }

    const len = Math.min(handlers.length, max);
    for (let i = 0; i < len; i++) {
        exec();
    }
}

const handlers = (function() {
   const res = [];
   let time = 0;
   
   for (let i = 0; i < 20; i++) {
       res.push(function() {
           return new Promise((resolve, reject) => {
               console.log(`i am the ${i} promise, start execing`)
               setTimeout(() => {
                   console.log(`i am the ${i} promise, end execing`);
                   resolve();
               }, 2000 + ((time + 1) % 5) * 500);
           })
       });
   }

   return res;
})()

// for (let i = 0; i < handlers.length; i++) {
//     handlers[i]();
// }

sendMaxRequest(handlers, 4, function() {
    console.log('handlers finished')
});