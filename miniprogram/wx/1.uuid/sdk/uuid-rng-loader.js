/**
 * 
 * @param {string} source 
 * @returns 
 */
module.exports = function rngLoader(source) {
    const code = "var getRandomValues = require('polyfill-crypto.getrandomvalues');";
    const result = source.replace(/var getRandomValues;/, code);
    return result;
}