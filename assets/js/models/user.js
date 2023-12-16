class User {

  constructor(name, lastName, age, email) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    if (email) {
      this.email = email;
    } else {
      this.email = this.buildEmail();
    }
  }

  buildEmail() {
    return `${this.name.toLowerCase().replaceAll(' ', '')}.${this.lastName.toLowerCase().replaceAll(' ', '')}@example.org`
  }

  greet() {
    return `Hello! My name is ${this.name}`;
  }
  
}

const user1 = new User('Carlos', 'del Prado', 33);
console.log(user1)
console.log(user1.greet());

const user2 = new User('Perico', 'Palotes', 30, 'a@example.org');
console.log(user2)
console.log(user2.greet());