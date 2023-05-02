//Exercícios na pratica
//1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

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

//5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let angulaA = 100;
let anguloB = 50;
let anguloC = 30;

let somaDosAngulos = angulaA + anguloB + anguloC;
let todosAngulosPositivos = angulaA > 0 && anguloC > 0 && anguloB > 0;

if(todosAngulosPositivos){
  if(somaDosAngulos === 180){
    console.log(true);
  }else{
    console.log(false);
  }
}else{
  console.log("Erro!! Provavelmente um angulo está negativo.");
}

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
let peca = 'cavalo'

switch (peca) {
  case 'peao':
    console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casa.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.')
    break
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break
  default:
    console.log('Erro, peça inválida!');
}

/*7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 65

if (nota >= 90){
  nota = "A"
  console.log(nota);
}else if (nota >= 80){
  nota = "B"
  console.log(nota);
}else if (nota >= 70){
  nota = "C"
  console.log(nota);
}else if (nota >= 60){
  nota = "D"
  console.log(nota);
}else if (nota >= 50){
  nota = "E"
  console.log(nota);
}else if (nota > 100 || nota < 0){
  console.log("Nota Incorreta");
}else{
  nota = "F"
  console.log(nota);
}

/* 🚀 Há um par entre nós
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
  Bônus: use somente um if.
*/
let num1 = 30
let num2 = 45
let num3 = 20

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
  console.log(true);
}else{
  console.log(false);
}

/* 🚀 Há um par entre nós
 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
  Bônus: use somente um if.
*/
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
  console.log(true);
}else{
  console.log(false);
}

/*  10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
  Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
  Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
  O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
    valorCustoTotal = valorCusto + impostoSobreOCusto;
    lucro = valorVenda - valorCustoTotal (lucro de um produto);
*/
 
let cost = 25;
let price = 70;
let quantidade = 1000;
var tax = 0.2;
let valoresPositivos = cost > 0 && price > 0 && quantidade > 0 && tax > 0;
let custoTotal = cost + (cost * tax);
let lucro = price  - custoTotal;

  if(valoresPositivos){
    console.log("O lucro da empresa é de R$" + (lucro * quantidade));
  }

/*1 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.*/

let aliquotaInss;
let aliquotaIr;

let salarioBruto = 6500;
let salarioLiquido;

if (salarioBruto < 1556.94) {
  aliquotaInss = salarioBruto *  0.08

}else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * 0.09

}else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * 0.11

}else {
  aliquotaInss = 570.88

}

salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98){
  aliquotaIr = 0
}else if (salarioBase <= 2826.65){
  aliquotaIr = (salarioBase * 0.075)-142.80
}else if (salarioBase <=3571.05){
  aliquotaIr = (salarioBase * 0.15) - 354.80
}else if (salarioBase <= 4664.48){
  aliquotaIr = (salarioBase*0.225) - 636.13
} else {
  aliquotaIr = (salarioBase*0.275) - 869.36
}

salarioLiquido = salarioBase - aliquotaIr

console.log('O salario liquido de uma pessoa que recebe bruto R$' + salarioBruto + " é de R$" + salarioLiquido);