import './editor.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const newTask = document.createElement('div');
  newTask.id = 'new-task';
  tasks.append(newTask)

  const left = document.createElement('div');
  newTask.append(left);
  left.className = 'left';

  const plus = document.createElement('i');
  left.append(plus);
  plus.className = 'fas fa-plus';
  plus.tabIndex = 3;

  const right = document.createElement('div');
  newTask.append(right);
  right.className = 'right';

  const title = document.createElement('textarea');
  right.append(title);
  title.className = 'title';
  title.placeholder = 'Title';
  title.tabIndex = 1;
  title.rows = 1;

  const desc = document.createElement('textarea');
  right.append(desc);
  desc.className = 'desc';
  desc.placeholder = 'Description';
  desc.tabIndex = 2;
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
    const editorTitle = (document.querySelector('.title') as HTMLInputElement)
      .value;
    if (editorTitle) {
      const task = document.createElement('div');
      task.className = 'task';
      tasks.append(task);

      const left = document.createElement('div');
      left.className = 'left';
      task.append(left);

      const circle = document.createElement('i');
      circle.className = 'far fa-circle';
      left.append(circle);

      const check = document.createElement('i');
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

      const right = document.createElement('div');
      right.className = 'right';
      task.append(right);

      const title = document.createElement('div');
      title.className = 'title';
      title.append(editorTitle);
      right.append(title);

      const editorDesc = (document.querySelector('.desc') as HTMLInputElement)
        .value;
      if (editorDesc) {
        const desc = document.createElement('div');
        desc.className = 'desc';
        desc.append(editorDesc);
        right.append(desc);
      }
    }
  });

  return tasks;
};
