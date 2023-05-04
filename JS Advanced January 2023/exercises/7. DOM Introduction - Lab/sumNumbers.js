function calc() {
    let firstNumEl = document.getElementById('num1');
    let firstNum = Number(firstNumEl.value);
    let secNumEl = document.getElementById('num2');
    let secNum = Number(secNumEl.value);

    let sumEl = document.getElementById('sum');
    sumEl.value = firstNum + secNum;
}
