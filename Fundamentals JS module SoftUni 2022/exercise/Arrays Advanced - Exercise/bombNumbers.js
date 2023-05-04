function bombNumbers(first, second) {

    let sequanceArray = first;

    let bombNum = Number(second[0]);
    let count = Number(second[1]);


    while (sequanceArray.includes(bombNum)) {

        let index = sequanceArray.indexOf(bombNum);
        let elementToRemove = count * 2 + 1;
        let startIndex = index - count;

        if (startIndex < 0) {
            elementToRemove += startIndex;
            startIndex = 0;
        }
        sequanceArray.splice(startIndex, elementToRemove)

    }
    let sum = 0;
    for (let el of sequanceArray) {
        sum += el
    }
    console.log(sum)

}