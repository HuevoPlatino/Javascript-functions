/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */
/**
 *  This function returns the distance between two numbers
 * @param {number} value 
 * @param {number} threshold 
 * @returns number
 */
const getDistanceFromThreshold= function (value, threshold) {
    const result = value - threshold;
    return result;
    };

export default getDistanceFromThreshold;