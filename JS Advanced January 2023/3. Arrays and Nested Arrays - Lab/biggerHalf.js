function biggerHalf(arr) {
    arr = arr.sort((a, b) => a - b);
    let middle = arr.length % 2 == 0 ? arr.length / 2 : (arr.length / 2 + 1);
    let result = arr.slice(-middle);

    return result;

}