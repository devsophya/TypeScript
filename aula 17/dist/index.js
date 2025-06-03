"use strict";
let numero = 20;
const pi = 3.1415;
let nome = "Sophya";
let correta;
let resultado = numero * pi;
const numeros = [1, 2, 3, 4, 5];
//const misto: any[] = ["Sophya", 20, 1.74, {}, () => {}, true]
//Evite ao máximo utilizar o any
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
//Tupla
const pessoaTupla = ["Sophya", 20];
const pessoa = {
    nome: "Sophya",
    idade: 20,
    altura: 1.74,
};
pessoa.profissao = "Desenvolvedora";
console.log(pessoa);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20);
console.log("numeroEscolhido:", numeroEscolhido);
