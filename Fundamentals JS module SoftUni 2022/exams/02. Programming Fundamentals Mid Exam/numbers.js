function numbers(string) {

    let arrayOfNumbers = string.split(' ').map(Number);

    let sum = 0;

    for (let el of arrayOfNumbers) {
        sum += el

    }

    let average = sum / arrayOfNumbers.length;

    let sortedArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > average) {
            sortedArray.push(arrayOfNumbers[i])
        }
    }

    if (sortedArray.length < 1) {
        console.log("No")
    } else {

        sortedArray = sortedArray.sort((a, b) => b - a)
        sortedArray.splice(5)


        console.log(sortedArray.join(' '))
    }

}