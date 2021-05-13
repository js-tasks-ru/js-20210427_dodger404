/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  if (param === 'desc'){
    let sort_num = -1;
  } else if (param === 'asc') {
    let sort_num = 1;
  }

  return arr.slice().sort((a, b) => sort_num * a.localeCompare(b, ["ru", "en"], {caseFirst:"upper"}));

}
