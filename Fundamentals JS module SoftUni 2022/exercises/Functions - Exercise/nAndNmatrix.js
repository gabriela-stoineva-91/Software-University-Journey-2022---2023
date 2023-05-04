function matrix(num) {
    let number = num.toString()
   
   for (let i = 0; i < num; i++) {
       
       let result = (number + " ").repeat(num)
       console.log(result)
   }
}