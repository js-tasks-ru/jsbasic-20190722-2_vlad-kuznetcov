/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(arr, yearsOld) {
  return arr.filter(item => item.age <= yearsOld).map(item => `${item.name}, ${item.balance}`).join('\n');
}
