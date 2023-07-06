class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new User('Gaby');
console.log(user.sayHello());

let message: string = 'Hello World';
console.log(message);