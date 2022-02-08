import './tasks.scss';

export default () => {
  const tasks = document.querySelector('.tasks') as HTMLElement;
  const add = document.querySelector('.add') as HTMLElement;
  const template = document.querySelector('template') as HTMLTemplateElement;

  // add.addEventListener('click', () => {
  //   add.remove();

    const task = template.content.cloneNode(true) as HTMLElement;
    tasks.insertBefore(task, tasks.childNodes[0]);

    function completeTask() {
      task.remove();
      if (!tasks.contains(add)) {
        tasks.insertBefore(add, tasks.childNodes[0]);
      }
    }

    const title = document.querySelector('.title') as HTMLInputElement;
    // title.focus();

    const desc = document.querySelector('.desc') as HTMLInputElement;
    desc.addEventListener('input', () => {
      desc.style.height = '0';
      desc.style.height = `${desc.scrollHeight}px`;
    });

    const month = document.querySelector('.month') as HTMLElement;
    const days = document.querySelector('.days') as HTMLElement;
    const date = new Date();

    month.textContent = `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getFullYear()}`;

    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach((i) => {
      const day = document.createElement('div');
      day.className = 'day';
      day.textContent = i;
      days.append(day);
    });

    Array.from(
      Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()),
      (_, i) => (i + 1).toString()
    ).forEach((i) => {
      const number = document.createElement('button');
      number.className = 'number';
      number.textContent = i;
      days.append(number);
    });

    let button: Element;
    let content: Element;

    document.addEventListener('click', (e) => {
      const element = e.target as Element;
      const active = document.querySelector('.content.active');

      if (element.matches('.dropdown > button')) {
        if (active) {
          content.classList.remove('active');
        }
        if (!active || button !== element) {
          button = e.target as Element;
          content = button.nextElementSibling as Element;
          content.classList.toggle('active');
        }
      } else if (
        active &&
        !element.matches('.content :not(.number, .bi-flag-fill)')
      ) {
        content.classList.remove('active');
      }
    });

    // document.querySelectorAll('.bi-flag-fill').forEach((i) =>
    //   i.addEventListener('click', (e) => {
    //     const { color } = window.getComputedStyle(
    //       e.target as Element,
    //       'before'
    //     );
    //     circle.style.color = color;
    //     check.style.color = color;
    //   })
    // );

    const actions = document.querySelector('.actions') as HTMLElement;
    const save = document.querySelector('.save') as HTMLElement;
    const cancel = document.querySelector('.cancel') as HTMLElement;

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

    cancel.onclick = completeTask;
  // });

  return tasks;
};
