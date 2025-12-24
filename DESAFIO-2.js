const vitorias = 10;
const derrotas = 9;

function saldoDeVitorias(vitorias, derrotas){
    const saldo = vitorias - derrotas;
    return saldo;
}

const saldo = saldoDeVitorias(vitorias, derrotas);
const xp = saldo; 

let nivel = "";

if (xp <= 10) {
  nivel = "ferro";
} else if (xp <= 20) {
  nivel = "bronze";
} else if (xp <= 50) {
  nivel = "prata";
} else if (xp <= 80) {
  nivel = "ouro";
} else if (xp <= 90) {
  nivel = "diamante";
} else if (xp <= 100) {
  nivel = "lendário";
} else {
  nivel = "imortal";
}

console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);


for(i = 1; i <= 24; i++){
  if(i % 4 === 0 && i % 6 === 0){
  console.log("É divisível por ambos ")
}else if(i % 4 === 0){
  console.log("É divisível por 4 ")
}else if(i % 6 === 0){
  console.log("É divisível por 6 ")
}else{
  console.log("Divisível por nenhuma ")
 }
}