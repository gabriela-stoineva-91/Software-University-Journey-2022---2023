function solve(arr) {
    let sum = 0;
    let concat = '';
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        concat += arr[i];
        result += 1 / arr[i]
    }
    console.log(sum);
    console.log(result)
    console.log(concat);

}