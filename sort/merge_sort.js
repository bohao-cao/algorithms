var merge_sort =  (array,start,end) => {
    if(end - start < 2)
        return array;
    var mid = Math.floor(start + (end-start)/2);
    merge_sort(array, start, mid);
    merge_sort(array, mid, end);
    merge(array,start,mid,end);
};

var merge = (array, start,mid,end) =>{
    
    var i = 0, j = 0, k= start;
    var L = array.slice(start,mid);
    var R = array.slice(mid,end);
    if(L.length == 0 || R.length == 0)
        return array;
    
    while(k < end){
        if(i >= L.length && j< R.length){
            array[k] = R[j];
            j++;
            k++;
        }
        else if(j>=R.length && i < L.length){
            array[k] = L[i];
            i++;
            k++;
        }
            
        else if(L[i]< R[j]){
            array[k] = L[i];
            i=i+1;
            k = k+1;
            
        }
        else if(L[i] > R[j]){
            array[k] = R[j];
            j = j+1;
            k = k+1;
        }
        else if(L[i] == R[j]){
            array[k] = L[i];
            array[k+1] = R[j];
            i++;
            j++;
            k = k+2;
        }
    }
}


//Notice the native merge sort is not in-place.
module.exports = merge_sort;