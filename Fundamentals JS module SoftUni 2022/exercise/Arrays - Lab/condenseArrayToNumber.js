function condenseArrayToNumber(arr) {

    let sum = []
    for (let i = 0; i < arr.length; i++) {
        sum[i] = Number(arr[i]);
    }
    while (sum.length > 1) {
        let currentSum = [];

        for (let j = 0; j < sum.length - 1; j++) {
            currentSum[j] = Number(sum[j] + sum[j + 1])
        }
        sum = currentSum
        
    }
    console.log(Number(sum));

}
condenseArrayToNumber([5, 0, 4, 1, 2])