// 4 đặc tính cơ bản của OOP
/**
 * Tính kế thừa
 * Tính đa hình
 * Tính trừu tượng (abstract)
 * Tính đóng gói
 */

class Animal {
  static gender = 'Male';

  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} running with ${speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }

  static func() {
    console.log('This function is public');
  }
}

const animal = new Animal('My pet');

animal.run(3000);

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  talk() {
    console.log(`${this.name} talking go go ${this.age}`);
  }
}
