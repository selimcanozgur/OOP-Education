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
console.log(selim.hasOwnProperty('firstName')); // true
console.log(selim.hasOwnProperty('species')); // false

console.log(selim.__proto__);
// Object.prototype (prototip zincirinin tepesi)
console.log(selim.__proto__.__proto__);
console.log(selim.__proto__.__proto__.__proto__);

// Dizi yöntemleri de prototype'dan gelir işte bir örnek:
// *** Bu sadece bir örnektir gerçek hayat projesinde önerilmez ***
const arr = [2, 4, 6, 2, 9, 8, 9];
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [2,4,6,9,8]
