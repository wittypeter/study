function pMap(list, mapper, concurrency = Infinity) {

    const pros = Array.from(list);

    return new Promise((resolve, reject) => {
        const len = pros.length;
        let lastIndex = 0;
        let resolveCount = 0;
        let res = [];

        function next(index) {
            if (index === len) {
                return;
            }

            lastIndex = index;

            const pro = Promise.resolve(pros[index]);

            pro.then((value) => mapper(value, index)).then((o) => {
                resolveCount++;
                res[index] = o;

                if (resolveCount === len) {
                    resolve(res);
                    return;
                }

                if (lastIndex < len) {
                    next(lastIndex + 1);
                }
            })
        }

        for (let i = 0; i < concurrency && i < len; i++) {
            next(i);
        }
    });
}

function sleep(wait) {
    return new Promise((resolve) => {
        setTimeout(resolve, wait);
    });
}

pMap([1, 2, 3, 4, 5], x => Promise.resolve(x + 1)).then((value) => {
    console.log('first: ', value);
}).then(() => {
    pMap([Promise.resolve(1), Promise.resolve(2)], x => x + 1 ).then((second) => {
        console.log('second: ', second);

        pMap([1, 1, 1, 1, 1, 1, 1, 1], x => sleep(1000), 2).then((res) => {
            console.log('sleep: ', res);
        });
    });
})

