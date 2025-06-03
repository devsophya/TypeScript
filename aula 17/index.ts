let numero = 20;

const pi = 3.1415;

let nome: string = "Sophya";

let correta: boolean;

let resultado = numero * pi;

const numeros: number[] = [1, 2, 3, 4, 5];

//const misto: any[] = ["Sophya", 20, 1.74, {}, () => {}, true]
//Evite ao máximo utilizar o any

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

//Tupla
const pessoaTupla: [string, number] = ["Sophya", 20];

//Object types

//interface
/*
interface Person {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
}
*/

//type
type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

const pessoa: Person = {
  nome: "Sophya",
  idade: 20,
  altura: 1.74,
};

pessoa.profissao = "Desenvolvedora";

console.log(pessoa);

type Criterio = "greater" | "lower";

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "greater");

console.log("numeroEscolhido:", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// Utility Types

//1. Partial
type PartialPerson = Partial<Person>;

//2. Required
type RequiredPerson = Required<Person>;

//3. Pick
type PickPerson = Pick<Person, "nome" | "idade">;

//4. Omit
type OmitPerson = Omit<Person, "profissao">;

//5. Exclude
type CriterioExclude = Exclude<Criterio, "greater">;

//6. Record
type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  "123.456.789-00": {
    nome: "Fulana",
    idade: 20,
    altura: 1.56,
  },
  "987.654.321-00": {
    nome: "Ciclana",
    idade: 25,
    altura: 1.7,
  },
};
