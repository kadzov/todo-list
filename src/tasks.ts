import './tasks.scss';

export default () => {
  const tasks = document.querySelector('.tasks') as HTMLElement;
  const add = document.querySelector('.add') as HTMLElement;
  const template = document.querySelector('template') as HTMLTemplateElement;

  // add.addEventListener('click', () => {
  //   add.remove();

  const task = template.content.cloneNode(true) as HTMLElement;
  tasks.insertBefore(task, tasks.childNodes[0]);

  function removeTask() {
    task.remove();
    if (!tasks.contains(add)) {
      tasks.insertBefore(add, tasks.childNodes[0]);
      // prepend
    }
  }

  const circle = document.querySelector('.circle') as HTMLElement;
  circle.onclick = removeTask;

  const title = document.querySelector('.title') as HTMLInputElement;
  // title.focus();

  const desc = document.querySelector('.desc') as HTMLInputElement;

  desc.addEventListener('input', () => {
    desc.style.height = '0';
    desc.style.height = `${desc.scrollHeight}px`;
  });

  ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach((i) => {
    const day = document.createElement('div');
    document.querySelector('.days').append(day);
    day.className = 'day';
    day.textContent = i;
  });

  const localDate = new Date();
  const numbers = document.querySelector('.numbers');

  function setCalendar() {
    const month = localDate.getMonth();
    const year = localDate.getFullYear();

    document.querySelector('.month').textContent = new Date(
      year,
      month
    ).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });

    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 1; i <= firstDay; i += 1) {
      numbers.append(document.createElement('div'));
    }

    const lastNumber = new Date(year, month + 1, 0).getDate();

    Array.from(Array(lastNumber), (_, i) => i + 1).forEach((i) => {
      const number = document.createElement('button');
      numbers.append(number);
      number.className = 'number';
      number.textContent = i.toString();
      const currentDate = new Date()
      if (
        i === currentDate.getDate() &&
        month === currentDate.getMonth() &&
        year === currentDate.getFullYear()
      ) {
        number.style.color = '#ff8100';
      }
    });
  }

  setCalendar();

  document.querySelector('.bi-chevron-left').addEventListener('click', () => {
    numbers.replaceChildren();
    localDate.setMonth(localDate.getMonth() - 1);
    setCalendar();
  });

  document.querySelector('.bi-chevron-right').addEventListener('click', () => {
    numbers.replaceChildren();
    localDate.setMonth(localDate.getMonth() + 1);
    setCalendar();
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
      (button as HTMLElement).focus();
    }
  });

  const check = document.querySelector('.bi-check') as HTMLElement;

  document.querySelectorAll('.bi-flag-fill').forEach((i) =>
    i.addEventListener('click', (e) => {
      const { color } = window.getComputedStyle(e.target as Element, 'before');
      circle.style.color = color;
      check.style.color = color;
    })
  );

  const extra = document.querySelector('.extra') as HTMLElement;
  const save = document.querySelector('.save') as HTMLElement;
  const cancel = document.querySelector('.cancel') as HTMLElement;

  save.addEventListener('click', () => {
    if (title.value) {
      extra.style.display = 'none';
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

  cancel.onclick = removeTask;
  // });

  return tasks;
};
