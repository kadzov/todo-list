import './editor.scss';

export default () => {
  const editor = document.createElement('div');
  editor.id = 'editor';

  const left = document.createElement('div');
  left.id = 'left';
  editor.append(left);

  const plus = document.createElement('i');
  plus.className = 'fas fa-plus';
  left.append(plus);

  const right = document.createElement('div');
  right.id = 'right';
  editor.append(right);

  const title = document.createElement('textarea');
  title.id = 'title';
  title.placeholder = 'Title';
  title.rows = 1;
  right.append(title);

  title.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      plus.click();
    }
  });

  const description = document.createElement('textarea');
  description.id = 'description';
  description.placeholder = 'Description';
  description.rows = 1;
  right.append(description);

  function changeHeight() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
  }
  title.addEventListener('input', changeHeight);
  description.addEventListener('input', changeHeight);

  return editor;
};
