/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const ans = [];
    const len = n + 1;
    let curr;
    let count = 0;

    for (var i = 0; i < len; i++) {
        count = 0;
        curr = i;
        while(curr) {
            count++;
            curr = curr & (curr - 1);
        }

        ans.push(count);
    }

    return ans;
};