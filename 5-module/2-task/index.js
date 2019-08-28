/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  function getTheadList() {
    const fragment = new DocumentFragment();
    const tblHead = ['Name', 'Age', 'Salary', 'City'];
    for (const item of tblHead) {
      const td = document.createElement('td');
      td.textContent = item;
      fragment.append(td);
    }
    return fragment;
  }
  thead.append(getTheadList());
  table.append(thead);
  /* for (let i = 0; i < 4; i++) {
    let tr = document.createElement('tr');
    tr.append(getTheadList());
    tbody.append(tr);
  } */
  items.forEach((person) => {
    const tr = document.createElement('tr');
    function getTbodyContent() {
      const fragment = new DocumentFragment();
      const tblCont = [person.name, person.age, person.salary, person.city];
      for (const item of tblCont) {
        const td = document.createElement('td');
        td.textContent = item;
        fragment.append(td);
      }
      return fragment;
    }
    tr.append(getTbodyContent());
    tbody.append(tr);
  });
  table.append(tbody);
  this.el = table;
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    const tableRows = Array.from(this.el.rows);
    if (desc === false) {
      if (column !== 1 && column !== 2) {
        const sortedRows = tableRows.sort((rowA, rowB) => {
          // rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
          if (rowA.cells[column].innerHTML > rowB.cells[column].innerHTML) {
            return 1;
          }
          if (rowA.cells[column].innerHTML === rowB.cells[column].innerHTML) {
            return 0;
          }
          if (rowA.cells[column].innerHTML < rowB.cells[column].innerHTML) {
            return -1;
          }
          return false;
        });
        // console.log(sortedRows);
        this.el.tBodies[0].append(...sortedRows);
      }
      if (column === 1 || column === 2) {
        const sortedRows = tableRows.sort((rowA, rowB) => {
          // +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1;
          if (+rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML) {
            return 1;
          }
          if (+rowA.cells[column].innerHTML === +rowB.cells[column].innerHTML) {
            return 0;
          }
          if (+rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML) {
            return -1;
          }
          return false;
        });
        // console.log(sortedRows);
        this.el.tBodies[0].append(...sortedRows);
      }
    }
    if (desc === true) {
      if (column !== 1 && column !== 2) {
        const sortedRows = tableRows.sort((rowA, rowB) => {
          // rowA.cells[column].innerHTML < rowB.cells[column].innerHTML ? 1 : -1;
          if (rowA.cells[column].innerHTML < rowB.cells[column].innerHTML) {
            return 1;
          }
          if (rowA.cells[column].innerHTML === rowB.cells[column].innerHTML) {
            return 0;
          }
          if (rowA.cells[column].innerHTML > rowB.cells[column].innerHTML) {
            return -1;
          }
          return false;
        });
        // console.log(sortedRows);
        this.el.tBodies[0].append(...sortedRows);
      }
      if (column === 1 || column === 2) {
        const sortedRows = tableRows.sort((rowA, rowB) => {
          // +rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML ? 1 : -1;
          if (+rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML) {
            return 1;
          }
          if (+rowA.cells[column].innerHTML === +rowB.cells[column].innerHTML) {
            return 0;
          }
          if (+rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML) {
            return -1;
          }
          return false;
        });
        // console.log(sortedRows);
        this.el.tBodies[0].append(...sortedRows);
      }
    }
  };
}
