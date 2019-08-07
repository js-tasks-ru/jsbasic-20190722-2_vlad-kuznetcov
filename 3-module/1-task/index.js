/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(arr, yearsOld) {
  let result = '';
  const arrEnd = [];
  arr.forEach((item) => {
    const arr1 = [item.name, item.balance];
    const arr2 = [];
    if (item.age <= yearsOld) {
      arr2.push(arr1.join(', '));
      str = arr2.join();
      arrEnd.push(str);
    }
  });
  result = arrEnd.join('\n');
  // console.log(arrEnd);
  // console.log(result);
  return result;
}
