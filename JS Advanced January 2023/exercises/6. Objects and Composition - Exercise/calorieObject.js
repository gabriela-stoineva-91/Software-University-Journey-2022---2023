function calorieObject(arr) {
    const obj = {};
    const lengthArr = arr.length;

    for (let i = 0; i < lengthArr; i+= 2) {
        let currentKey = arr[i];
        let currentValue = Number(arr[i + 1]);
        obj[currentKey] = currentValue;
    }
    console.log(obj);
}