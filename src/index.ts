import './index.scss';

const content = document.querySelector('#content');

const bar = document.createElement('div');
bar.id = 'bar';
content.appendChild(bar);

const plus = document.createElement('button');
plus.className = 'fas fa-plus';
bar.appendChild(plus);

const text = document.createElement('input');
text.id = 'text';
text.type = 'text';
text.placeholder = 'New task';
bar.appendChild(text);
