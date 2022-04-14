
function chunkify(fn) {
    return function() {
        const args = Array.prototype.slice.call(arguments);

        return function(done) {
            let called = false;

            args.push(function(err) {
                if (called) {
                    return;
                }
                called = true;

                done.apply(null, arguments);
            });

            try {
                fn.apply(null, args);
            } catch(err) {
                done(err);
            }
        }
    }
}

// const fs = require('fs');
// const path = require('path');
// const readFile = chunkify(fs.readFile);

// const filename = path.resolve(__dirname, './trunkify.js');

// readFile(filename)((err, str) => {
//     console.log(err, str.toString());
// })


module.exports = chunkify;