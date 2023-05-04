function storageProducts(input) {

    let storage = {};

    input.forEach(line => {
        let [items, quantity] = line.split(' ');
        if (!storage.hasOwnProperty(items)) {
            storage[items] = 0;
        }
        storage[items] += Number(quantity)

    });
    let storagePrint = Object.entries(storage);
    //console.table(storagePrint)
    storagePrint.forEach(product => {
        let [item, quantity] = product
        console.log(`${item} -> ${quantity}`)
    });

}
storageProducts(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])