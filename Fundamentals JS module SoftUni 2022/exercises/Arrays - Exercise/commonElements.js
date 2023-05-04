function commonElements(firstArray, secondArray) {


    for (let j = 0; j < firstArray.length; j++) {
        let currentElement = firstArray[j];
        for (let i = 0; i < secondArray.length; i++) {
            let nextElement = secondArray[i];
            if (currentElement === nextElement) {
                console.log(currentElement);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])