import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";

/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 is left in 30 from number 100"
 */
/**
 * this function will generate a random number (in between 0-100) and sum it to given number
 * @param {number} value 
 * @returns string
 */
const getDistanceMessageFromSumTo100 = function (value) {
  const random = generateRandomNumberInRange(100);

  const sum = value + random;

  const distance = getDistanceFromThreshold(sum, 100);

  const isExceeding = isGreaterThan(sum, 100);

  const message = isExceeding
  
    ? `Sum with value ${sum} exceeds in ${distance} from number 100`
    : `Sum with value ${sum} is left in ${distance} from number 100`;
  return message;
};

export default getDistanceMessageFromSumTo100;
