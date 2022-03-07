function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            args.push(function(err, ...res) {
                if (err) {
                    reject();
                    return;
                }

                resolve(...res);
            })

            fn.apply(this, args);
        })
    }
}