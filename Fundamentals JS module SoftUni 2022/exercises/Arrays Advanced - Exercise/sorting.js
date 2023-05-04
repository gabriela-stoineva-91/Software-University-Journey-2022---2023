function sorting(array) {

    let maxArray = array.sort((a, b) => a - b);

    let newArray = [];
    let arrayLength = array.length

    //[2, 6, 7, 19, 32, 32, 34, 45, 47, 690]

    for (let i = 0; i < arrayLength / 2; i++) {

        let first = maxArray.pop();
        let second = maxArray.shift();

        newArray.push(first);
        newArray.push(second);

    }

    console.log(newArray.join(' '))

}