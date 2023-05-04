function palindromeIntegers(array) {
    
    
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i].toString()
      
        let reversedString = currentElement.split('').reverse().join('');
        
        if (currentElement === reversedString) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}