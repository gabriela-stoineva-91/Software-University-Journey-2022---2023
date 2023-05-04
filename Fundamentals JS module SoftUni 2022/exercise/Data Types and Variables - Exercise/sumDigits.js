function sumDigits(num) {
    let currentNum = num + ""
    let sum = 0;

    for (let i = 0; i < currentNum.length; i++) {
        sum += Number(currentNum[i])
    }
    console.log(sum)
}
sumDigits(55)
