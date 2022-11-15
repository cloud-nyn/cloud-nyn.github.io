class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount() {
    const acc = new Account(Bank.nextNumber());
    acc.deposit(4000);
    acc.withdraw(1000);
    this.accounts.push(acc);
    return acc;
  }
  addSavingAccount(interest) {
    const acc = new SavingsAccount(Bank.nextNumber(), interest);
    acc.deposit(5000);
    acc.withdraw(1500);
    this.accounts.push(acc);
    return acc;
  }
  addCheckingAccount(overdraft) {
    const acc = new CheckingAccount(Bank.nextNumber(), 500);
    acc.deposit(4500);
    acc.withdraw(4600);
    this.accounts.push(acc);
    return acc;
  }

  closeAccount(number) {
    const index = this.accounts.findIndex(
      (element) => element._number == number
    );
    return this.accounts.splice(index, 1);
  }
  accountReport() {
    return this.accounts.reduce(
      (accum, element) =>
        (accum !== "" ? accum + "  " : "") + element.toString(),
      ""
    );
  }
  static accountNum = 1000;
  static nextNumber() {
    return ++this.accountNum;
  }
  endOfMonth() {
    return this.accounts.reduce(
      (accum, element) =>
        (accum !== "" ? accum + "\n" : "") + element.endOfMonth(),
      ""
    );
  }
}
