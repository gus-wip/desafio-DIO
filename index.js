//

const nome = "Luffy"


let partidasGanhas = 0;

for (let i = 0; i <= 54; i++) partidasGanhas += 1;
let rPGanho = partidasGanhas * 290;


let partidasPerdidas = 0;

for (let i = 0; i <= 38; i++) partidasPerdidas += 1;
let rPPerdido = partidasPerdidas * 245;

let xP = rPGanho - rPPerdido

//
if(xP < 751){
rank = "ferro"
}

else if((xP >= 751) && (xP < 1501)){
rank = "bronze"
}

else if((xP >= 2251) && (xP < 3001)){
rank = "prata"
}

else if((xP >= 3001) && (xP < 4001)){
rank = "ouro"
}

else if((xP >= 4001) && (xP < 5001)){
rank = "platina"
}

else if((xP >= 5001) && (xP < 6251)){
rank = "diamante"
}

else if((xP >= 6251) && (xP < 7501)){
rank = "ascendente"
}

else if((xP >= 7501) && (xP < 9001)){
rank = "imortal"
}

else if(xP >= 9001){
rank = "radiante"
}
else {
rank = "indefinido"
}

console.log('O personagem de nome ' + nome + ', ganhou ' + partidasGanhas + " partidas e perdeu " + partidasPerdidas + ". Está no rank " +    rank);

