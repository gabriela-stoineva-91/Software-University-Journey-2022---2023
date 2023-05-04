function rightCombination(n1) {
    let num = n1.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i ++) {
        sum += Number(num[i])
    }
    let result = sum.toString().includes('9');
    console.log(result 
    ? `${num} Amazing? True`
    : `${num} Amazing? False`);
    
}