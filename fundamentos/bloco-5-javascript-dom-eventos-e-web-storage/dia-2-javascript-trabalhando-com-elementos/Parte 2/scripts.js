const pai = documento.getElementoByid("pai");
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = ElementoOndeVoceEsta.firstChild;
primeiroFilhoDoFilho.innerText = "Olá turma 19 - tribo B";
const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild = (filhoPrimeiroFilhoDoFilho);

const terceiroFilho3 = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho3);