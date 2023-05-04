function gladiatorExpenses(lost, helmet, sword, shield, armor) {
    let lostCount = Number(lost);
    let helmetPrice = Number(helmet);
    let swordPrice = Number(sword);
    let shieldPrice = Number(shield);
    let armorPrice = Number(armor);

    let finalPrice = 0;

    for (let currentFight = 1; currentFight <= lostCount; currentFight++) {
        if (currentFight % 2 === 0) {
            finalPrice += helmetPrice
        }
        if (currentFight % 3 === 0) {
            finalPrice += swordPrice
        }
        if (currentFight % 3 === 0 && currentFight % 2 === 0) {
            finalPrice += shieldPrice
            if (currentFight % 12 === 0) {
                finalPrice += armorPrice
            }
        }
    }

    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5)