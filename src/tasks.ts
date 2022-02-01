import './tasks.scss';
// import priority from './priority';
// import calendar from './calendar';

export default () => {
  const list = document.querySelector('.list') as HTMLElement;
  const add = document.querySelector('.add') as HTMLElement;
  const template = document.querySelector('template') as HTMLTemplateElement;

  add.addEventListener('click', () => {
    add.remove();

    const task = template.content.cloneNode(true) as HTMLElement;
    list.insertBefore(task, list.childNodes[0]);

    function completeTask() {
      task.remove();
      if (!list.contains(add)) {
        list.insertBefore(add, list.childNodes[0]);
      }
    }

    const circle = document.querySelector('.bi-circle') as HTMLElement;
    circle.onclick = completeTask;

    const check = document.querySelector('.bi-check-circle') as HTMLElement;
    check.onclick = completeTask;

    circle.addEventListener('mouseover', () => {
      circle.style.display = 'none';
      check.style.display = 'inline';
    });

    check.addEventListener('mouseout', () => {
      circle.style.display = 'inline';
      check.style.display = 'none';
    });

    const title = document.querySelector('.title') as HTMLInputElement;
    title.focus();

    const desc = document.querySelector('.desc') as HTMLInputElement;
    desc.addEventListener('input', () => {
      desc.style.height = '0';
      desc.style.height = `${desc.scrollHeight}px`;
    });

    // const icons = document.querySelector('.icons') as HTMLElement;
    // icons.append(calendar());
    // icons.append(priority());

    let element: Element;

    document.addEventListener('click', (e) => {
      if (
        (e.target as Element).matches('.dropdown-button') &&
        !document.querySelector('.dropdown-content.active')
      ) {
        element = e.target as Element;
        (element.nextSibling as Element).classList.toggle('active');
      } else if (
        !(e.target as Element).matches(
          '.dropdown *:not(.number, .bi-calendar, .bi-flag, .bi-flag-fill)'
        ) &&
        document.querySelector('.dropdown-content.active')
      ) {
        (element.nextSibling as Element).classList.remove('active');
        if (
          (e.target as Element).matches('.bi-calendar, .bi-flag') &&
          (e.target as Element).className !== element.className
        ) {
          ((e.target as Element).nextSibling as Element).classList.toggle(
            'active'
          );
          element = e.target as Element;
        }
      }
    });

    document.querySelectorAll('.bi-flag-fill').forEach((i) =>
      i.addEventListener('click', (e) => {
        const { color } = window.getComputedStyle(
          e.target as Element,
          'before'
        );
        circle.style.color = color;
        check.style.color = color;
      })
    );

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
  });

  return list;
};
