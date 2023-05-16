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



