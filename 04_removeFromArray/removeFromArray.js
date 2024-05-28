const removeFromArray = function(array, ...args) {
    let args_lenth = args.length - 1;
    for (let i = 0; i <= args_lenth; i++) {
        let type = typeof args[i];
        if (type === "number") {
            array.splice(args[i] - 1, 1);
        }
    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
