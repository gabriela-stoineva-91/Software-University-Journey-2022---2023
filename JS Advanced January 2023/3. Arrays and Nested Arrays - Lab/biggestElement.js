function biggestElement(arr) {
    let newArr = arr.toString().split(',').map(Number).sort((a, b) => b - a);
    let value = newArr.shift();
    return value
}