/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    var start = 0;
    var i = 1;
    var maxSubLen = i - start;

    var map = new Map();
    map.set(s[0], start);
    map.set(start, s[0]);

    var len = s.length

    for (i = 1; i < len; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], i);
            map.set(i, s[i]);
        } else {
            maxSubLen = Math.max(maxSubLen, i - start);

            var end = map.get(s[i]);
            for (let m = start; m <= end; m++) {
                let key = map.get(m);
                map.delete(key);
                map.delete(m);
            }

            start = end + 1;
            map.set(s[i], i);
            map.set(i, s[i]);
        }
    }

    return Math.max(maxSubLen, i - start);
};
