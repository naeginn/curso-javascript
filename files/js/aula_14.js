// 14° - Operador Lógicos.

// Anotações

// && = Retorna True se as duas condições forem true.
// || = Retorna True se uma das condições forem true.
// ! = Retorna o contrario do valor, caso seja true retorna false, caso seja false retorna true.


let maiorDeIdade = true;
let carteiraDeTrabalho = true;

let podeAplicarA = maiorDeIdade && carteiraDeTrabalho;
let podeAplicarB = maiorDeIdade || carteiraDeTrabalho;
let podeAplicarC = !podeAplicarA;

console.log(podeAplicarA);
console.log(podeAplicarB);
console.log(podeAplicarC);