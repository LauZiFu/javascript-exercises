const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(arr) {
	return arr.reduce((num, acc) => acc += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((num, acc) => acc *= num, 1);
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(num) {
	if(num === 0)
    return 1;

  if(num === 1)
    return 1;

  return num * factorial(num-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
