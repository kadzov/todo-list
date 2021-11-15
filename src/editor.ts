import './editor.scss';

export default () => {
  const list = document.createElement('div');
  list.id = 'list';

  const task = document.createElement('div');
  list.append(task);
  task.className = 'task';

  const left = document.createElement('div');
  task.append(left);
  left.className = 'left';

  const plus = document.createElement('button');
  left.append(plus);
  plus.className = 'fas fa-plus';

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

  function addTask(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      e.preventDefault();
      plus.click();
    }
  }
  title.addEventListener('keydown', addTask);
  plus.addEventListener('keydown', addTask);

  plus.addEventListener('click', () => {
    const task = task.cloneNode(true) as Element;
    list.append(task);

    const circle = document.createElement('button');
    circle.className = 'far fa-circle';
    const left = list.lastChild.firstChild as Element;
    list.lastChild.firstChild.firstChild.remove();
    left.append(circle);

    const check = document.createElement('button');
    check.className = 'far fa-check-circle';
    left.append(check);

    circle.addEventListener('mouseover', () => {
      circle.style.display = 'none';
      check.style.display = 'inline';
    });
    check.addEventListener('mouseout', () => {
      circle.style.display = 'inline';
      check.style.display = 'none';
    });

    //   const editorDesc = (document.querySelector('.desc') as HTMLInputElement)
    //     .value;
    //   if (editorDesc) {
    //     const desc = document.createElement('div');
    //     desc.className = 'desc';
    //     desc.append(editorDesc);
    //     right.append(desc);
    //   }
    // }
  });

  return list;
};
