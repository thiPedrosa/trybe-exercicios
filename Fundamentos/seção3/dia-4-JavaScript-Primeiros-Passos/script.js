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

 console.log(---) ;

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
