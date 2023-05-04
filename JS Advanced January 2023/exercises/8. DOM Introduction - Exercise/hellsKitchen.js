function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputTextElement = document.querySelector('#inputs textarea');
        let text = JSON.parse(inputTextElement.value);

        let obj = {};
        let average = 0;
        let hight = 0;
        let top = '';

        for (let restaurantInfo of text) {
            restaurantInfo = restaurantInfo.split(' - ')
            let restaurantName = restaurantInfo.shift();
            let workersInfo = restaurantInfo[0].split(', ');

            for (let worker of workersInfo) {
                let [workerName, salary] = worker.split(' ');
                if (!obj.hasOwnProperty(restaurantName)) {
                    obj[restaurantName] = {};
                }
                obj[restaurantName][workerName] = Number(salary);
            }
        }
        let arr = Array.from(Object.entries(obj));

        for (let [name, persons] of arr) {
            let sum = 0;
            let arrOfPer = Array.from(Object.entries(persons));
            arrOfPer = arrOfPer.sort((a, b) => b[1] - a[1]);
            let [nameToPrint, theHightSalary] = arrOfPer[0];
            let valuesOfSalary = Array.from(Object.values(persons));

            valuesOfSalary.forEach((s) => sum += Number(s));
            let currentAverage = sum / valuesOfSalary.length;


            if (currentAverage > average) {
                average = currentAverage;
                top = name;
                hight = theHightSalary;
            }
        }
        let result1 = `Name: ${top} Average Salary: ${average.toFixed(2)} Best Salary: ${hight.toFixed(2)}`;
        let restToPrint = obj[top];
        let objToPrint = Array.from(Object.entries(restToPrint)).sort((a, b) => b[1] - a[1]);
        let result2 = '';
        for (let [w, s] of objToPrint) {
            result2 += `Name: ${w} With Salary: ${s} `;
        }

        let firstResElement = document.querySelector('#bestRestaurant p');
        firstResElement.textContent = result1;
        let secResultElement = document.querySelector('#workers p');
        secResultElement.textContent = result2;

    }
}