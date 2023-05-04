function orders(product, quantity) {

    let orderedProduct = product;
    let orderedQuantityOfProduct = Number(quantity);

    const priceOfCoffee = 1.50;
    const priceOfWater = 1.00;
    const priceOfCoke = 1.40;
    const priceOfSnacks = 2.00;
    let price = 0;

    switch (orderedProduct) {
        case 'coffee':
            price = orderedQuantityOfProduct * priceOfCoffee;
            break;
        case 'water':
            price = orderedQuantityOfProduct * priceOfWater;
            break;
        case 'coke':
            price = orderedQuantityOfProduct * priceOfCoke;
            break;
        case 'snacks':
            price = orderedQuantityOfProduct * priceOfSnacks;
            break;
    }
    console.log(price.toFixed(2));

}
orders("water", 5)