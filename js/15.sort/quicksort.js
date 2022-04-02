/**
 * 
 * @param {number[]} nums 
 * @param {number} low 
 * @param {number} high 
 */
function getPivot(nums, low, high) {
    const pivot = nums[low];
    while(low < high) {
        while(low < high && pivot <= nums[high]) {
            high--;
        }
        nums[low] = nums[high];

        while(low < high && nums[low] <= pivot) {
            low++;
        }
        
        nums[high] = nums[low];
    }

    nums[low] = pivot;

    return low;
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} low 
 * @param {number} high 
 */
function sort(nums, low, high) {
    if (low < high) {
        const pivotIndex = getPivot(nums, low, high);
        sort(nums, low, pivotIndex - 1);
        sort(nums, pivotIndex + 1, high);
    }
}

/**
 * 
 * @param {number[]} nums 
 */
function quickSort(nums) {
    sort(nums, 0, nums.length - 1);
}

const nums = [6,3, 4, 5 , 4,7, 8, 9, 0];

quickSort(nums);
console.log(nums);
