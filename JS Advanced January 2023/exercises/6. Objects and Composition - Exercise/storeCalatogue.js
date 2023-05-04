function storeCatalogue(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let currentChar = '';

    for (let item of sorted) {
        if (item[0] !== currentChar) {
            currentChar = item[0];
            console.log(currentChar);
        }
       let [product, price] = item.split(' : ');
       console.log(`  ${product}: ${Number(price)}`)
    }

}