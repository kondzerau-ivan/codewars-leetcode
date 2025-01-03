/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums = [10,4,-8,7]) {
    let numsSum = nums.reduce((acc, cur) => acc + cur, 0);
    let valid_splits = 0;
    let left = 0;
    
for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    if (left >= numsSum - left) ++valid_splits;
}

    return valid_splits;
};
