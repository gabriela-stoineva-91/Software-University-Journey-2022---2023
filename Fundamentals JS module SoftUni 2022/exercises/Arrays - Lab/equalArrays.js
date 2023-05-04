function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let isNotEqual;
    let currentIndex;

        let firstNum = 0;
        let secNum = 0;
        
        for (i = 0; i < firstArr.length; i++) {
            firstNum = Number(firstArr[i]);
            secNum = Number(secondArr[i])
            if (firstNum !== secNum) {
                currentIndex = i
                isNotEqual = true
                console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
                break;
            } else {
                sum += firstNum
            }
        }
        if (!isNotEqual) {
            console.log(`Arrays are identical. Sum: ${sum}`);   
        }  
}
equalArrays(['10','20','30'], ['10','20','30'])