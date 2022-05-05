let num = [5, 8, 9, 3]

console.log(num[0])

/*
 acrescentar valores numa posição:
variável [posição] = valor
num[8] = 32
[ 5, 8, 9, 3, <4 empty items>, 32 ]

*/

num[8] = 32
console.log(num)

/*
colocar na última posição
variavel.push(valor)
*/ 

num.push(123)
console.log(num)

console.log(num.length)

num.sort()
console.log(num)


console.log(num.reverse())
console.log(`O vetor tem ${num.length} posições`)
console.log(num.sort())
console.log(`Primeiro valor do vetor: ${num[0]}`)

console.log(num[0])
console.log(num[1])

for (cont = 0 ; cont < num.length ; cont++ ){
     console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}


for (cont in num){
    console.log(num[cont])
}
console.log(`índice abaixo:`)
console.log(num.indexOf(3))
