const sumAll = function(num1, num2) {
    let sum = 0;
    let lower = 0;
    let higher = 0;

    if ((typeof num1 === "number" && num1 >= 0) && (typeof num2 === "number" && num2 >= 0)) {
        if (num1 < num2) {
            lower = num1;
            higher = num2;
        }
        else {
            lower = num2;
            higher = num1;
        }
        for (;lower <= higher; lower++) {
            sum += lower;
        }
    return sum
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
