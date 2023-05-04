function heroicInventory(input) {
    const register = [];

    input.forEach(hero => {
        let [name, level, items] = hero.split(' / ');
        const obj = {
            name, 
            level: Number(level),
            items: [],
        };
        if (items) {
            obj.items = items.split(', ');
        }
        register.push(obj);
    });
    return JSON.stringify(register);
}