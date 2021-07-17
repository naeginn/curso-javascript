
// 17° -  Switch..Case.

// Anotações

// Basicamente é um if else, porém você fine o case, e usa o break pra parar as comparações.

let permissao; // comum, admin, mod

permissao = 'comum';

switch (permissao) {
	case 'comum':
	    console.log('Usuário é comum.')
		break;
	case 'admin':
	    console.log('Usuário é admin.')
		break;	
	case 'mod':
	    console.log('Usuário é moderador.')
		break;
	default:
	    console.log('Usuário não é válido.')
		break;
}