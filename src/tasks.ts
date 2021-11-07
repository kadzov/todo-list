import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const save = document.querySelector('#save');
  save.addEventListener('click', () => {
    const task = document.createElement('div');
    task.className = 'task';
    tasks.append(task);

    const title = document.createElement('div');
    title.append((document.querySelector('#title') as HTMLInputElement).value);
    task.append(title);

    const description = document.createElement('div');
    description.append(
      (document.querySelector('#description') as HTMLInputElement).value
    );
    task.append(description);
  });

  return tasks;
};
