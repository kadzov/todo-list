import './priority.scss';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const button = document.createElement('button');
  dropdown.append(button);
  button.className = 'bi bi-flag';

  const content = document.createElement('div');
  dropdown.append(content);
  content.className = 'dropdown-content';

  function showDropdown(e: Event) {
    if (!(e.target as Element).matches('.bi-flag')) {
      content.classList.remove('dropdown-show');
      document.removeEventListener('click', showDropdown);
    }
  }

  button.addEventListener('click', () => {
    content.classList.add('dropdown-show');
    document.addEventListener('click', showDropdown);
  });

  ['High', 'Medium', 'Low', 'No'].forEach((i) => {
    const priority = document.createElement('button');
    content.append(priority);
    priority.className = 'bi bi-flag-fill';
    priority.textContent = `${i} Priority`;
  });

  return dropdown;
};
