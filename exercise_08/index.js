//imports
import formatStringByWordsLength from "./formatStringByWordsLength.js";

console.log("CASE #1");
const sentence1 = "This is a long, long, long sentence.";
const result1 = formatStringByWordsLength(sentence1);
console.log(result1); // uppercase

console.log("CASE #2");
const sentence2 = "This is short one.";
const result2 = formatStringByWordsLength(sentence2);
console.log(result2); // lowercase
