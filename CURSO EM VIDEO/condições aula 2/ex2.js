let agora = new Date()
let hora = agora.getHours()
let min = agora.getMinutes()
let dia = agora.getDay()

if (dia == 2){
    console.log(`Terça-feira`)
}
 if (min < 10){
    console.log(`Agora são ${hora}:0${min}.`)
  
 } else {
console.log(`Agora são ${hora}:${min}.`)
 }

