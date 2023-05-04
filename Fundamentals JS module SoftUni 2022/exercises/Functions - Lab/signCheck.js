function signCheck(firstNum, secNum, thirdNum) {
     
    let isNegativeCounter = 0;

    let isNegative = function(currentNum) {
        if (currentNum < 0) {
            isNegativeCounter++
        }
    }
    isNegative(firstNum);
    isNegative(secNum);
    isNegative(thirdNum);

    if (isNegativeCounter == 2 || isNegativeCounter == 0) {
        console.log('Positive')
    } else {
        console.log('Negative')    
    }

}
signCheck(-6,
    -12,
     14)