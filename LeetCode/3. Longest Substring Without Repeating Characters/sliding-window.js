/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    var start = 0;
    var maxLen = 1;
    var set = new Set();
    set.add(s[0]);

    for (var i = 1; i < s.length;) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            
            i++;
            if (i - start > maxLen) {
                maxLen = i - start;
            }
        } else {
            if (s[start] === s[i]) {
                set.delete(s[i]);
            }

            start += 1;
        }
    }

    return maxLen;
};


const s = lengthOfLongestSubstring("ggububgvfk")
console.log(s);