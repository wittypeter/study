/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let target = nums[0];
    let count = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === target) {
            count++;
        } else {
            if (count === 0) {
                target = nums[i];
                count = 1;
            } else {
                count--;
            }
        }
    }

    return target;
};