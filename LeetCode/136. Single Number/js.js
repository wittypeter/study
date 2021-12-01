/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const mapping = {};

    for (let i = 0; i < nums.length; i++) {
        if (mapping[nums[i]]) {
            mapping[nums[i]]++;
        } else {
            mapping[nums[i]] = 1;
        }
    }

    const keys = Object.keys(mapping);
    for (let i = 0; i < keys.length; i++) {
        if (mapping[keys[i]] === 1) {
            return keys[i];
        }
    }
};