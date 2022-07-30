/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = (s, t) => {
  if (s === t) return true;
  let map = new Map(), i = 0;
  for (i; i < s.length; i++) {
    const el1 = s[i], el2 = t[i];
    if (map.has(el1)) if (map.get(el1) != el2) return false;
    map.set(el1, el2);
  }
  return new Set([...map.values()]).size == map.size;
};
