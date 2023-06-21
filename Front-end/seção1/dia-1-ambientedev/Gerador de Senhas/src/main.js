import { nanoid } from 'nanoid';
import './style.css';

const randomPassword = nanoid();
console.log(randomPassword);
const passwordBtn = document.querySelector('button');
const displayPasswordEL = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  displayPasswordEL.innerHTML = nanoid();
});
