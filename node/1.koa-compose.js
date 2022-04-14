function compose(middlewares) {
    if (!Array.isArray(middlewares)) {
        throw new TypeError('middlewares are not array type');
    }

    for (let middleware of middlewares) {
        if (typeof middleware !== 'function') {
            throw new TypeError('middleware is not function');
        }
    }

    return function(context, next) {
        // last excute one
        let index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (index >= i) {
                throw new Error('middleware ', i, 'exec more than one');
            }

            index = i;
            let fn;
            if (i === middlewares.length) {
                fn = next;
            } else {
                fn = middlewares[i];
            }
            
            if (!fn) {
                return Promise.resolve();
            }

            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }
}