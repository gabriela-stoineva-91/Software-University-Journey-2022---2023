function arrayRotation(array, number) {
        let newArray = [];
        let currentArray = []
    
        for (let i = 0; i < array.length; i++) {
            
            if (i >= number) {
                newArray[i - number] = array[i];
            }
            if (i < number) {
                currentArray[i] = array[i];
                } 
            //if (number > array.length) {
                //currentArray.pop()
            //}     
        }
        for (let j = 0; j < currentArray.length; j++) {
            newArray.push(currentArray[j])
        }
        console.log(newArray.join(' '))   
}
arrayRotation([2, 4, 15, 31], 5)