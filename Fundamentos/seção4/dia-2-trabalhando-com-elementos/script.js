const whereAreYou = document.getElementById("where-are-you");
const parent = whereAreYou.parentElement;

parent.style.color = 'blue'

const firstChildChild = document.getElementById("first-child-of-child");
firstChildChild.innerText = "Incluindo Texto aqui."

const firstChild = parent.firstElementChild;
const firstChildByWhereAreYou = whereAreYou.previousElementSibling;
const att = whereAreYou.nextSibling;
const thirdChild = whereAreYou.nextSibling.nextSibling;
const thirdChildByParent = parent.lastElementChild.previousElementSibling;