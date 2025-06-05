// Aula 19 - POO

interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir: () => void;
}

//Classe: abstração
//Definindo a abstração de uma pessoa
class Pessoa implements IPessoa {
  //atributos
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;

  //metodos: ação (funções)

  //metodo construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  dormir() {
    console.log("Dormiindo...");
  }

  //acessor: getter
  get cpf(): string {
    return this._cpf;
  }

  //acessor: setter
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      //lançando um erro
      throw new Error("CPF length is incorrect!");
    }
    this._cpf = newCpf;
  }
}

class Professor extends Pessoa {
  codigo: string;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    codigo: string
  ) {
    super(nome, idade, altura, cpf);
    this.codigo = codigo;
  }

  ensinar() {
    console.log("Ensinando...");
  }
}

//criando/instanciando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Sophya", 20, 1.74, "123.456.789-00");
const pessoa2 = new Pessoa("Pessoa 2", 22, 1.56, "987.654.321-00");

console.log(pessoa1);
console.log(pessoa1.nome);

console.log(pessoa2);
pessoa2.dormir();

pessoa1.nome = "Fulana";
console.log(pessoa1.nome);
console.log(pessoa1.cpf); // Acessando o CPF através do getter

pessoa1.cpf = "123.456.789-01"; // Usando o setter para alterar o CPF, alterando seguindo regras.
console.log(pessoa1.cpf);

//Objeto da Classe Professor
const professor = new Professor(
  "Professor",
  30,
  1.68,
  "123.456.789-10",
  "0001"
);
console.log(professor);
professor.dormir();
professor.ensinar();

//Polimorfismo
console.log(pessoa1 instanceof Pessoa); //true
console.log(pessoa1 instanceof Professor); //false
console.log(professor instanceof Pessoa); //true
console.log(professor instanceof Professor); //true
