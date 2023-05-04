function distinctArray(array) {

    let printArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (!printArray.includes(currentElement)) {
            printArray.push(currentElement)
        }
    }
    console.log(printArray.join(' '))

}