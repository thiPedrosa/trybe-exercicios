// const whereAreYou = document.getElementById("where-are-you");
// const parent = whereAreYou.parentElement;

// parent.style.color = 'blue'

// const firstChildChild = document.getElementById("first-child-of-child");
// firstChildChild.innerText = "Incluindo Texto aqui."

// const firstChild = parent.firstElementChild;
// const firstChildByWhereAreYou = whereAreYou.previousElementSibling;
// const att = whereAreYou.nextSibling;
// const thirdChild = whereAreYou.nextSibling.nextSibling;
// const thirdChildByParent = parent.lastElementChild.previousElementSibling;

//Segundo Exercício foguete 

// const father = document.getElementById('pai');
// const newSiblingOndeVoceEsta = document.createElement('section');
// newSiblingOndeVoceEsta.id = 'novoIrmão';
// father.appendChild(newSiblingOndeVoceEsta);

// const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta')
// const childOfOndeVoceEsta = document.createElement('section');
// childOfOndeVoceEsta.id = 'novoFilhoDoFilho';
// ondeVoceEsta.appendChild(childOfOndeVoceEsta);

// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const filhoDoFilhoDoFilho = document.createElement('section');
// filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// const terceiroFilho = filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// Para Praticar removeChild

// const whereAreYou = document.getElementById('where-are-you');
// whereAreYou.removeChild(whereAreYou.firstElementChild)

 //Exercícios Aprofunde seu conhecimento. 


const createH1 =  document.createElement('h1')
createH1.innerText = 'TrybeTrip - Agência de Viagens'
document.body.appendChild(createH1);

const createMain = document.createElement('main');
createMain.className = 'main-content'
document.body.appendChild(createMain);

const createSection = document.createElement('section');
createSection.className = 'center-content';
createMain.appendChild(createSection);

const createParagraph = document.createElement('p');
createMain.innerText = "Algum texto"
createSection.appendChild(createParagraph);

const createSectionLeft = document.createElement('section');
createSectionLeft.className = 'left-content';
createMain.appendChild(createSectionLeft);

const createSectionRight = document.createElement('section');
createSectionLeft.className = 'right-content';
createMain.appendChild(createSectionRight);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image'
createSectionLeft.appendChild(img);

const unorderedLis = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbers.length; index += 1){
  const list = document.createElement('li');
  list.innerText = numbers[index];
  unorderedLis.appendChild(list);
}
createSectionRight.appendChild(unorderedLis);


for (let index = 0; index < 3; index +=1){
  const createH3 = document.createElement('h3');
  createH3.innerText = index;
  createMain.appendChild(createH3);
}

// Bonus 

const title = document.querySelector('h1');
title.className = 'title';

const h3 = document.getElementsByTagName('h3');

for (let index = 0; index < 3; index +=1){
  h3[index].className = 'description';
}

