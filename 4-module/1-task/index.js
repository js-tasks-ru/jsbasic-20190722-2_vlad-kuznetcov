/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(persons) {
  const list = document.createElement('ul');
  const data = persons.map(item => `${item.firstName} ${item.lastName}`);
  for (const dataItem of data) {
    const listItem = document.createElement('li');
    listItem.textContent = `${dataItem}`;
    list.append(listItem);
  }
  return list;
}
