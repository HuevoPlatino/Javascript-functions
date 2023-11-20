/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * This function returns the total number of words contained in one string.
 * @param {number} sentence
 * @returns number
 */
const getTotalWordsFromString = function (sentence) {
  /**  @returns sentence.split(" ").length; 
    const result = sentence.split(" ").length;
    return result;
    */
  const result = sentence.split(" ").length;
  return result;
};

export default getTotalWordsFromString;
