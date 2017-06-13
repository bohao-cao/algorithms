'use strict'
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums == null || nums == [])
        return -1;
    if(nums.length ==1)
        return nums[0] == target? 0: -1;
    
    var start= 0;
    var end = nums.length - 1;
    var mid = Math.floor(start + (end - start)/2);
    
    while(start <= end){
        var mid = Math.floor(start + (end - start)/2);
        if(nums[mid] == target)
            return mid;
        if(nums[start] <= nums[mid]){
            if(nums[start] <= target && target <= nums[mid])
                end = mid - 1;
            else
                start = mid + 1;
        }
        else if(nums[start] > nums[mid]){
            if(nums[mid] <=target && target <=nums[end])
                start = mid + 1;
            else
                end = mid - 1;
        }
    }
    return -1;
    
}
module.exports = search;