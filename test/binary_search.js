'use strict';

var binary_search = function(A,target){
    if(A == null)
        return -1;
    if(A.length == 1)
        return A[0] == target? 0: -1;
        
    var start = 0;
    var end = A.length - 1;
    var mid = Math.floor(start + (end - start)/2);
    
    while(start <= end){
        mid = Math.floor(start + (end - start)/2);
        if(A[mid] == target)
            return mid;
        if(A[start] <= target && target <= A[mid])
            end = mid - 1;
        else if(A[mid] <= target && target <= A[end])
            start = mid + 1;
        else
            return -1;
    }
    
    return -1;
    
};

module.exports = binary_search;