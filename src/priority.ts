import './priority.scss';

export default () => {
  const flagDropdown = document.createElement('div');
  flagDropdown.className = 'flag-dropdown';

  const flag = document.createElement('button');
  flagDropdown.append(flag);
  flag.className = 'bi bi-flag';

  const flagContent = document.createElement('div');
  flagDropdown.append(flagContent);
  flagContent.className = 'flag-content';

  function showDropdown(e: Event) {
    if (!(e.target as Element).matches('.bi-flag')) {
      flagContent.classList.remove('show');
      document.removeEventListener('click', showDropdown);
    }
  }

  flag.addEventListener('click', () => {
    flagContent.classList.add('show');
    document.addEventListener('click', showDropdown);
  });

  const highPriority = document.createElement('button');
  flagContent.append(highPriority);
  highPriority.className = 'bi bi-flag-fill';
  highPriority.textContent = 'High Priority';

  const mediumPriority = document.createElement('button');
  flagContent.append(mediumPriority);
  mediumPriority.className = 'bi bi-flag-fill';
  mediumPriority.textContent = 'Medium Priority';

  const lowPriority = document.createElement('button');
  flagContent.append(lowPriority);
  lowPriority.className = 'bi bi-flag-fill';
  lowPriority.textContent = 'Low Priority';

  const noPriority = document.createElement('button');
  flagContent.append(noPriority);
  noPriority.className = 'bi bi-flag-fill';
  noPriority.textContent = 'No Priority';

  return flagDropdown;
};
