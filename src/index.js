let heroi = "Tauros"
let xp = 1500
let nivel = " "

if (xp <= 1000) {
  nivel = "Ferro"
} else if((xp >= 1001) && (xp <= 2000)) {
  nivel = "Bronze"
} else if((xp >= 2001) && (xp <= 5000)) {
  nivel = "Prata"
} else {
  nivel = "Ouro"
}

console.log("O heroi " + heroi + " tem " + xp + " de xp" + " ele está no nível " + nivel)