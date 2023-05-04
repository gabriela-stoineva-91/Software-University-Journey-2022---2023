function taxCalculator(string) {

    let array = string.join(' ').split('>>')
   
    let tax = 0;
    let plus = 0;
    let allTax = 0;
    let isValid = true;

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ')
        let type = command[0];
        let years = Number(command[1]);
        let kilometers = Number(command[2]);


        if (type === 'family') {
            tax = 50;
            plus = Math.floor(kilometers / 3000) * 12;
            tax += plus
            tax -= (years * 5);
            allTax += tax
            isValid = true

        } else if (type === 'heavyDuty') {
            tax = 80;
            plus = Math.floor(kilometers / 9000) * 14;
            tax += plus;
            tax -= (years * 8);
            allTax += tax;
            isValid = true

        } else if (type === 'sports') {
            tax = 100;
            plus = Math.floor(kilometers / 2000) * 18;
            tax += plus;
            tax -= (years * 9);
            allTax += tax;
            isValid = true
            
        } else {
            console.log("Invalid car type.")
            isValid = false 
        }
        
        if (isValid) {
            console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`)
        } 

    }
   
    console.log(`The National Revenue Agency will collect ${allTax.toFixed(2)} euros in taxes.`)

}
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])
