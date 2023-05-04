function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');

    let secNum = Number(secondNumElement.value);
    let firstNum = Number(firstNumElement.value);

    let result = firstNum - secNum;
    let resultElement = document.getElementById('result');

    resultElement.textContent = result;
}