// Đây là 
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var user = new User('Tài', 'Phan', 20);
console.log(user)
console.log(user.constructor)

var user2 = new User('Admin', 'System', 'Infinitie')
console.log(user2)

console.log(user2.getFullName())

// Object prototype:
User.prototype.className = '21TCLC_DT3'
console.log(user.className)