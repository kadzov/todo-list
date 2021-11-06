import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const save = document.querySelector('#save');
  save.addEventListener('click', () => {
    const task = document.createElement('div');
    task.className = 'task';
    tasks.append(task);
  });

  return tasks;
};
