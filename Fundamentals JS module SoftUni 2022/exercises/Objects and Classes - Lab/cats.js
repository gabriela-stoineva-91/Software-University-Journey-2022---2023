function cats(array) {
  
    class Cat {
      constructor (name, age) {
        this.name = name;
        this.age = age;
      }
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
      }
    } 
   
    for(let i = 0; i < array.length; i++) {
      let currentEl = array[i].split(' ')
      
      let name = currentEl[0];
      let age = currentEl[1];
      
      let cat = new Cat(name, age);
      cat.meow()
    }
    
  }