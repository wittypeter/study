/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if (!nums || nums.length <= 1) {
        return nums;
    }

    let pre = 0;
    let last = 0;

    for (pre = 0; pre < nums.length; pre++) {
        if (nums[pre] !== 0) {
            nums[last++] = nums[pre];
        }
    }

    for (; last < nums.length; last++) {
        nums[last] = 0;
    }

    return nums;
};