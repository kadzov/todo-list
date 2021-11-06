import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  class Task {
    title: string;

    description: string;

    constructor(title: string, description: string) {
      this.title = title;
      this.description = description;
    }
  }

  const save = document.querySelector('#save');
  save.addEventListener('click', () => {
    const task = document.createElement('div');
    task.className = 'task';

    const title = document.querySelector('#title') as HTMLInputElement;
    task.append(title.value);

    const description = document.querySelector(
      '#description'
    ) as HTMLInputElement;
    task.append(description.value);

    tasks.append(task);
  });

  return tasks;
};
