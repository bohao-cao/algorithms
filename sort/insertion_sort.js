var insertionSort =  array => {
    if(array == null || array.length == 1)
        return array;
    for(var j = 1; j< array.length;j++){
        var i = j;    
        while(i !== 0){
            if(array[i] <= array[i-1]){
                var t = array[i];
                array[i] = array[i-1];
                array[i-1] = t;
            } 
            i = i-1;
        }
    }
    
    return array;
};

module.exports = insertionSort;