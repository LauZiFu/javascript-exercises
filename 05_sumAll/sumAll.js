const sumAll = function(min, max) {

    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0){
        return "ERROR";
    } else if(min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    const calcSum = function(num){
        return (num * (num + 1))/2;
    }

    return calcSum(max) - calcSum(min - 1);


};

// Do not edit below this line
module.exports = sumAll;

