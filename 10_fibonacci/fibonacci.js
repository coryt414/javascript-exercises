const fibonacci = function(userInput) {
    input = Number(userInput)
    if ( input < 1) {
        return "OOPS"
    }
    else {
        let array = [1,1];
        for (let i = 0; i < input; i++) {
            let fibNum = array[i] + array[i+1];
            console.log(fibNum)
            array.push(fibNum);
        }
        return array[input-1]
        }
    };

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
