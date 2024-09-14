// class expression
// const PersonCl = class {};

// class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  helloUser() {
    console.log(`Hello ${this.firstName}`);
  }
}

const selim = new PersonCl('Selimcan', 1998);

// PersonCl.prototype.helloUser = function () {
//   console.log(`Hello ${this.firstName}`);
// };

selim.calcAge();
selim.helloUser();

console.log(selim.__proto__ === PersonCl.prototype); // true
