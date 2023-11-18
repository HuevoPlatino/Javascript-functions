/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
/**
 * 
 * @param {array} collection 
 * @returns boolean
 */
const checkCollectionHasElements = function (collection) {
    const result = collection.length > 0;
    return result;
    }

export default checkCollectionHasElements;