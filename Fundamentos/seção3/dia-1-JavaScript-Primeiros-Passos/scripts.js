//Exercícios na pratica
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

let a = 5;
let b = 10;
let c = 25;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

//2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

if (a > b){
  console.log(a);
}else{
  console.log(b);
}

//3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

if (a > b && a > c){
  console.log(a);
}else if (b > a && b > c) {
  console.log(b);
}else{
  console.log(c);
}

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

if(a - b < 0){
  console.log("Negative");
}else if (a - b > 0) {
  console.log("Positive");
}else{
  console.log("Zero");
}
