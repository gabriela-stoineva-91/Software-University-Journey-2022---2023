function searchForAnumber(first, second) {
		
    let numberToTake = Number(second[0]);
    let numberToDelete = Number(second[1]);
    let searchingNumber = Number(second[2]);
    
    let newArray = first.slice(0, numberToTake);
    newArray.splice(0, numberToDelete)
    
    let includeCount = 0;
    for (let el of newArray) {
    	if (Number(el) === searchingNumber) {
      	includeCount++
      }
    }
    console.log(`Number ${searchingNumber} occurs ${includeCount} times.`)
    
    	
    
}