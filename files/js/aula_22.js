const status = verificarVelocidade(60);
console.log(status);

function verificarVelocidade(velocidade){
   let pontos = (velocidade - 70) / 5;

   if (pontos === 0 || Math.sign(pontos) === -1)
   	  return 'Velocidade permitida';
   if (pontos <= 12)
      return 'Velocidade acima do permitido [Pontos : '+Math.floor(pontos)+']';
   if (pontos >= 12)
      return 'Carteira suspensa [Pontos : '+Math.floor(pontos)+']';

};