function mergeArrays(firstArray, secondArray) {
    let newArray = [];
    let currentNumber;

    for (let i = 0; i < firstArray.length; i++) {
        let currentIndex = Number(i);
        if (currentIndex % 2 == 0) {
           currentNumber = Number(firstArray[i]) + Number(secondArray[i])
        } else {
           currentNumber = firstArray[i] + secondArray[i]
        }
        newArray[i] = currentNumber
    }
    
    console.log(newArray.join(" - "))

}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])