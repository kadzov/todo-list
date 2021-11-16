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

  function addTask() {
    function selectElement(className: string) {
      return document.querySelectorAll(className)[1] as HTMLElement;
    }

    if (title.value) {
      list.insertBefore(task.cloneNode(true) as HTMLElement, task.nextSibling);
      selectElement('.fa-plus').remove();

      selectElement('.title').addEventListener('input', changeHeight);
      selectElement('.desc').addEventListener('input', changeHeight);

      if (!desc.value) {
        selectElement('.desc').style.display = 'none';
        selectElement('.title').style.height = '100%';
      }

      const circle = document.createElement('button');
      selectElement('.left').append(circle);
      circle.className = 'far fa-circle';

      const check = document.createElement('button');
      selectElement('.left').append(check);
      check.className = 'far fa-check-circle';

      circle.addEventListener('mouseover', () => {
        circle.style.display = 'none';
        check.style.display = 'inline';
      });

      check.addEventListener('mouseout', () => {
        circle.style.display = 'inline';
        check.style.display = 'none';
      });
    }
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
