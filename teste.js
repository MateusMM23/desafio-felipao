// Um mago precisa decidir se pode lançar um feitiço.
// Ele só pode fazer isso se tiver mais de 30 de mana e tiver o cajado mágico.
// Crie as variáveis e use um if para dizer se ele pode lançar o feitiço ou não.
// (Treina: &&, ||, if/else, comparações)
let mana = 30
let cajadoMagico = true
let resultado = (mana >= 30) && (cajadoMagico === cajadoMagico)
console.log(resultado)

if (cajadoMagico < 30){
  console.log("não pode")
}else(cajadoMagico >= 31){
  console.log("pode")
}

console.log(" o mago" + cajadoMagico)