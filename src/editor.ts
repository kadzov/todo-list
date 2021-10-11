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

  const save = document.createElement('button');
  save.append('Save');
  editor.append(save);

  title.addEventListener('input', () => {
    if (title.textLength) {
      save.style.backgroundColor = '#2683cf';
      save.style.border = '0.1rem solid transparent';
    } else {
      save.style.backgroundColor = 'initial';
      save.style.border = '0.1rem solid #6e6e6e';
    }
  });

  const cancel = document.createElement('button');
  cancel.append('Cancel');
  editor.append(cancel);

  return editor;
};
