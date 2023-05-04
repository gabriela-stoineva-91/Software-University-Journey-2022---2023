function lastKeyNumbersSequence(length, keyInd) {
    let result = [1];

    for (let i = 1; i < length; i++) {
        let sum = result.slice(-keyInd);
        let newInt = 0;
        sum.forEach(a => {
            newInt += Number(a);
        })
        result.push(newInt);

    }
    return result
}