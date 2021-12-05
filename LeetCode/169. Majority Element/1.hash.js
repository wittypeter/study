/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let target = nums[0];
    let targetCount = 1;

    let mapping = {};
    for (var i = 0; i < nums.length; i++) {
        if (mapping[nums[i]]) {
            mapping[nums[i]]++;
        } else {
            mapping[nums[i]] = 1;
        }

        if (mapping[nums[i]] > targetCount) {
            target = nums[i];
            targetCount = mapping[nums[i]];
        }
    }

    return target;
};