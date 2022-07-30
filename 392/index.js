/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isSubsequence = (s, t) => {
  const tini = s.split(""), tiny = t.split("");
  tiny.map((x) => { if (tini[0] == x) tini.shift();});
  return tini.length == 0
};
