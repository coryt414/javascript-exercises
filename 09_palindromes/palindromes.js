const palindromes = function (string) {
    let forward = string.split('').join('');
    let reverse = string.split('').reverse().join('');
    console.log(forward)
    console.log(reverse)

    if (forward == reverse) {
        return true;
    }
    else {
        return false;
    }
};
console.log(palindromes("racecar"))
// Do not edit below this line
module.exports = palindromes;
