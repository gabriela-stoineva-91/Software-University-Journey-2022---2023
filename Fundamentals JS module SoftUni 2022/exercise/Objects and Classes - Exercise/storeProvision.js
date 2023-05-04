function storeProvision(a, b) {

    let locale = a;
    let delivery = b;

    let current = {}


    for (let i = 0; i < locale.length; i += 2) {
        let currentProduct = locale[i]
        current[currentProduct] = Number(locale[i + 1])
    }
    for (let j = 0; j < delivery.length; j += 2) {
        let currentNewProduct = delivery[j];

        if (!current.hasOwnProperty(currentNewProduct)) {
            current[currentNewProduct] = 0
        }
        current[currentNewProduct] += Number(delivery[j + 1]);
    }
    
    for (const product in current) {
        console.log(`${product} -> ${current[product]}`)
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])