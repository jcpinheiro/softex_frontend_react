class Funcionario {
  public nome: string
  public salario: number

  constructor(nome: string, salario: number) {
    this.nome = nome
    this.salario = salario
  }
  
  calcularBonus() {
    return this.salario * 0.1;
  }
}


class Gerente extends Funcionario {
  override calcularBonus() {
    return this.salario * 0.2 + 1000;
  }
}

const joao = new Funcionario("João", 3000);
const maria = new Gerente("Maria", 5000);
console.log(joao.calcularBonus());
console.log(maria.calcularBonus());