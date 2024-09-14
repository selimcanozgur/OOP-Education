// Object Create

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const selim = Object.create(PersonProto);

selim.firstName = 'Selim';
selim.birthYear = 1998;
selim.calcAge();

const ali = Object.create(PersonProto);
ali.init('Ali', 1974);
ali.calcAge();
