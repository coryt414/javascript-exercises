const leapYears = function(userYear) {
    let divideBy4 = userYear % 4
    let divideBy100 = userYear % 100
    let divideBy400 = userYear % 400


    console.log(divideBy4)
    console.log(divideBy100)
    console.log(divideBy400)

    if (divideBy100 === 0 && divideBy400 !== 0) {
        return false
    }
    if (divideBy4 !== 0) {
        return false
    }
    else {
        return true
    }
};

// Do not edit below this line
module.exports = leapYears;
