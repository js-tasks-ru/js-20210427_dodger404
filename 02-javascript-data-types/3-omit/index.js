/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = {};
  for (let [key, val] of Object.entries(obj)){
    if (fields.includes(key)){
      result[key] = val;
    }
  }
  return result;
};
