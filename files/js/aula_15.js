// 15° - Comparações não boleanos.

// Anotações

// Falsy = é basicamente todos os valores. 
// (undefined, null, 0, false, '', NaN)

// Truthy = é basicamente todos os valores. 
// (true, {}, [], 42, "foo", new Date(), -42, 3.14, -3.14, Infinity, -Infinity)

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
