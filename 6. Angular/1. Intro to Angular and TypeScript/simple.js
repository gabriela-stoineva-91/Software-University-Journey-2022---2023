var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " says hi!");
    };
    return User;
}());
var user = new User('Gaby');
console.log(user.sayHello());
var message = 'Hello World';
console.log(message);
