function addAndSubtract(arr) {
    let firstArray = arr;
    let newArray = [];
    let newNumber = 0;
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        let currentNumber = Number(firstArray[i]);
        oldSum += currentNumber
        if (currentNumber % 2 == 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i
        }
        newSum += newNumber;
        newArray[i] = newNumber 
    }
    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);;
}
addAndSubtract([5, 15, 23, 56, 35])