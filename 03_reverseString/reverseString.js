const reverseString = function(string) {
    const reverse =[];

    for (let size = string.length - 1; size >= 0; size--) {
            reverse.push(string[size]);
    }
    let reversed = reverse.join("");
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
