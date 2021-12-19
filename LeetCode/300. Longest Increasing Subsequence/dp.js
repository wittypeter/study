// f(n) = max(f(i)) + 1; i < n, nums[i] < nums[n];
// else
//  f(n) = 1

// [1,3,6,7,9,4,10,5,6]

// [1,2,3,4,5,3,6 ,4,5]
// 6

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) {
        return nums.length;
    }

    const dp = [];
    for (let n = 0; n < nums.length; n++) {
        dp[n] = 1;

        for (let i = 0; i < n; i++) {
            if (nums[i] < nums[n]) {
                dp[n] = Math.max(dp[i] + 1, dp[n]);
            }
        }
    }

    return Math.max(...dp);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))