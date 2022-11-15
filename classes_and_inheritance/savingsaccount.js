class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }
  setInterest(interest) {
    this.interest = interest;
  }
  getInterest() {
    return this.interest;
  }
  addInterest() {
    return (this._balance += this._balance * (this.interest / 100));
  }
  endOfMonth() {
    return (
      "Interest added " +
      this.constructor.name +
      " " +
      this._number +
      ": " +
      -(this._balance - this.addInterest()) +
      " balance " +
      this._balance +
      " interest: " +
      this.interest
    ); //Interest added SavingsAccount 1: 60 balace 560 interest: 12
  }
  toString() {
    return (
      super.toString() +
      " " +
      this.constructor.name +
      " " +
      "Interest: " +
      this.interest
    );
  }
}
