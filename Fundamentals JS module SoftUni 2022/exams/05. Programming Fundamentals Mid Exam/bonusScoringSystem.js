function bonusScoringSystem(input) {
    let index = 0;
    let studentsCount = Number(input[index]);
    index++;
    let totalNumberOfLectures = Number(input[index]);
    index++;
    let additionalBonus = Number(input[index]);
    index++;
    let printStudentAttendance = 0;
    let maxBonus = 0;

    for (let i = 0; i < studentsCount; i++) {
        let studentAttendances = Number(input[index]);
        index++;
        
        let currentBonus = studentAttendances / totalNumberOfLectures * (5 + additionalBonus);

        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            printStudentAttendance = studentAttendances
            
        } else {
            break;
        }
    }
    
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}. 
    The student has attended ${printStudentAttendance} lectures.`) 
    //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])