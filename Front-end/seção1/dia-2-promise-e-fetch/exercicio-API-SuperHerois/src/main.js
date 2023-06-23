import './style.css';
import Swal from 'sweetalert2';

const img = document.getElementById('heroPhoto');
const name = document.getElementById('name');
const button = document.getElementById('button');

const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', () => {
  // event.preventDefault();
  const id = randomId;
  fetch(`${BASE_URL}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.images.md;
      name.innerHTML = data.name;
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
