/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) { 
    let temp;
    for (var i = 0; i < nums.length; i++) {
        let index = nums[i];

        while(index !== nums[index - 1]) {
            temp = nums[index - 1];
            nums[index - 1] = index;
            index = temp;
        }
    }

    const res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            res.push(i + 1);
        }
    }

    return res;
};