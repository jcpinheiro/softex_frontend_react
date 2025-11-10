/* function saudacao(nome: string): string {

    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria"));
//console.log(saudacao(10));  


let idade : number = 25;
//idade = "vinte e cinco";

let ehValido : boolean = true */

interface Pessoa {
    nome: string
    idade: number   
    matricula?: number
}

const aluno : Pessoa = {
    nome: 'João',
    idade: 30,
    // matricula: 12345
}