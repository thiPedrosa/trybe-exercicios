// Para Fixar FOr in e For of

// Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

 for (let keys in names){
  console.log('Olá, ' + names[keys]);
 }

 console.log(-------);

//  Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. 

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (key in car){
  console.log(key + ': ' + car[key]);
}

//Exercicio - Adicionando chaves:

// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {};

console.log(student);


let newName = 'name';
let name = 'Thiago'
let newEmail = 'email';
let email = 'thiagopedrosaw@gmail.com';
let newPhone =  'telefone';
let telefone = 41991829351;
let newGitHub = 'gitHub';
let gitHub = '';
let newLinkedin = 'linkedIn';
let linkedIn = '';

function addProperty (object, key, value){
  object[key] = value
}

addProperty(student, newName, name);
addProperty(student, newEmail, email);
addProperty(student, newPhone, telefone);
addProperty(student, newGitHub, gitHub);
addProperty(student, newLinkedin, linkedIn);


console.log(student);

//Exercicios For in For Of

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

console.log('Bem-vinda ' + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

info['recorrente'] = 'Sim'

console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

for (keys in info){
  console.log(keys);
}





// 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:

for (keys in info){
  console.log(info[keys]);
}

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:

let info2 = {
  personagem: 'Tio Patinhas',
  origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178 " ,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
if(info.recorrente === info2.recorrente){
  console.log('Ambos recorrentes');
}

//Leitura de objetos

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

console.log('O Livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

//2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

leitor['livrosFavoritos'][1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',

  autor: 'JK Rowling',

  editora: 'Rocco',
}

console.log(leitor);

//3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

console.log(leitor.nome + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');