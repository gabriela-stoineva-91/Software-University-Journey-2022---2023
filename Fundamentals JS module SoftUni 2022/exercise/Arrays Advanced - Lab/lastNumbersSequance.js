function lastNumbersSequance(length, sumCount) {

    let array = [1];
   
    for (let i = 1; i < length; i++ ) {

        let sliceIndex = Math.max(array.length - sumCount, 0);

        let elements = array.slice(sliceIndex);

        let sum = 0; 

        for (const number of elements) {

            sum += Number(number)   
        }
        array.push(sum)
        
    }
    console.log(array.join(' '));
}
lastNumbersSequance(6, 3)