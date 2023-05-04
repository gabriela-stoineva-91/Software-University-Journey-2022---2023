function sumOfNumbers(first, second) {
    let firstNum = Number(first);
    let secNum = Number(second);
    let sum = 0;

    for (let i = firstNum; i <= secNum; i++) {
        sum += Number(i);
    }
    return sum

}