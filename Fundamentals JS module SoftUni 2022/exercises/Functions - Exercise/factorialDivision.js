function factorialDivision(firstNum, secondNum) {

    let factorialNum = function (num) {

        let currentResult = num

        if (num === 0 || num === 1) {
            return 1
        } else {

            while (num > 1) {
                num--;
                currentResult *= num
            }
            return currentResult

        }
    }
    let firstResult = factorialNum(firstNum);
    let secondResult = factorialNum(secondNum);

    let printValue = firstResult / secondResult;
    console.log(printValue.toFixed(2))

}