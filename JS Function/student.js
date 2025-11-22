// ES6 Class Version
class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log("Name:", this.name);
  }
}

class Student2 extends Person2 {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  getBranch() {
    console.log("Branch:", this.branch);
  }

  getDetails() {
    console.log(`Name: ${this.name}, Branch: ${this.branch}`);
  }
}

// Creating object using ES6 Classes
s1 = new Student2("Rahul", "Computer Science");
console.log("ES6 Class Output:");
s1.getName();
s1.getBranch();
s1.getDetails();

console.log("\n");


// Prototype Version
function PersonFunc(name) {
  this.name = name;
}

PersonFunc.prototype.getName = function () {
  console.log("Name:", this.name);
};

function StudentFunc(name, branch) {
  PersonFunc.call(this, name);
  this.branch = branch;
}

StudentFunc.prototype = Object.create(PersonFunc.prototype);
StudentFunc.prototype.constructor = StudentFunc;

StudentFunc.prototype.getBranch = function () {
  console.log("Branch:", this.branch);
};

StudentFunc.prototype.getDetails = function () {
  console.log(`Name: ${this.name}, Branch: ${this.branch}`);
};

// Creating object using Prototypes
s2 = new StudentFunc("Mahi", "Mechanical");
console.log("Prototype Version Output:");
s2.getName();
s2.getBranch();
s2.getDetails();

console.log("\n");


// Prototype Chain Check
console.log("Prototype Chain Checks:");
console.log(s1.__proto__ === Student2.prototype);
console.log(Student2.prototype.__proto__ === Person2.prototype);
