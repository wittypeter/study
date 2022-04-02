/**
 * 
 * @param {number[]} nums 
 */
function heapSort(nums) {
    // 建堆
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        adjust(nums, i, nums.length);
    }
    // 调整
    for (let i = nums.length - 1; i > 0; i--) {
        swap(nums, 0, i);
        adjust(nums, 0, i);
    }
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} i 
 * @param {number} len 
 */
function adjust(nums, i, len) {
    const tmp = nums[i];
    for (let k = 2 * i + 1; k < len; k = 2 * k + 1) {
        // 比较左右子节点，取大的
        if (k + 1 < len && nums[k] < nums[k + 1]) {
            k = k + 1;
        }

        if (nums[k] > tmp) {
            // 子节点网上走
            nums[i] = nums[k];
            i = k;
        } else {
            break;
        }
    }
    // 位置放正确
    nums[i] = tmp;
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} i 
 * @param {number} j 
 */
function swap(nums, i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

const nums = [6,3, 4, 5 , 4,7, 8, 9, 0];

heapSort(nums);
console.log(nums);