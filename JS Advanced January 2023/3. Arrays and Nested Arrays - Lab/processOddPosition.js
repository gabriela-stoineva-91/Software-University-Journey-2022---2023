function processOddPositions(arr) {
    let result =[];
    for (let i = 1; i < arr.length; i+=2) {
      result.push(arr[i]);
    }
    result = result.map((n) => n *= 2).reverse();
    return result.join(' ');
    
  }