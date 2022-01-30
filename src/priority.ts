import './priority.scss';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const button = document.createElement('button');
  dropdown.append(button);
  button.className = 'bi bi-flag dropdown-button';

  const content = document.createElement('div');
  dropdown.append(content);
  content.className = 'dropdown-content';

  ['High', 'Medium', 'Low', 'No'].forEach((i) => {
    const priority = document.createElement('button');
    content.append(priority);
    priority.className = 'bi bi-flag-fill';
    priority.textContent = `${i} Priority`;
  });

  return dropdown;
};
