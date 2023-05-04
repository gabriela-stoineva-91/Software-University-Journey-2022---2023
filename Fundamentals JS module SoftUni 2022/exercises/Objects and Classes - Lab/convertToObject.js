function convertToObject(stringData){
    
    let dataObj = JSON.parse(stringData);
    
    let print = Object.entries(dataObj);
    
    for (let el of print) {
         console.log(`${el[0]}: ${el[1]}`)
    }

}