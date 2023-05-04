function fruit(type, weightInGrams, priceKg) {
    let weightKg = Number(weightInGrams) / 1000;
    let price = weightKg * priceKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`)
}