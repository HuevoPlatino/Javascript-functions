/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * This function returns a rounded random number depending on a limit 
 * @param {number} limit 
 * @returns number
 */
const generateRandomNumberInRange = function (limit) {
    const result = Math.round(Math.random() * limit);
    return result;
    }

export default generateRandomNumberInRange;