import addOnFactory, { AddOnBase } from "./factory.js";

class AddOn1 extends AddOnBase {
  constructor(name: string) {
    super();
    console.log("AddOn1: " + name);
  }
  static create(name: string) {
    return new AddOn1(name);
  }
}

class AddOn2 extends AddOnBase {
  constructor(name: string) {
    super();
    console.log("AddOn2: " + name);
  }
  static create(name: string) {
    return new AddOn2(name);
  }
}

export default function registerAddOns() {
  addOnFactory.register("AddOn1", AddOn1.create);
  addOnFactory.register("AddOn2", AddOn2.create);
}