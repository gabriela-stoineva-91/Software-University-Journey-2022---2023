function adAstra(array) {

    let pattern = /(\||#)(?<name>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calorie>[0-9]{1,5})\1/g;
    const caloriesForOneDay = 2000;
    let string = array.toString();
    let allProducts = string.matchAll(pattern);
    let calories = 0;
    for (let product of allProducts){
        calories += Number(product.groups.calorie)
    }   
    let days = Math.floor(calories / caloriesForOneDay);
    console.log(`You have food to last you for: ${days} days!`);

    allProducts = string.matchAll(pattern);
    for (let current of allProducts) {
         console.log(`Item: ${current.groups['name']}, Best before: ${current.groups['date']}, Nutrition: ${current.groups['calorie']}`)
    }

}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])