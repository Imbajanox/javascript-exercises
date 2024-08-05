const sumAll = function(from, to) {
    let result = 0;
    let newFrom = from;
    let newto = to;

    if(!Number.isInteger(from) || from < 0 || !Number.isInteger(to) || to < 0)
    {
        return "ERROR";
    }

    if(from > to)
    {
        newFrom = to;
        newto = from;
    }

    for (let index = newFrom; index <= newto; index++) 
    {
        result += index; 
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
