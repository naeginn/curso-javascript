// 19° -  Loop for.

// Anotações

// Existem 5 tipos de loop no javascript

// 1° - For
// 2° - While
// 3° - Do..while
// 4° - For..In
// 5° - For..of

// 1° - For

// for (a, b, c)

// a = Definir um variavel pro contador. (let i = 0; )
// b = Definir uma condição para que o loop continue. (i < 5) - (i <= 5)
// c = Definir adicionar uma condição de incremento (i++) decremento (i--)

for (let i = 1; i <= 5; i++){
	console.log('[For] Estou aprendendo.', i);
}

// 2° - While

// Você precisa definir a variavel pro contador fora.
// Verifica primeiro e depois executa.

let i = 5;

while (i >= 1) {
	console.log('[While] Estou aprendendo.', i);
	i--;
}

// 3° - Do..while
// Você precisa definir a variavel pro contador fora.
// Executa uma vez e verifica depois

let ii = 1;

do {
	console.log('[Do..While] Estou aprendendo.', ii)
	ii++;
} while (ii <= 5)


// 4° - For..In

// Você usa quando for pra propriedade de um objeto ou um array.

const pessoa = {
	name:'naegin',
	idade: 25
}
for (let key in pessoa){
	console.log(key, pessoa.name);
}

const cores = ['verde', 'azul', 'amarelo'];

for (let i in cores){
	console.log(i, cores[i]);
}