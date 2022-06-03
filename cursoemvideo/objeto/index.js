let amigo = 
{
nome: 'Fábio', 
idade: '32', 
peso: 78, 
engordar(p){
 this.peso += p
}
}

amigo.engordar(5)
console.log(`O ${amigo.nome} tem ${amigo.peso} kg`)
