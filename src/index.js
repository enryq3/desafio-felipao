let heroi = "Tauros"
let experiencia = 6002
let nivel = " "

if (experiencia <= 1000) {
  nivel = "Ferro"
} else if((experiencia >= 1001) && (experiencia <= 2000)) {
  nivel = "Bronze"
} else if((experiencia >= 2001) && (experiencia <= 5000)) {
  nivel = "Prata"
} else {
  nivel = "Ouro"
}

console.log("O herói " + heroi + " tem " + experiencia + " de xp" + " ele está no nível " + nivel)