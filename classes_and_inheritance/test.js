/**
 *  Savings test
 */

//setInterest test
describe("setInterest", function () {
  it(" sets interset of an account", function () {
    const savingsAcc = new SavingsAccount(1, 12);
    savingsAcc.setInterest(20);
    assert.equal(20, savingsAcc.interest);
  });
});

//getInterest test
describe("getInterest", function () {
  it("gets value of interset of an account", function () {
    const savingsAcc = new SavingsAccount(1, 12);
    assert.equal(12, savingsAcc.getInterest());
  });
});

//addInterest test
describe("addInterest", function () {
  it("add interset to an account", function () {
    const savingsAcc = new SavingsAccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(560, savingsAcc.addInterest());
  });
});

//endOfMonth test
describe("endOfMonth", function () {
  it("gives info on the account which interest has been added to", function () {
    const savingsAcc = new SavingsAccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(
      "Interest added SavingsAccount 1: 60 balance 560 interest: 12",
      savingsAcc.endOfMonth()
    );
  });
});

//toString test
describe("toString", function () {
  it("returns the object details in given string format", function () {
    const savingsAcc = new SavingsAccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(
      "Account 1: balance 500 SavingsAccount Interest: 12",
      savingsAcc.toString()
    );
  });
});

/**
 *  checking test
 */
describe("setOverdraftAmount", function () {
  it("sets Overdraft amount of a checking account", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.setOverdraftAmount(600);
    assert.equal(600, checkingAcc.overdraftAmount);
  });
});

describe("getOverdraftAmount", function () {
  it("gets Overdraft amount of a checking account", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    assert.equal(500, checkingAcc.getOverdraftAmount());
  });
});

describe("withdraw", function () {
  it("withdraw money in consideration of Overdraft amount", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(600);
    assert.throws(() => {
      checkingAcc.withdraw(1200);
    }, "Withdraw amount is above overdraft amount. can't withdraw");
  });
});

describe("toString", function () {
  it("returns the object details in given string format", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(500);
    assert.equal(
      "Account 1: balance 500 CheckingAccount Overdraft amount: 500",
      checkingAcc.toString()
    );
  });
});

describe("endOfMonth", function () {
  it("gives warning on the account which balance is less than zero", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(600);
    checkingAcc.withdraw(800);
    assert.equal(
      "Warning, low balance account number:1 balance: -200 overdraft limit:500",
      checkingAcc.endOfMonth()
    );
  });
});
/**
 *  bank test
 */

describe("addAccount", function () {
  it("add new account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addAccount();
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("addSavingAccount", function () {
  it("add new savings account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addSavingAccount(5000);
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("addCheckingAccount", function () {
  it("add new checking account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addCheckingAccount(500);
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("closeAccount", function () {
  it("removes account from array of accounts", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500); //1004
    const acc = cbe.addCheckingAccount(500); //1005
    cbe.addAccount(); //1006
    assert.equal(acc, cbe.closeAccount(1005)[0]);
  });
});

describe("accountReport", function () {
  it("returns a string with each account on its own line", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500);
    cbe.addCheckingAccount(500);
    cbe.addAccount();
    const str =
      "Account 1007: balance 3500 SavingsAccount Interest: 5500  Account 1008: balance -100 " +
      "CheckingAccount Overdraft amount: 500  Account 1009: balance 3000";
    assert.equal(str, cbe.accountReport());
  });
});

describe("nextNumber", function () {
  it("returns next account number", function () {
    assert.equal(1010, Bank.nextNumber());
  });
});

describe("endOfMonth", function () {
  it("returns accounts status by the end of the month", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500);
    cbe.addCheckingAccount(500);
    cbe.addAccount();
    const str =
      "Interest added SavingsAccount 1011: 192500 balance 196000 interest: 5500\nWarning, low balance account number:1012 balance: -100 overdraft limit:500\n";
    assert.equal(str, cbe.endOfMonth());
  });
});
