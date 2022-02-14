function add(value1, value2) {
    return value1 + value2
}

function subtract(value1, value2) {
    return value1 - value2
}

function multiply(value1, value2) {
    return value1 * value2
}

function divide(value1, value2) {
    return value1 / value2
}

let number = 10
function increment(number) {
    return number + 1
}

function decrement(number) {
    return number - 1
}

function makeInt(number) {
    return parseInt(number, 10)
}



function preserveDecimal() {
    makeInt("integer")
    return parseFloat(2.222) + makeInt("integer")
}


