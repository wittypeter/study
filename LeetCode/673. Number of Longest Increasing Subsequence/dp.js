/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    const dp = [1];

    for (let n = 1; n < nums.length; n++) {
        dp[n] = 1;

        for (let i = 0; i < n; i++) {
            if (nums[i] < nums[n]) {
                dp[n] = Math.max(dp[i] + 1, dp[n]);
            }
        }
    }

    const target = Math.max(...dp);
    let len = 0;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === target) {
            len++;
        }
    }

    return dp;
};


const nums = [1,3,5,4,7];

console.log(findNumberOfLIS(nums));