//heapify assumes the heap's top might violate the heap property

var maxHeapify = (A, i) =>{
    var left = 2*i+1;
    var right = 2*i+2;
    var largest = i;
    
    //i is leaf node, done
    if(A[left] == undefined)
        return;
    //i contains 1 leaf
    if(A[left] != undefined && A[right] == undefined){
        
        if(A[left] > A[i]){
            largest = left;
        }
    }
    //3 item comparison
    //i is largest
    else if(A[i] >= A[left] && A[i] >= A[right])
        return;
    //left leaf is largest
    else if(A[left] >= A[i] && A[left] >= A[right]){
       largest = left;
    }
    //right leaf if largest
    else if(A[right] >= A[i] && A[right] >= A[left]){
        largest = right;
    }
    
    //swap 
    if(largest != i){
        var t = A[largest];
        A[largest] = A[i];
        A[i] = t;
        maxHeapify(A, largest);    
    }
    
};

var buildMaxHeap = (A)=>{
    for(var i = Math.floor(A.length/2 -1); i>= 0; i--)
        maxHeapify(A,i);
};

//shift remove 1st
//unshift add 1st
var heapSort = (A) =>{
    var ret = [];
    var length = A.length;
    for(var i = 0; i< length; i++){
        buildMaxHeap(A);
        ret.unshift(A.shift());
    }
    return ret;
};

module.exports = heapSort;