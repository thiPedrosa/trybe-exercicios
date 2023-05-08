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