/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */
/**
 * This function returns true if the first number is greater than the second one
 * @param {number} value
 * @param {number} threshold
 * @returns boolean
 */
const isGreaterThan = function (value, threshold) {
  const result = value > threshold;
  return result;
};

export default isGreaterThan;
