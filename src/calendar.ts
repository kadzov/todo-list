import './calendar.scss';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const button = document.createElement('button');
  dropdown.append(button);
  button.className = 'bi bi-calendar dropdown-button';

  const content = document.createElement('div');
  dropdown.append(content);
  content.className = 'dropdown-content';

  const date = new Date();

  const month = document.createElement('div');
  content.append(month);
  month.className = 'month';
  month.textContent = `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

  const arrowLeft = document.createElement('button');
  month.append(arrowLeft);
  arrowLeft.className = 'bi bi-caret-left';

  const arrowRight = document.createElement('button');
  month.append(arrowRight);
  arrowRight.className = 'bi bi-caret-right';

  const days = document.createElement('div');
  content.append(days);
  days.className = 'days';

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

  return dropdown;
};
