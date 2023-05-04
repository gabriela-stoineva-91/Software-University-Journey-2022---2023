function townsToJSON(input) {
    let arr = [];
    let pattern = / ?\| ?/g;
    let properties = input.shift().split(pattern);
    
    let [, town, latitude, longitude, _] = properties;

    for (let current of input) {
        let obj = {};
        let values = current.split(pattern);
        let [_, t, l1, l2] = values;
        obj[town] = t;
        obj[latitude] = Number(Number(l1).toFixed(2));
        obj[longitude] = Number(Number(l2).toFixed(2));
        
        arr.push(obj);
    }
    console.log(JSON.stringify(arr));
}