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

    const circle = document.createElement('button');
    left.append(circle);
    circle.className = 'bi bi-circle';

    const check = document.createElement('button');
    left.append(check);
    check.className = 'bi bi-check-circle';

    function completeTask() {
      task.remove();
      if (!list.contains(add)) {
        list.append(add);
      }
    }

    circle.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        completeTask();
      }
    });

    check.addEventListener('click', () => {
      completeTask();
    });

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
    title.focus();

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

    const pills = document.createElement('div');
    actions.append(pills);

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

    cancel.addEventListener('click', () => {
      completeTask();
    });

    const icons = document.createElement('div');
    actions.append(icons);
    icons.className = 'icons';

    const calendar = document.createElement('button');
    icons.append(calendar);
    calendar.className = 'bi bi-calendar';

    const dropdown = document.createElement('div');
    icons.append(dropdown);
    dropdown.className = 'dropdown';

    const flag = document.createElement('button');
    dropdown.append(flag);
    flag.className = 'bi bi-flag';

    const menu = document.createElement('div');
    dropdown.append(menu);
    menu.className = 'menu';

    flag.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    const highPriority = document.createElement('button');
    menu.append(highPriority);
    highPriority.className = 'bi bi-flag';
    highPriority.textContent = 'High Priority';

    const mediumPriority = document.createElement('button');
    menu.append(mediumPriority);
    mediumPriority.className = 'bi bi-flag';
    mediumPriority.textContent = 'Medium Priority';

    const lowPriority = document.createElement('button');
    menu.append(lowPriority);
    lowPriority.className = 'bi bi-flag';
    lowPriority.textContent = 'Low Priority';

    const noPriority = document.createElement('button');
    menu.append(noPriority);
    noPriority.className = 'bi bi-flag';
    noPriority.textContent = 'No Priority';
  });

  return list;
};
