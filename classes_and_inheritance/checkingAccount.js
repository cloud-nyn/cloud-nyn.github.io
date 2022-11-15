class CheckingAccount extends Account {
  constructor(number, overdraftAmount) {
    super(number);
    this.overdraftAmount = overdraftAmount;
  }
  setOverdraftAmount(amount) {
    this.overdraftAmount = amount;
  }
  getOverdraftAmount() {
    return this.overdraftAmount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      if (amount > this._balance + this.overdraftAmount) {
        throw Error(
          "Withdraw amount is above overdraft amount. can't withdraw"
        );
      } else {
        this._balance -= amount;
      }
    }
  }
  toString() {
    return (
      super.toString() +
      " " +
      this.constructor.name +
      " Overdraft amount: " +
      this.overdraftAmount
    );
  }
  endOfMonth() {
    if (this._balance < 0) {
      return (
        "Warning, low balance account number:" +
        this._number +
        " balance: " +
        this._balance +
        " overdraft limit:" +
        this.overdraftAmount
      );
    }
  }
}
