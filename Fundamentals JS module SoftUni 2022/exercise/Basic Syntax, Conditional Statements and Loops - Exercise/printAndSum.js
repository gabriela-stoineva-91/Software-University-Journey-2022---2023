function printAndSum(a, b) {
    let sum = 0;
    let y = a;
    let print = '';
    while (y <= b) {
        print += ' ' + y
        sum += y
        y++
    }
    console.log(print)
    console.log(`Sum: ${sum}`)
}