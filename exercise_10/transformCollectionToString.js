import isTypeOf from "../exercise_07/isTypeOf.js";
/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * this function returns a string from an array
 * @param {array} collection
 * @returns string
 */
const transformCollectionToString = function (collection) {
  const result =
    isTypeOf(collection, "array") && collection.length > 0
      ? collection.join(" | ")
      : "It is empty because the array has no value";
  return result;
};

export default transformCollectionToString;
