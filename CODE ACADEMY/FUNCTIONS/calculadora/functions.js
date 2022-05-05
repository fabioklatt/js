//function declaration
/*
greetworld()

function greetworld(){
    console.log('Hello, World!')
}
*/

//parameters and arguments
// parameters are instructions that are passed to functions 
/*
function recarea(width, height){
    console.log(width * height)
}

//arguments as values
recarea(10,100);

//arguments as variables
let w = 20
let h = 100

recarea(w,h)
*/
/*
function greeting(name = 'stranger'){
    console.log(`Hello ${name}!`)
}

greeting('Binho')
*/
/*
function soma (x,y){  return x+y
}

let s = soma(4,5)

console.log(s)
*/
// helper functions
/*
function multiply(number){
    return number * (9/5);
};

function fahren(celsius){
    return multiply(celsius) + 32;
};

console.log(fahren(15))
*/

/*
function retangulo(x,y){
    return x*y
}

function total(x,y){
    return retangulo(x,y) * 100
}

console.log(total(5,4))
*/

/*
let a = 30
let b= 30

function areatri(a,b){
 return a*b
}

let res = areatri(a,b)

console.log(res)
*/

// c = (f-32) / 1,8

let c = 40

let fah = (c) => {
    f = 1.8*c + 32
    return f
}

console.log(fah(c))





 
    
 





















