function rightPlace(firstStr, currentChar, secondStr){
    let newFirstStr = firstStr.replace('_', currentChar);
    let print = newFirstStr === secondStr 
    ? 'Matched'
    : 'Not Matched'
    
    //тернарен оператор
    console.log(print)
    
}