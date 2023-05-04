function numberModification(number) {
    
    let numberToModif = number.toString();
    let sum = 0;
    let printNum = '';
    
    
    for (let i = 0; i < numberToModif.length; i++) {
        let currentNumber = Number(numberToModif[i]);
        printNum += numberToModif[i];
        
        sum += currentNumber;
        if (sum / numberToModif.length > 5) {
            printNum = numberToModif
            break;
        }        
    }
    if (sum / numberToModif.length > 5) {
        console.log(printNum);
    }  else {
        while (sum / printNum.length <= 5) {
            printNum += '9';
            sum += 9
        }
        console.log(printNum);
    }    
}