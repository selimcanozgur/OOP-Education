// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // Public fields (instances)
  locale = navigator.language;
  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public Methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(dep) {
    this.#movements.push(dep);
    return this;
  }

  withdraw(dep) {
    this.deposit(-dep);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
}

const acc1 = new Account('Selim', 'TL', '7878');

acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);

// Chaining
acc1.deposit(2000).deposit(1000).withdraw(100).requestLoan(500).deposit(1000);
