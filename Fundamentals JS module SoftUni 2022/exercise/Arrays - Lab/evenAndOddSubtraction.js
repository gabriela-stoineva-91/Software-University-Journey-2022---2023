function evenAndOddSubtraction(arr) {
    let oddSum = 0;
    let evenSum = 0;
    let diff = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
    }
    diff = evenSum - oddSum
    console.log((diff));
}
evenAndOddSubtraction([1,2,3,4,5,6])