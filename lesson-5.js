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
