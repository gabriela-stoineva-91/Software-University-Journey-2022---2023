function printLength(str1, str2, str3) {
    let sumLength = 0;
    let firstLength = Number(str1.length)
    let secLength = Number(str2.length);
    let thirdLength = Number(str3.length);
    sumLength = firstLength + secLength + thirdLength;
    let average = Math.floor(sumLength / 3)
    console.log(sumLength);
    console.log(average)
  }