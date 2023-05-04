function repeatString(str, num) {

    const currentString = str;
    let timeToRepeat = Number(num);
    
    return (`${currentString.repeat(timeToRepeat)}`)

}
repeatString("abc", 3)