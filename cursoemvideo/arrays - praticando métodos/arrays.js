let n = [34,45,100,80,58]
let n2 = [60, 90, 100]
let b = "Bom dia."
let t = "Fábio, meu nome é Fábio."
let c = "Como vai?"

//Métodos

//retorna primeira posição
console.log(n.indexOf(22))
console.log(t.indexOf("Fábio"))

//retorna última posição
console.log(t.lastIndexOf("Fábio"))


//junta arrays
console.log(n.concat(n2))
console.log(b.concat(" ", t, " ", c))

//elementos separados por vírgula
console.log(n.join())

//retorna o último elemento e o remove.
console.log(n.pop(n))
console.log(n)

//shift - retorna o primeiro e o remove
console.log(`Removendo o elemento ${n.shift()}`)
console.log(`Agora temos ${n}`)

//push - adiciona na última posição
n.push(2000)
console.log(`último elemento adicionado: ${n[n.length - 1]}`)

//sort - ordena
n.sort(function compare(a,b){return a-b})
console.log(`Array ordenado: ${n}`)

//splice - adiciona, substitui ou remove um elemento do array numa posição definida
//adiciona
//splice (posição, qtde de elementos, elementos)
n.splice(2, 0, 222,333)
console.log(`Adicionando com splice(): ${n}`)
//removendo
n.splice(0,1)
console.log(`Removendo primeiro elemento: ${n}`)
//substituindo
n.splice(0, 0, 0)
console.log(`Substituindo o primeiro elemento: ${n}`)

//unshift adiciona e retorna o array com o primeiro elemento novo
n.unshift(90)
console.log(n)