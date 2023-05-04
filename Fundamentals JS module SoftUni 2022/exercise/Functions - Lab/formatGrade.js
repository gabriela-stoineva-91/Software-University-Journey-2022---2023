function formatGrade(grade) { 
    let description; 
    let printGrade;
    if (grade < 3) {
        description = 'Fail'
    } else if (grade < 3.50) {
        description = 'Poor'
    } else if (grade < 4.50) {
        description = 'Good'
    } else if (grade < 5.50) {
        description = 'Very good'
    } else {
        description = 'Excellent'
    }
    if (grade < 3) {
        printGrade = 2
    } else {
        printGrade = grade.toFixed(2)
    }
    console.log(`${description} (${printGrade})`)
}
formatGrade(4.50)