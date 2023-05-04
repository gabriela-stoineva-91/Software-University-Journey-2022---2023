function solve(number, precision) {
    if (precision > 15) {
         precision = 15
    }
    let printNumber = number.toFixed(precision)
    
    console.log(parseFloat(printNumber))
  }