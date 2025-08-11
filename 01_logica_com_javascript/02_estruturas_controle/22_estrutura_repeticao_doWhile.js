const numeros = [5, 4, 7, 3, 2, 1];
let i = 0;
let soma = 0;

do {
  soma = soma + numeros[i];
  i++;
} while (soma <= 20 && i < numeros.length);

console.log(`Soma final: ${soma}`);
console.log(`Foram usados ${i} número(s).`);