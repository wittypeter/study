/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits || !digits.length) {
        return [];
    }

    const mapping = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    let res = mapping[digits[0]].split('');

    for (var i = 1; i < digits.length; i++) {
        const segs = mapping[digits[i]].split('');
        const arr = [];

        for (var j = 0; j < segs.length; j++) {
            arr.push(...res.map(val => val + segs[j]));
        }

        res = arr;
    }

    return res;
};