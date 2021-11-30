import './tasks.scss';

export default () => {
  const list = document.createElement('div');
  list.id = 'list';

  const add = document.createElement('button');
  list.append(add);
  add.id = 'add';

  const plus = document.createElement('i');
  add.append(plus);
  plus.className = 'fas fa-plus';

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

    const circle = document.createElement('button');
    left.append(circle);
    circle.className = 'far fa-circle';

    const check = document.createElement('button');
    left.append(check);
    check.className = 'far fa-check-circle';

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

    function changeHeight() {
      this.style.height = 0;
      this.style.height = `${this.scrollHeight}px`;
    }
    title.addEventListener('input', changeHeight);
    desc.addEventListener('input', changeHeight);

    const actions = document.createElement('div');
    right.append(actions);
    actions.className = 'actions';

    const cancel = document.createElement('button');
    actions.append(cancel);
    cancel.append('Cancel');

    cancel.addEventListener('click', () => {
      task.remove();
      list.append(add);
    });

    const save = document.createElement('button');
    actions.append(save);
    save.append('Save');

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
  });

  return list;
};
