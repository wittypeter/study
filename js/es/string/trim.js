
/**
 * 
 * @param {string} str 
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

const s = ' 111 ';

console.log(s.length, trim(s).length);