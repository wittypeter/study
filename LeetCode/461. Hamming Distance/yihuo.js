/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let res = x ^ y;

    let len = 0;
    while(res) {
        len++;
        // 二进制最后一个1变成0
        res = res & (res - 1);
    }

    return len;
};