// //console.log('App working: open app/index.js to start exploring ES6');
// import $ from 'jquery';

// $('#root').append('<h1>This is dynamic!</h1>');

import {addHeader, addParagraph} from './helpers';
import add from './add';

addHeader('This function is from a different file');

addHeader(`54 + 67 = ${add(54, 67)}`);

addParagraph('This is a paragraph');

