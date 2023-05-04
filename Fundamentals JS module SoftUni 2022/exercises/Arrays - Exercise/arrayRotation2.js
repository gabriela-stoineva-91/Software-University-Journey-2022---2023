function arrayRotation2(array, number) {

    number = number % array.length

    for (let i = 0; i < number; i++) {
        let firstElement = array[0];

        for (let j = 0; j < array.length; j++) {
            array[j] = array[j + 1]
        }
        array[array.length - 1] = firstElement

    }
    console.log(array.join(' '));

}
arrayRotation2([51, 47, 32, 61, 21], 2)