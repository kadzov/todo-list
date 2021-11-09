import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const add = document.querySelector('#add');
  add.addEventListener('click', () => {
    const editorTitle = (document.querySelector('#title') as HTMLInputElement)
      .value;
    if (editorTitle) {
      const task = document.createElement('div');
      task.className = 'task';
      tasks.append(task);

      const circle = document.createElement('i');
      circle.className = 'far fa-circle';
      task.append(circle);

      const check = document.createElement('i');
      check.className = 'far fa-check-circle';
      task.append(check);

      circle.addEventListener('mouseover', () => {
        circle.style.display = 'none';
        check.style.display = 'inline';
      });
      check.addEventListener('mouseout', () => {
        circle.style.display = 'inline';
        check.style.display = 'none';
      });

      const title = document.createElement('div');
      title.className = 'title';
      title.append(editorTitle);
      task.append(title);

      const descriptionTitle = (
        document.querySelector('#description') as HTMLInputElement
      ).value;
      if (descriptionTitle) {
        const description = document.createElement('div');
        description.className = 'description';
        description.append(descriptionTitle);
        task.append(description);
      }
    }
  });

  return tasks;
};
