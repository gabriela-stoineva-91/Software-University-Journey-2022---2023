function calc(n1, n2, operator) {
    let allOper = {
        multiply: n1 * n2, 
        divide: n1 / n2,
        add: n1 + n2,
        subtract: n1 - n2
    }
    
    console.log(allOper[operator])
}