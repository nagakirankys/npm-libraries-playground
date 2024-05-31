// Import stylesheets
import './style.css';
import * as DOMPurify from 'dompurify';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = 'Typescript Starter';

console.info("Push from Stackbliz");

const testDOMPurify = () => {
  const clean = DOMPurify.sanitize('<b>hello there</b>');
  appDiv.innerHTML = clean;
};

testDOMPurify();
