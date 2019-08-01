/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {
  for (const key in obj) {
    clone[key] = obj[key];
  }
}
