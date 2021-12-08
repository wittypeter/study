/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const ans = [0];
    const len = n + 1;

    for (var i = 1; i < len; i++) {
        if (i % 2) {
            ans[i] = ans[i - 1] + 1;
        } else {
            ans[i] = ans[i / 2];
        }
    }

    return ans;
};