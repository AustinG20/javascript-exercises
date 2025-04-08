const reverseString = function(string) {
    let reversedString = '';
    let characters = string.split('');
    let reverse = [];

    for(let i = 0; i < characters.length; i++){
        reverse[i] = characters[characters.length-i-1];
    }

    for(let i = 0; i < reverse.length; i++){
        reversedString += reverse[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
