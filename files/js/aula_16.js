let a = 'azul';
let b = 'vermelho';

console.log(a);
console.log(b);

function trocarCor(cor){
	if (cor === 'vermelho'){
		return 'azul';
	} else {
	   return 'vermelho';
		
	}
};
  
a = trocarCor(a);
b = trocarCor(b);


console.log(a);
console.log(b);
