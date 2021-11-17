import './tasks.scss';

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
    function selectElement(selector: string) {
      return document.querySelectorAll(selector)[1] as HTMLElement;
    }

    if (title.value) {
      list.insertBefore(task.cloneNode(true) as HTMLElement, task.nextSibling);

      const titleCopy = selectElement('.title');
      titleCopy.addEventListener('input', changeHeight);

      const descCopy = selectElement('.desc');
      descCopy.addEventListener('input', changeHeight);

      const leftCopy = selectElement('.left');

      const plusCopy = selectElement('.fa-plus');
      plusCopy.style.display = 'none';

      if (!desc.value) {
        titleCopy.style.height = '100%';
        descCopy.style.display = 'none';
      }

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

      titleCopy.addEventListener('focus', () => {
        circle.style.display = 'none';
        plusCopy.style.display = 'inline';
      });

      plusCopy.addEventListener('click', () => {
        circle.style.display = 'inline';
        plusCopy.style.display = 'none';
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
