
const filme = {
	titulo: 'Tenet',
	ano: 2020,
	diretor: 'Kevin',
	personagem: 'Aplha'
}

exibirPropriedades(filme);

function exibirPropriedades(filme){
	for (let key in filme)
	  if (typeof filme[key] === "string")
		  console.log(key, filme[key]);
};


