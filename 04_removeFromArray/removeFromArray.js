const removeFromArray = function(array, element, element2 = '', element3 = '', element4 = '') {
    for(let i = 0; i < array.length; i++){
        if(array[i] === element || array[i] === element2 || array[i] === element3 || array[i] === element4){
            array.splice(i,1);
            i--;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
