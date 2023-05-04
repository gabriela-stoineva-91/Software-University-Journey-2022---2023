function negativeOrPositiveNumbers(array) {

    let sortedArray = [];

    for (const num of array) {

        if (num < 0){
            sortedArray.unshift(num)
        } else {
            sortedArray.push(num)
        }
        
    }

    console.log(sortedArray.join('\n'))

}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])