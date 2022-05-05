let idade = 55

console.log(`Você tem ${idade} anos`)

if (idade >= 67){
    console.log('idoso, voto opcional')
} else if (idade >= 18){
    console.log('maior de idade')
    console.log('voto obrigatório')
} else if (idade >= 16) {
    console.log('menor de idade')
    console.log('voto opcional')
} else {
    console.log('menor de 16, logo não vota')
}