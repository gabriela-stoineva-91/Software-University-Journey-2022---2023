function listOfNames(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    
     sorted.forEach((element, index) => {
         console.log(`${index + 1}.${element}`)
     });

}