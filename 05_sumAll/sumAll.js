const sumAll = function(start, end) {
    let total = 0;

    if(start < 0 || end < 0 || typeof(start) != 'number' || typeof(end) != 'number' || start % 1 != 0 || end % 1 != 0){
        return 'ERROR';
    }else{
        if(start < end){
            if(((end-start) % 2) === 0){
                total = start;
                start++;
            }
            
            while((start != end) && (start < end)){
                total += start + end;
                start++;
                end--;
            }
        }else{
            if(((start-end) % 2) === 0){
                total = end;
                end++;
            }
            
            while((start != end) && (start > end)){
                total += start + end;
                end++;
                start--;
            }
        }
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
