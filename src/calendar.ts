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
  month.textContent = `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

  return calendarDropdown;
};
