import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const add = document.querySelector('#add');
  add.addEventListener('click', () => {
    const task = document.createElement('div');
    task.className = 'task';
    tasks.append(task);

    const title = document.createElement('div');
    title.className = 'title';
    title.append((document.querySelector('#title') as HTMLInputElement).value);
    task.append(title);

    const description = document.createElement('div');
    description.className = 'description';
    description.append(
      (document.querySelector('#description') as HTMLInputElement).value
    );
    task.append(description);
  });

  return tasks;
};
