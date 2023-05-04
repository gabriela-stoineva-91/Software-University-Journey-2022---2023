function maxNumber(array) {
    let maxNum = [];


    for (let i = 0; i < array.length; i++) {
        if (i == (array.length - 1)) {
            maxNum.push(array[array.length - 1])
        }
        if (Number(array[array.length - 1]) < Number(array[i])) {
            if (Number(array[i]) > Number(array[i + 1])) {
                maxNum.push(array[i])
            }
        }
    }
    console.log(maxNum.join(" "))

}
maxNumber([27, 19, 42, 2, 13, 45, 48])