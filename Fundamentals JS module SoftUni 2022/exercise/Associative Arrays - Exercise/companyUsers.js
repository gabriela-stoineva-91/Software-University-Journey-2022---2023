function companyUsers(array) {
    let allCompanies = {};

    array.forEach(element => {
        let [company, users] = element.split(' -> ');
        users = users.split(', ')
        if (!allCompanies.hasOwnProperty(company)) {
            allCompanies[company] = new Set() // unique id user
        }
        users.forEach((user) => {
            allCompanies[company].add(user)
        }) 
    });
    let arr =  Object.entries(allCompanies).sort((a, b) => a[0].localeCompare(b[0])); // sort companies
    for (let [key, value] of arr) {
        console.log(key)
        value.forEach((id) => { // each id of set
            console.log(`-- ${id}`)
        })
    }
   
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])