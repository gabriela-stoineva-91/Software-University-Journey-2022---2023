function perfectNumber(num) {
    
    let result = 0;
    
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    if (result === num && result != 0) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
    
    
}