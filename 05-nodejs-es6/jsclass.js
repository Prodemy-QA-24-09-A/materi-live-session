class Dinosaurus {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  age = 5;

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    this._name = newName;
  }

  set setAge(newAge) {
    this.age = newAge
  }

  // method
  greet() {
    console.log(`Hello my name is ${this._name}`);
  }
}

let dino1 = new Dinosaurus("Brachio", "green");

dino1.name = "t-rex";
dino1.setAge = 9;
// console.log(dino1.age);
// console.log(dino1._color);
dino1.greet();
