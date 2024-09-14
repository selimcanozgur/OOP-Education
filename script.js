'use strict';

// Constructor function // [Person ()]
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const selim = new Person('Selim', 1998);
const ali = new Person('Ali', 1999);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

selim.calcAge();
ali.calcAge();

console.log(selim.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(selim));

Person.prototype.species = 'Homo Sapiens';

console.log(selim.species);
console.log(selim.hasOwnProperty('firstName')); // trure
console.log(selim.hasOwnProperty('species')); // false
