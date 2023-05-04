function processOddNumbers(array) {

    let reversedArray = array
                        .filter((a, i) => i % 2 !== 0)
                        .map(a => a * 2)
                        .reverse()

    console.log(reversedArray.join(' '))

}
processOddNumbers([10, 15, 20, 25])