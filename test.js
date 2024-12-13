// inheritance program

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`hello , i am ${this.name} and i am ${this.age} old`);
  }
}

class Student extends Person {
  //encapsulation
  #mark = 0;
  constructor(name, age, roll) {
    super(name, age);
    this.roll = roll;
  }

  addmark(mark) {
    this.#mark = mark;
  }
  getmark() {
    return this.#mark;
  }
  Roll() {
    console.log(`i am very Happy today beacuse my roll is ${this.roll}`);
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  //polymorphism
  introduce() {
    console.log(`hello , i am ${this.name} and i am tech ${this.subject} `);
  }
  tech() {
    console.log(`i am expert on ${this.subject}`);
  }
}

//abstraction
class Shape {
  constructor(name) {
    this.name = name;
  }
  CalculateShape() {
    console.log("you must Impliment calculate area");
  }
}
class Circle extends Shape {
  constructor(redius) {
    super(Circle);
    this.redius = redius;
  }
  CalculateShape() {
    return 3.14 * this.redius * this.redius;
  }
}
class Reactangle extends Shape {
  constructor(width, height) {
    super(Reactangle);
    this.width = width;
    this.height = height;
  }
  CalculateShape() {
    return this.width * this.height;
  }
}

let circle1 = new Circle(5);
let reactangle = new Reactangle(2, 3);
console.log(reactangle.CalculateShape());

let student = new Student("sakib ahmed", 22, 53009);
let teacher = new Teacher("Ostad Touhid", 35, "Python");

// student.addmark(100);
// console.log(student.getmark());

// console.log(student);
// console.log(teacher);

// student.Roll();
