/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if (!nums || nums.length <= 1) {
        return nums;
    }

    let pre = 1;
    let last = 0;

    while(pre < nums.length) {
        while(last < nums.length && nums[last] !== 0) {
            last++;
        }

        if (pre < last) {
            pre = last + 1;
        }
        while(pre < nums.length && nums[pre] === 0) {
            pre++;
        }

        if (pre >= nums.length) {
            break;
        }

        let temp = nums[pre];
        nums[pre] = nums[last];
        nums[last] = temp;

        pre++;
        last++;
    }

    return nums;
};