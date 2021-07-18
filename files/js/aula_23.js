
const status = imparPar(20);

function imparPar(numero){
   for (let i = 0; i <= numero; i++){
   	 if (i % 2 === 0)
   	 	console.log("PAR", i);
   	 else
   	 	console.log("IMPAR", i)
   }

};