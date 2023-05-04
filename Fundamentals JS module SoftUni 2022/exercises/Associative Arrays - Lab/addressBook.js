function createAddressBook(input) {

    let adBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        adBook[name] = address  
    }
    let sortPrint = Object.entries(adBook).sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));

    for (const [key, value] of sortPrint) {
        console.log(`${key} -> ${value}`)
    }

}
createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])