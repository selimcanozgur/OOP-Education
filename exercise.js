const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.speedBoost = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('Bmw', 120);
const mercedes = new Car('Mercedes', 95);

bmw.speedBoost();
bmw.speedBoost();
bmw.break();
bmw.speedBoost();
