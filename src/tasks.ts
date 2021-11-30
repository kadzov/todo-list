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
    add.remove()

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

    const save = document.createElement('button');
    actions.append(save);
    save.className = 'save';
    save.append('Save');
  });

  // function addTask() {
  //   function selectElement(selector: string) {
  //     return document.querySelectorAll(selector)[1] as HTMLElement;
  //   }

  //   if (title.value) {
  //     list.insertBefore(task.cloneNode(true) as HTMLElement, task.nextSibling);

  //     const titleCopy = selectElement('.title');
  //     titleCopy.addEventListener('input', changeHeight);

  //     const descCopy = selectElement('.desc');
  //     descCopy.addEventListener('input', changeHeight);

  //     selectElement('.actions').style.display = 'none';

  //     if (!desc.value) {
  //       titleCopy.style.height = '100%';
  //       descCopy.style.display = 'none';
  //     }

  //     titleCopy.addEventListener('keydown', (e) => {
  //       if (e.code === 'Enter') {
  //         e.preventDefault();
  //         titleCopy.blur();
  //       }
  //     });
  //   }
  // }

  // save.addEventListener('click', addTask);
  // title.addEventListener('keydown', (e) => {
  //   if (e.code === 'Enter') {
  //     e.preventDefault();
  //     addTask();
  //   }
  // });

  return list;
};
