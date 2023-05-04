function phoneBook(input) {

    let phoneBookList = {};

    for (const line of input) {
        let [name, number] = line.split(' ')
        phoneBookList[name] = number;    
    }
    
    for (const name in phoneBookList) {
        console.log(`${name} -> ${phoneBookList[name]}`)
    }

}
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])