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

    function next(index) {
        if (index >= handlers.length) {
            return;
        }

        const end = Math.min(handlers.length - 1, index + max);
        const promises = [];
        for (let i = index; i < end; i++) {
            promises.push(handlers[i]());
        }

        const p = Promise.allSettled(promises);
        p.then(() => {
            if (end < handlers.length - 1) {
                next(end);
            } else {
                callback();
            }
        });
    }

    next(0);
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