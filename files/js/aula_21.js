

const resultado = fizzBuzz('gg');
console.log(resultado);

function fizzBuzz(numero){
	
	if (typeof(numero) !== 'number'){
		return "Não é um número valido.";
	} else {

	  let fizz = (numero % 3 === 0);
      let buzz = (numero % 5 === 0);
      let fizzbuzz = (fizz === true && buzz === true)

      if (fizzbuzz === true){
      	 return 'FizzBuzz';
      } else if (fizz === true){
      	 return 'Fizz';
      } else if (buzz === true){
      	 return 'Buzz';
      } else {
      	 return "O valor não é dividido por 3 ou 5";
      }
    }
};
