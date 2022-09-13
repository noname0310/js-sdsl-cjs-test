//import HashMap from "js-sdsl/dist/cjs/container/HashContainer/HashMap";

const Vector = require("js-sdsl/dist/cjs/container/SequentialContainer/Vector").default as typeof import("js-sdsl/dist/cjs/container/SequentialContainer/Vector").default;

//const { Vector } = require("js-sdsl") as typeof import("js-sdsl");

const vec = new Vector<string>();
vec.pushBack("foo");
vec.pushBack("bar");

console.log(vec.getElementByPos(0)); // 1
console.log(vec.getElementByPos(1)); // 2

console.log(Vector);
