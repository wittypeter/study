/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (!s || s.length % 2 == 1) {
        return false;
    }

    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const stack = [];

    for (var i = 0; i < s.length; i++) {
        if ('({['.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (mapping[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }

    return !stack.length;
};