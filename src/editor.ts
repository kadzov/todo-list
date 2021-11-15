import './editor.scss';

export default () => {
  const newTask = document.createElement('div');
  newTask.id = 'new-task';

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

  return newTask;
};
