/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {
  const copy = Object.assign({}, obj);
  return copy;
}
