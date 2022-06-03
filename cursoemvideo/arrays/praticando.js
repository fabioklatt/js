let arr = [4,5,1,10,34,4]

let cont = 0
let maior = 0
let y = arr[0]

console.log(`Primeiro elemento: ${y}`)

for (cont in arr){
    if (arr[cont] < y){
         y = arr[cont]
    }
     

    if (arr[cont] > maior) {
        maior = arr[cont]
        
    }


    
}
console.log(`O maior número é ${maior}`)
console.log(`O menor é ${y}`)