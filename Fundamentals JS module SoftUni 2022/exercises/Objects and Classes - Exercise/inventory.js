function inventory(array) {
    let printList = []
    array.forEach(line => {
        let [name, level, items] = line.split(' / ');
        let hero = {
            name: name, 
            level: Number(level), 
            items: items
        }
        printList.push(hero) 
    });
    
    printList.sort((a, b) => a.level - b.level);
    for (const hero of printList) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    }
    
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])