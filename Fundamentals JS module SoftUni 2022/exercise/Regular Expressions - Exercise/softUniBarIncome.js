function softUniBar(input) {
    let current = input.shift();
    let pattern = /%(?<name>[A-Z][a-z]*)%[^$%|.]*?<(?<product>\w+)\>[^$%|.][^$%|.]*?\|(?<count>\d+)\|[^$%|.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    //let pattern = /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    let sum = 0;
    while (current !== 'end of shift') {
        let validMatch = current.matchAll(pattern);

        for (let match of validMatch) {
            let name1 = match.groups.name;
            let price1 = Number(match.groups.count) * Number(match.groups.price)
            sum += price1
            console.log(`${name1}: ${match.groups.product} - ${price1.toFixed(2)}`)
        }

        current = input.shift();
    }
    console.log(`Total income: ${sum.toFixed(2)}`)

}