/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //  mapping, for search
    const mapping = {};
    for (let i = 0; i < nums.length; i++) {
        if (mapping[nums[i]]) {
            mapping[nums[i]].push(i);
        } else {
            mapping[nums[i]] = [i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (mapping[need]) {
            for (var k = 0; k < mapping[need].length; k++) {
                if (mapping[need][k] !== i) {
                    return [i, mapping[need][k]];
                }
            }
        }
    }

    return [];
};