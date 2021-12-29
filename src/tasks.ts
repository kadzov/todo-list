import './tasks.scss';

export default () => {
  const list = document.querySelector('.list');
  const add = document.querySelector('.add') as HTMLElement;
  const task = document.querySelector('.task') as HTMLElement;
  const circle = document.querySelector('.bi-circle') as HTMLElement;
  const check = document.querySelector('.bi-check-circle') as HTMLElement;
  const title = document.querySelector('.title') as HTMLInputElement;
  const desc = document.querySelector('.desc') as HTMLInputElement;
  // const actions = document.querySelector('.actions') as HTMLElement;
  const save = document.querySelector('.save') as HTMLElement;
  const cancel = document.querySelector('.cancel');
  // const flag = document.querySelector('.bi-flag');
  // const menu = document.querySelector('.menu');

  add.addEventListener('click', () => {
    add.remove();
    task.style.display = 'flex';

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
    // title.focus();

    desc.addEventListener('input', () => {
      desc.style.height = '0';
      desc.style.height = `${desc.scrollHeight}px`;
    });

    save.addEventListener('click', () => {
      if (title.value) {
        // actions.style.display = 'none';
        if (!desc.value) {
          // title.style.height = '100%';
          // desc.style.display = 'none';
        }
        // add.click();
      }
    });

    title.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        save.click();
      }
    });

    cancel.addEventListener('click', () => {
      task.remove();
      if (!list.contains(add)) {
        list.append(add);
      }
    });

    // flagButton.addEventListener('click', () => {
    //   flagDropdown.classList.toggle('show');
    // });
  });

  return list;
};
