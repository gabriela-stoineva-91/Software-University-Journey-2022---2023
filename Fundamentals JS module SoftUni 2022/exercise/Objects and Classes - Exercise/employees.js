function printListOfEmployees(array) {

    let arrayLength = array.length;

    array.forEach(name => {
        let employer = {};
        employer.name = name;
        employer.lengthOfName = name.length;
        console.log(`Name: ${employer.name} -- Personal Number: ${employer.lengthOfName}`)
    });
    
}
printListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])