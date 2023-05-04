function magicSum(array, neededSum) {

    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);

        for (let j = i + 1; j < array.length; j++) {
            let secondNumber = Number(array[j])
            let sum = currentNumber + secondNumber
            if (sum === neededSum) {
                console.log(`${currentNumber} ${secondNumber}`)
            }
            
        }
    }
    
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)