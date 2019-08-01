/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
const m = +prompt('Введите число', 1);
const n = +prompt('Задайте степень', 1);
let result;
function pow(x, y) {
  result = m ** n;
  alert(result);
}
pow();
