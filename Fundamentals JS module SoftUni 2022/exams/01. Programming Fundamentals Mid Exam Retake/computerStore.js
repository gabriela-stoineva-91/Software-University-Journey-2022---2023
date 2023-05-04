function computerStore(input) {
    let index = 0;
    let command = input[index];
    let price = 0;
    let priceWithoutTax = 0;
    let taxes = 0;

    while (index <= input.length) {
        command = input[index];
        
        if (command == 'special') {
            price *= 0.90;
            break;
        }
        if (command == 'regular') {
            break;
        }
        let currentCommand = Number(input[index]) ;
      
        if (currentCommand < 0) {
            console.log("Invalid price!");
        } else {
        taxes += (currentCommand * 0.20)
        priceWithoutTax += currentCommand
        price += (currentCommand * 1.20);
        
        }
        index++;
        
    }
    
    if (price == 0) {
        console.log(`Invalid order!`) 
    } else {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${priceWithoutTax.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${price.toFixed(2)}$`);
    }

}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])