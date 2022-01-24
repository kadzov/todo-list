export default () => {
  const calendarDropdown = document.createElement('div');
  calendarDropdown.className = 'calendar-dropdown';

  const calendar = document.createElement('button');
  calendarDropdown.append(calendar);
  calendar.className = 'bi bi-calendar';
  console.log(new Date().getFullYear());

  return calendarDropdown
};
