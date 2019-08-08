/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(arr, yearsOld) {
  const person = arr.filter(item => item.age <= yearsOld);
  const resArr = person.map(item => `${item.name}, ${item.balance}`);
  return resArr.join('\n');
}
