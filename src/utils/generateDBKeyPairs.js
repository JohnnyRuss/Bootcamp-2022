/**
 * transforms local-form-key-pairs to coresponding db-key-pairs
 * @param {String} str field key
 * @returns db field name
 */
function generateDBKeyPairs(str) {
  const strArr = [...str];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
      strArr[i] = `_${str[i].toLowerCase()}`;
    }
  }
  return strArr.join('');
}

export default generateDBKeyPairs;
