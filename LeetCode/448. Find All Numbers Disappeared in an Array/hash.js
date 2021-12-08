/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const mapping = {};

    for (var i = 0; i < nums.length; i++) {
        mapping[nums[i]] = i + 1;
    }

    const res = [];

    for (var i = 1; i < nums.length + 1; i++) {
        if (!mapping[i]) {
            res.push(i);
        }
    }

    return res;
};