


const removeFromArray = function(arr, ...args) {
    let result = arr;

    for(const arg of args){
        while(result.indexOf(arg) >= 0){
            result.splice(result.indexOf(arg), 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
