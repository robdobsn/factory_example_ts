import registerAddOns from "./addOns.js";
import addOnFactory from "./factory.js";

registerAddOns();

addOnFactory.create("AddOn1", "this is addOn1");
addOnFactory.create("AddOn2", "this is addOn2");
