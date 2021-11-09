import './editor.scss';

export default () => {
  const editor = document.createElement('div');
  editor.id = 'editor';

  const title = document.createElement('textarea');
  title.id = 'title';
  title.placeholder = 'Title';
  title.rows = 1;
  editor.append(title);

  const description = document.createElement('textarea');
  description.id = 'description';
  description.placeholder = 'Description';
  description.rows = 1;
  editor.append(description);

  function changeHeight() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
  }
  title.addEventListener('input', changeHeight);
  description.addEventListener('input', changeHeight);

  // const add = document.createElement('button');
  // add.append('Add');
  // add.id = 'add';
  // editor.append(add);

  // title.addEventListener('keydown', (e) => {
  //   if (e.code === 'Enter') {
  //     e.preventDefault();
  //     add.click();
  //   }
  // });

  // const del = document.createElement('button');
  // del.append('Delete');
  // del.id = 'delete';
  // editor.append(del);

  return editor;
};
