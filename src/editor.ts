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
  title.placeholder = 'Title';
  title.rows = 1;

  const desc = document.createElement('textarea');
  right.append(desc);
  desc.placeholder = 'Description';
  desc.rows = 1;

  function changeHeight() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
  }
  title.addEventListener('input', changeHeight);
  desc.addEventListener('input', changeHeight);

  function addTask() {
    const taskCopy = task.cloneNode(true) as Element;
    list.insertBefore(taskCopy, task.nextSibling);

    document.querySelectorAll('.fa-plus')[1].remove();
    const leftCopy = document.querySelectorAll('.left')[1]

    const circle = document.createElement('button');
    leftCopy.append(circle);
    circle.className = 'far fa-circle';

    const check = document.createElement('button');
    leftCopy.append(check);
    check.className = 'far fa-check-circle';

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
  }
  plus.addEventListener('click', addTask);
  title.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });

  return list;
};
