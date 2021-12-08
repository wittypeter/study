/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let res = x ^ y;

    let len = 0;
    while(res) {
        len += res % 2;

        res = Math.floor(res / 2);
    }

    return len;
};