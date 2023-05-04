function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];

    while (sorted.length > 0) {
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    return result;
}