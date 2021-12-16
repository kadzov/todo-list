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
  text.append('Add task');

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

    circle.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        completeTask();
      }
    });

    const check = document.createElement('button');
    left.append(check);
    check.className = 'bi bi-check-circle';

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

    function changeHeight() {
      this.style.height = 0;
      this.style.height = `${this.scrollHeight}px`;
    }

    const title = document.createElement('textarea');
    right.append(title);
    title.className = 'title';
    title.placeholder = 'Title';
    title.rows = 1;
    title.addEventListener('input', changeHeight);
    title.focus();

    const desc = document.createElement('textarea');
    right.append(desc);
    desc.className = 'desc';
    desc.placeholder = 'Description';
    desc.rows = 1;
    desc.addEventListener('input', changeHeight);

    const actions = document.createElement('div');
    right.append(actions);
    actions.className = 'actions';

    const pills = document.createElement('div');
    actions.append(pills);

    const save = document.createElement('button');
    pills.append(save);
    save.append('Save');
    save.className = 'pill';

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
    cancel.append('Cancel');
    cancel.className = 'pill';

    cancel.addEventListener('click', () => {
      task.remove();
      if (!list.contains(add)) {
        list.append(add);
      }
    });

    const icons = document.createElement('div');
    actions.append(icons);

    const calendar = document.createElement('button');
    icons.append(calendar);
    calendar.className = 'bi bi-calendar';

    const flag = document.createElement('div');
    icons.append(flag);
    flag.style.display = 'inline-block';

    const flagButton = document.createElement('button');
    flag.append(flagButton);
    flagButton.className = 'bi bi-flag';

    const flagDropdown = document.createElement('div');
    flag.append(flagDropdown);
    flagDropdown.className = 'dropdown';
    flagDropdown.append('asdf');

    flagButton.addEventListener('click', () => {
      flagDropdown.classList.toggle('show')
    });
  });

  return list;
};
