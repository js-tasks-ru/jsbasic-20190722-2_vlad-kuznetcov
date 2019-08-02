/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
const copy = {};
function clone(obj) {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      copy[key] = clone(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}
