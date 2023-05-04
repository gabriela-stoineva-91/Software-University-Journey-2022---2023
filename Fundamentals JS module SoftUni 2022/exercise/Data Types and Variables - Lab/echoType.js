function echoType(arg1) {
    let type = typeof arg1
    console.log(type)
    if (type == 'number' || type == 'string') {
        console.log(arg1)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}