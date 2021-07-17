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

let i = 5;

while (i >= 1) {
	console.log('[While] Estou aprendendo.', i);
	i--;
}