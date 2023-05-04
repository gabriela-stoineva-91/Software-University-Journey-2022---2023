function reverseAnArrayOfNumbers(n, arr) {

    let print = [];

    for(let i = n - 1 ; i >= 0 ; i-- ) {
        print += arr[i] + " "
    }

    console.log((print));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])