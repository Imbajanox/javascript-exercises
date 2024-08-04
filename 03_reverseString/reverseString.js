const reverseString = function(normalString) {
    let reverseString = "";
    for (let index = normalString.length-1; index >= 0; index--) {
        reverseString += normalString[index]
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
