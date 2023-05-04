function sameNumbers(number) {
    let stringOfNumber = number.toString();
    let isTheSame = true;
    let first = stringOfNumber[0];
    let sum = Number(first);

    for (let i = 1; i < stringOfNumber.length; i++) {
        let current = stringOfNumber[i];
        sum += Number(current);
        if (current !== first) {
            isTheSame = false;
        }
    }
    console.log(isTheSame);
    console.log(sum);
}