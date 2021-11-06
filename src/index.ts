import './index.scss';
import editor from './editor';
import tasks from './tasks';

const content = document.querySelector('#content');
content.append(editor());
content.append(tasks());

// tab styling
// drag and drop
// hamburger menu
// check phone keyboard

// www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list
// todoist.com/app/project/2275147841
// to-do.live.com/tasks/today
// desktop.any.do/agenda
// keep.google.com/#home
