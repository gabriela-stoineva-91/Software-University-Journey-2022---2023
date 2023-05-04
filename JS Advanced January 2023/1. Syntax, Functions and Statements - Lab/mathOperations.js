function mathOperations(first, second, operator) {
    let firstNum = Number(first);
    let secondNum = Number(second);
    let operatorToExecute = operator;
    let result = 0;

    switch (operatorToExecute) {
        case '+': result = firstNum + secondNum;
            break;
        case '-': result = firstNum - secondNum;
            break;
        case '*': result = firstNum * secondNum;
            break;
        case '/': result = firstNum / secondNum;
            break;
        case '%': result = firstNum % secondNum;
            break;
        case '**': result = firstNum ** secondNum;
            break;
    }
    console.log(result)

}