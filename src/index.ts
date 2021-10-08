// check phone keyboard
// tab styling
// make save button glowing after typing in title

import './index.scss';

const content = document.querySelector('#content');

const editor = document.createElement('div');
editor.id = 'editor';
content.append(editor);

const title = document.createElement('textarea');
title.className = 'input';
title.placeholder = 'New task';
title.rows = 1;
editor.append(title);

const description = document.createElement('textarea');
description.className = 'input';
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

const buttons = document.createElement('div');
buttons.id = 'pane';
editor.append(buttons);

const save = document.createElement('button');
save.append('Save');
buttons.append(save);

const cancel = document.createElement('button');
cancel.append('Cancel');
buttons.append(cancel);
