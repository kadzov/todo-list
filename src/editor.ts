import './editor.scss';

export default () => {
  const editor = document.createElement('div');
  editor.id = 'editor';

  const title = document.createElement('textarea');
  title.id = 'title';
  title.placeholder = 'New task';
  title.rows = 1;
  editor.append(title);

  const description = document.createElement('textarea');
  description.id = 'description';
  description.placeholder = 'Add details';
  description.rows = 1;
  editor.append(description);

  function changeHeight() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
  }
  title.addEventListener('input', changeHeight);
  description.addEventListener('input', changeHeight);

  title.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  });

  const save = document.createElement('button');
  save.append('Save');
  save.id = 'save';
  editor.append(save);

  const del = document.createElement('button');
  del.append('Delete');
  del.id = 'delete';
  editor.append(del);

  return editor;
};
