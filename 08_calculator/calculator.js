const add = function(num1, num2) {
	let add2 = num1 + num2
  return add2
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  return difference
};

const sum = function(array) {
  let result = array.reduce((total, currentItem) => {
    return total + currentItem
  }, 0)
  return result
};

const multiply = function(array) {
  let result = array.reduce((total, currentItem) => {
    return total * currentItem
  }, 1)
  return result
};

const power = function(base, power) {
	let result = base ** power;
  return result
};

const factorial = function(num) {
  

  }
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
