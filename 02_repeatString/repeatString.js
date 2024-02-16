const repeatString = function(input, repetition) {
    let result = "";

    for(let i =0; i<repetition; i++){
        result += input;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
