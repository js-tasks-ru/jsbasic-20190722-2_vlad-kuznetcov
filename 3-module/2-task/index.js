/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arr = str.split(', ');
  let maxNumb = arr[0];
  let minNumb = arr[0];
  for (const i of arr) {
    if (arr[i] > maxNumb) {
      maxNumb = arr[i];
    }
    return maxNumb;
  }
  for (const j of arr) {
    if (arr[j] < minNumb) {
      minNumb = arr[j];
    }
    return minNumb;
  }
  return {
    min: minNumb,
    max: maxNumb,
  };
}
