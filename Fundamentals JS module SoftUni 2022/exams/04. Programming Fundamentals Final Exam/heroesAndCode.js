function heroesOfCode(input) {
    let data = input;
    let count = Number(data.shift());
    let all = new Map();
    const hPMax = 100;
    const mPMax = 200;

    for (let i = 0; i < count; i++) {
        let [heroName, hP, mP] = data.shift().split(' ');
        if (!all.has(heroName)) {
            all.set(heroName, { HP: 0, MP: 0 })
        }
        all.get(heroName).HP += Number(hP);
        all.get(heroName).MP += Number(mP);
    }
    let command = data.shift();
    while (command !== 'End') {
        command = command.split(' - ');
        let action = command.shift();
        switch (action) {
            case 'CastSpell':
                let [name, mPSpell, spellName] = command;
                if (Number(mPSpell) <= all.get(name).MP) {
                    all.get(name).MP -= Number(mPSpell);
                    console.log(`${name} has successfully cast ${spellName} and now has ${all.get(name).MP} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let [name1, damage, attacker] = command;
                if (all.has(name1)) {
                    all.get(name1).HP -= Number(damage);
                    if (all.get(name1).HP > 0) {
                        console.log(`${name1} was hit for ${damage} HP by ${attacker} and now has ${all.get(name1).HP} HP left!`);
                    } else {
                        all.delete(name1)
                        console.log(`${name1} has been killed by ${attacker}!`);
                    }
                }
                break;

            case 'Recharge':
                let [nameToRecharge, amount] = command;
                if (all.has(nameToRecharge)) {
                    all.get(nameToRecharge).MP += Number(amount);
                    let diff = (all.get(nameToRecharge).MP - mPMax);
                    let plusDiff = amount - diff;
                    if (all.get(nameToRecharge).MP > mPMax) {
                        all.get(nameToRecharge).MP = mPMax;
                        amount = plusDiff
                    }
                    console.log(`${nameToRecharge} recharged for ${amount} MP!`);
                }
                break;

            case 'Heal':
                let [nameToPlus, plusAmount] = command;
                if (all.has(nameToPlus)) {
                    let currentPLus = 0;
                    currentPLus = (all.get(nameToPlus).HP + Number(plusAmount)) - hPMax;
                    all.get(nameToPlus).HP += Number(plusAmount);
                    let allDiff = plusAmount - currentPLus;
                    
                    if (all.get(nameToPlus).HP > hPMax) { 
                        all.get(nameToPlus).HP = hPMax;
                        plusAmount = allDiff
                    }
                    console.log(`${nameToPlus} healed for ${plusAmount} HP!`);
                }
                break;
        }
        command = data.shift();
    }

    for (let hero of all) {
        console.log(`${hero[0]}\n   HP: ${(hero[1]).HP}\n   MP: ${(hero[1]).MP}`);
    }
}
heroesOfCode([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])