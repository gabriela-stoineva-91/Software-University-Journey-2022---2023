function townPopulation(arr) {
    const city = new Object;

    for (let line of arr) {
        let [name, population] = line.split(' <-> ');

        if (!city.hasOwnProperty(name)) {
            city[name] = 0;
        }
        
        city[name] += Number(population);    
    }

    for (let [name1, population1] of Object.entries(city)) {
        console.log(`${name1} : ${population1}`);
    }
}