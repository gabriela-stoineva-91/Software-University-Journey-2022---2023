function calculator(firstNumber, operator, secondNumber) {
    let result = 0
    if (operator == '+') {
        result = firstNumber + secondNumber;
    } else if (operator == '-') {
        result = firstNumber - secondNumber;
    } else if (operator == '/') {
        result = firstNumber / secondNumber;
    } else if (operator == '*') {
        result = firstNumber * secondNumber;
    }

    
    console.log(result.toFixed(2))

}
calculator(5,
    '*',
    10)