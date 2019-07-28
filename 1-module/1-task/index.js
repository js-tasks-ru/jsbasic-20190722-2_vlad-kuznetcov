/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result;
  m = prompt('Введите число', 1);
  n = prompt('Задайте степень', 1);
  if (isNaN(m) === false && isNaN(n) === false) {
    m = +m;
    n = +n;
    result = Math.pow(m, n);
    alert('Ответ: ' + result);
  } else {
    alert('Значения должны быть числовыми');
  }
}

pow();