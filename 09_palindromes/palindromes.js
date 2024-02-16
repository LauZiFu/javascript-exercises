const palindromes = function (sentence) {
    //removes punctuation and spaces
    sentence = sentence.replace(/[^\w\s]/g, "").replace(/\s+/g, "").toLowerCase();


    let low = 0;
    let high = sentence.length -1;

    while(low < high){
        if(sentence[low] !== sentence[high])
            return false;
        low++;
        high--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
