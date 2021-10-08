import './editor.scss';

export default () => {
  const editor = document.createElement('div');
  editor.id = 'editor';

  const title = document.createElement('textarea');
  title.placeholder = 'New task';
  title.rows = 1;
  editor.append(title);

  const description = document.createElement('textarea');
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

  const pane = document.createElement('div');
  pane.id = 'pane';
  editor.append(pane);

  const save = document.createElement('button');
  save.append('Save');
  pane.append(save);

  const cancel = document.createElement('button');
  cancel.append('Cancel');
  pane.append(cancel);

  return editor;
};
