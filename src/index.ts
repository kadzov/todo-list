import './index.scss';

const content = document.querySelector('#content');
(() => {
  const bar = document.createElement('div');
  bar.id = 'bar';
  bar.contentEditable = 'true';
  content.appendChild(bar);
})();
