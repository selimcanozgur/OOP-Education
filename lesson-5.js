// Setters and getters
// const bankist = {
//   firstName: 'Selimcan',
//   owner: [250, 600, 400, 300],
//   get latest() {
//     return this.owner.slice(-1).pop();
//   },
//   set latest(mov) {
//     return this.owner.push(mov);
//   },
// };

// Fonksiyon gibi çağrılmaz bu şekilde çalışır

// console.log(bankist.latest);
// bankist.latest = 50;
// console.log(bankist.owner);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  set setFullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }
  get fullNameOut() {
    return this.fullName;
  }
  static hey() {
    console.log('Hi there 👋');
  }
}

const selim = new PersonCl('Selimcan Özgür', 1998);

selim.calcAge();
PersonCl.hey();

// Inheritance için 2 anahtar kelime: extends ve super()
//
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'am ${2024 - this.birthYear} years old.`);
  }
}

const newSelim = new StudentCl('Selimcan Özgür', 1998, 'JavaScript');
newSelim.introduce();
newSelim.calcAge();
