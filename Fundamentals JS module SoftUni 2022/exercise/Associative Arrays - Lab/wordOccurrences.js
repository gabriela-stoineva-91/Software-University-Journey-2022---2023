function wordOccurrences(input) { 
    let print = {};

    input.forEach(word => {
        let currentRepeat = input.filter(el => el == word);
        print[word] = currentRepeat.length
        //console.log(currentRepeat)
    });
    let arrayToSort = Object.entries(print);
    //let arrayToSort = Object.entries(print);
    arrayToSort.sort((a,b) => Number(b[1]) - Number(a[1]));
    arrayToSort.forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`)
    })
   
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])