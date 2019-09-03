const END = 'завершенно'; // данный текст нужно выводить если событие прошло
const MS_IN_SEC = 1000; // количество миллисекнуд в секунде
// const MS_IN_MINUTE = 60 * MS_IN_SEC;
// const MS_IN_HOUR = 60 * MS_IN_MINUTE;
// const MS_IN_DAY = 24 * MS_IN_HOUR;

const hoursInDay = 24;
const minsInHour = 60;
const secsToMin = 60;

class TimeLeft {
  /**
   * @param el {Element} - ссылка на корневой элемент
   */
  constructor(el) {
    this.el = el;
    const dateFrom = this.parseDate(el.getAttribute('data-from'));
    const dateTo = this.parseDate(el.getAttribute('data-to'));
    const delta = dateTo - dateFrom;

    // склонения слов день, час, минута, секунда
    function verbDay(a) { // день
      if (a === 1) return 'день';
      if (a > 1 && a <= 4) return 'дня';
      if (a > 4) return 'дней';
      return false;
    }
    function verbHour(a) { // час
      if (a === 1) return 'час';
      if (a > 1 && a <= 4) return 'часа';
      if (a > 4) return 'часов';
      return false;
    }
    function verbMinute(a) { // минута
      if (a === 1) return 'минута';
      if (a > 1 && a <= 4) return 'минуты';
      if (a > 4) return 'минут';
      return false;
    }
    function verbSecond(a) { // секунда
      if (a === 1) return 'секунда';
      if (a > 1 && a <= 4) return 'секунды';
      if (a > 4) return 'секунд';
      return false;
    }
    // вывод результата
    if (delta > 0) {
      const secTotal = Math.round(delta / MS_IN_SEC);
      const seconds = secTotal % secsToMin;
      const minutes = Math.floor((secTotal / secsToMin) % minsInHour);
      const hours = Math.floor(((secTotal / secsToMin) / minsInHour) % hoursInDay);
      const days = Math.floor(((secTotal / secsToMin) / minsInHour) / hoursInDay);
      if (days !== 0 && hours !== 0 && minutes !== 0 && seconds !== 0) {
        el.textContent = `${days} ${verbDay(days)}, ${hours} ${verbHour(hours)}, ${minutes} ${verbMinute(minutes)},
        ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days === 0 && hours !== 0 && minutes !== 0 && seconds !== 0) {
        el.textContent = `${hours} ${verbHour(hours)}, ${minutes} ${verbMinute(minutes)},
        ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days !== 0 && hours === 0 && minutes !== 0 && seconds !== 0) {
        el.textContent = `${days} ${verbDay(days)}, ${minutes} ${verbMinute(minutes)},
        ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days !== 0 && hours !== 0 && minutes === 0 && seconds !== 0) {
        el.textContent = `${days} ${verbDay(days)}, ${hours} ${verbHour(hours)}, ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days !== 0 && hours !== 0 && minutes !== 0 && seconds === 0) {
        el.textContent = `${days} ${verbDay(days)}, ${hours} ${verbHour(hours)}, ${minutes} ${verbMinute(minutes)}`;
        return el;
      } if (days === 0 && hours === 0 && minutes !== 0 && seconds !== 0) {
        el.textContent = `${minutes} ${verbMinute(minutes)}, ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days === 0 && hours !== 0 && minutes === 0 && seconds !== 0) {
        el.textContent = `${hours} ${verbHour(hours)}, ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days === 0 && hours !== 0 && minutes !== 0 && seconds === 0) {
        el.textContent = `${hours} ${verbHour(hours)}, ${minutes} ${verbMinute(minutes)}`;
        return el;
      } if (days !== 0 && hours === 0 && minutes === 0 && seconds !== 0) {
        el.textContent = `${days} ${verbDay(days)}, ${seconds} ${verbSecond(seconds)}`;
        return el;
      } if (days !== 0 && hours === 0 && minutes !== 0 && seconds === 0) {
        el.textContent = `${days} ${verbDay(days)}, ${minutes} ${verbMinute(minutes)}`;
        return el;
      } if (days !== 0 && hours !== 0 && minutes === 0 && seconds === 0) {
        el.textContent = `${days} ${verbDay(days)}, ${hours} ${verbHour(hours)}`;
        return el;
      } if (days !== 0 && hours === 0 && minutes === 0 && seconds === 0) {
        el.textContent = `${days} ${verbDay(days)}`;
        return el;
      } if (days === 0 && hours !== 0 && minutes === 0 && seconds === 0) {
        el.textContent = `${hours} ${verbHour(hours)}`;
        return el;
      } if (days === 0 && hours === 0 && minutes !== 0 && seconds === 0) {
        el.textContent = `${minutes} ${verbMinute(minutes)}`;
        return el;
      } if (days === 0 && hours === 0 && minutes === 0 && seconds !== 0) {
        el.textContent = `${seconds} ${verbSecond(seconds)}`;
        return el;
      }
      // console.log(secTotal);
      // console.log('Секунд: ' + seconds);
      // console.log('Минут: ' + minutes);
      // console.log('Часов: ' + hours);
      // console.log('Дней: ' + days);
    } else {
      el.textContent = END;
      return el;
    }
  }

  /**
   * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
   * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
   * @return {Date} - возвращаем объект даты
   */
  parseDate(str) {
    const arr1 = str.split(' ');
    let arr2 = [];
    for (const item of arr1) {
      if (item.includes('.')) {
        arr2 = item.split('.');
        const timeDay = arr2.join('-');
        arr1.splice(0, 1, timeDay);
      }
    }
    const res = arr1.join('T');
    return Date.parse(res);
  }

  /**
   * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
   * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
   * @param el
   */
  static create(el) {
    return new TimeLeft(el);
  }
}

window.TimeLeft = TimeLeft;
