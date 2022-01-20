import './tasks.scss';

export default () => {
  const list = document.createElement('div');
  list.className = 'list';

  const add = document.createElement('button');
  list.append(add);
  add.className = 'add';

  const plus = document.createElement('i');
  add.append(plus);
  plus.className = 'bi bi-plus-lg';

  const text = document.createElement('span');
  add.append(text);
  text.textContent = 'Add task';

  add.addEventListener('click', () => {
    add.remove();

    const task = document.createElement('div');
    list.append(task);
    task.className = 'task';

    const left = document.createElement('div');
    task.append(left);
    left.className = 'left';

    function completeTask() {
      task.remove();
      if (!list.contains(add)) {
        list.append(add);
      }
    }

    const circle = document.createElement('button');
    left.append(circle);
    circle.className = 'bi bi-circle';
    circle.onclick = completeTask;

    const check = document.createElement('button');
    left.append(check);
    check.className = 'bi bi-check-circle';
    check.onclick = completeTask;

    circle.addEventListener('mouseover', () => {
      circle.style.display = 'none';
      check.style.display = 'inline';
    });

    check.addEventListener('mouseout', () => {
      circle.style.display = 'inline';
      check.style.display = 'none';
    });

    const right = document.createElement('div');
    task.append(right);
    right.className = 'right';

    const title = document.createElement('textarea');
    right.append(title);
    title.className = 'title';
    title.placeholder = 'Title';
    title.rows = 1;
    // title.focus();

    const desc = document.createElement('textarea');
    right.append(desc);
    desc.className = 'desc';
    desc.placeholder = 'Description';
    desc.rows = 1;

    desc.addEventListener('input', () => {
      desc.style.height = '0';
      desc.style.height = `${desc.scrollHeight}px`;
    });

    const actions = document.createElement('div');
    right.append(actions);
    actions.className = 'actions';

    const icons = document.createElement('div');
    actions.append(icons);
    icons.className = 'icons';

    const calendarDropdown = document.createElement('div');
    icons.append(calendarDropdown);
    calendarDropdown.className = 'calendar-dropdown';

    const calendar = document.createElement('button');
    calendarDropdown.append(calendar);
    calendar.className = 'bi bi-calendar';

    const flagDropdown = document.createElement('div');
    icons.append(flagDropdown);
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

    document.querySelectorAll('.bi-flag-fill').forEach((i) =>
      i.addEventListener('click', (e) => {
        const { color } = window.getComputedStyle(
          e.target as Element,
          'before'
        );
        circle.style.color = color;
        check.style.color = color;
      })
    );

    const pills = document.createElement('div');
    actions.append(pills);
    pills.className = 'pills';

    const save = document.createElement('button');
    pills.append(save);
    save.className = 'save';
    save.textContent = 'Save';

    save.addEventListener('click', () => {
      if (title.value) {
        actions.style.display = 'none';
        if (!desc.value) {
          title.style.height = '100%';
          desc.style.display = 'none';
        }
        add.click();
      }
    });

    title.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        save.click();
      }
    });

    const cancel = document.createElement('button');
    pills.append(cancel);
    cancel.className = 'cancel';
    cancel.textContent = 'Cancel';
    cancel.onclick = completeTask;
  });

  return list;
};
