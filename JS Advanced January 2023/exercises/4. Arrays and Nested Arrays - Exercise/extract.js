function extractIncreasingSubsequenceArray(arr) {
   
    let biggest = arr[0];

    let newArr = []
    arr.forEach(element => {
        if (element >= biggest) {
            newArr.push(element);
            biggest = element;
        }
    })
    return newArr;
}