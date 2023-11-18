/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * 
 * @param {number} sentence 
 * @returns number
 */
const getTotalWordsFromString = function (sentence) {
    const result = sentence.split(" ").length;
    return result;
    }

export default getTotalWordsFromString;