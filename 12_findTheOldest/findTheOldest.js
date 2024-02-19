

const findTheOldest = function(arr) {
    return arr.reduce((acc, obj) => {
        let deathYear1 = acc.yearOfDeath;
        let deathYear2 = obj.yearOfDeath;

        if(deathYear1 === undefined)
            deathYear1 = new Date().getFullYear();
        if(deathYear2 === undefined)
            deathYear2 = new Date().getFullYear();
        return (deathYear1 - acc.yearOfBirth) > (deathYear2- obj.yearOfBirth) ? acc : obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
