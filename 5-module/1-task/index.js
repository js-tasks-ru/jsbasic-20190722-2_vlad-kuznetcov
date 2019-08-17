/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const persons = table.tBodies;
  // console.log(persons);
  for (const item of persons) {
    // console.log(item.rows);
    for (const cell of item.rows) {
      // console.log(cell.cells);
      const dataAvailable = cell.cells[3].getAttribute('data-available');
      const gender = cell.cells[2].innerHTML;
      const age = cell.cells[1].innerHTML;
      // console.log(dataAvailable);
      // console.log(gender);
      // console.log(age);
      if (dataAvailable === 'true') {
        cell.classList.add('available');
        // console.log(cell);
      } else if (dataAvailable === 'false') {
        cell.classList.add('unavailable');
      } else {
        cell.hidden = true;
      }
      if (gender === 'm') {
        cell.classList.add('male');
      } else if (gender === 'f') {
        cell.classList.add('female');
      }
      if (age < 18) {
        cell.style.textDecoration = 'line-through';
      }
      // console.log(cell);
    }
  }
}
