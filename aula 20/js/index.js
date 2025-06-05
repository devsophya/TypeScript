//Selecionar elementos HTML da nossa página utilizando o document

//Pelo nome da tag
const todosP = document.getElementsByTagName("p");
console.log(todosP);

//Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName("paragrafo");
console.log(todosClasseParagrafo);

//Pelo nome da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

//Pelo id da tag
const jsLogoImg = document.getElementById("js-logo");
console.log(jsLogoImg);

//Query Selector
const imagem = document.querySelector("body > img#js-logo");
console.log(imagem);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

console.clear();

const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);

console.log("textContent:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.innerHTML = "<strong>outra coisa</strong>";

console.clear();

emailInput[0].value = "sophya@email.com";

//Criando elementos na página HTML
const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement("li");
novaTagLi.textContent = "Segundo item";

console.log(novaTagLi);

//listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

listaUl.removeChild(novaTagLi);
