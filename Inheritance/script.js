//Exercise 1
String.prototype.filter = function (str) {
  return this.split(" ")
    .filter((word) => word != "not")
    .reduce((acc, element) => acc + " " + element);
};

//Exercise 2
Array.prototype.bubbleSort = function () {
  let temp, array;
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

//Exercise 3
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + "years old";
};

var Teacher = function () {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function (_subject) {
  return this.name + " is now teaching " + _subject; // no need for using this key word for subject
};
var teacher = new Teacher();
teacher.initialize("Stan Smith", 35);
str = teacher.teach("WAP");
