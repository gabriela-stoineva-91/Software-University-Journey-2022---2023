function printByStep2(arr, step) {
    let result = arr.filter((_, i) => i % step === 0);

    return result;

}