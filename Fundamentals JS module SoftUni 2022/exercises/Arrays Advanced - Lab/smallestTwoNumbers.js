function smallestTwoNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b).slice(0, 2)

    //let slicedArrayToPrint = sortedArray.slice(0,2);

    //console.log(slicedArrayToPrint)
    console.log(sortedArray.join(' '))

}
smallestTwoNumbers([30, 15, 50, 5])