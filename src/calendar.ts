import './calendar.scss';

export default () => {
  const month = document.querySelector('.month') as HTMLElement;
  const days = document.querySelector('.days') as HTMLElement;

  const date = new Date();

  month.textContent = `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

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
};
