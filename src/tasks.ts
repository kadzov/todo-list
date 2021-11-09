import './tasks.scss';

export default () => {
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  const add = document.querySelector('.fa-plus');
  add.addEventListener('click', () => {
    const editorTitle = (document.querySelector('#title') as HTMLInputElement)
      .value;
    if (editorTitle) {
      const task = document.createElement('div');
      task.className = 'task';
      tasks.append(task);

      const left = document.createElement('div');
      left.className = 'left';
      task.append(left);

      const circle = document.createElement('i');
      circle.className = 'far fa-circle';
      left.append(circle);

      const check = document.createElement('i');
      check.className = 'far fa-check-circle';
      left.append(check);

      circle.addEventListener('mouseover', () => {
        circle.style.display = 'none';
        check.style.display = 'inline';
      });
      check.addEventListener('mouseout', () => {
        circle.style.display = 'inline';
        check.style.display = 'none';
      });

      const right = document.createElement('div');
      right.className = 'right';
      task.append(right);

      const title = document.createElement('div');
      title.className = 'title';
      title.append(editorTitle);
      right.append(title);

      const descriptionTitle = (
        document.querySelector('#description') as HTMLInputElement
      ).value;
      if (descriptionTitle) {
        const description = document.createElement('div');
        description.className = 'description';
        description.append(descriptionTitle);
        right.append(description);
      }
    }
  });

  return tasks;
};
