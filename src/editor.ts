import './editor.scss';

export default () => {
  const editor = document.createElement('div');
  editor.id = 'editor';

  const left = document.createElement('div');
  left.className = 'left';
  editor.append(left);

  const plus = document.createElement('i');
  plus.className = 'fas fa-plus';
  left.append(plus);

  const right = document.createElement('div');
  right.className = 'right';
  editor.append(right);

  const title = document.createElement('textarea');
  title.className = 'title';
  title.placeholder = 'Title';
  title.rows = 1;
  right.append(title);

  title.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      plus.click();
    }
  });

  const desc = document.createElement('textarea');
  desc.className = 'desc';
  desc.placeholder = 'Description';
  desc.rows = 1;
  right.append(desc);

  function changeHeight() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
  }
  title.addEventListener('input', changeHeight);
  desc.addEventListener('input', changeHeight);

  return editor;
};
