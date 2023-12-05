import transformCollectionToString from "./transformCollectionToString.js";

console.log("# Case 1");
const collection = ["apple", "grapes", "strawberries"];
const result = transformCollectionToString(collection);
console.log(result);

console.log("# Case 2");
const collection2 = [];
const result2 = transformCollectionToString(collection2);
console.log(result2);
