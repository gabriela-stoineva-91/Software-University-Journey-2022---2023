function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function add(firstNum, secNum) {
        let result = Number(firstNum) + Number(secNum);
        return result

    }
    let addValue = (add(firstNumber, secondNumber))

    function subtract(res, thirdNum) {
        let subtractValue = Number(addValue) - thirdNum;
        return console.log(subtractValue)
    }
    subtract(addValue, thirdNumber)
}