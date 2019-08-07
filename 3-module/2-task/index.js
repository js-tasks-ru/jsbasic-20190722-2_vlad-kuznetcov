/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arr1 = str.split(' ');
  let arr2 = [];
  let arr3 = [];
  const arr4 = [];
  const result = {
    min: 0,
    max: 0,
  };
  for (const i of arr1) {
    if (i.includes(',')) {
      arr2 = i.split(',');
    }
  }
  arr3 = arr1.concat(arr2);
  for (let j of arr3) {
    if (parseFloat(j)) {
      j = parseFloat(j);
    }
    if (typeof j === 'number') {
      arr4.push(j);
    }
  }
  // console.log(arr1);
  // console.log(arr2);
  // console.log(arr3);
  // console.log(arr4);
  let minNumb = arr4[0];
  let maxNumb = arr4[0];
  for (const k of arr4) {
    if (k > maxNumb) {
      maxNumb = k;
    }
  }
  for (const n of arr4) {
    if (n < minNumb) {
      minNumb = n;
    }
  }
  result.min = minNumb;
  result.max = maxNumb;
  // console.log(result);
  return result;
}
