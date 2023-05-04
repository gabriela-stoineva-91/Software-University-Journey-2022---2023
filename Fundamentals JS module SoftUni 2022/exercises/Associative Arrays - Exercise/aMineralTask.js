function aMineralTask(arr) {
    let task = {};

   for (let i = 0; i < arr.length; i+=2) {
        let mineral = arr[i]
        if (!task.hasOwnProperty(mineral)) {
            task[mineral] = 0
        }
        task[mineral] += Number(arr[i + 1])
   }
   for (const key in task) {
        console.log(`${key} -> ${task[key]}`)
   }
}
aMineralTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])