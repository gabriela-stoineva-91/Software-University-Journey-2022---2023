function listOfProducts(array) { 

    let sortedArray = array.sort();

    for (let i = 0; i < sortedArray.length; i++) {
        let product = sortedArray[i]

        console.log(`${i + 1}.${product}`)
        
    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples'])