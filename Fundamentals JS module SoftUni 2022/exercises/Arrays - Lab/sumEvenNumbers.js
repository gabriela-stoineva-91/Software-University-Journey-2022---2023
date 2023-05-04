function sumEvenNumbers(arr) {
    let num;
    let sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        num = Number(arr[i]);
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log((sum));
}
sumEvenNumbers(['3','5','7','9'])