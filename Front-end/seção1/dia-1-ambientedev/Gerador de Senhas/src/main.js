import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const randomPassword = nanoid();
console.log(randomPassword);
const passwordBtn = document.querySelector('button');
const displayPasswordEL = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  displayPasswordEL.innerHTML = nanoid();
});
displayPasswordEL.addEventListener('click', () => {
  copy(displayPasswordEL.innerHTML);
  // eslint-disable-next-line no-alert
  alert('Senha copiada!');
});
