function sumTable() {
    
    let elementsToSum = document.querySelectorAll('tr td:nth-of-type(2)');
 
    let arr = Array.from(elementsToSum);
    let noneToSum = arr.pop();
 
    let sum = arr.reduce((a, n) => {
        let current = Number(n.textContent);
        return a + current;
    }, 0);
    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}