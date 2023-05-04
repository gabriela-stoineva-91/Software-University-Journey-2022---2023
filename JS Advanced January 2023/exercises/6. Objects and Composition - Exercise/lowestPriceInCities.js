function lowestPricesInCities(input) {
    let list = new Map;

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        
        if (list.has(product)) {
            if (list.get(product).lowerPrice > Number(price)) {
                list.get(product).lowerPrice = Number(price);
                list.get(product).town = town;
            }
        } else {
            list.set(product, {lowerPrice: Number(price), town: town});
        }
    }
    let arr = Array.from(list.entries())
    for (let [currentPr, obj] of arr) {
        console.log(`${currentPr} -> ${obj.lowerPrice} (${obj.town})`)
    }
}