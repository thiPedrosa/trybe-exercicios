/*Lidando com arrays

Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  Percorra o array imprimindo todos os valores contidos nele com a função console.log().

  Some todos os valores contidos no array e imprima o resultado.

  Calcule e imprima a média aritmética dos valores contidos no array.
      A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

  Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

  Utilizando for, descubra o maior valor contido no array e imprima-o.

  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

  Utilizando for, descubra o menor valor contido no array e imprima-o.

  Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

  Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]); 
}



let resultado = 0
for (let index = 0; index < numbers.length; index++) {
  resultado = resultado + numbers[index]
}
console.log(resultado);

console.log("---");

let soma = 0

for(let index = 0; index < numbers.length; index++){
  soma = soma + numbers[index];
}

let media = soma/numbers.length;

console.log(media);

console.log("---");

if(media > 20){
  console.log("O valor da média aritmética é maior que 20");
}else{
  console.log("O valor da média aritmética é menor ou igual a 20");
}

console.log("---");

let maiorNumero = numbers[0];

for (index = 1; index < numbers.length; index++){
  if(numbers[index] > maiorNumero){
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero);

console.log("---");

let numerosImpar = [];

for(index = 0; index < numbers.length; index++){

  if(numbers[index] % 2 !== 0){
    numerosImpar.push(numbers[index]);
  }
}

if(numerosImpar <= 0){
  console.log("Nenhum valor ímpar encontrado");
}else{
  console.log(numerosImpar.length);
}

console.log("---");

let menorNumero = numbers[0];

for (index = 1; index < numbers.length; index++){
  if(numbers[index] < menorNumero){
    menorNumero = numbers[index];
  }
}

console.log(menorNumero);

console.log("---");

let novoArray = [];

for(index = 1; index < 26; index++){
  novoArray.push(index)
}

console.log(novoArray);

console.log("---");

for(index = 0; index < novoArray.length; index++){
  console.log(novoArray[index]/2);
}

console.log("---");

let fatorial = 1;

for(index = 10; index > 0; index--){
  fatorial = fatorial*index;

}
console.log(fatorial);

console.log("---");

let word = 'trybe';

let inverso = word.split('').reverse().join('');

console.log(inverso);

console.log("---");

let array1 = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array1[0]
for (index = 0; index < array1.length; index += 1){
  
  if (maiorPalavra.length < array1[index].length) {
    maiorPalavra = array1[index]
  }
}
console.log(maiorPalavra);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0]
for (index = 0; index < array.length; index += 1){
  
  if (menorPalavra.length > array[index].length) {
    menorPalavra = array[index]
  }
}
console.log(menorPalavra);

console.log("---");

let maiorPrimo = 0;

for(let numeroAtual = 50; numeroAtual >= 2; numeroAtual -= 1) {
  let primo = true;
  for(let divisor = 2; divisor < numeroAtual; divisor += 1){
    if (numeroAtual % divisor === 0){
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = numeroAtual;
    break
  }
}
console.log(maiorPrimo);

