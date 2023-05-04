function equalSums(array) {

    let isEqual = false;

    if (array.length == 1) {
        console.log(0)
    } else {
        for (let i = 0; i < array.length; i++) {
            let firstSum = 0;
            let secondSum = 0;

            for (let j = i - 1; j >= 0; j--) {
                firstSum += array[j]

            }
            for (let h = i + 1; h < array.length; h++) {
                secondSum += array[h];
            }
            if (firstSum == secondSum) {
                isEqual = true;
                console.log(i);
                break;
            }
            
        }
        if (!isEqual) {
            console.log('no')
        }
    }
}
equalSums([1])