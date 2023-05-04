function printFormattedTownInfo(array) {

    array.forEach(town => {
        let currentTow = town.split(' | ');
        let [name, latitude, longitude] = currentTow;
        let print = {};
        print.town = name;
        print.latitude = Number(latitude).toFixed(2); 
        print.longitude = Number(longitude).toFixed(2);
        console.log(print)   
    });

}
printFormattedTownInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)