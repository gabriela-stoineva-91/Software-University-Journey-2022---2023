function greatestCommonDivisor(a, b) {
    let first = Number(a);
    let second = Number(b);

    while (first !== second) {
        if (first > second) {
            first -= second
        } else {
            second -= first;
        }
    }
    console.log(first);
}