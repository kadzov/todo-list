import './calendar.scss';

export default () => {
  const calendarDropdown = document.createElement('div');
  calendarDropdown.className = 'calendar-dropdown';

  const calendar = document.createElement('button');
  calendarDropdown.append(calendar);
  calendar.className = 'bi bi-calendar';

  const calendarContent = document.createElement('div');
  calendarDropdown.append(calendarContent);
  calendarContent.className = 'calendar-content';

  const date = new Date();

  const month = document.createElement('div');
  calendarContent.append(month);
  month.className = 'month';
  month.textContent = `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

  const arrowLeft= document.createElement('button')
  month.append(arrowLeft)
  arrowLeft.className='bi bi-caret-left'

  const arrowRight= document.createElement('button')
  month.append(arrowRight)
  arrowRight.className='bi bi-caret-right'

  const days = document.createElement('div');
  calendarContent.append(days);
  days.className='days';

  ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach((i) => {
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = i;
    days.append(day);
  });

  Array.from(
    Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()),
    (_, i) => (i + 1).toString()
  ).forEach((i) => {
    const number = document.createElement('button');
    number.className = 'number';
    number.textContent = i;
    days.append(number);
  });

  return calendarDropdown;
};
