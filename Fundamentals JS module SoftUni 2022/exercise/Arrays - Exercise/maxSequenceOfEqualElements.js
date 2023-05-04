function maxSequenceOfEqualElements(array) {
    let lengthNewArray = [];
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        currentElement = Number(array[i]);
        let newArray = [currentElement];

        for (let j = i + 1; j < array.length; j++) {

            let nextElement = Number(array[j]);
             
            if (currentElement === nextElement){
                newArray.push(Number(nextElement))  
            } else {
                break;
            }    
        }
        if (newArray.length > lengthNewArray.length) {
            lengthNewArray = [];
            for (let h = 0; h < newArray.length; h++) {
                lengthNewArray.push(newArray[h])
            }
        } else if (newArray.length === lengthNewArray.length) {
            if (i < index) {
                index = i
            }
        }    
    }   
    console.log(lengthNewArray.join(' '));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])