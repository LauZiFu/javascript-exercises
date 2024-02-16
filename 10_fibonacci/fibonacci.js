

const fibonacci = function(num) {
    let i = 2;
    let firstPrev = 1;
    let secondPrev = 1;
    let res = 1;
    num = +num;

    if(num === 0){
        return 0;
    } else if (num < 0){
        return "OOPS";
    }

    while(i < num){
        res = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = res;
        i++;
    }

    return res;
};

// Do not edit below this line
module.exports = fibonacci;
