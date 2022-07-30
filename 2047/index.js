/**
 * @param {string} sentence
 * @return {number}
 */
const countValidWords = (sentence) => {
  let numOfValid = 0;
  sentence
    .split(" ")
    .filter((x) => x)
    .map((maybeToken) => {
      if (firstCheck(maybeToken) && secondCheck(maybeToken) && thirdCheck(maybeToken)) {
        numOfValid++;
      }
    });

  return numOfValid;
};

/**
 * Checks if it only contains lowercase letters, hyphens, and/or punctuation (no digits).
 *
 * @param {String} word
 * @return {boolean}
 */
const firstCheck = (word) => {
  const validTokenRegex = /^[a-z\-\!\.\,]*$/g;
  return validTokenRegex.test(word);
};

/**
 * Checks if there is at most one hyphen '-'.
 * If present, it must be surrounded by lowercase characters
 * Ex: "a-b" is valid, but "-ab" and "ab-" are not valid
 *
 * @param {String} word
 * @return {boolean}
 */
const secondCheck = (word) => {
  const countReg = /\-/g;
  const hypenCount = (word.match(countReg) || []).length;
  if (hypenCount == 0) return true;
  if (hypenCount == 1) {
    const isValidHypen = /([a-z]+[\-]{1}[a-z]+)/g;
    return isValidHypen.test(word);
  } else {
    return false;
  }
};

/**
 * Checks if there is at most one punctuation mark.
 * If present, it must be at the end of the token
 * Ex: "ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid
 *
 * @param {String} word
 * @return {boolean}
 */

const thirdCheck = (word) => {
  const countReg = /[\!||\.||\,]/g;
  const punctCount = (word.match(countReg) || []).length;
  if (punctCount == 0) return true;
  if (punctCount == 1) {
    const isEolMark = /(\w?[\!\.\,]{1}$)/g;
    return isEolMark.test(word);
  } else {
    return false;
  }
};
