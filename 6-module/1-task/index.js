/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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

class ClearedTable {
  constructor(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const del = '<a href="#delete">X</a>';

    // Получение таблицы
    function getTable(info) {
      // Создание заголовка таблицы
      function getTHeadList() {
        const fragment = new DocumentFragment();
        const headList = ['Name', 'Age', 'Salary', 'City', ''];
        for (const item of headList) {
          const td = document.createElement('td');
          td.textContent = item;
          fragment.append(td);
        }
        return fragment;
      }
      // Вставка заголовка таблицы в таблицу
      thead.append(getTHeadList());
      table.append(thead);

      // Создание тела таблицы
      const container = [];
      info.forEach((person) => {
        const tr = document.createElement('tr');
        function getTBodyContent() {
          const fragment = new DocumentFragment();
          const tableContent = [person.name, person.age, person.salary, person.city, del];
          for (const item of tableContent) {
            const td = document.createElement('td');
            td.innerHTML = item;
            fragment.append(td);
          }
          return fragment;
        }
        tr.append(getTBodyContent());
        tbody.append(tr);
        container.push(tr);
      });
      // Вставка тела таблицы в таблицу
      table.append(tbody);

      // Задание для таблицы класса 'pure-table'
      table.classList.add('pure-table');

      // Задание id для каждой строки с информацией
      let i = 0;
      const personId = [];
      for (const item of container) {
        i += 1;
        item.id = i;
        item.lastChild.firstChild.id = item.id;
        personId.push(+item.id);
      }
      return table;
    } // end of getTable
    // Функция удаления строки
    table.addEventListener('click', (event) => {
      /* const target = event.target;
      if (target.tagName !== 'A') return;
      const tr = target.closest('tr');
      tr.remove(); */
      const { target: link } = event;
      if (link.tagName !== 'A') return;
      const tr = link.closest('tr');
      tr.remove();
      this.onRemoved(+tr.id);
    });

    // Присвоение таблицы this.el
    this.el = getTable(data);
  } // end of constructor

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */

  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  } // end of onRemoved
} // end of Class

window.ClearedTable = ClearedTable;
