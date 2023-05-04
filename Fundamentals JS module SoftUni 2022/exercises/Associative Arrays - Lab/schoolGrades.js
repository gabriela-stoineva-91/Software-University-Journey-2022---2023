function schoolGrades(input) {
    let studentAndAverageGrade = {};

    for (let line of input) {
        line = line.split(' ')
        let name = line.shift();
       
        if (!studentAndAverageGrade.hasOwnProperty(name)) {
            studentAndAverageGrade[name] = [];
        }
        line.forEach((grade) => {
            studentAndAverageGrade[name].push(grade)
        });
        
    }

    let propertyToSort = Object.entries(studentAndAverageGrade);
    
    for (let el of propertyToSort) {
        let newValue = 0;
        el[1].forEach(el => {
            newValue += Number(el);
        })
        el[1] = (newValue / (el[1].length) )   
    }
    propertyToSort.sort((a, b) => a[0].localeCompare(b[0]));
    studentAndAverageGrade = Object.fromEntries(propertyToSort);
    
    for (const key in studentAndAverageGrade) {
        console.log(`${key}: ${studentAndAverageGrade[key].toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])