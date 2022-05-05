//exibir maior e menor número

let n = [20, 30, 3, 6, 1, 4, 33]
cont = 0
maior = 0
for (cont in n){
    
    if (n[cont] > maior){
        maior = n[cont]
    }
    
}
console.log(`O maior elemento é: ${maior}`)

let menor = n[0]
for (cont in n){
    if (n[cont] < menor){
        menor = n[cont]
    }
}
console.log(`O menor número é: ${menor}`)