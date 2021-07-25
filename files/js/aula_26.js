

const notas = [70, 85, 40, 50];

mediaDoAluno(notas);

function mediaDoAluno(notas){
   let somaDasNotas = 0;
   let quantasNotasTem = notas.length;

   for (let i = 0; i < quantasNotasTem; i++){
   	  somaDasNotas += notas[i];
   }

   let mediaDasNotas = somaDasNotas / quantasNotasTem;
   let mediaArrendodada = Math.floor(mediaDasNotas);
   
   if (mediaDasNotas > 0 && mediaDasNotas < 59)
   	 console.log("Media [F] : "+mediaArrendodada);

   if (mediaDasNotas > 60 && mediaDasNotas < 69)
   	 console.log("Media [D] : "+mediaArrendodada);
   
   if (mediaDasNotas > 70 && mediaDasNotas < 79)
   	 console.log("Media [D] : "+mediaArrendodada);
   
   if (mediaDasNotas > 80 && mediaDasNotas < 89)
   	 console.log("Media [B] : "+mediaArrendodada);
   
   if (mediaDasNotas > 90 && mediaDasNotas < 100)
   	 console.log("Media [A] : "+mediaArrendodada);


};