const repeatString = function(stringName, number) {
    let returnString = "";
    if (number < 0){
        return "ERROR";
    }
    for (let index = 0; index < number; index++) {
        returnString += stringName;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
